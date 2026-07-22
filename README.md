<p align="center">
  <img src="assets/lakedb-logo.png" width="520" alt="LakeDB">
</p>

<p align="center">
  <strong>A calm, modern desktop client for MySQL and MariaDB.</strong><br>
  Manage every connection, query and dataset without fighting your tools.
</p>

<p align="center">
  <a href="https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.2"><img alt="LakeDB 0.9 public beta" src="https://img.shields.io/badge/PUBLIC_BETA-0.9.2-55f0bd?style=for-the-badge&logo=github&logoColor=020817"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.2"><img alt="Download LakeDB 0.9.2 beta" src="https://img.shields.io/badge/DOWNLOAD-0.9.2_BETA-0b7cff?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/discussions"><img alt="LakeDB community" src="https://img.shields.io/badge/COMMUNITY-DISCUSSIONS-12d9ff?style=for-the-badge&logo=github&logoColor=020817"></a>
</p>

<p align="center">
  <img alt="macOS" src="https://img.shields.io/badge/macOS-Apple_Silicon-06132b?style=flat-square&logo=apple&logoColor=white">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-06132b?style=flat-square&logo=windows&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-x64-06132b?style=flat-square&logo=linux&logoColor=white">
  <img alt="MySQL and MariaDB" src="https://img.shields.io/badge/MySQL_+_MariaDB-ready-0b7cff?style=flat-square&logo=mysql&logoColor=white">
  <img alt="English and Spanish" src="https://img.shields.io/badge/UI-English_+_Spanish-12d9ff?style=flat-square">
</p>

---

## The road to LakeDB 1.0

<p align="center">
  <a href="ROADMAP.md"><img src="assets/roadmap/lakedb-roadmap-v0.9.0.png" width="100%" alt="LakeDB 0.9 current beta capabilities, upcoming 1.0 trust milestone and future ideas"></a>
</p>

LakeDB is now close to its 1.0 foundation. See the [living roadmap](ROADMAP.md) for the current beta, what remains for 1.0 and the ideas being explored beyond it. Future scope is directional and shaped by community feedback.

## Your databases, without the noise

LakeDB is built for people who work with many MySQL and MariaDB connections every day. Every server gets its own workspace, SQL editor, object explorer, table views and independent state.

### Multitab across every connection

Keep many database connections open at the same time and give each one as many SQL and table tabs as you need. Every connection preserves its own active tab, selected schema, editor content, table state and layout, so switching from local to staging or production never mixes your working context. Close LakeDB—or recover from an unexpected stop—and the complete multiconnection workspace comes back.

<p align="center">
  <img src="assets/screenshots/multitab.png" width="100%" alt="Multiple database connections open with independent SQL and table tabs in LakeDB">
</p>

<p align="center"><sub>Four connection workspaces open at once; the active connection keeps its own SQL and table tabs.</sub></p>

## What LakeDB 0.9.2 includes

LakeDB 0.9.2 is the current public beta of the local desktop app. It adds reviewable, cancellable streaming exports for large read-only queries and a clearer table-filter workflow to the complete MySQL and MariaDB desktop foundation.

| Area | Included in LakeDB Free |
| --- | --- |
| **Connections** | Unlimited saved MySQL and MariaDB connections, folders, automatic group suggestions, environment colors, SSL, SSH tunnels, automatic reconnect and copyable diagnostics. |
| **Workspaces** | Multiple open connections at once, each with independent SQL tabs, table tabs, selected database, layout and recoverable session state. |
| **SQL editor** | Monaco Editor, multiple query tabs, statement or selection execution, query cancellation, complete streaming exports, lightweight formatting, history and favorite queries. |
| **Object explorer** | Lazy loading for databases, tables, views, procedures, functions, triggers and events, with context menus for opening data, structure, DDL and generated SQL. |
| **Table data** | Virtualized grid, pagination, filters, sorting, search, row copy helpers and export to CSV, JSON or Excel-compatible `.xls`. |
| **Safe editing** | Insert, edit, duplicate and delete rows with visible pending states, validation, conflict detection, rollback and large-value editing for text, JSON and HTML. |
| **Backup and restore** | SQL database export, SQL restore with recovery backups, restore safeguards and production confirmation. |
| **Migration Studio** | Source/target selectors, connection buttons, database comparison, selectable multi-table migration plans, structure/data copy and truncate-first workflows. |
| **Imports** | Import connections from DBeaver, SQLyog, JSON, CSV and MySQL/JDBC URLs, with encrypted local credential handling. |
| **Safety** | Read-only connections, reinforced production confirmations, renderer sandboxing and no direct renderer access to filesystem, SQLite, credentials or database sockets. |
| **Resilience** | Home-first session restore, crash recovery, configuration backup/restore, update notices, local migrations with safety snapshots and diagnostics log. |
| **Interface** | Dark/light/system themes, density and font-size preferences, and English/Spanish UI ready for more languages. |

