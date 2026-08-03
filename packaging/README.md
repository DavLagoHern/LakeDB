# Package-manager distribution

LakeDB publishes immutable, versioned installers in this public repository.
This directory contains the bootstrap files for Homebrew and WinGet; the
release-triggered workflow in `.github/workflows/package-managers.yml` keeps
both channels current after their one-time setup is complete.

## Homebrew

The official `homebrew/cask` repository normally requires substantially more
public notability for a self-submission than LakeDB has during its beta. Until
LakeDB is signed, notarized and eligible for the official catalog, publish the
cask through the project-owned tap:

1. Create the public repository `DavLagoHern/homebrew-lakedb`.
2. Copy `homebrew/Casks/lakedb.rb` to `Casks/lakedb.rb` in that repository.
3. Test it on Apple Silicon with:

   ```bash
   brew tap DavLagoHern/lakedb
   brew trust DavLagoHern/lakedb
   brew install --cask DavLagoHern/lakedb/lakedb
   brew uninstall --cask lakedb
   ```

4. Create a fine-grained GitHub token with Contents read/write access only to
   `DavLagoHern/homebrew-lakedb`. Store it in this repository as the Actions
   secret `HOMEBREW_TAP_TOKEN`.
5. Create the Actions repository variable `HOMEBREW_TAP_ENABLED` with value
   `true`.

Every subsequently published LakeDB release updates the cask version and
SHA-256 and pushes the change to the tap. Do not enable the variable before the
tap repository and secret exist.

For a future official submission, copy the stable `lakedb.rb` into a fork of
`Homebrew/homebrew-cask`, run `brew audit --cask --new lakedb`, test install and
uninstall, and open a pull request. Keep the `livecheck` block so Homebrew can
detect later releases.

## WinGet

The first package version must be submitted interactively. Clone this
repository in a clean Windows x64 VMware guest, open PowerShell in the
repository root and run:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\packaging\winget\Test-LakeDBWinGet.ps1
.\packaging\winget\Test-LakeDBWinGet.ps1 -InstallTest
.\packaging\winget\Test-LakeDBWinGet.ps1 -SubmitFirstVersion
```

The first command validates the manifests without installing anything. Run
PowerShell **as administrator** for the second command; it temporarily enables
WinGet's `LocalManifestFiles`, performs a real silent installation, checks
LakeDB's **Installed apps** registration and disables the setting again. The
third command downloads the official standalone WinGetCreate executable and
starts the interactive submission.

The equivalent manual procedure is:

1. Install the official manifest creator:

   ```powershell
   winget install Microsoft.WingetCreate
   ```

2. Review the prepared manifests under
   `winget/manifests/d/DavidLago/LakeDB/1.0.0-beta.5.0/` and test the installer
   in Windows Sandbox. The publisher and package name should match LakeDB's
   entry in **Installed apps**.
3. Submit the release URL with WinGetCreate:

   ```powershell
   wingetcreate new "https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.0/LakeDB-1.0.0-beta.5.0-win-x64-setup.exe"
   ```

   Use `DavidLago.LakeDB` as the package identifier, review the generated
   fields, and answer yes when WinGetCreate offers to submit the pull request.
   Complete Microsoft's Contributor License Agreement if the bot requests it.

4. Wait until the first pull request is merged and verify:

   ```powershell
   winget install --id DavidLago.LakeDB --exact
   ```

5. Create a GitHub token for WinGetCreate's fork-and-pull-request flow, store
   it in this repository as the Actions secret `WINGET_TOKEN`, then create the
   Actions repository variable `WINGET_PUBLISH_ENABLED` with value `true`.

Later releases run `wingetcreate update --submit` automatically. Do not enable
the variable until `DavidLago.LakeDB` exists in the community catalog.

## Manual retry

If a release event was published while either channel was disabled, open the
**Update package managers** workflow in Actions, choose **Run workflow**, and
enter the released version without the leading `v`.
