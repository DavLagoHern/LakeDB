# LakeDB roadmap

![LakeDB 0.10 capabilities and the trust work planned before 1.0](assets/roadmap/lakedb-roadmap-v0.10.3.png)

The roadmap tracks complete product milestones, not individual patches. Smaller `ADD`, `CHANGE`, `FIX` and `SECURITY` entries live in the [version history](VERSION-HISTORY.md).

## Shipped milestones

| Line | Product step | What it established |
| --- | --- | --- |
| **0.1** | Foundation | A focused local MySQL/MariaDB desktop application with connection, explorer and SQL foundations. |
| **0.2** | Connections | Multiple simultaneous connections, folders, environments, SSL/SSH and independent workspaces. |
| **0.3** | SQL workspace | SQL tabs, object exploration, history, favorites and result navigation. |
| **0.4** | Safe data | Editing, filtering, paging, read-only mode, production safeguards and data exchange. |
| **0.5** | Database tools | Diagnostics, configuration backup, SQL backup/restore, schema comparison and table copy. |
| **0.6** | Cross-platform | macOS, Windows and Linux packages, English/Spanish UI and published checksums. |
| **0.7** | Resilience | Update discovery, guarded restores, session/crash recovery, migration snapshots and accessibility checks. |
| **0.8** | Editing polish | Structured large-value editing, visible pending changes, explicit folders, verified updates and a Home-first lifecycle. |
| **0.9** | Migration and large exports | Migration Studio, clearer active-connection context and configurable streaming exports up to 50 million rows. |
| **0.10 — current** | Smarter daily workflow | Split query/table panes, schema-aware completion, aliases and index guidance, visual schema design, typed editing, compact multitab navigation and review-first connection imports. |

## Current position

LakeDB 0.10.4 is the latest build in the 0.10 beta line. The complete current capability set is documented in the [README](README.md); patch-by-patch detail is kept out of this roadmap.

## Before 1.0

LakeDB 1.0 is a trust milestone focused on making the current product dependable, documented and upgrade-safe.

### Trusted distribution

- Code signing for supported desktop platforms.
- macOS notarization.
- Clear publisher identity and fewer first-install security warnings.
- Published checksums and release notes for every package.

### Stability and compatibility

- Documented operating-system and MySQL/MariaDB compatibility matrix.
- Broader release-candidate testing across macOS, Windows and Linux.
- Stable local settings, credential and session migrations between releases.
- Clear recovery guidance for restore, update and crash scenarios.

### Product polish

- Complete accessibility and keyboard-navigation review.
- Performance review for large object trees, grids and SQL sessions.
- Clearer first-run and troubleshooting guidance.
- Final review of destructive-operation confirmations.

## Help define 1.0

Share real workflows and vote in [Discussions](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas). Community value, data safety and maintenance cost determine what ships.
