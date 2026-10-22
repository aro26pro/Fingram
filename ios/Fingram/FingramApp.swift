import SwiftUI

@main
struct FingramApp: App {
    var body: some Scene {
        WindowGroup {
            FingramWebView()
                .ignoresSafeArea(edges: .bottom)
        }
    }
}
