# Fingram Desktop (preview)

This is a desktop shell around the existing hosted Fingram website:
https://aro26pro.pythonanywhere.com/

## Run locally

Install Node.js, then run from the desktop directory:

- `npm install`
- `npm start`

## Build previews

- Windows x64: `npm run build:windows` produces a portable .exe.
- macOS Intel and Apple Silicon: `npm run build:mac` produces .zip archives.

The GitHub Actions workflow **Fingram Windows and Mac Preview** runs both builds on hosted runners. Download its artifacts from the run's page.

## Current limitations

- Requires an internet connection and the PythonAnywhere backend.
- Registration and login are blocked where email verification is unavailable; packaging does not fix SMTP.
- No signing or notarization is configured. These are **developer previews**, not ready for public distribution.
- Add production branding, an app icon, automated testing, security review, and signing before release.
- The desktop preview opens external links in the user's normal browser. Some external authentication redirects may need additional testing.
