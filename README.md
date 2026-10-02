<p align="center">
  <img src="docs/assets/lakedb-logo.png" width="520" alt="LakeDB">
</p>

<p align="center">
  <strong>Your databases. Your next move.</strong><br>
  A free, local-first desktop client for MySQL, MariaDB, PostgreSQL and SQLite.<br>
  Explore, query and edit in independent connection workspaces. Compare structures, review migrations and use optional AI with visible SQL.
</p>

<p align="center">
  <a href="https://github.com/DavLagoHern/LakeDB/releases/tag/v1.0.0-beta.7.1"><img alt="Download LakeDB Beta 7.1" src="https://img.shields.io/badge/DOWNLOAD-BETA_7.1-0b7cff?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/homebrew-lakedb"><img alt="Install LakeDB with Homebrew" src="https://img.shields.io/badge/HOMEBREW-INSTALL_LAKEDB-fbb040?style=for-the-badge&logo=homebrew&logoColor=black"></a>
  <a href="https://davlagohern.github.io/LakeDB/"><img alt="LakeDB website" src="https://img.shields.io/badge/WEBSITE-EXPLORE_LAKEDB-19d2ff?style=for-the-badge&logoColor=020817"></a>
</p>

<p align="center">
  <img src="docs/assets/releases/beta7.2/lakedb-beta-7.2-1920x1080.png" width="100%" alt="LakeDB Beta 7.2 preview: compare structure first and review your next migration">
</p>

<p align="center"><sub><strong>Beta 7.2 preview — in preparation.</strong> Structure-first comparisons, explicit data checks, clearer migration choices and automatic explorer refresh are coming in the next update.</sub></p>

> **Available now: Beta 7.1.** Beta 7.2 is being prepared; its packages are not yet published. All download links below point to the verified Beta 7.1 release.

## Why LakeDB

- **One workspace across multiple engines** — work with MySQL, MariaDB, PostgreSQL and SQLite without changing tools.
- **Review-first AI** — QuerIA can generate SQL and help explain or correct query errors, but nothing runs automatically.
- **Production-aware workflows** — read-only connections, environment-specific confirmations and reviewable database operations.
- **Local-first by default** — credentials stay local, and database rows or query results are not sent to the AI service.

> 💡 **Help shape LakeDB:** suggest features, describe real database workflows and
> react to and discuss community ideas in [GitHub Discussions](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas).

<p align="center">
  <sub>LakeDB is free to use, but it is not open source. This public repository hosts official builds, documentation, issue tracking and community feedback.</sub>
</p>

<p align="center">
  <!-- 100 maintainer-recorded downloads from archived releases + live GitHub release asset downloads. -->
  <a href="https://github.com/DavLagoHern/LakeDB/releases"><img alt="LakeDB beta downloads, including archived releases" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FDavLagoHern%2FLakeDB%2Fdownload-stats%2Fbadge.json&style=flat-square"></a>
</p>

<p align="center">
  <img alt="macOS" src="https://img.shields.io/badge/macOS-Apple_Silicon-06132b?style=flat-square&logo=apple&logoColor=white">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-06132b?style=flat-square&logo=windows&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-x64-06132b?style=flat-square&logo=linux&logoColor=white">
  <img alt="MySQL, MariaDB, PostgreSQL and SQLite" src="https://img.shields.io/badge/MySQL_+_MariaDB_+_PostgreSQL_+_SQLite-ready-0b7cff?style=flat-square&logo=postgresql&logoColor=white">
  <img alt="English and Spanish" src="https://img.shields.io/badge/UI-English_+_Spanish-12d9ff?style=flat-square">
      <a href="https://ecohub.mariadb.org/database-management/lakedb"><img alt="LakeDB listed on the MariaDB Server Ecosystem Hub" src="https://img.shields.io/badge/MariaDB-Ecosystem_Hub-003545?style=flat-square&logo=mariadb&logoColor=white"></a>
</p>

---

## Install LakeDB

### macOS Apple Silicon — Homebrew

```bash
brew tap DavLagoHern/lakedb
brew trust DavLagoHern/lakedb
brew install --cask lakedb
```

The official tap tracks verified releases and their SHA-256 checksums.

### Direct downloads

Current published release: **Beta 7.1**.

<p align="center">
  <a href="https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.7.1/LakeDB-1.0.0-beta.7.1-mac-arm64.dmg"><img alt="Download LakeDB for macOS Apple Silicon" src="https://img.shields.io/badge/macOS-DOWNLOAD_DMG-06132b?style=for-the-badge&logo=apple&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.7.1/LakeDB-1.0.0-beta.7.1-win-x64-setup.exe"><img alt="Download LakeDB installer for Windows x64" src="https://img.shields.io/badge/Windows-DOWNLOAD_SETUP-0b7cff?style=for-the-badge&logo=windows&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.7.1/LakeDB-1.0.0-beta.7.1-linux-x86_64.AppImage"><img alt="Download LakeDB AppImage for Linux x64" src="https://img.shields.io/badge/Linux-DOWNLOAD_APPIMAGE-12d9ff?style=for-the-badge&logoColor=020817"></a>
