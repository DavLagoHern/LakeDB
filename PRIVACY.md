# LakeDB privacy

LakeDB is a local desktop application. It has no telemetry, advertising, analytics SDK, LakeDB account or LakeDB cloud synchronization service.

## Data that stays on your computer

LakeDB stores its application data in the operating system's local application-data directory. Depending on the features you use, this can include:

- connection settings and folder assignments;
- locally encrypted saved credentials;
- preferences, window state and recoverable workspace sessions;
- SQL history and favorites, according to your retention settings;
- diagnostics and migration or recovery snapshots; and
- paths to files that you explicitly open, save, import or export.

Query results are kept temporarily for the active session and are not restored as part of the saved workspace.

## Network connections

LakeDB makes network requests only for a feature you use:

- database and SSH connections go directly from your computer to the hosts you configure;
- release checks request public metadata from the official LakeDB GitHub repository;
- update downloads come from official LakeDB GitHub release assets; and
- external links open in your default browser.

LakeDB does not proxy database traffic through a LakeDB service and does not send connection settings, credentials, SQL text or result data to the LakeDB project.

## Credentials

Saved database passwords are encrypted locally and handled in LakeDB's Electron main process. They are not exposed directly to the renderer. Configuration backups exclude passwords unless you explicitly choose an unencrypted credential export and pass the additional confirmation.

No local encryption can protect secrets from someone who already controls your operating-system account and can access both the encrypted database and its local key. Protect your user account, disk and backups.

## Diagnostics and shared reports

Diagnostics remain local until you copy or share them. LakeDB never submits the
support report automatically. It can contain hostnames, database names, local
paths, SQL fragments or server errors even after automatic secret redaction.
Review and remove sensitive information before attaching diagnostics,
screenshots or configuration files to a public issue or discussion.

## Deleting local data

Deleting connections, history or favorites in LakeDB removes those records from the active local profile. Uninstalling the application package may leave the profile directory in place so an update or reinstall does not destroy user data. Remove that directory separately only after keeping any backup you need.

## Privacy questions

Use [LakeDB Discussions](https://github.com/DavLagoHern/LakeDB/discussions) for general privacy questions. Do not post credentials or sensitive diagnostics. Report security-sensitive behaviour through the private process in [SECURITY.md](SECURITY.md).
