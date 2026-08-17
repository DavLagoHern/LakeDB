<p align="center">
  <img src="docs/assets/lakedb-logo.png" width="520" alt="LakeDB">
</p>

<p align="center">
  <strong>A local-first database client for people tired of switching tools, losing context between connections, and trusting black-box AI with SQL.</strong><br>
  MySQL, MariaDB and SQLite today, with more engines planned. Keep separate workspaces, review generated or corrected SQL before anything runs, and stay in control of every database operation.
</p>

<p align="center">
  <a href="https://github.com/DavLagoHern/LakeDB/releases/tag/v1.0.0-beta.5.2.4"><img alt="Download LakeDB Beta 5.2.4" src="https://img.shields.io/badge/DOWNLOAD-BETA_5.2.4-0b7cff?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/homebrew-lakedb"><img alt="Install LakeDB with Homebrew" src="https://img.shields.io/badge/HOMEBREW-INSTALL_LAKEDB-fbb040?style=for-the-badge&logo=homebrew&logoColor=black"></a>
  <a href="https://davlagohern.github.io/LakeDB/"><img alt="LakeDB website" src="https://img.shields.io/badge/WEBSITE-EXPLORE_LAKEDB-19d2ff?style=for-the-badge&logoColor=020817"></a>
</p>

<p align="center">
  <img src="docs/assets/screenshots/multitab.png" width="100%" alt="Multiple independent LakeDB connection workspaces">
</p>

<p align="center"><sub><strong>One client, separate workspaces.</strong> Keep SQL, QuerIA, table tabs and connection context isolated instead of mixing everything into one editor state.</sub></p>

## Why LakeDB

- **One workspace across multiple engines** — work with MySQL, MariaDB and SQLite without changing tools.
- **Review-first AI** — QuerIA can generate SQL and help explain or correct query errors, but nothing runs automatically.
- **Production-aware workflows** — read-only connections, environment-specific confirmations and reviewable database operations.
- **Local-first by default** — credentials stay local, and database rows or query results are not sent to the AI service.

> 💡 **Help shape LakeDB:** suggest features, describe real database workflows and
> vote on community ideas in [GitHub Discussions](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas).

<p align="center">
  <sub>LakeDB is free to use, but it is not open source. This public repository hosts official builds, documentation, issue tracking and community feedback.</sub>
</p>

<p align="center">
  <!-- 100 maintainer-recorded downloads from archived releases + live GitHub release asset downloads. -->
  <a href="https://github.com/DavLagoHern/LakeDB/releases"><img alt="At least 115 LakeDB beta downloads, including archived releases" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FDavLagoHern%2FLakeDB%2Fdownload-stats%2Fbadge.json&style=flat-square"></a>
</p>

<p align="center">
  <img alt="macOS" src="https://img.shields.io/badge/macOS-Apple_Silicon-06132b?style=flat-square&logo=apple&logoColor=white">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-06132b?style=flat-square&logo=windows&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-x64-06132b?style=flat-square&logo=linux&logoColor=white">
  <img alt="MySQL, MariaDB and SQLite" src="https://img.shields.io/badge/MySQL_+_MariaDB_+_SQLite-ready-0b7cff?style=flat-square&logo=sqlite&logoColor=white">
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

The LakeDB tap checks the latest verified release every six hours and keeps the
Cask version and SHA-256 current automatically.

### Direct downloads

<p align="center">
  <a href="https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.2.4/LakeDB-1.0.0-beta.5.2.4-mac-arm64.dmg"><img alt="Download LakeDB for macOS Apple Silicon" src="https://img.shields.io/badge/macOS-DOWNLOAD_DMG-06132b?style=for-the-badge&logo=apple&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.2.4/LakeDB-1.0.0-beta.5.2.4-win-x64-setup.exe"><img alt="Download LakeDB installer for Windows x64" src="https://img.shields.io/badge/Windows-DOWNLOAD_SETUP-0b7cff?style=for-the-badge&logo=windows&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.2.4/LakeDB-1.0.0-beta.5.2.4-linux-x86_64.AppImage"><img alt="Download LakeDB AppImage for Linux x64" src="https://img.shields.io/badge/Linux-DOWNLOAD_APPIMAGE-12d9ff?style=for-the-badge&logo=linux&logoColor=020817"></a>
</p>

