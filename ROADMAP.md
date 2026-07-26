# LakeDB roadmap

![LakeDB Beta 3.0 product and QuerIA roadmap toward 1.0](assets/roadmap/lakedb-roadmap-beta-3.0.png)

LakeDB Beta 3.0 changes the product from a local SQL client with advanced
database tools into a local-first SQL client with an optional, reviewable AI
query workflow. The roadmap tracks complete product stages rather than every
patch.

## Current: Beta 3.0

QuerIA prepares one schema-aware MySQL or MariaDB statement from the active
natural-language line. It can prepare:

- `SELECT`, `SHOW`, `DESCRIBE` and `EXPLAIN`;
- `INSERT`, `UPDATE`, `DELETE` and `REPLACE`;
- `CREATE`, `ALTER`, `DROP`, `TRUNCATE` and `RENAME`.

Every statement is visible before execution. Approved SQL runs locally through
the normal LakeDB connection, read-only rules, production safeguards, history,
messages and result panels.

Beta 3.0 also keeps the complete SQL client: multiple connection workspaces,
schema-aware completion, safe table editing, large exports, Explain,
transactions, backup, restore, comparison and migrations.

## From the current foundation to 1.0

| Stage | Direction |
| --- | --- |
| **Actual** | The complete local SQL foundation: multiple workspaces, schema-aware editing, safe data operations, Explain, transactions, backup, compare, migrate and recovery. |
| **Beta 3.0 — new** | QuerIA natural-language documents, one schema-grounded SELECT, DML or DDL statement, visible SQL, explicit local execution and privacy opt-in. |
| **1.0 — direction** | Ideas include deeper understanding of tables, fields, relationships, indexes, procedures and other SQL objects, measured quality, stable privacy boundaries, signed delivery and complete product polish. |

Future stages describe direction, not a fixed date or guaranteed scope.
Feedback and safety findings can change their order.

## Privacy and control gates

QuerIA must remain optional:

- no LakeDB Service request before explicit activation;
- no database credentials, rows or query results sent to the service;
- no retained questions, generated SQL, schema metadata or table names;
- visible SQL before every execution;
- the complete local client remains available when QuerIA is disabled or
  unavailable.

Any future investigative workflow must show what it plans to inspect, bound the
work and keep all database changes behind explicit approval.

## Before 1.0

### Trusted distribution

- Apple Developer ID signing and notarization for macOS.
- Trusted Windows code signing.
- Clean-machine installation and upgrade validation.
- Checksums and a documented verification path for every package.

### Stability and compatibility

- A tested operating-system and MySQL/MariaDB compatibility matrix.
- Packaged smoke tests on macOS, Windows and Linux.
- Upgrade tests from retained beta lines.
- A release-candidate soak with no open data-loss, credential, update, restore
  or destructive-query blockers.

### AI quality

- A repeatable evaluation set for supported SQL operations.
- Measured grounding, syntax, safety and clarification quality.
- Regression tests for complex joins, dates, indexes, writes and DDL.
- Clear failure states when a safe statement cannot be prepared.

### Product and documentation

- Complete keyboard, focus and screen-reader review.
- First-run, privacy, known-limit, recovery and troubleshooting guides.
- Stable public terms and supported-version expectations.
- A frozen 1.0 scope during release-candidate testing.

## Help define 1.0

Share real workflows in [Discussions](https://github.com/DavLagoHern/LakeDB/discussions/categories/ideas).
Community value, data safety, privacy and maintenance cost determine what ships.
