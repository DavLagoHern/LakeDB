# LakeDB compatibility

This is the conservative compatibility baseline for the LakeDB 0.11 beta line and the intended 1.0 foundation. A combination marked **best effort** may work but is not part of the supported release baseline.

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
| PostgreSQL, SQLite, SQL Server and Oracle Database  | Unsupported as connection targets                         |

LakeDB uses standard MySQL protocol connections and reads metadata from server statements and `information_schema`. Individual features require the connected user to have the corresponding permissions.

## Connection requirements

- Direct TCP access to the configured MySQL/MariaDB host and port, or access through the integrated SSH tunnel.
- The operating system's OpenSSH `ssh` command for integrated tunnels.
- A key already available to `ssh-agent` when the private key requires a passphrase.
- A valid PEM certificate authority when TLS verification uses a custom CA.
- Sufficient privileges for the requested operation. Read-only accounts remain appropriate for inspection workflows.

## Feature-dependent compatibility

- Table editing requires a primary key or a complete non-nullable unique index.
- Stored object definitions and schema-management SQL can vary between MySQL and MariaDB versions.
- Backup, restore and migration operations remain subject to server privileges, SQL modes, character sets, collations and storage-engine behaviour.
- Importing connections from another client does not guarantee that its encrypted password format can be recovered.

When reporting a compatibility issue, include the exact operating-system, LakeDB and database-server versions without exposing connection secrets.
