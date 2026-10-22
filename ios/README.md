# Fingram iPhone/iPad preview

This is a SwiftUI + WKWebView starter for iOS and iPadOS. It displays the existing hosted Fingram website at https://aro26pro.pythonanywhere.com/.

## Development

On a Mac with Xcode installed:

1. Install XcodeGen (`brew install xcodegen`).
2. From `ios/`, run `xcodegen generate`.
3. Open `Fingram.xcodeproj` and run the `Fingram` scheme in an iPhone or iPad simulator.

The GitHub Actions workflow **Fingram iOS Simulator Preview** can compile this starter on a hosted Mac. Its uploaded app is for a simulator **only**. It cannot be installed as a normal iPhone app.

## Before an App Store or device release

- Add app icon and launch-screen branding.
- Test account registration, login, uploads, and media permissions in Safari/WKWebView.
- Configure Apple signing and provisioning with a valid Apple Developer team.
- Prepare privacy disclosures and app review materials.
- Fix backend email delivery: this preview uses the same server as the website.

Publishing or installing to a real iPhone is a separate process from compiling for the simulator.
