# LakeDB security policy

## Supported versions

| Version                     | Security status                                                  |
| --------------------------- | ---------------------------------------------------------------- |
| Latest `0.10.x` public beta | Receives security and release-blocking fixes                     |
| Older beta lines            | Unsupported                                                      |
| Future stable releases      | The latest stable release will receive security fixes            |
| Current release candidate   | Supported while it is the active path to the next stable release |

Update to the newest supported build before reporting a problem that may already be fixed.

## Report a vulnerability privately

Use [GitHub private vulnerability reporting](https://github.com/DavLagoHern/LakeDB/security/advisories/new) whenever it is available. Include:

- affected LakeDB version and operating system;
- the security impact and realistic attack conditions;
- minimal reproduction steps or a proof of concept;
- whether credentials, local files or database writes are involved; and
- any mitigation you have already identified.

Do not include real credentials, production data or unnecessary customer information. If private reporting is unavailable, open a minimal public issue asking the maintainer to establish private contact, without publishing vulnerability details.

## What to expect

The maintainer will acknowledge a complete report as soon as practical, validate the impact, coordinate a fix and publish an advisory when users need to take action. LakeDB is currently maintained without a contractual response-time SLA.

Please allow a reasonable remediation window before public disclosure. Good-faith reports that avoid privacy violations, data destruction, service disruption and access beyond what is necessary to demonstrate the issue are welcome.

## Security boundaries

LakeDB reduces risk through a sandboxed renderer, a validated IPC bridge, locally encrypted credentials, read-only connections, production confirmations, parameterized table mutations, verified update downloads and recovery snapshots. These controls do not replace least-privilege database accounts, network controls, reviewed SQL and tested backups.
