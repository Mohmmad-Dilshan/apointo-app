# 📱 APOINTO FLUTTER - COMPLETE PRODUCTION SPECIFICATION & BLUEPRINT

> **Document Type**: Master Technical Requirements Document (PRD) & Architecture Specification  
> **Target Framework**: Flutter 3.x (Dart 3.x) for iOS & Android  
> **Design Language**: Apple HIG 2026 Glassmorphism + Material 3  
> **State Management Standard**: Flutter BLoC / Riverpod + Clean Architecture  
> **Repository Reference**: [https://github.com/Mohmmad-Dilshan/apointo-app](https://github.com/Mohmmad-Dilshan/apointo-app)

---

## 1. Project Overview & Product Requirements

**Apointo** is an all-in-one, multi-platform appointment booking and local service discovery application. It serves three user personas:
1. **Customers**: Search, discover, book appointments (salons, clinics, gyms, doctors), track live queues, redeem VIP rewards, and export digital boarding passes.
2. **Service Providers (Business SaaS)**: Salon owners, doctors, and fitness managers tracking live calendars, staff rosters, daily revenue, and client CRM.
3. **Super Admin**: Platform control center managing partner verifications, commission ledgers, and support tickets.

---

## 2. Recommended Flutter Project Directory Structure

```text
lib/
├── main.dart                       # App entry point with Provider/Bloc setup
├── app.dart                        # MaterialApp / CupertinoApp router
├── core/
│   ├── constants/
│   │   ├── app_colors.dart         # Theme color palette (Midnight, Indigo, Gold)
│   │   ├── app_typography.dart     # Inter font hierarchy
│   │   └── app_assets.dart         # Static image & icon assets
│   ├── theme/
│   │   ├── app_theme.dart          # Light & Dark Material 3 theme data
│   │   └── glass_decoration.dart   # Glassmorphism BackdropFilter decorations
│   ├── utils/
│   │   ├── pdf_generator.dart      # PDF receipt invoice generator
│   │   └── qr_generator.dart       # Check-in QR code helper
│   └── widgets/
│       ├── custom_button.dart      # Primary gradient pill buttons
│       ├── custom_text_field.dart  # Glass input fields
│       ├── glass_card.dart         # Translucent card container
│       ├── os_frame_wrapper.dart   # Device frame simulator (iOS vs Android)
│       └── toast_notification.dart # Top glass alert toast
├── data/
│   ├── models/
│   │   ├── user_model.dart
│   │   ├── business_model.dart
│   │   ├── service_model.dart
│   │   ├── staff_model.dart
│   │   ├── booking_model.dart
│   │   └── reward_model.dart
│   ├── mock/
│   │   └── sample_data.dart        # Mock datasets
│   └── repositories/
│       ├── booking_repository.dart
│       ├── business_repository.dart
│       └── user_repository.dart
└── features/
    ├── customer/
    │   ├── splash/
    │   ├── onboarding/
    │   ├── auth/
    │   ├── home/
    │   ├── categories/
    │   ├── category_detail/
    │   ├── search/
    │   ├── explore/
    │   ├── map_view/
    │   ├── business_profile/
    │   ├── service_detail/
    │   ├── staff_selection/
    │   ├── date_time_picker/
    │   ├── addons/
    │   ├── booking_summary/
    │   ├── payment/
    │   ├── booking_success/
    │   ├── booking_detail/
    │   ├── bookings_list/
    │   ├── favorites/
    │   ├── rewards/
    │   ├── referral/
    │   └── profile/
    │       ├── personal_info/
    │       ├── notification_preferences/
    │       ├── address_manager/
    │       ├── payment_methods/
    │       └── help_support/
    ├── business_dashboard/
    │   ├── overview/
    │   ├── calendar/
    │   ├── appointments/
    │   ├── services/
    │   ├── staff_roster/
    │   └── crm/
    └── admin_console/
        ├── partner_approval/
        ├── metrics/
        └── tickets/
```

---

## 3. Flutter Dependencies (`pubspec.yaml`)

```yaml
name: apointo
description: "Apointo - Appointment Booking & Business SaaS Platform"
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.2.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  
  # Icons & Fonts
  lucide_icons: ^0.2.0
  google_fonts: ^6.1.0
  
  # State Management
  flutter_bloc: ^8.1.3
  equatable: ^2.0.5
  
  # UI & Animations
  flutter_animate: ^4.5.0
  glassmorphism: ^3.0.0
  cached_network_image: ^3.3.1
  flutter_svg: ^2.0.10.1
  
  # Maps & Location
  google_maps_flutter: ^2.5.3
  geolocator: ^10.1.0
  
  # Features & Utilities
  qr_flutter: ^4.1.0
  pdf: ^3.10.7
  printing: ^5.12.0
  share_plus: ^7.2.2
  url_launcher: ^6.2.5
  intl: ^0.19.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/images/
    - assets/icons/
```

---

## 4. Complete Dart Data Models

### A. User Model (`user_model.dart`)
```dart
class UserModel {
  final String id;
  final String name;
  final String phone;
  final String email;
  final String location;
  final String avatar;
  final int points;
  final String membershipTier;
  final List<AddressModel> addresses;

  UserModel({
    required this.id,
    required this.name,
    required this.phone,
    required this.email,
    required this.location,
    required this.avatar,
    required this.points,
    required this.membershipTier,
    required this.addresses,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
    id: json['id'],
    name: json['name'],
    phone: json['phone'],
    email: json['email'],
    location: json['location'],
    avatar: json['avatar'],
    points: json['points'],
    membershipTier: json['membershipTier'],
    addresses: (json['addresses'] as List).map((i) => AddressModel.fromJson(i)).toList(),
  );

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'phone': phone,
    'email': email,
    'location': location,
    'avatar': avatar,
    'points': points,
    'membershipTier': membershipTier,
    'addresses': addresses.map((e) => e.toJson()).toList(),
  };
}

class AddressModel {
  final String id;
  final String label;
  final String address;
  final bool isDefault;

  AddressModel({
    required this.id,
    required this.label,
    required this.address,
    required this.isDefault,
  });

  factory AddressModel.fromJson(Map<String, dynamic> json) => AddressModel(
    id: json['id'],
    label: json['label'],
    address: json['address'],
    isDefault: json['isDefault'],
  );

  Map<String, dynamic> toJson() => {
    'id': id,
    'label': label,
    'address': address,
    'isDefault': isDefault,
  };
}
```

### B. Business / Provider Model (`business_model.dart`)
```dart
class BusinessModel {
  final String id;
  final String name;
  final String category;
  final double rating;
  final int reviewCount;
  final String distance;
  final String address;
  final String heroImage;
  final String priceRange;
  final String nextSlot;
  final bool verified;
  final List<ServiceModel> services;
  final List<StaffModel> staff;

  BusinessModel({
    required this.id,
    required this.name,
    required this.category,
    required this.rating,
    required this.reviewCount,
    required this.distance,
    required this.address,
    required this.heroImage,
    required this.priceRange,
    required this.nextSlot,
    required this.verified,
    required this.services,
    required this.staff,
  });

  factory BusinessModel.fromJson(Map<String, dynamic> json) => BusinessModel(
    id: json['id'],
    name: json['name'],
    category: json['category'],
    rating: (json['rating'] as num).toDouble(),
    reviewCount: json['reviewCount'],
    distance: json['distance'],
    address: json['address'],
    heroImage: json['heroImage'],
    priceRange: json['priceRange'],
    nextSlot: json['nextSlot'],
    verified: json['verified'],
    services: (json['services'] as List).map((i) => ServiceModel.fromJson(i)).toList(),
    staff: (json['staff'] as List).map((i) => StaffModel.fromJson(i)).toList(),
  );
}

class ServiceModel {
  final String id;
  final String name;
  final String duration;
  final double price;
  final String image;
  final String description;
  final List<String> included;

  ServiceModel({
    required this.id,
    required this.name,
    required this.duration,
    required this.price,
    required this.image,
    required this.description,
    required this.included,
  });

  factory ServiceModel.fromJson(Map<String, dynamic> json) => ServiceModel(
    id: json['id'],
    name: json['name'],
    duration: json['duration'],
    price: (json['price'] as num).toDouble(),
    image: json['image'],
    description: json['description'],
    included: List<String>.from(json['included']),
  );
}

class StaffModel {
  final String id;
  final String name;
  final String role;
  final double rating;
  final String avatar;

  StaffModel({
    required this.id,
    required this.name,
    required this.role,
    required this.rating,
    required this.avatar,
  });

  factory StaffModel.fromJson(Map<String, dynamic> json) => StaffModel(
    id: json['id'],
    name: json['name'],
    role: json['role'],
    rating: (json['rating'] as num).toDouble(),
    avatar: json['avatar'],
  );
}
```

### C. Booking Model (`booking_model.dart`)
```dart
class BookingModel {
  final String id;
  final String businessName;
  final String serviceName;
  final String staffName;
  final String date;
  final String time;
  final String duration;
  final double price;
  final double totalPaid;
  final String status; // 'Confirmed' | 'Completed' | 'Cancelled'
  final String address;
  final String otp;

  BookingModel({
    required this.id,
    required this.businessName,
    required this.serviceName,
    required this.staffName,
    required this.date,
    required this.time,
    required this.duration,
    required this.price,
    required this.totalPaid,
    required this.status,
    required this.address,
    required this.otp,
  });

  factory BookingModel.fromJson(Map<String, dynamic> json) => BookingModel(
    id: json['id'],
    businessName: json['businessName'],
    serviceName: json['serviceName'],
    staffName: json['staffName'],
    date: json['date'],
    time: json['time'],
    duration: json['duration'],
    price: (json['price'] as num).toDouble(),
    totalPaid: (json['totalPaid'] as num).toDouble(),
    status: json['status'],
    address: json['address'],
    otp: json['otp'],
  );
}
```

---

## 5. Flutter Design System Tokens (`app_colors.dart` & `app_theme.dart`)

```dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppColors {
  // Midnight Gradients
  static const Color midnightBackground = Color(0xFF0F172A);
  static const Color midnightCardHeader = Color(0xFF1E1B4B);
  static const Color primaryIndigo = Color(0xFF4F46E5);
  static const Color primaryIndigoLight = Color(0xFF6366F1);
  
  // Accents
  static const Color goldAccent = Color(0xFFF59E0B);
  static const Color emeraldSuccess = Color(0xFF10B981);
  static const Color roseDanger = Color(0xFFF43F5E);
  
  // Surfaces & Backgrounds
  static const Color surfaceBackground = Color(0xFFF8FAFC);
  static const Color cardBackground = Color(0xFFFFFFFF);
  static const Color textPrimary = Color(0xFF0F172A);
  static const Color textSecondary = Color(0xFF64748B);
  static const Color textMuted = Color(0xFF94A3B8);
  static const Color borderLight = Color(0xFFE2E8F0);
}

class AppTypography {
  static TextStyle get titleLarge => GoogleFonts.inter(
    fontSize: 22,
    fontWeight: FontWeight.w800,
    color: AppColors.textPrimary,
    letterSpacing: -0.5,
  );

  static TextStyle get bodyMedium => GoogleFonts.inter(
    fontSize: 14,
    fontWeight: FontWeight.w500,
    color: AppColors.textSecondary,
  );

  static TextStyle get badgeText => GoogleFonts.inter(
    fontSize: 12,
    fontWeight: FontWeight.w800,
  );
}
```

---

## 6. Glassmorphism Widget Template (`glass_card.dart`)

```dart
import 'dart:ui';
import 'package:flutter/material.dart';

class AppGlassCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;
  final double borderRadius;
  final Color borderColor;

  const AppGlassCard({
    Key? key,
    required this.child,
    this.padding,
    this.borderRadius = 24.0,
    this.borderColor = const Color(0x33FFFFFF),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(borderRadius),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 20.0, sigmaY: 20.0),
        child: Container(
          padding: padding ?? const EdgeInsets.all(20.0),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.12),
            borderRadius: BorderRadius.circular(borderRadius),
            border: Border.all(color: borderColor, width: 1.0),
          ),
          child: child,
        ),
      ),
    );
  }
}
```

---

## 7. Detailed Screen Specifications & Requirements

### 📱 Customer Mobile App (29 Screens)

1. **`SplashScreen`**:
   - Logo box with `<Sparkles>` icon mark.
   - Smooth fade-in transition to `OnboardingScreen`.

2. **`OnboardingScreen`**:
   - 3-slide carousel explaining Instant Booking, Certified Specialists, and VIP Cashback.
   - **Get Started** button leading to `LocationModal`.

3. **`LocationModal`**:
   - GPS Auto-Detect button + City list selector (*Gurugram, New Delhi, Bengaluru, Mumbai*).

4. **`AuthScreen`**:
   - **Step 1**: Mobile phone input with `🇮🇳 +91` pill + **Continue** button + Google / Apple 1-tap sign in.
   - **Step 2**: 6-digit OTP verification box grid + Resend timer.
   - **Step 3**: Name & Email profile completion form.

5. **`HomeScreen`**:
   - Top Header bar: Location selector, Notification bell, Search trigger.
   - Midnight Banner: Promo carousel (*50% OFF Hair Spa & Scaling*).
   - Category Icons: 4 main grid icons (*Salons, Dental, Doctors, Gyms*) + **View All Categories** button.
   - Trending Businesses Horizontal Carousel.
   - Brand Trust Footer with **`<Sparkles>` icon mark** — **NO letter A**.

6. **`AllCategoriesScreen`**:
   - Full 8 category grid with 3D emojis (*Salons ✂️, Dental 🦷, Doctors 🩺, Fitness 🏋️, Spa 💆, Eye Care 👁️, Dermatology 🧴, Ayurveda 🌿*).

7. **`CategoryDetailScreen`**:
   - Strict filtering logic showing **ONLY** businesses matching the selected category.
   - Multi-sort bar (*Rating 4.5+*, *Distance <2km*, *Price Low-High*, *Open Now*).

8. **`MapViewScreen`**:
   - Dark mode vector grid map canvas.
   - Floating radius range selector (**`Within 5 km`**, **`10 km`**, **`25 km`**).
   - Category filter pills.
   - Interactive map pin markers with glowing pulse ring on active marker.
   - Bottom sheet card with **Navigate (Google Maps)** & **View & Book** buttons.

9. **`BusinessProfileScreen`**:
   - Hero cover image carousel + Verified Partner Shield badge.
   - Services list with Expandable Accordion & **Select Service** button.
   - Specialist staff roster preview.
   - Customer Reviews & Ratings breakdown.

10. **`ServiceDetailSheet`**:
    - Apple iOS Bottom Sheet Handlebar (`width: 40px, height: 5px`).
    - Service duration pill (*`30 min • Urban Cut Studio`*).
    - Floating badge (*`⚡ Instant Confirmation`*).
    - What's Included grid cards (*Vitals & Consultation, Doctor Medical Advice, Digital Prescription, Free Follow-up*).
    - Service fee + **Choose Staff >** button.

11. **`StaffSelectionScreen`**:
    - List of available specialists with avatars, ratings, and roles.

12. **`DateTimePickerScreen`**:
    - Calendar date picker + Morning, Afternoon, Evening slot grid.

13. **`AddonsSelectionScreen`**:
    - Optional add-on service packages with prices & checkboxes.

14. **`BookingSummaryScreen`**:
    - Itemized price breakdown (Service + Taxes + Platform Fee ₹20 - Coupon Discount).
    - Coupon code input box.
    - **Proceed to Payment** button.

15. **`PaymentScreen`**:
    - Instant UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, NetBanking & Cash at Salon options.

16. **`BookingSuccessScreen`**:
    - Animated green checkmark badge + Booking ID + Desk OTP pill.

17. **`BookingDetailScreen`**:
    - **Live Queue Position Tracker**: *"Live Queue Position: #2 • Est. Wait: 12 mins • On Time"*.
    - Counter check-in pass card with QR code scanner + Desk OTP (`4892`).
    - Venue Shortcuts: **Call Reception 📞** & **Get Directions 🧭**.
    - Export Buttons: **` Apple Wallet Pass`** & **`Download PDF Receipt`** (using `pdf` & `printing` packages).

18. **`BookingsTabScreen`**:
    - Segmented Apple Pill Tabs: **Upcoming (1)** | **Completed (1)** | **Cancelled (0)**.
    - Provider thumbnail, OTP badge, Navigate button & View Details trigger.

19. **`FavoritesScreen`**:
    - Bookmarked salons & clinics list with **Book Slot** CTA button.

20. **`RewardsScreen`**:
    - 3D Gold VIP Pass card (`2,450 PTS` worth `₹245 Cash`).
    - Progress bar to Platinum VIP (`550 pts remaining`).
    - Reward Vouchers Store with 1-click points deduction & code copy toast.

21. **`ReferralScreen`**:
    - Total referral cashback ledger (`₹1,500 Earned`).
    - **Share via WhatsApp** button generating personalized invite links.
    - Referred Friends Activity list.

22. **`ProfileScreen` & Sub-pages**:
    - `PersonalInfoScreen`: Edit name, email, phone & birth date.
    - `NotificationPreferencesScreen`: iOS-style toggle switches for push, SMS & WhatsApp alerts.
    - `AddressManagerScreen`: Saved Home, Work, and new addresses.
    - `PaymentMethodsScreen`: Saved UPI IDs & credit cards.
    - `HelpSupportScreen`: FAQs, live chat & support ticket form.

---

### 🏢 B. Business SaaS Provider Portal (11 Views)

1. **`ProviderOverview`**: Metrics for Today's Appointments, Today's Revenue, Total Customers & Rating. Live appointment timeline stream + Top performing services progress bars.
2. **`ProviderCalendar`**: Drag & drop slot scheduling grid.
3. **`ProviderAppointments`**: Table of bookings with Status filters & Confirm/Complete actions.
4. **`ProviderServices`**: Add/edit service menu, prices, and durations.
5. **`ProviderStaff`**: Specialist roster & commission split settings.
6. **`ProviderCRM`**: Client directory with booking history & VIP tags.
7. **`ProviderPayments`**: Bank transfer logs & daily payouts.
8. **`ProviderOffers`**: Coupon codes & marketing campaign manager.
9. **`ProviderAnalytics`**: Revenue charts & peak hour demand graphs.

---

### ⚙️ C. Super Admin Console (3 Views)

1. **`AdminUsers`**: Directory of all registered customers & verified partner businesses.
2. **`AdminPayments`**: Platform transaction logs & 10% commission revenue ledger.
3. **`AdminSupport`**: Customer care tickets & dispute resolution.

---

## 8. Step-by-Step Development Roadmap

1. **Phase 1: Project Initialization**: Create Flutter project, install `pubspec.yaml` packages, setup `AppColors`, `AppTypography`, and `AppGlassCard` design system widgets.
2. **Phase 2: Data Models & Repositories**: Create `UserModel`, `BusinessModel`, `BookingModel` Dart classes with `fromJson` / `toJson` constructors.
3. **Phase 3: Customer App Implementation**: Build `HomeScreen`, `CategoryDetailScreen`, `MapViewScreen`, `BookingDetailScreen` with PDF receipt generation & QR code rendering.
4. **Phase 4: Business SaaS & Admin Console**: Implement provider overview metrics, calendar slot manager, and admin verification queue.
5. **Phase 5: Testing & Release**: Verify on physical iOS iPhone & Android device simulators.
