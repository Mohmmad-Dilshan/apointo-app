# 🛡️ APOINTO - PRODUCTION SECURITY, ANTI-HACKING & PERFORMANCE GUIDELINES

> **File Name**: `APP_SECURITY_AND_BEST_PRACTICES.md`  
> **Purpose**: Mandatory Security Standard, Anti-Hacking Rules, and Performance Guidelines to ensure the **Apointo App** is 100% secure, resilient, and free of "vibe-coded" vulnerabilities.

---

## 1. Executive Security Mandate (OWASP Mobile Top 10)

Any developer or AI assistant building the Apointo application **MUST** follow a **Zero-Trust Architecture**. No sensitive data, validation, or business logic must rely solely on client-side execution.

---

## 2. Anti-Hacking & App Protection Rules

### 🚫 Rule 1: No Hardcoded Secrets or API Keys
* **Vulnerability**: Storing API keys, JWT secrets, Firebase credentials, or payment keys directly in source code allows attackers to extract them via reverse engineering (`jadx` / `apktool`).
* **Enforced Solution**:
  - Store environment variables in `.env` files added to `.gitignore`.
  - Use `flutter_dotenv` or compile-time flags:
    ```bash
    flutter run --dart-define=API_URL=https://api.apointo.app --dart-define=RAZORPAY_KEY=rzp_live_xxx
    ```

---

### 🔒 Rule 2: Encrypted Local Storage (KeyStore / Keychain)
* **Vulnerability**: Saving authentication tokens, passwords, or booking details in plain text `SharedPreferences` (Android) or `NSUserDefaults` (iOS) allows malware or rooted devices to read user data.
* **Enforced Solution**:
  - **MUST** use `flutter_secure_storage` backed by **Android KeyStore** and **iOS Keychain**:
    ```dart
    import 'package:flutter_secure_storage/flutter_secure_storage.dart';

    final storage = const FlutterSecureStorage();
    // Save token
    await storage.write(key: 'auth_token', value: userJwtToken);
    // Read token
    String? token = await storage.read(key: 'auth_token');
    ```

---

### 🛡️ Rule 3: SSL/TLS Certificate Pinning (MitM Defense)
* **Vulnerability**: Attackers using proxies like Burp Suite or Charles Proxy can inspect and tamper with HTTP booking & payment traffic.
* **Enforced Solution**:
  - Enforce SSL Certificate Pinning on HTTP clients (`Dio` / `Http`):
    ```dart
    // Reject untrusted certificates or proxy intercepts
    SecurityContext context = SecurityContext(withTrustedRoots: true);
    // Pin certificate SHA-256 fingerprint
    ```

---

### 📦 Rule 4: Code Obfuscation & Anti-Decompilation
* **Vulnerability**: Unobfuscated Flutter APKs or IPAs can be decompiled into clear readable Dart code.
* **Enforced Solution**:
  - Always build production releases with Flutter code obfuscation and debug info splitting:
    ```bash
    flutter build apk --release --obfuscate --split-debug-info=build/app/outputs/symbols
    flutter build ipa --release --obfuscate --split-debug-info=build/ios/symbols
    ```
  - Enable **R8 / ProGuard** in `android/app/build.gradle`:
    ```groovy
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    ```

---

### 📲 Rule 5: Root & Jailbreak Detection
* **Vulnerability**: Rooted Android devices or Jailbroken iPhones allow memory tampering via tools like `Frida` and `Objection`.
* **Enforced Solution**:
  - Detect compromised environments before allowing payment operations:
    ```dart
    import 'package:flutter_jailbreak_detection/flutter_jailbreak_detection.dart';

    bool isJailbroken = await FlutterJailbreakDetection.jailbroken;
    bool isDeveloperMode = await FlutterJailbreakDetection.developerMode;
    if (isJailbroken) {
      // Disable sensitive payment & booking features
    }
    ```

---

### ⚡ Rule 6: Server-Side OTP & Payment Signature Verification
* **Vulnerability**: Client-side validation of OTPs (`otp == '4892'`) or payment status allows attackers to bypass payment via HTTP mocking.
* **Enforced Solution**:
  - Booking OTPs and Razorpay/Stripe payment signatures MUST be verified via server-side HMAC-SHA256 signature checking. Client-side state must strictly wait for HTTP `200 OK` from backend APIs.

---

## 3. App Performance & 120 FPS Rendering Rules

### 🚀 Rule 7: Zero Memory Leaks & Controller Disposal
* **Mandate**: Every `TextEditingController`, `ScrollController`, `AnimationController`, and Stream Subscription **MUST** be disposed in `dispose()` to prevent memory bloat and frame drops.
  ```dart
  @override
  void dispose() {
    _searchController.dispose();
    _scrollController.dispose();
    _animationController.dispose();
    super.dispose();
  }
  ```

---

### ⚡ Rule 8: Widget Re-render Optimization & Lazy Evaluation
* Use `const` constructors for all static widgets.
* Use `ListView.builder` or `GridView.builder` instead of rendering large static list arrays into memory.
* Wrap heavy animated widgets in `RepaintBoundary` so GPU repaint cycles stay isolated.

---

### 🖼️ Rule 9: Image Compression & Caching
* Never load raw high-res images (>2MB) directly into mobile memory.
* Use `cached_network_image` with WebP image format compression and explicit `memCacheWidth` / `memCacheHeight`:
  ```dart
  CachedNetworkImage(
    imageUrl: business.heroImage,
    memCacheWidth: 800,
    placeholder: (context, url) => const ShimmerSkeleton(),
    errorWidget: (context, url, error) => const Icon(Icons.error),
  )
  ```

---

## 4. Global Error Handling & Resilience

### 🚨 Rule 10: Global Error Boundary
Catch all uncaught Flutter UI & asynchronous errors gracefully so the app NEVER crashes to a black screen:

```dart
void main() {
  FlutterError.onError = (FlutterErrorDetails details) {
    FlutterError.presentError(details);
    // Log error to Crashlytics / Sentry
  };

  PlatformDispatcher.instance.onError = (error, stack) {
    // Log async error to Crashlytics / Sentry
    return true;
  };

  runApp(const MyApp());
}
```

---

## 5. Security & QA Compliance Checklist

- [x] No plain-text passwords or tokens in SharedPreferences / UserDefaults.
- [x] No hardcoded API keys in Git repository source code.
- [x] SSL Certificate Pinning configured for backend endpoints.
- [x] Code obfuscation enabled on `flutter build apk` / `flutter build ipa`.
- [x] Root & Jailbreak detection active on payment checkout screens.
- [x] All Stream and Animation controllers properly disposed in `dispose()`.
- [x] Images loaded via WebP compression and `CachedNetworkImage`.
- [x] Server-side HMAC validation for OTP check-in & payment receipts.
