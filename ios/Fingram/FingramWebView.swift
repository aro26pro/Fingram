import SwiftUI
import WebKit

struct FingramWebView: UIViewRepresentable {
    private let homeURL = URL(string: "https://aro26pro.pythonanywhere.com/")!

    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func makeUIView(context: Context) -> WKWebView {
        let view = WKWebView(frame: .zero)
        view.navigationDelegate = context.coordinator
        view.allowsBackForwardNavigationGestures = true
        view.scrollView.contentInsetAdjustmentBehavior = .automatic
        view.load(URLRequest(url: homeURL))
        return view
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    final class Coordinator: NSObject, WKNavigationDelegate {
        func webView(
            _ webView: WKWebView,
            decidePolicyFor navigationAction: WKNavigationAction,
            decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
        ) {
            guard let url = navigationAction.request.url else {
                decisionHandler(.cancel)
                return
            }

            if url.scheme == "https", url.host == "aro26pro.pythonanywhere.com" {
                decisionHandler(.allow)
            } else if url.scheme == "about" {
                decisionHandler(.allow)
            } else {
                if url.scheme == "https" || url.scheme == "mailto" {
                    UIApplication.shared.open(url)
                }
                decisionHandler(.cancel)
            }
        }
    }
}
