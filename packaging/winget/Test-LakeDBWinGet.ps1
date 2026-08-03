[CmdletBinding()]
param(
    [Parameter()]
    [ValidatePattern('^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$')]
    [string]$Version = '1.0.0-beta.5.0',

    [Parameter()]
    [switch]$InstallTest,

    [Parameter()]
    [switch]$SubmitFirstVersion
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

function Invoke-CheckedCommand {
    param(
        [Parameter(Mandatory)]
        [string]$Command,

        [Parameter()]
        [string[]]$Arguments = @(),

        [Parameter()]
        [int[]]$AcceptedExitCodes = @(0)
    )

    & $Command @Arguments
    if ($AcceptedExitCodes -notcontains $LASTEXITCODE) {
        throw "$Command failed with exit code $LASTEXITCODE."
    }
}

if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    throw 'WinGet is not installed. Update App Installer from Microsoft Store, then run this script again.'
}

if ($InstallTest) {
    $currentIdentity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $currentPrincipal = [Security.Principal.WindowsPrincipal]::new($currentIdentity)
    if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
        throw 'InstallTest requires PowerShell opened with Run as administrator.'
    }
}

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$manifestDirectory = Join-Path $PSScriptRoot "manifests\d\DavidLago\LakeDB\$Version"
$installerName = "LakeDB-$Version-win-x64-setup.exe"
$installerUrl = "https://github.com/DavLagoHern/LakeDB/releases/download/v$Version/$installerName"

if (-not (Test-Path $manifestDirectory -PathType Container)) {
    throw "Prepared manifests were not found at $manifestDirectory."
}

Write-Host "`n==> Validate WinGet manifests for LakeDB $Version"
Invoke-CheckedCommand -Command 'winget' -Arguments @('validate', $manifestDirectory) -AcceptedExitCodes @(0, -1978335192)

if ($InstallTest) {
    Write-Host "`n==> Install LakeDB from the local manifests"
    Write-Warning 'This changes the VMware guest by installing LakeDB for the current user.'
    Invoke-CheckedCommand -Command 'winget' -Arguments @('settings', '--enable', 'LocalManifestFiles')
    try {
        Invoke-CheckedCommand -Command 'winget' -Arguments @(
            'install',
            '--manifest', $manifestDirectory,
            '--silent',
            '--accept-package-agreements',
            '--accept-source-agreements'
        )

        Write-Host "`n==> Verify the Installed apps registration"
        $uninstallRegistryPaths = @(
            'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*',
            'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*',
            'HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*'
        )
        $installedEntry = Get-ItemProperty -Path $uninstallRegistryPaths -ErrorAction SilentlyContinue |
            Where-Object { $_.DisplayName -like 'LakeDB*' } |
            Select-Object -First 1
        if (-not $installedEntry) {
            throw 'LakeDB was installed, but its Installed apps registry entry was not found.'
        }
        if ($installedEntry.DisplayVersion -ne $Version) {
            throw "Installed apps reports LakeDB $($installedEntry.DisplayVersion), expected $Version."
        }
        Write-Host "Registered LakeDB $($installedEntry.DisplayVersion) for uninstall."
    }
    finally {
        Invoke-CheckedCommand -Command 'winget' -Arguments @('settings', '--disable', 'LocalManifestFiles')
    }
}

if ($SubmitFirstVersion) {
    $toolDirectory = Join-Path $env:TEMP 'LakeDB-WinGetCreate'
    $toolPath = Join-Path $toolDirectory 'wingetcreate.exe'
    New-Item -ItemType Directory -Path $toolDirectory -Force | Out-Null

    Write-Host "`n==> Download the official WinGetCreate executable"
    Invoke-WebRequest 'https://aka.ms/wingetcreate/latest' -OutFile $toolPath

    Write-Host "`n==> Start the interactive first-version submission"
    Write-Host 'Use DavidLago.LakeDB as PackageIdentifier and review every detected field before submitting.'
    Invoke-CheckedCommand -Command $toolPath -Arguments @('new', $installerUrl)
}

Write-Host "`nLakeDB WinGet checks completed."
