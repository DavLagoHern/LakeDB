# LakeDB support policy

LakeDB is an independently maintained desktop application. Community support is provided on a best-effort basis without a contractual SLA.

## Supported application versions

- The latest published build receives bug, compatibility and security fixes.
- The active release candidate or public beta is supported while it is the current path to the next stable release.
- Older lines remain in the [version history](VERSION-HISTORY.md) but are not actively supported.
- After 1.0, security and blocker fixes target the latest stable release rather than multiple long-lived branches.

The Releases page retains up to two packaged builds from the current version line and the newest packaged build from the previous available line. Historical Git tags and version-history entries may remain after old installers are removed.

## Where to ask

- Use [Q&A](https://github.com/DavLagoHern/LakeDB/discussions/categories/q-a) for setup and workflow questions.
- Use [Ideas](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas) for feature proposals.
- Use the [bug report form](https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml) for reproducible defects.
- Use the private process in [SECURITY.md](SECURITY.md) for vulnerabilities.

Before reporting a bug, update to the latest build and check the [troubleshooting guide](https://github.com/DavLagoHern/LakeDB/wiki/Troubleshooting).

## Useful bug information

Include the LakeDB version, operating system, database product/version, connection mode, exact action, expected result and observed result. Share the smallest safe reproduction possible.

Sanitize screenshots, SQL, hostnames, usernames, local paths and diagnostics. Never post passwords, private keys, certificate private material, production connection exports or complete sensitive datasets.

## Scope

LakeDB support covers the application on the combinations listed in [COMPATIBILITY.md](COMPATIBILITY.md). Database-server administration, VPNs, firewalls, SSH agents, certificate-authority management and recovery of third-party credentials remain the responsibility of their respective systems.
