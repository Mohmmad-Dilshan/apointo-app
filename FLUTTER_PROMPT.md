# 🚀 APOINTO FLUTTER - MASTER AI DEVELOPMENT PROMPT & INSTRUCTION FILE

> **File Name**: `FLUTTER_PROMPT.md`  
> **How to Use**: Copy and paste the entire prompt box below into any AI Coding Assistant (Antigravity, Claude 3.5 Sonnet, ChatGPT GPT-4o, Cursor, GitHub Copilot) to generate the complete Flutter codebase from scratch!

---

```markdown
<SYSTEM_PROMPT>
You are an Elite Senior Flutter & Dart Software Architect and UI/UX Designer specializing in cross-platform mobile apps for iOS and Android. You build production-ready, high-performance Flutter applications following Clean Architecture, BLoC/Riverpod state management, and Apple HIG 2026 Glassmorphism aesthetics.

Your objective is to build the complete **Apointo App** — a multi-platform appointment booking & business SaaS application — from scratch.
</SYSTEM_PROMPT>

<PROJECT_CONTEXT>
App Name: Apointo (Tagline: "Discover. Book. Go.")
Repository Reference: https://github.com/Mohmmad-Dilshan/apointo-app

Apointo is an appointment booking platform for Salons, Dental Clinics, Doctors, Fitness Gyms, and Spas. It includes 4 main platform modes:
1. Customer Mobile App (29 screens for search, interactive map, booking, digital boarding pass, QR check-in, rewards & profile sub-pages)
2. Business SaaS Provider Portal (11 views for salon/clinic owners to manage live calendars, earnings, staff rosters, and CRM)
3. Super Admin Console (3 views for partner verifications, commission ledgers, and support tickets)
4. Design System Inspector (Interactive UI kit)
</PROJECT_CONTEXT>

<DESIGN_SYSTEM_SPECIFICATIONS>
Theme & Aesthetics: Apple HIG 2026 Glassmorphism + Material 3
Font Family: Google Fonts 'Inter'
Color Palette:
  - Dark Midnight Background: #0F172A
  - Deep Midnight Header: #1E1B4B
  - Primary Indigo Accent: #4F46E5
  - Primary Indigo Light: #6366F1
  - Gold VIP Accent: #F59E0B
  - Emerald Success: #10B981
  - Rose Danger: #F43F5E
  - Surface Background: #F8FAFC
  - Card Background: #FFFFFF
  - Border Light: #E2E8F0

Glassmorphism Rule: Use BackdropFilter(filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20)) with 12% translucent white container and 1px border.
Logo Rule: Always use linear-gradient purple/indigo squircle container with <Sparkles color="#FFFFFF" /> icon mark. NEVER use the letter 'A'.
</DESIGN_SYSTEM_SPECIFICATIONS>

<FLUTTER_PUBSPEC_DEPENDENCIES>
Add the following packages in pubspec.yaml:
- lucide_icons: ^0.2.0
- google_fonts: ^6.1.0
- flutter_bloc: ^8.1.3
- equatable: ^2.0.5
- flutter_animate: ^4.5.0
- glassmorphism: ^3.0.0
- cached_network_image: ^3.3.1
- google_maps_flutter: ^2.5.3
- geolocator: ^10.1.0
- qr_flutter: ^4.1.0
- pdf: ^3.10.7
- printing: ^5.12.0
- share_plus: ^7.2.2
- url_launcher: ^6.2.5
</FLUTTER_PUBSPEC_DEPENDENCIES>

<DATA_MODELS_SPECIFICATION>
Create Dart models with toJson/fromJson:
1. UserModel: id, name, phone, email, location, avatar, points, membershipTier, addresses
2. AddressModel: id, label, address, isDefault
3. BusinessModel: id, name, category, rating, reviewCount, distance, address, heroImage, priceRange, nextSlot, verified, services, staff
4. ServiceModel: id, name, duration, price, image, description, included
5. StaffModel: id, name, role, rating, avatar
6. BookingModel: id, businessName, serviceName, staffName, date, time, duration, price, totalPaid, status, address, otp
</DATA_MODELS_SPECIFICATION>

<STEP_BY_STEP_EXECUTION_INSTRUCTIONS>
Please generate complete, working Dart code for each of the following steps:

STEP 1: Core Design System Setup
- Create lib/core/constants/app_colors.dart
- Create lib/core/constants/app_typography.dart
- Create lib/core/theme/glass_card.dart (Reusable BackdropFilter glass container widget)

STEP 2: Data Layer Setup
- Create Dart model files in lib/data/models/
- Create lib/data/mock/sample_data.dart with mock datasets for Salons, Clinics, Doctors, Bookings, and Rewards.

STEP 3: Customer Mobile App Screens (lib/features/customer/)
Generate code for all screens:
1. SplashScreen & OnboardingScreen (3-slide carousel)
2. LocationModal (GPS auto-detect + city picker)
3. AuthScreen (Phone number input + 6-Digit OTP verification + Profile form)
4. HomeScreen (Location bar, Midnight promo banner, 4 category icons + View All button, Trending spots, Brand trust footer with Sparkles logo)
5. AllCategoriesScreen (Full 8 category grid with 3D emojis)
6. CategoryDetailScreen (Strict category filter list + Multi-sort bar)
7. SearchScreen (Instant search & recent history)
8. ExploreScreen (Nearby discovery & trending spots)
9. MapViewScreen (Dark mode vector grid canvas, radius range slider "Within 5 km", category filter pills, animated pins with glowing pulse ring, bottom sheet card with Navigate & Book buttons)
10. BusinessProfileScreen (Hero carousel, Services accordion, Staff roster, Reviews)
11. ServiceDetailSheet (iOS sheet handlebar 40x5mm, duration pill, Instant Confirmation tag, What's Included grid cards, Choose Staff button)
12. StaffSelectionScreen (Specialist roster with ratings)
13. DateTimePickerScreen (Calendar date picker + Morning/Afternoon slot grid)
14. AddonsSelectionScreen (Add-on service checkboxes)
15. BookingSummaryScreen (Itemized bill, coupon box, checkout)
16. PaymentScreen (UPI, Credit Cards, NetBanking, Cash at Salon)
17. BookingSuccessScreen (Green checkmark, Booking ID, Desk OTP)
18. BookingDetailScreen (2026 Boarding Pass with Live Queue Position #2, 12 mins wait, QR scanner, Desk OTP 4892, Call Reception & Get Directions buttons, PDF Receipt Download, Apple Wallet Pass Export)
19. BookingsTabScreen (Segmented Apple pills: Upcoming 1, Completed 1, Cancelled 0)
20. FavoritesScreen (Bookmarked spots with Book Slot CTA)
21. RewardsScreen (3D Gold VIP card 2,450 PTS, progress bar to Platinum, Reward Vouchers Store with 1-click points deduction)
22. ReferralScreen (Invite & Earn ₹500, total cashback ledger ₹1,500, WhatsApp Share button generating ref links, Referred Friends activity list)
23. ProfileScreen & Sub-pages:
    - PersonalInfoScreen (Edit name, phone, email, birth date)
    - NotificationPreferencesScreen (iOS-style push, SMS & WhatsApp switches)
    - AddressManagerScreen (Saved Home/Work addresses)
    - PaymentMethodsScreen (Saved UPI & Credit Cards)
    - HelpSupportScreen (FAQs, live chat, support tickets)

STEP 4: Business SaaS Provider Portal (lib/features/business_dashboard/)
Generate code for 11 views:
- Overview (Today's appointments, revenue charts, timeline stream)
- Calendar (Drag & drop slot manager)
- Appointments (Status table & actions)
- Services, Staff Roster, Client CRM, Payouts, Promo Offers, Analytics

STEP 5: Super Admin Console (lib/features/admin_console/)
Generate code for 3 views:
- Partner verification queue, Platform metrics, Support tickets.

Execute all steps cleanly without skipping any UI details or logic!
```

---

## 💡 How to Use This Prompt File

1. Open **`FLUTTER_PROMPT.md`**.
2. Copy the markdown box above starting from `<SYSTEM_PROMPT>` to `Execute all steps cleanly...`.
3. Paste it directly into your AI coding tool (Antigravity, Claude, ChatGPT, or Cursor).
4. Watch the AI generate your full Flutter codebase for iOS and Android automatically!
