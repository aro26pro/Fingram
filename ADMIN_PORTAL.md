# Fingram Administrator Portal

Fingram now includes a private administrator portal at `/admin`.

## What it monitors
- Total, verified and suspended users
- Posts, comments, follows and accepted friendships
- Open user/content reports
- Recent posts and report details
- Administrator activity/audit log

## Moderation controls
- Resolve, dismiss and reopen reports
- Delete reported posts
- Suspend/unsuspend user accounts
- Permanently delete user accounts and associated content

## Configure administrator access
Set these server-side environment variables. **Do not commit real credentials or paste them into chat.**

```text
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=use-a-long-random-password
```

For Google Cloud Run, store the password as a Secret Manager secret where possible. The portal uses a separate administrator session and is not exposed through the normal user login.

## Production notes
- Replace placeholder privacy/terms contact information before Google Play release.
- Keep moderation/reporting operational and review UGC policy requirements before publishing.
- For production scale, migrate the SQLite database to a managed database such as Cloud SQL PostgreSQL; Cloud Run local storage is not a durable multi-instance database.
