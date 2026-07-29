# LakeDB IA beta terms

Effective 25 July 2026.

QuerIA is an optional beta feature that prepares SQL from natural language.
Every generated statement is presented for review. You remain responsible for
checking the SQL, selecting the target database and deciding whether to execute
it. Use appropriate database permissions and backups, especially for write or
schema-changing statements.

The AI service may change, be rate limited or be temporarily unavailable.
LakeDB continues to work as a local database client when QuerIA is unavailable.
Beta output can be incomplete or incorrect and is provided without a guarantee
of fitness for a particular purpose.

QuerIA includes a free allowance during the beta. Additional plans and expanded
allowances may be introduced later. Patreon support helps fund LakeDB
development but is not connected to QuerIA access in this release.

Do not include passwords, access tokens or sensitive row values in a
natural-language question or reusable business context. The processing and
retention model is described in [PRIVACY.md](PRIVACY.md).
