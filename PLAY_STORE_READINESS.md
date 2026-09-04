# Fingram — Google Play readiness

This Android project targets Android 16 / API 36, which is the current Google Play target requirement for new apps and updates starting August 31, 2026.

Before release:
- Replace `START_URL` with Fingram's real HTTPS Cloud Run URL.
- Replace placeholder developer/contact information in the privacy policy and Terms of Use.
- Host the privacy policy at a stable public HTTPS URL and add it to Play Console.
- Complete the Play Console Data safety and Data deletion forms accurately.
- Keep in-app account deletion and the external deletion web resource working.
- Keep UGC Terms of Use, reporting, blocking, and ongoing moderation operational.
- Complete content rating and target-audience declarations honestly.
- Create a private release signing key and upload a signed Android App Bundle (AAB), not an unsigned APK.
- Test through Play Console internal testing before production.
- Provide real store screenshots, app icon, short description, full description, support contact, and privacy policy.

Google Play approval cannot be guaranteed by source code alone; policy declarations, moderation operations, store listing, testing, and developer-account requirements also matter.
