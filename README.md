<p align="center">
  <img src="assets/lakedb-logo.png" width="520" alt="LakeDB">
</p>

<p align="center">
  <strong>A calm, modern desktop client for MySQL and MariaDB.</strong><br>
  Manage every connection, query and dataset without fighting your tools.
</p>

<p align="center">
  <a href="https://davlagohern.github.io/LakeDB/"><img alt="LakeDB website" src="https://img.shields.io/badge/WEBSITE-EXPLORE_LAKEDB-19d2ff?style=for-the-badge&logoColor=020817"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/latest"><img alt="LakeDB 0.11 public beta" src="https://img.shields.io/badge/PUBLIC_BETA-0.11-55f0bd?style=for-the-badge&logo=github&logoColor=020817"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/latest"><img alt="Download the latest LakeDB 0.11 beta" src="https://img.shields.io/badge/DOWNLOAD-0.11_BETA-0b7cff?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/discussions"><img alt="LakeDB community" src="https://img.shields.io/badge/COMMUNITY-DISCUSSIONS-12d9ff?style=for-the-badge&logo=github&logoColor=020817"></a>
  <a href="https://www.patreon.com/LakeDB"><img alt="Support LakeDB on Patreon" src="https://img.shields.io/badge/SUPPORT-PATREON-06132b?style=for-the-badge&logo=patreon&logoColor=12d9ff"></a>
</p>

<p align="center">
  <img alt="macOS" src="https://img.shields.io/badge/macOS-Apple_Silicon-06132b?style=flat-square&logo=apple&logoColor=white">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-06132b?style=flat-square&logo=windows&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-x64-06132b?style=flat-square&logo=linux&logoColor=white">
  <img alt="MySQL and MariaDB" src="https://img.shields.io/badge/MySQL_+_MariaDB-ready-0b7cff?style=flat-square&logo=mysql&logoColor=white">
  <img alt="English and Spanish" src="https://img.shields.io/badge/UI-English_+_Spanish-12d9ff?style=flat-square">
</p>

---

## Your databases, without the noise

LakeDB is built for people who work with many MySQL and MariaDB connections every day. Every server gets its own workspace, SQL editor, object explorer, table views and independent state.

### Many servers, one calm workspace

Keep many database connections open at the same time and give each one as many SQL and table tabs as you need. Every connection preserves its own active tab, selected schema, editor content, table state and layout, so switching from local to staging or production never mixes your working context. Close LakeDB—or recover from an unexpected stop—and the complete multiconnection workspace comes back.

<p align="center">
  <img src="assets/screenshots/multitab.png" width="100%" alt="Multiple database connections open with independent SQL and table tabs in LakeDB">
</p>

<p align="center"><sub>Four connection workspaces open at once; the active connection keeps its own SQL and table tabs.</sub></p>

### SQL that understands your schema

Complete databases, tables, aliases and columns from live metadata. LakeDB marks primary keys and indexes in suggestions, can insert multi-column index predicates after `WHERE`, formats compact or expanded SQL, and keeps query results or open tables visible below the editor.

### Inspect, edit and design

Browse large result sets in a virtualized grid, filter from the selected cell and edit rows with safe identity checks, conflict detection and rollback. Create or modify tables visually—columns, indexes, foreign keys and checks—while reviewing the generated SQL before applying it.

### Move data without losing control

Export complete reviewed queries to CSV, JSON, JSON Lines, Excel-compatible or SQL files with streaming, cancellation and optional GZIP. Back up and restore databases, compare schemas, plan migrations and review imported connections before LakeDB saves anything.

### Local by design

Connections, credentials, SQL and result data stay on your computer. Passwords use the local encrypted credential store; read-only connections, production confirmations, recovery snapshots and a sandboxed renderer protect daily work.

## What LakeDB 0.11 includes

LakeDB 0.11 is the current public beta line. It combines the complete 0.10
daily workflow with visual query plans, tab-owned transactions, Quick Open,
editable SQL objects, granular schema comparison and operational diagnostics.

