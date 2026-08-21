# LakeDB compatibility

This is the conservative compatibility baseline for LakeDB Beta 6.0 and the intended 1.0 foundation. A combination marked **best effort** may work but is not part of the supported release baseline.

## Desktop packages

| Platform                                      | Architecture            | Support                              |
| --------------------------------------------- | ----------------------- | ------------------------------------ |
| macOS 12 Monterey or later                    | Apple Silicon (`arm64`) | Supported package target             |
| Windows 10 22H2 and Windows 11                | x64                     | Supported package target             |
| Ubuntu 22.04 LTS and 24.04 LTS                | x64                     | Supported `.deb` and AppImage target |
| Debian 12                                     | x64                     | Supported `.deb` and AppImage target |
| Other current glibc-based Linux distributions | x64                     | AppImage, best effort                |
| macOS Intel, Windows ARM and Linux ARM        | —                       | No official package                  |
| Windows 7, 8 and 8.1                          | —                       | Unsupported                          |

End users do not need to install Node.js, Electron, Docker or a database client library.

## Database servers

| Server line                                         | Support                                                   |
| --------------------------------------------------- | --------------------------------------------------------- |
| MySQL 8.4 LTS                                       | Supported baseline                                        |
| MariaDB 10.11, 11.4 and 11.8 LTS                    | Supported baseline                                        |
| MySQL 8.0 and MariaDB 10.6                          | Best effort; upstream community maintenance has ended     |
| Newer MySQL Innovation or MariaDB LTS/rolling lines | Best effort until added to the supported baseline         |
| MySQL-compatible forks and managed services         | Best effort; provider behaviour and privileges can differ |
| PostgreSQL 18                                       | Validated Beta 6 baseline                                 |
| PostgreSQL 14–17 and managed PostgreSQL services    | Best effort pending broader beta validation                |
| SQL Server and Oracle Database                      | Unsupported as connection targets                         |

LakeDB uses native MySQL-family and PostgreSQL drivers and engine-specific
catalog queries. Individual features require the connected user or role to
have the corresponding permissions.

## PostgreSQL

Beta 6 validates native behavior against PostgreSQL 18: direct or SSH-tunneled
connections, PostgreSQL TLS/authentication modes, cancellable sessions,
transactions and `search_path`; catalog browsing; typed optimistic editing;
complete-query exports; table design; schema backup/restore; comparison and
transactional table copy; operations, roles, QuerIA and AI correction.

PostgreSQL 14–17 and managed services such as Supabase, Neon, Amazon RDS and
Google Cloud SQL are best effort while real-world beta coverage expands.
Partial and expression indexes are preserved but are not visually editable.
Foreign tables can be inspected, but complete foreign-table design and
migration are not declared. Cross-engine PostgreSQL/MySQL conversion is not
available.

## SQLite files

SQLite 3 database files with `.db`, `.sqlite` or `.sqlite3` extensions are
supported as local connection targets. LakeDB uses the SQLite library bundled
with the application; no separate server or command-line client is required.

SQLite supports tables, views, triggers, SQL execution and cancellation,
explicit transactions, safe row editing, `EXPLAIN QUERY PLAN`, local
diagnostics and reviewable AI assistance. LakeDB database dump/restore, schema
comparison, table copy, server monitoring, SSH and TLS are not SQLite
capabilities in Beta 5.1.

LakeDB refuses to open its live internal settings database, its WAL/SHM files,
pre-upgrade snapshots or path aliases as user connections. Make a separate
backup or copy before inspecting that schema through the SQLite engine.

## Connection requirements

- Direct TCP access to the configured MySQL/MariaDB/PostgreSQL host and port, access through the integrated SSH tunnel, or read/write access to the selected local SQLite file.
- The operating system's OpenSSH `ssh` command for integrated tunnels.
- A key already available to `ssh-agent` when the private key requires a passphrase.
- A valid PEM certificate authority when TLS verification uses a custom CA.
- Sufficient privileges for the requested operation. Read-only accounts remain appropriate for inspection workflows.

## Feature-dependent compatibility

- Table editing requires a primary key or a complete non-nullable unique index.
- PostgreSQL custom types, JSONB, arrays, UUID, numeric, temporal and binary
  values are validated and rendered with PostgreSQL semantics.
- Stored object definitions and schema-management SQL can vary between MySQL and MariaDB versions.
- Backup, restore and migration operations remain subject to server privileges, SQL modes, character sets, collations and storage-engine behaviour.
- Importing connections from another client does not guarantee that its encrypted password format can be recovered.

When reporting a compatibility issue, include the exact operating-system, LakeDB and database-server versions without exposing connection secrets.