| Platform | Alternative package | Install |
| --- | --- | --- |
| macOS Apple Silicon | [ZIP](https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.2.4/LakeDB-1.0.0-beta.5.2.4-mac-arm64.zip) | Move `LakeDB.app` to Applications. |
| Windows x64 | [Portable EXE](https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.2.4/LakeDB-1.0.0-beta.5.2.4-win-x64-portable.exe) | Run without installation. |
| Linux x64 | [Debian package](https://github.com/DavLagoHern/LakeDB/releases/download/v1.0.0-beta.5.2.4/LakeDB-1.0.0-beta.5.2.4-linux-amd64.deb) | Install with your package manager. |

> **Public beta signing:** macOS packages have an ad-hoc signature but are not
> notarized yet; Windows packages are not yet signed with a trusted
> certificate. Download only from the official LakeDB repositories. Every
> package has a matching SHA-256 file on the
> [Beta 5.2.4 release page](https://github.com/DavLagoHern/LakeDB/releases/tag/v1.0.0-beta.5.2.4).

---

## What's new in Beta 5.2.4

Beta 5.2.4 improves QuerIA account and Patreon plan handling. Account settings
now provide an upgrade action and plan comparison, Patreon memberships can be
refreshed without disconnecting, and quota messages can lead directly to the
available plans. LakeDB requires sign-in or account creation before continuing
to Patreon and resumes the upgrade flow afterwards.

The update also prevents logout from being counted as a new QuerIA activation
on the same computer. Existing connections, workspaces, credentials and local
data are retained.

## Beta 5.2 highlights

<p align="center">
  <img src="docs/assets/releases/beta5.2/beta-5.2-release-1920x1080.png" width="100%" alt="LakeDB Beta 5.2 presents a review-first database comparison and migration workflow">
</p>

Beta 5.2 keeps comparison and migration deliberately separate:

- choose which tables, views, procedures, functions, triggers and events to compare;
- select structure and row-count checks explicitly;
- review results in **Summary** before opening **Migrate**;
- migrate only the selected tables through reviewable actions;
- open views, routines, triggers and events in dedicated definition tabs;
- browse large tables through a bounded interactive window instead of blocking on an unrestricted `COUNT(*)`.

Row values are not read or compared during bulk comparison, and non-table
objects remain comparison-only in bulk migration plans.

<p align="center">
  <img src="docs/assets/releases/beta5.2/database-comparison-scope-1920x1080.png" width="100%" alt="LakeDB Beta 5.2 database tools showing selectable tables, views, procedures, functions, triggers and events">
</p>

<p align="center"><sub><strong>Compare deliberately.</strong> Choose what to inspect first, then decide what should actually move.</sub></p>

### Previous beta highlights

- **Beta 5.1** — first-class SQLite connections, SQLite-aware diagnostics, transactions and `EXPLAIN QUERY PLAN`.
- **Beta 5.0** — local MySQL/MariaDB syntax diagnostics, safe quick fixes and optional AI-assisted correction.
- **Beta 4.5** — Production, Development and Local environments with configurable confirmation levels.
- **Beta 4.4** — reusable business contexts for QuerIA with per-connection selection.

See the full history in [GitHub Releases](https://github.com/DavLagoHern/LakeDB/releases).

---

## A complete SQL client

AI joins the existing LakeDB workflow; it does not replace it.

| Area | Available in Beta 5.2 |
| --- | --- |
| **Connections** | Multiple simultaneous MySQL, MariaDB and SQLite connections, folders, colors, read-only mode, diagnostics and search from Home or the connection picker. SSH and TLS remain server-engine capabilities. |
| **Workspaces** | Independent SQL, QuerIA and table tabs per connection, with restored editor content, selected schema and layout. |
| **SQL editor** | Monaco Editor, proactive schema completion, aliases, columns, PK/index hints, local syntax diagnostics, safe quick fixes, optional AI correction, formatting, Explain, transactions, history and streaming exports. |
| **QuerIA** | Reusable per-connection business contexts, Normal and Agentic generation, cross-database relationships, index inspection, `EXPLAIN` review, visible SQL and explicit local execution. |
| **Results and data** | Local query-result filters, draggable result columns, virtualized table grids, pagination, search, sorting and typed safe editing with conflict checks and rollback. |
| **Database tools** | MySQL/MariaDB backup and restore; selectable comparison for tables, views, procedures, functions, triggers and events; reviewable table migration plans and single-table copy. Capability-aware controls stay disabled when an engine does not support them. |
| **Safety** | Local encrypted credentials, production confirmations, renderer sandboxing, read-only enforcement and no remote database execution. |
| **Resilience** | Stable device identity, crash recovery, session restore, verified updates, configuration backup and diagnostics. |

---

## Context before catalog guessing

Database names rarely explain the whole business. LakeDB lets you create named,
reusable contexts for terminology, schema roles, table priorities and
relationship rules.

- Create up to 20 contexts with a short selector-friendly name.
- Add up to 20,000 characters of business instructions to each context.
- Choose a default context for new connections.
- Override the context for one connection, return to the default or explicitly use no context.
- Use the same selected context in both Normal and Agentic generation.

Context is stored locally with LakeDB settings. It is sent only when you ask
QuerIA to generate SQL, alongside the bounded schema metadata already required
for that request. It never adds credentials, database rows or query results.

<p align="center">
  <img src="docs/assets/releases/beta4.4/connection-context.png" width="100%" alt="LakeDB Beta 4.4 QuerIA toolbar showing Agentic mode and a compact Support context selected for the active connection">
</p>

<p align="center"><sub><strong>Defaults stay flexible.</strong> Each connection remembers its own context choice without adding noise to the workspace.</sub></p>

---

## Meet Quer<span style="color:#19d2ff">IA</span>

QuerIA is part of the normal LakeDB query workspace, not a separate chatbot.
Write a request, inspect the complete SQL and choose whether to copy it or run
it through your local connection.

Two generation modes keep the workflow explicit:

- **Normal** prepares direct questions quickly when the relevant tables are already clear.
- **Agentic** explores a broader catalog, inspects table structures, keys and indexes, relates sources across databases and reviews `SELECT` plans with `EXPLAIN`.

Both modes keep the same control boundary: generated SQL is visible and nothing
runs automatically.

### Agentic database understanding

Agentic generation is designed for questions where the complete answer is not
contained in the first table mentioned. It can:

- discover relevant tables across several accessible databases;
- inspect columns, primary keys, indexes and foreign keys;
- infer a relationship when metadata and shared identifiers support it;
- revise a draft that ignores a relevant source;
- validate the final `SELECT` plan and report its index and access signals;
- leave editable placeholders instead of blocking on missing literal values.

QuerIA shows the tables used beside the result. Selecting one opens that table
in the lower workspace without taking you away from the QuerIA document.
Explanations follow the application language.

<p align="center">
  <img src="docs/assets/releases/beta4/agent-mode.png" width="100%" alt="LakeDB Beta 4 QuerIA Agent Mode inspecting fictional schemas, relationships and indexes before preparing reviewable SQL">
</p>

<p align="center"><sub><strong>Agentic analysis remains bounded.</strong> QuerIA inspects metadata, relates sources and returns visible SQL for review.</sub></p>

### Reviewable SQL beyond SELECT

QuerIA can prepare one reviewable statement at a time:

- `SELECT`, `SHOW`, `DESCRIBE` and `EXPLAIN`;
- `INSERT`, `UPDATE`, `DELETE` and `REPLACE`;
- `CREATE`, `ALTER`, `DROP`, `TRUNCATE` and `RENAME`.

Prepared statements use the normal LakeDB connection, read-only rules,
production safeguards, history, messages and results only after explicit
approval.

---

## Private until you opt in

QuerIA starts disabled. LakeDB makes no service request until you review the
privacy notice and beta terms and explicitly activate it.

<p align="center">
  <img src="docs/assets/screenshots/queria-activation.png" width="100%" alt="QuerIA activation dialog shown before LakeDB makes any optional service connection">
</p>

When QuerIA is used:

- the question and minimum useful schema metadata are processed temporarily;
- database credentials, table rows and query results are never sent;
- questions, generated SQL, schema metadata and table names are not retained;
- only the account identity, optional profile, aggregate operational usage,
  success or failure and latency are retained.

Read the complete boundary in [PRIVACY.md](docs/PRIVACY.md) and
[TERMS.md](docs/TERMS.md). The complete SQL client remains available when
QuerIA is disabled or unavailable. QuerIA can be disabled again at any time;
LakeDB stops contacting the service and requires explicit consent before
reactivation.

---

## Request Beta Tester

The beta includes a FREE QuerIA allowance. People who want to test real
multi-database workflows can request Beta Tester access from
**Settings → Account**. The short use-case field helps evaluate what kind of
queries should be tested; it is not a login or an email-verification flow.

<p align="center">
  <img src="docs/assets/releases/beta4/beta-tester.png" width="100%" alt="LakeDB Beta 4.0 campaign artwork explaining the in-app Beta Tester request">
</p>

The most useful contributions are reproducible bugs, real relationship examples
and clear explanations of where QuerIA selected the wrong table, join or index.

---

## Where LakeDB differs

Shared capabilities such as merely opening multiple connections, SSH/SSL,
normal autocomplete and editable grids are intentionally omitted. LakeDB's
two-level connection workspace is included because every top-level connection
keeps its own nested SQL, QuerIA and object tabs instead of sharing one editor
context.

**✓ Included · ◐ Limited, paid or a different workflow · × No comparable built-in workflow · — No built-in AI / not applicable**

| Focused capability | LakeDB | DBeaver | TablePlus | MySQL Workbench | HeidiSQL |
| --- | :---: | :---: | :---: | :---: | :---: |
| Local syntax diagnostics before execution | ✓ | ✓ | × | ◐ | × |
| Explicit AI error correction with complete SQL review | ✓ | ◐ | ◐ | — | — |
| Top-level connection tabs with isolated, restored inner workspaces | ✓ | ◐ | ✓ | ✓ | ◐ |
| PK and index-aware completion predicates | ✓ | ◐ | × | × | × |
| Typed staged edits with conflict checks and rollback | ✓ | ◐ | ◐ | ◐ | ◐ |
| Guided restore with automatic recovery dump | ✓ | ◐ | ◐ | ◐ | ◐ |
| Schema compare and generated migration plan | ✓ | ◐ | × | ✓ | × |
| Dedicated line-based natural-language documents | ✓ | × | × | — | — |
| Agentic cross-database relationship discovery | ✓ | ◐ | × | — | — |
| Mandatory local SQL review before execution | ✓ | ◐ | ◐ | — | — |
| AI never receives row data or query results | ✓ | ◐ | ✓ | — | — |
| No retained questions, generated SQL or schema names | ✓ | × | ◐ | — | — |

A partial mark includes paid editions, plug-ins or a materially different
workflow. Sources: [DBeaver documentation](https://dbeaver.com/docs/dbeaver/Separate-Connections/),
[TablePlus documentation](https://docs.tableplus.com/gui-tools/the-interface/multi-tabs-workspaces-windows),
[MySQL Workbench manual](https://dev.mysql.com/doc/workbench/en/wb-configuring-files.html) and
[HeidiSQL documentation](https://www.heidisql.com/).

---

## Road to 1.0

| Stage | Direction |
| --- | --- |
| **SQL foundation** | Independent workspaces, schema-aware editing, safe data operations, database tools and recovery. |
| **Beta 3** | Natural-language query documents, visible SQL and explicit local execution. |
| **Beta 4 — complete** | Reusable connection context, Normal and Agentic generation, cross-database relationships, index inspection, reversible opt-in and clearer execution feedback. |
| **Beta 5.2 — current** | SQLite beside MySQL/MariaDB, selectable comparison scopes, reusable object definitions and explicit migration actions. |
| **1.0 direction** | Measured quality, trusted signing and distribution, compatibility validation and complete product polish. |

<p align="center">
  <a href="docs/ROADMAP.md"><img src="docs/assets/roadmap/lakedb-roadmap-beta-5.2.png" width="100%" alt="LakeDB Beta 5.2 roadmap from the SQL foundation through review-first database work toward 1.0"></a>
</p>

Roadmap items describe direction, not a fixed release date. See
[ROADMAP.md](docs/ROADMAP.md) for the complete quality and trust gates.

---

## Support LakeDB

LakeDB's complete local SQL client is free to use. If it saves you time, an
optional [Patreon membership](https://www.patreon.com/LakeDB/membership) helps
pay for builds, future code signing, release infrastructure and continued
development toward 1.0. Core local database features are not locked behind a
membership.

Paid memberships also include a larger QuerIA allowance to help cover the real
cost of its external AI service:

| Membership | Monthly support | QuerIA allowance | Compared with FREE |
| --- | ---: | --- | ---: |
| **FREE** | €0 | 100,000 weighted tokens/day · 400,000/month | — |
| **LakeDB Supporter** | €5 | 1,000,000 weighted tokens/day · 4,000,000/month | **10×** |
| **LakeDB MEGA Supporter** | €15 | 5,000,000 weighted tokens/day · 20,000,000/month | **50×** |

Weighted usage reflects the work performed, so it is not a fixed number of
queries. Agentic requests usually inspect more metadata and make more AI calls
than Normal requests.

To activate the allowance, choose **Upgrade plan** in **Settings → Account**.
LakeDB asks you to sign in or create a QuerIA account first, shows the available
plans and then continues securely to Patreon. Membership changes are applied
automatically while Patreon remains linked, and **Refresh Patreon** checks a
new or changed membership without disconnecting it.

<p align="center">
  <a href="https://www.patreon.com/LakeDB/membership"><img alt="Choose a LakeDB Patreon membership" src="https://img.shields.io/badge/KEEP_LAKEDB_MOVING-VIEW_MEMBERSHIPS-ff424d?style=for-the-badge&logo=patreon&logoColor=white"></a>
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