</p>

| Platform | Alternative package | Install |
| --- | --- | --- |
| macOS Apple Silicon | [ZIP](https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.7.1/LakeDB-1.0.0-beta.7.1-mac-arm64.zip) | Move `LakeDB.app` to Applications. |
| Windows x64 | [Portable EXE](https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.7.1/LakeDB-1.0.0-beta.7.1-win-x64-portable.exe) | Run without installation. |
| Linux x64 | [Debian package](https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.7.1/LakeDB-1.0.0-beta.7.1-linux-amd64.deb) | Install with your package manager. |

> **Public beta signing:** macOS Apple Silicon packages are Developer ID signed
> and notarized by Apple. Windows packages are not yet signed with a trusted
> certificate. Download only from the official LakeDB repositories. Every
> package has a matching SHA-256 file on the
> [Beta 7.1 release page](https://github.com/DavLagoHern/LakeDB/releases/tag/v1.0.0-beta.7.1).

---

## Coming in Beta 7.2

These changes are prepared for the next update and are not included in the current Beta 7.1 downloads.

- **Explorer refresh after SQL changes:** successful `CREATE`, `ALTER`, `RENAME` and `DROP` operations appear without a manual reload, including when a later statement in the script fails.
- **Structure-first comparison:** table analysis starts with model comparison. Exact row counts and content checks are explicit options.
- **Results that say what matched:** structures, counts, checksums and partitions are identified separately. Matching counts are not presented as proof of identical data.
- **Clearer migrations:** Merge and Replace data explain their effects before copying. Local foreign keys compare correctly across differently named schemas.
- **Steadier access management:** refreshing permissions preserves the selected scope, and delayed requests cannot overwrite a newly selected account.

See the [Beta 7.2 preview](docs/VERSION-HISTORY.md#100-beta-72--in-preparation) and [published releases](https://github.com/DavLagoHern/LakeDB/releases).

Installing an update preserves the local profile and does not migrate your connected databases. Database changes require an explicit user operation.

---

## A complete SQL client

AI joins the existing LakeDB workflow; it does not replace it.

| Area | Available now |
| --- | --- |
| **Connections** | Multiple simultaneous MySQL, MariaDB, PostgreSQL and SQLite connections, folders, colors, read-only mode, diagnostics and search. MySQL, MariaDB and PostgreSQL support direct, SSH and TLS paths. |
| **Workspaces** | Independent SQL, QuerIA and table tabs per connection, with restored editor content, selected schema and layout. |
| **Schema context** | Browse PostgreSQL databases, schemas, `search_path`, tables, views, materialized views, functions, procedures, sequences and types. MySQL/MariaDB system schemas and visual relationship maps remain available. |
| **SQL editor** | Monaco Editor, prioritized dialect-aware keyword completion, proactive schema completion, aliases, columns, PK/index hints, local syntax diagnostics, safe quick fixes, optional AI correction, formatting, Explain, transactions, history and streaming exports. |
| **QuerIA** | Reusable per-connection business contexts, Normal and Agentic generation, cross-database relationships, index inspection, `EXPLAIN` review, visible SQL and explicit local execution. |
| **Results and data** | Local query-result filters, draggable result columns, virtualized table grids, pagination, search, sorting and typed safe editing with conflict checks and rollback. |
| **Database tools** | PostgreSQL schema backup/restore, comparison and transactional table copy; MySQL/MariaDB backup, restore, comparison and migration. Capability-aware controls stay disabled when an engine does not support them. |
| **Access management** | Inspect PostgreSQL roles or MySQL/MariaDB accounts and grants, then review SQL before applying supported role, password and privilege changes. |
| **Safety** | Locally encrypted credentials, production confirmations, renderer sandboxing and read-only enforcement. Database traffic goes directly from your computer to the configured host. |
| **Resilience** | Stable device identity, crash recovery, session restore, verified updates, configuration backup and diagnostics. |

---

## Compare and migrate with the right scope

The defaults below describe the upcoming Beta 7.2 update. In Beta 7.1, use **Compare model** for structure-only checks and review the options before starting a table analysis.

Model checks, data checks and migrations answer different questions:

| Choice | What it checks or does | Database work |
| --- | --- | --- |
| **Model — default** | Compares selected structures and definitions. | Metadata inspection; no row-content comparison. |
| **Exact row counts — opt-in** | Compares the number of rows in selected tables. | Can scan table indexes; equal counts do not prove equal values. |
| **Content / checksums — opt-in** | Compares selected content checksums. | Reads table data and can be expensive on large tables. |
| **Merge** | Inserts or updates source rows while keeping target-only rows. | Reads all source rows; it is not a row-by-row difference download. |
| **Replace data** | Deletes target rows before copying the source. | Destructive copy; dependent tables may be required. |

On busy production databases, start with model comparison and a small scope.
Review the SQL plan, target and dependencies before migrating. Data checks and
copies grow with table size, and DDL rollback depends on the engine.
Capabilities differ by engine; unsupported tools remain disabled.

---

## Road to 1.0

| Stage | Direction |
| --- | --- |
| **SQL foundation** | Independent workspaces, schema-aware editing, safe data operations, database tools and recovery. |
| **Beta 3** | Natural-language query documents, visible SQL and explicit local execution. |
| **Beta 4 — complete** | Reusable connection context, Normal and Agentic generation, cross-database relationships, index inspection, reversible opt-in and clearer execution feedback. |
| **Beta 5 — complete** | SQLite, local diagnostics, visible relationships, system schemas and reviewable access management. |
| **Beta 6 — complete** | Native PostgreSQL connections, metadata, editing, design, exports, operations, database tools and review-first AI. |
| **Beta 7.1 — current release** | Daily workflow controls, structure-only model comparison and reviewable migration plans. |
| **Beta 7.2 — in preparation** | Structure-first comparison, explicit data checks, clearer migration review, automatic explorer refresh and steadier access management. |
| **1.0 direction** | Measured quality, trusted signing and distribution, compatibility validation and complete product polish. |

<p align="center">
  <a href="docs/ROADMAP.md"><img src="docs/assets/roadmap/lakedb-roadmap-beta-7.2.png" width="100%" alt="Preview of the LakeDB Beta 7.2 roadmap toward quality, compatibility and trusted distribution for 1.0"></a>
</p>

Roadmap items describe direction, not a fixed release date. See
[ROADMAP.md](docs/ROADMAP.md) for the complete quality and trust gates.

---

## Support development

LakeDB's complete local SQL client is free to use. An optional
[Patreon membership](https://www.patreon.com/LakeDB/membership) helps fund its
continued development and includes higher QuerIA AI usage limits. Core local
database features are not locked behind a membership.

<p align="center">
  <a href="https://www.patreon.com/LakeDB/membership"><img alt="Support LakeDB development on Patreon" src="https://img.shields.io/badge/SUPPORT-LAKEDB_DEVELOPMENT-ff424d?style=for-the-badge&logo=patreon&logoColor=white"></a>
</p>

---

## Community & support

<p align="center">
  <a href="https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas"><img alt="Suggest and vote on LakeDB ideas in GitHub Discussions" src="https://img.shields.io/badge/IDEAS-JOIN_DISCUSSIONS-0b7cff?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml"><img alt="Report a reproducible LakeDB bug" src="https://img.shields.io/badge/BUGS-REPORT_ISSUE-06132b?style=for-the-badge&logo=github&logoColor=12d9ff"></a>
  <a href="https://www.reddit.com/r/LakeDB/"><img alt="Join the LakeDB community on Reddit" src="https://img.shields.io/badge/REDDIT-JOIN_COMMUNITY-ff4500?style=for-the-badge&logo=reddit&logoColor=white"></a>
  <a href="https://www.patreon.com/LakeDB/membership"><img alt="Support LakeDB development on Patreon" src="https://img.shields.io/badge/PATREON-SUPPORT_DEVELOPMENT-ff424d?style=for-the-badge&logo=patreon&logoColor=white"></a>
</p>

<p align="center">
  <a href="LICENSE"><img alt="LakeDB proprietary license" src="https://img.shields.io/badge/LICENSE-proprietary-06132b?style=flat-square"></a>
  <a href=".github/SECURITY.md"><img alt="Security policy" src="https://img.shields.io/badge/SECURITY-policy-12d9ff?style=flat-square"></a>
</p>

## Help shape LakeDB

- Read the [Wiki](https://github.com/DavLagoHern/LakeDB/wiki).
- Join the community on [Reddit](https://www.reddit.com/r/LakeDB/).
- Report reproducible bugs with the [bug report form](https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml).
- Propose ideas in [GitHub Discussions](https://github.com/DavLagoHern/LakeDB/discussions).
- Support continued development or follow public updates on [Patreon](https://www.patreon.com/LakeDB/membership).

Testing, reporting and sharing LakeDB remain valuable ways to help this beta,
whether or not you become a paid member.

---

<p align="center">
  <img src="docs/assets/lakedb-app-icon.png" width="84" alt="LakeDB icon"><br>
  <strong>SQL when you want it. Natural language when you need it.</strong>
</p>