| Area                   | Available today                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Connections**        | Unlimited saved MySQL and MariaDB connections, folders, automatic group suggestions, environment colors, SSL, SSH tunnels, automatic reconnect and copyable diagnostics.                                                   |
| **Workspaces**         | Multiple open connections at once, each with independent SQL tabs above and query-result/table tabs in a smoothly resizable lower pane.                                                                                    |
| **SQL editor**         | Monaco Editor, schema-aware completion, automatic aliases, PK/index hints, persistent snippets, compact/expanded formatting, Explain plans, visual transactions, history and streaming exports up to 50 million rows. |
| **Object explorer**    | Lazy loading for every object type; click a table to open it below, double-click to insert its quoted name, or open non-table objects as editable SQL with a definition diff.                                               |
| **Table data**         | Virtualized grid, pagination, sorting, search, cell-driven filters and full-query export to CSV, JSON, JSON Lines, Excel-compatible `.xls` or SQL.                                                                         |
| **Safe editing**       | Type-aware date/time, numeric, boolean and enum editors plus buffered changes, validation, conflict detection, rollback and checked text/JSON/HTML editing.                                                                |
| **Backup and restore** | SQL database export, SQL restore with recovery backups, restore safeguards and production confirmation.                                                                                                                    |
| **Migration Studio**   | Source/target selectors, granular column/index/foreign-key comparison, selectable multi-table migration plans, structure/data copy and truncate-first workflows.                                                            |
| **Imports**            | Review and select DBeaver, SQLyog, JSON, CSV and MySQL/JDBC URL connections before saving; edit names/users, apply shared or individual passwords and resolve duplicates explicitly.                                       |
| **Safety**             | Read-only connections, reinforced production confirmations, renderer sandboxing and no direct renderer access to filesystem, SQLite, credentials or database sockets.                                                      |
| **Resilience**         | Home-first session restore, crash recovery, configuration backup/restore, verified in-app updates, local migrations with safety snapshots and diagnostics log.                                                              |
| **Interface**          | Dark/light/system themes, density and font-size preferences, and English/Spanish UI ready for more languages.                                                                                                              |
| **Operations**         | `Cmd/Ctrl+P` Quick Open, active-session monitor, query cancellation, beta feedback links and copyable sanitized support reports.                                                                                            |

Everything runs locally. LakeDB does not send your connections, queries or credentials to an external LakeDB service.

<details>
  <summary><strong>More screenshots</strong></summary>
  <br>
  <p align="center"><img src="assets/screenshots/table-data.png" width="100%" alt="Inspect, filter and safely edit table data in LakeDB"></p>
  <p align="center"><img src="assets/screenshots/connection-picker.png" width="100%" alt="Browse recent LakeDB connections and folders"></p>
  <p align="center"><img src="assets/screenshots/quick-open.png" width="100%" alt="Search LakeDB connections, tabs, objects, snippets and commands with Quick Open"></p>
  <p align="center"><img src="assets/screenshots/new-connection.png" width="100%" alt="Create a connection in LakeDB"></p>
  <p align="center"><img src="assets/screenshots/preferences.png" width="100%" alt="LakeDB preferences and language selector"></p>
  <p align="center"><img src="assets/screenshots/database-tools.png" width="100%" alt="SQL backup, restore and migration tools"></p>
</details>

## Download

