<p align="center">
  <img src="docs/assets/lakedb-logo.png" width="520" alt="LakeDB">
</p>

<p align="center">
  <strong>A complete MySQL and MariaDB desktop client with reviewable AI.</strong><br>
  Ask directly or let QuerIA investigate relationships and indexes before it prepares SQL.
</p>

<p align="center">
  <a href="https://davlagohern.github.io/LakeDB/"><img alt="LakeDB website" src="https://img.shields.io/badge/WEBSITE-EXPLORE_LAKEDB-19d2ff?style=for-the-badge&logoColor=020817"></a>
  <a href="https://www.reddit.com/r/LakeDB/"><img alt="Join the LakeDB community on Reddit" src="https://img.shields.io/badge/REDDIT-JOIN_COMMUNITY-ff4500?style=for-the-badge&logo=reddit&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/releases/latest"><img alt="Download the latest LakeDB Beta 4 build" src="https://img.shields.io/badge/DOWNLOAD-BETA_4-0b7cff?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml"><img alt="Report a LakeDB issue" src="https://img.shields.io/badge/FEEDBACK-REPORT_ISSUE-06132b?style=for-the-badge&logo=github&logoColor=12d9ff"></a>
</p>

<p align="center">
  <img alt="macOS" src="https://img.shields.io/badge/macOS-Apple_Silicon-06132b?style=flat-square&logo=apple&logoColor=white">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-06132b?style=flat-square&logo=windows&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-x64-06132b?style=flat-square&logo=linux&logoColor=white">
  <img alt="MySQL and MariaDB" src="https://img.shields.io/badge/MySQL_+_MariaDB-ready-0b7cff?style=flat-square&logo=mysql&logoColor=white">
  <img alt="English and Spanish" src="https://img.shields.io/badge/UI-English_+_Spanish-12d9ff?style=flat-square">
</p>

---

<p align="center">
  <img src="docs/assets/releases/beta4.4/context-release-1920x1080.png" width="100%" alt="LakeDB Beta 4.4 presentation artwork showing reusable context flowing through a selected database and QuerIA into reviewable SQL">
</p>

<p align="center"><sub><strong>Beta 4.4.</strong> Reusable business context guides database selection and relationship analysis before QuerIA prepares reviewable SQL.</sub></p>

> **New in Beta 4.5:** connections now distinguish Production, Development
> and Local work. Configure confirmation levels per environment and operation,
> bulk-edit connection credentials or environments, select replication
> channels and load the server process list only when requested.

> **Beta 4.4.2 hotfix:** sorting a query result now orders the complete cached
> result before rows are displayed or loaded in blocks. Changing the number of
> rows per table page also recalculates the page count immediately. The Search
> field remains intentionally local to the rows currently displayed.

## Context before catalog guessing

Database names rarely explain the whole business. Beta 4.4 lets you create
named reusable contexts for terminology, schema roles, table priorities and
relationship rules.

- Create up to 20 contexts with a short selector-friendly name.
- Add up to 20,000 characters of business instructions to each context.
- Choose a default context for new connections.
- Override the context for one connection, return to the default or explicitly
  use no context.
- Use the same selected context in both Normal and Agentic generation.

Context is stored locally with LakeDB settings. It is sent only when you ask
QuerIA to generate SQL, alongside the bounded schema metadata already required
for that request. It never adds credentials, database rows or query results.

<p align="center">
  <img src="docs/assets/releases/beta4.4/connection-context.png" width="100%" alt="LakeDB Beta 4.4 QuerIA toolbar showing Agentic mode and a compact Support context selected for the active connection">
</p>

<p align="center"><sub><strong>Defaults stay flexible.</strong> Each connection remembers its own context choice without adding noise to the workspace.</sub></p>

## Meet Quer<span style="color:#19d2ff">IA</span>

QuerIA is part of the normal LakeDB query workspace, not a separate chatbot.
Write a request, inspect the complete SQL and choose whether to copy it or run
it through your local connection.

Beta 4 adds two generation modes:

- **Normal** prepares direct questions quickly when the relevant tables are
  already clear.
- **Agentic** explores a broader catalog, inspects table structures, keys and
  indexes, relates sources across databases and reviews `SELECT` plans with
  `EXPLAIN`.

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

## A complete SQL client

AI joins the existing LakeDB workflow; it does not replace it.

| Area | Available in Beta 4 |
| --- | --- |
| **Connections** | Multiple simultaneous connections, folders, colors, SSL, SSH tunnels, read-only mode, diagnostics and search from Home or the connection picker. |
| **Workspaces** | Independent SQL, QuerIA and table tabs per connection, with restored editor content, selected schema and layout. |
| **SQL editor** | Monaco Editor, proactive schema completion, aliases, columns, PK/index hints, safe automatic keyword casing, formatting, Explain, transactions, history and streaming exports. |
| **QuerIA** | Reusable per-connection business contexts, Normal and Agentic generation, cross-database relationships, index inspection, `EXPLAIN` review, visible SQL and explicit local execution. |
| **Results and data** | Local query-result filters, draggable result columns, virtualized table grids, pagination, search, sorting and typed safe editing with conflict checks and rollback. |
| **Database tools** | Backup, restore, schema comparison, migration planning, connection imports and reviewable generated SQL. |
| **Safety** | Local encrypted credentials, production confirmations, renderer sandboxing, read-only enforcement and no remote database execution. |
| **Resilience** | Stable device identity, crash recovery, session restore, verified updates, configuration backup and diagnostics. |

