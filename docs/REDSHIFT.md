# Amazon Redshift beta guide

Beta 9.0 includes an initial Redshift engine using official AWS software.
**Live AWS validation is pending before stable 1.0.** Local transport, bridge
and interface tests do not establish compatibility with every AWS deployment.

## Direct SQL with the official Python connector

Install Python and a dedicated connector environment yourself:

```sh
python3 -m venv ~/.lakedb-redshift
~/.lakedb-redshift/bin/python -m pip install redshift-connector==2.2.0
```

On Windows use `python -m venv` and the environment's `Scripts/python.exe`.
Choose the Python executable in the connection's Advanced settings. LakeDB
does not install Python automatically. Enter the endpoint, database, port
(normally 5439) and database credentials. TLS verification is enabled by default.

IAM/profile authentication uses your existing AWS configuration. Named SSO
profiles must already be authenticated outside LakeDB. Interactive IdP/browser
sign-in inside the connector is not implemented. The external Python runtime
has not been verified in the separate Mac App Store sandbox edition.

## AWS Data API

Select AWS Data API, database, region and a Serverless workgroup or provisioned
cluster identifier. Python and a direct TCP database connection are unnecessary.
Use the standard AWS credential chain or an existing named profile. A Secrets
Manager ARN may supply database credentials, but AWS API/secret permissions are
still required. LakeDB does not provision AWS resources or copy AWS keys into
the saved connection profile.

Sessions are reused per SQL tab. Session expiry is surfaced as an error;
failed statements are not replayed automatically. AWS service limits,
permissions and usage charges still apply.

## Available in this beta

- Connection testing, per-tab SQL sessions, transactions and cancellation.
- Schema, table/view and supported materialized/external-object discovery.
- Native SHOW definitions, paged browsing, filtering and ordering.
- EXPLAIN and supported CSV, JSON, JSON Lines and Excel-compatible exports.
- Explicit drop/truncate actions through normal confirmation policies.

Row editing and visual table design are disabled. Redshift primary and unique
keys are informational and do not prove a safe editable row identity. SQL DML
and DDL still depend on your permissions. **TRUNCATE commits its transaction
and cannot be rolled back.**

AI tools, integrated SSH, Redshift-specific editor diagnostics, SQL-format
exports, dump/restore, comparison/copy, relationship maps, administration and
monitoring are not implemented. Their controls remain disabled. Redshift uses
its own transports and dialect rather than LakeDB's PostgreSQL driver.

Use a disposable test database for validation and report reproducible failures
through the [bug form](https://github.com/DavLagoHern/LakeDB/issues/new?template=bug-report.yml).
Do not include credentials, account keys or private row data in reports.