Everything runs locally. LakeDB does not send your connections, queries or credentials to an external LakeDB service.

<details>
  <summary><strong>More screenshots</strong></summary>
  <br>
  <p align="center"><img src="assets/screenshots/new-connection.png" width="100%" alt="Create a connection in LakeDB"></p>
  <p align="center"><img src="assets/screenshots/preferences.png" width="100%" alt="LakeDB preferences and language selector"></p>
  <p align="center"><img src="assets/screenshots/database-tools.png" width="100%" alt="SQL backup, restore and migration tools"></p>
</details>

## Download

Open the [LakeDB 0.9.2 beta release](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.2) and choose your platform:

| Platform | Download | Install |
| --- | --- | --- |
| macOS Apple Silicon | `LakeDB-*-mac-arm64.dmg` or `.zip` | Open the DMG or move `LakeDB.app` to Applications. |
| Windows x64 | `LakeDB-*-win-x64-setup.exe` | Run the installer. A portable `.exe` is also available. |
| Linux x64 | `LakeDB-*-linux-x86_64.AppImage` or `LakeDB-*-linux-amd64.deb` | Make the AppImage executable, or install the Debian package. |

The `0.9.2` packages are intentionally unsigned while LakeDB is evaluated publicly, so your operating system may display a security warning. Only download LakeDB from this official repository. Every package includes a matching SHA-256 checksum. Stable releases are configured to require macOS/Windows signing and Apple notarization before publication.

## 0.9.2 public beta

LakeDB 0.9.2 can stream a reviewed read-only query directly to CSV, JSON or Excel-compatible `.xls`, with bounded memory, progress, cancellation and a configurable limit of up to 50 million rows. Table filters now apply explicitly and generated SQL is reusable without the grid's internal pagination. Read the [0.9.2 release notes](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.2), the [SQL editor guide](https://github.com/DavLagoHern/LakeDB/wiki/SQL-Editor) and the [backup and migration guide](https://github.com/DavLagoHern/LakeDB/wiki/Backup-Import-and-Migrations).

## English and Spanish, ready for more

LakeDB is available in English and Spanish. Change the interface language under **Preferences → Language**; the application menu and workspace update with it. The translation layer is structured so more languages can be added without rewriting individual screens.

## LakeDB Free and Pro

LakeDB will remain one application and one download.

- **Free** is the complete local foundation: no artificial connection or tab limits, no mandatory account, no telemetry and no ads.
- **Pro** will be an optional subscription inside the same app, unlocking planned capabilities such as Lake AI, cloud sync, dashboards, scheduled queries and team collaboration.

Free will keep the essential database features it already provides. Read the [Free and Pro roadmap](https://github.com/DavLagoHern/LakeDB/wiki/LakeDB-Free-and-Pro) for more context.

## Help shape LakeDB

- Read the [Wiki](https://github.com/DavLagoHern/LakeDB/wiki) for installation, workflows and troubleshooting.
- Propose and vote on features in [Ideas](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas).
- Ask for help in [Q&A](https://github.com/DavLagoHern/LakeDB/discussions/categories/q-a).
- Report reproducible bugs with the [bug report form](https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml).
- Check the [community guide](COMMUNITY.md) before posting logs or screenshots.

## About this repository

This is LakeDB's official public repository. It hosts binaries, release notes, documentation, issues and the public roadmap. The application source is maintained in a private repository; published binaries are generated automatically after the development repository passes its quality checks.

---

<p align="center">
  <img src="assets/lakedb-app-icon.png" width="84" alt="LakeDB icon"><br>
  <strong>Modern database. Deeper insights.</strong>
</p>
