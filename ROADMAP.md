# The road to LakeDB 1.0

![LakeDB product evolution from 0.1 to the 0.7 beta and what remains before 1.0](assets/roadmap/lakedb-roadmap-v0.7.0-beta.1.png)

LakeDB is growing through clear product milestones. This roadmap tells the story from the first foundation to today's cross-platform release, then shows the work needed for a stable 1.0.

The milestones describe product evolution; they do not all correspond one-to-one with archived downloadable binaries. The [latest release](https://github.com/DavLagoHern/LakeDB/releases/latest) is always the recommended build.

## Product evolution

| Version | Milestone | What it added |
| --- | --- | --- |
| **0.1** | Foundation | The first LakeDB desktop foundation: a focused local client for MySQL and MariaDB. |
| **0.2** | Connections | Multiple connections, folders, environments, SSL/SSH and independent workspaces. |
| **0.3** | SQL workspace | Monaco-powered SQL editing, tabs, object exploration, history, favorites and result navigation. |
| **0.4** | Safe data | Table browsing and editing, read-only mode, production safeguards, filters, paging and import/export. |
| **0.5** | Database tools | Diagnostics, configuration backup, SQL backup/restore, schema comparison, table copy and a stronger connection experience. |
| **0.6** | Cross-platform | Native macOS, Windows and Linux packages, English/Spanish i18n, international documentation, community and verified checksums. |
| **0.7 beta — current** | Resilience | Update notices, guarded configuration restore, session/crash recovery, pre-migration snapshots, safer file limits, credential binding and accessibility checks. |

## What remains before 1.0

This is the current definition of a stable LakeDB 1.0. It is a direction rather than a fixed delivery date, and details can change as real usage exposes better priorities.

### Signed distribution

- Code signing and trusted installation flows for supported platforms.
- macOS notarization and a documented verification path for every package.
- Clear publisher identity and fewer first-install security warnings.

### Smooth updates — beta validation

- Update discovery is available in the 0.7 beta.
- Automated migrations preserve connections, preferences and workspace state and create a pre-upgrade snapshot.
- Release communication that explains changes, migrations and known limitations.

### Polish and accessibility — beta validation

- Keyboard navigation, focus behavior and screen-reader semantics now have automated serious/critical checks.
- First-run onboarding and clearer recovery/troubleshooting guidance.
- Performance and visual consistency passes across the complete workspace.

### Stability and compatibility

- A documented operating system and MySQL/MariaDB compatibility matrix.
- Stable settings, session and local-storage migrations between releases.
- Broader release-candidate testing focused on data safety and upgrade blockers.

## LakeDB 1.0 — Stable foundation

LakeDB Free reaches 1.0 when it is a dependable, documented and upgrade-safe foundation for daily MySQL and MariaDB work across every supported platform. Version 1.0 is a quality and trust milestone, not a point where current Free capabilities move behind a subscription.

## Beyond 1.0: Pro exploration

LakeDB will remain one application and one download. Free keeps the local database foundation; an optional Pro subscription may add automation, intelligence, synchronization and collaboration.

- **Lake AI:** generate, explain, review and optimize SQL.
- **Lake AI Agent:** schema-aware analysis, index suggestions, documentation and assisted migrations.
- **Cloud sync:** synchronize favorites, snippets, workspaces and preferences.
- **Dashboards:** SQL widgets, charts, KPIs and scheduled queries.
- **Teams:** share workspaces, connection definitions without credentials, favorites and dashboards.

These are exploration areas, not announced release dates or guaranteed scope. Read [LakeDB Free and Pro](https://github.com/DavLagoHern/LakeDB/wiki/LakeDB-Free-and-Pro) for the product model.

## Help define 1.0

Propose an idea, share a real workflow and vote in [Discussions](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas). Community interest helps set priority, while safety, maintenance cost and fit with LakeDB's product principles determine what ships.
