# Fingram

Fingram is a social communication web app with an Android WebView shell.

## Included
- Email registration and email verification
- Secure password hashing and sessions
- Home feed with posts, likes, comments, and post deletion
- Profiles with bio and post count
- Following and friend requests
- Blocking and reporting backend
- Privacy, Terms, health/readiness endpoints
- Android project targeting API 36

## Run locally

1. Copy `.env.example` to `.env`.
2. Set a strong `SESSION_SECRET`.
3. Configure SMTP values if email verification is needed.
4. Install dependencies:

```bash
npm install
```

5. Start:

```bash
npm start
```

## Important
Never commit `.env`, passwords, Gmail App Passwords, API keys, database files, or signing keys.

For production on Google Cloud Run, move persistent application data from local SQLite to a managed database such as Cloud SQL PostgreSQL before scaling beyond a single instance.

The Android project's `START_URL` must be replaced with the real HTTPS Fingram service URL before building a release.
