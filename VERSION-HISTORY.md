# LakeDB version history

The [README](README.md) describes everything LakeDB can do today. The [roadmap](ROADMAP.md) follows the larger product milestones. This file records the smaller changes in each published build.

| Label | Meaning |
| --- | --- |
| `ADD` | New user-facing capability |
| `CHANGE` | Intentional workflow or interface change |
| `FIX` | Corrected behaviour |
| `SECURITY` | Data-safety, credential or trust improvement |

Only real tagged builds are listed as releases. The 0.2–0.4 product stages were development milestones rather than public tags, and 0.10.0–0.10.2 were not published as separate builds.

## 0.10

### 0.10.4

- `ADD` Review DBeaver, SQLyog, JSON, CSV and SQL URL connections in a selectable table before saving.
- `ADD` Edit imported names/users, apply shared or individual passwords and resolve duplicates explicitly.
- `FIX` Try supported SQLyog password formats and never store unsupported ciphertext as a password.
- `CHANGE` Show connections without folders in the virtual **Unclassified** Home group.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.10.4)

### 0.10.3

- `ADD` Split SQL/editor and result/table panes with a continuously resizable divider.
- `ADD` Schema-aware completion with aliases, PK/index hints and index predicate templates.
- `ADD` Compact/expanded formatting, typed result editing, cell filters and visual table design.
- `CHANGE` Add compact table controls, overflow tab navigation and remembered window bounds.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.10.3)

## 0.9

### 0.9.3

- `ADD` Export reviewed SQL as CSV, JSON, JSON Lines, Excel-compatible or executable SQL.
- `ADD` Add format-specific controls, optional GZIP and streaming limits up to 50 million rows.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.3)

### 0.9.2

- `ADD` Export a complete read-only editor query independently from the limited result grid.
- `ADD` Add bounded-memory progress, cancellation and explicit multi-condition table filters.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.2)

### 0.9.1

- `CHANGE` Give new windows more room and carry the active connection colour through its workspace.
- `FIX` Validate preference values inline and preserve readable font-size limits.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.1)

### 0.9.0

- `ADD` Add Migration Studio, database/table comparison and selectable structure/data copy plans.
- `ADD` Add explorer actions, connection-tool tabs, query timing and configurable timeouts.
- `FIX` Complete write statements from MySQL OK packets and cancel editor queries more reliably.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.9.0)

## 0.8

### 0.8.4

- `CHANGE` Always start on Home while restoring previous workspaces in the background.
- `FIX` Reconnect restored tabs on demand and follow the native macOS window lifecycle.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.8.4)

### 0.8.3

- `FIX` Exit cleanly when the final Windows window closes.
- `CHANGE` Unify the Windows title bar and improve control contrast.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.8.3)

### 0.8.2

- `ADD` Download updates inside LakeDB with progress, cancellation and platform-specific actions.
- `SECURITY` Verify every downloaded package against its published SHA-256 checksum.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.8.2)

### 0.8.1

- `ADD` Create explicit folders and choose their connections; generate suggestions only on request.
- `CHANGE` Integrate the Windows menus into one LakeDB-coloured title bar.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.8.1)

### 0.8.0

- `ADD` Edit large values in plain-text, JSON or HTML modes with structured validation.
- `ADD` Show pending edits, inserts and deletes clearly before applying them.
- `FIX` Keep duplicated rows beside their source and surface table-refresh feedback.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.8.0)

## 0.7

### 0.7.1

- `FIX` Make row selection, checkbox behaviour and single-line grid heights consistent.
- `CHANGE` Remove the redundant row-number gutter and preserve compact multi-row selection.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.7.1)

### 0.7.0-beta.1

- `ADD` Add update discovery, session/crash recovery and workspace restoration.
- `SECURITY` Add guarded configuration/SQL restores, recovery backups and pre-migration snapshots.
- `CHANGE` Improve keyboard focus, dialog accessibility and automated accessibility checks.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.7.0-beta.1)

## 0.6

### 0.6.0

- `ADD` Add Windows and Linux packages alongside macOS.
- `ADD` Add English/Spanish UI, international documentation and matching checksums.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.6.0)

## 0.5

### 0.5.0

- `ADD` Add database tools for SQL export/import, comparison and table copy.
- `ADD` Add configuration backups, diagnostics and the first public product screenshots.

[Release notes and downloads](https://github.com/DavLagoHern/LakeDB/releases/tag/v0.5.0)

## Initial builds

### 0.1.1

- `CHANGE` Refresh the LakeDB identity, branding and first public documentation.

### 0.1.0

- `ADD` Establish LakeDB as a focused local MySQL/MariaDB desktop application.
- `ADD` Add the first connection, SQL editor, explorer and release foundations.

### Development milestones 0.2–0.4

- `ADD` **0.2 Connections:** multiconnection workspaces, folders, environments and SSL/SSH.
- `ADD` **0.3 SQL workspace:** tabs, object exploration, history, favorites and result navigation.
- `ADD` **0.4 Safe data:** editing, filtering, paging, read-only mode and production safeguards.

These milestones were completed during early development but were not published as standalone public tags.