<p align="center">
  <img src="docs/assets/screenshots/multitab.png" width="100%" alt="Multiple independent LakeDB connection workspaces">
</p>

<p align="center"><sub><strong>The full SQL foundation remains local.</strong> Each connection owns its SQL tabs, table tabs, active schema and restored workspace state.</sub></p>

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
[TERMS.md](docs/TERMS.md). The complete SQL client remains available when QuerIA is
disabled or unavailable. QuerIA can be disabled again at any time; LakeDB stops
contacting the service and requires explicit consent before reactivation.

## Request Beta Tester

Beta 4 includes a FREE QuerIA allowance. People who want to test real
multi-database workflows can request Beta Tester access from
**Settings → Account**. The short use-case field helps evaluate what kind of
queries should be tested; it is not a login or an email-verification flow.

<p align="center">
  <img src="docs/assets/releases/beta4/beta-tester.png" width="100%" alt="LakeDB Beta 4.0 campaign artwork explaining the in-app Beta Tester request">
</p>

The most useful contributions are reproducible bugs, real relationship
examples and clear explanations of where QuerIA selected the wrong table,
join or index.

## Where LakeDB differs

Shared capabilities such as multiple connections, SSH/SSL, normal
autocomplete and editable grids are intentionally omitted.

**✓ Included · ◐ Limited, paid or a different workflow · × No comparable built-in workflow · — No built-in AI / not applicable**

| Focused capability | LakeDB | DBeaver | TablePlus | MySQL Workbench | HeidiSQL |
| --- | :---: | :---: | :---: | :---: | :---: |
| Restored independent connection workspaces | ✓ | ✓ | ✓ | ◐ | ◐ |
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
workflow. Sources: [DBeaver documentation](https://dbeaver.com/docs/dbeaver/AI-command/),
[TablePlus documentation](https://docs.tableplus.com/llm-plugin),
[MySQL Workbench manual](https://dev.mysql.com/doc/workbench/en/) and
[HeidiSQL documentation](https://www.heidisql.com/).

## Road to 1.0

| Stage | Direction |
| --- | --- |
| **SQL foundation** | Independent workspaces, schema-aware editing, safe data operations, database tools and recovery. |
| **Beta 3** | Natural-language query documents, visible SQL and explicit local execution. |
| **Beta 4 — current** | Reusable connection context, Normal and Agentic generation, cross-database relationships, index inspection, reversible opt-in and clearer execution feedback. |
| **1.0 direction** | Measured quality, trusted signing and distribution, compatibility validation and complete product polish. |

<p align="center">
  <a href="docs/ROADMAP.md"><img src="docs/assets/roadmap/lakedb-roadmap-beta-4.5.png" width="100%" alt="LakeDB roadmap from the SQL foundation through QuerIA and safer production workflows toward 1.0"></a>
</p>

Roadmap items describe direction, not a fixed release date. See
[ROADMAP.md](docs/ROADMAP.md) for the complete quality and trust gates.

## Download

Open the [latest LakeDB release](https://github.com/DavLagoHern/LakeDB/releases/latest)
and choose your platform:

| Platform | Download | Install |
| --- | --- | --- |
| macOS Apple Silicon | `LakeDB-*-mac-arm64.dmg` or `.zip` | Open the DMG or move `LakeDB.app` to Applications. |
| Windows x64 | `LakeDB-*-win-x64-setup.exe` | Run the installer. A portable `.exe` is also available. |
| Linux x64 | `LakeDB-*-linux-x86_64.AppImage` or `LakeDB-*-linux-amd64.deb` | Make the AppImage executable, or install the Debian package. |

LakeDB is still a public beta. macOS packages are ad-hoc signed but not yet
notarized; Windows packages do not yet have a trusted code-signing certificate.
Only download LakeDB from this repository and verify the published SHA-256.

## Help shape LakeDB

- Read the [Wiki](https://github.com/DavLagoHern/LakeDB/wiki).
- Join the community on [Reddit](https://www.reddit.com/r/LakeDB/).
- Report reproducible bugs with the [bug report form](https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml).
- Propose ideas in [GitHub Discussions](https://github.com/DavLagoHern/LakeDB/discussions).
- Follow development updates on [Patreon](https://www.patreon.com/LakeDB).

Testing, reporting and sharing LakeDB are the most useful ways to help this
beta.

---

<p align="center">
  <img src="docs/assets/lakedb-app-icon.png" width="84" alt="LakeDB icon"><br>
  <strong>SQL when you want it. Natural language when you need it.</strong>
</p>