Open the [latest LakeDB 0.11 beta release](https://github.com/DavLagoHern/LakeDB/releases/latest) and choose your platform:

| Platform            | Download                                                       | Install                                                      |
| ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| macOS Apple Silicon | `LakeDB-*-mac-arm64.dmg` or `.zip`                             | Open the DMG or move `LakeDB.app` to Applications.           |
| Windows x64         | `LakeDB-*-win-x64-setup.exe`                                   | Run the installer. A portable `.exe` is also available.      |
| Linux x64           | `LakeDB-*-linux-x86_64.AppImage` or `LakeDB-*-linux-amd64.deb` | Make the AppImage executable, or install the Debian package. |

LakeDB is still a public beta. The macOS package has an integrity-preserving
ad-hoc signature but is not yet signed with a trusted Apple Developer ID or
notarized; the Windows package does not yet have a trusted code-signing
certificate. Only download LakeDB from this official repository and use the
matching SHA-256 checksum.

<details>
  <summary><strong>First-launch security warning</strong></summary>
  <br>

- **macOS:** move `LakeDB.app` to Applications and try to open it once. Then
  open **System Settings → Privacy & Security**, scroll to Security and choose
  **Open Anyway**. Confirm **Open** when macOS asks again.
- **Windows:** if Microsoft Defender SmartScreen appears, confirm that the
  installer or portable EXE came from this release, choose **More info**, then
  **Run anyway**.

These warnings are expected for the pre-1.0 beta. Do not bypass a warning for a
file obtained from another website or whose SHA-256 does not match. Stable 1.0+
publication is configured to require trusted macOS/Windows signing and Apple
notarization.

</details>

## Version history

The latest build is **0.11.0 Beta 2**. The [version history](VERSION-HISTORY.md) records every published build with concise `ADD`, `CHANGE`, `FIX` and `SECURITY` entries. Full notes and installers remain attached to the downloadable releases retained on GitHub.

## The road to LakeDB 1.0

<p align="center">
  <a href="ROADMAP.md"><img src="assets/roadmap/lakedb-roadmap-v0.11.png" width="100%" alt="LakeDB 0.11 beta capabilities and the trust work planned before 1.0"></a>
</p>

The [roadmap](ROADMAP.md) follows the product milestones from the first LakeDB foundation through the current 0.11 beta, then shows the trust and compatibility work remaining for 1.0. Patch-level details stay in the version history.

## English and Spanish, ready for more

LakeDB is available in English and Spanish. Change the interface language under **Preferences → Language**; the application menu and workspace update with it. The translation layer is structured so more languages can be added without rewriting individual screens.

## Support LakeDB

LakeDB is developed independently and the public beta remains the same
application for everyone. If LakeDB is useful in your daily work, you can
[support its continued development on Patreon](https://www.patreon.com/LakeDB).
Memberships help with builds, code signing, release infrastructure and the work
toward LakeDB 1.0.

Financial support is completely optional. Testing the beta, reporting
reproducible issues, proposing improvements and sharing LakeDB are equally
valuable ways to help the project.

<p align="center">
  <a href="https://www.patreon.com/LakeDB"><img alt="Support LakeDB on Patreon" src="https://img.shields.io/badge/SUPPORT_LAKEDB-PATREON-06132b?style=flat-square&logo=patreon&logoColor=12d9ff"></a>
</p>

## Help shape LakeDB

- Read the [Wiki](https://github.com/DavLagoHern/LakeDB/wiki) for installation, workflows and troubleshooting.
- Follow [LakeDB on Patreon](https://www.patreon.com/LakeDB) for release announcements, development updates and roadmap polls.
- Propose and vote on features in [Ideas](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas).
- Ask for help in [Q&A](https://github.com/DavLagoHern/LakeDB/discussions/categories/q-a).
- Report reproducible bugs with the [bug report form](https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml).
- Check the [community guide](COMMUNITY.md) before posting logs or screenshots.
- Review the [compatibility](COMPATIBILITY.md) and [support](SUPPORT.md) policies before reporting environment-specific behaviour.
- Read the [privacy](PRIVACY.md) and [security](SECURITY.md) policies before sharing diagnostics or reporting a vulnerability.

## About this repository

This is LakeDB's official public repository. It hosts binaries, release notes, documentation, issues and the public roadmap. The application source is maintained separately; published binaries are produced by the guarded release pipeline after the complete test suite passes.

---

<p align="center">
  <img src="assets/lakedb-app-icon.png" width="84" alt="LakeDB icon"><br>
  <strong>Modern database. Deeper insights.</strong>
</p>
