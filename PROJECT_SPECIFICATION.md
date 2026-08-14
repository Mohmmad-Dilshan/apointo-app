# 📱 APOINTO PLATFORM - COMPLETE PROJECT SPECIFICATION & ARCHITECTURE BLUEPRINT

> **Version**: 2.0.0 (Production-Ready)  
> **Repository**: [https://github.com/Mohmmad-Dilshan/apointo-app](https://github.com/Mohmmad-Dilshan/apointo-app)  
> **Purpose**: Master Blueprint for recreating the **Apointo Platform** in any tech stack (React, Next.js, React Native, Flutter, Vue, Swift/Kotlin).

---

## 1. Executive Summary

**Apointo** is an all-in-one, ultra-modern appointment booking & local business discovery platform designed with **Apple HIG 2026 Glassmorphism** & **Android Material You** aesthetics.

It is structured into **4 distinct platform views**:
1. **Customer Mobile App** (29 screens for service discovery, interactive map, booking flow, digital QR check-in pass, rewards & account settings)
2. **Business SaaS Provider Portal** (11 views for salon/clinic owners to manage live calendars, earnings, staff rosters & client CRM)
3. **Super Admin Control Center** (3 views for platform metrics, commission revenue ledgers & support ticket resolution)
4. **Design System Inspector** (Interactive UI kit with color tokens, typography & glass components)

---

## 2. Tech Stack & Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "lucide-react": "^1.31.0"
  },
  "devDependencies": {
    "vite": "^8.2.0",
    "@vitejs/plugin-react": "^6.0.4"
  }
}
```

* **Core Language**: JavaScript / TypeScript (ES Modules)
* **Styling Paradigm**: Pure Vanilla CSS (`theme.css`) — Tailwind-free, utilizing HSL CSS variables, glassmorphism (`backdrop-filter: blur(30px)`), and custom keyframe animations.
* **Icon System**: `lucide-react` icons throughout.

---

## 3. Directory Structure

```text
apointo-app/
├── index.html                      # HTML entry point with Google Fonts (Inter)
├── package.json                    # Project configuration & dependencies
├── vite.config.js                  # Vite bundler settings
├── PROJECT_SPECIFICATION.md        # Master specification document
└── src/
    ├── App.jsx                     # Top-level state manager & platform router
    ├── main.jsx                    # React DOM renderer
    ├── components/                 # Shared UI Components
    │   ├── HeaderNav.jsx           # Top platform switcher & iOS/Android OS mode toggle
    │   ├── MobileFrame.jsx         # iPhone 16 Pro Max / Pixel 9 Pro device frame wrapper
    │   ├── Toast.jsx               # Floating glass alert popup
    │   ├── VoiceSearchModal.jsx    # AI Voice Search modal
    │   └── EmptyState.jsx          # Reusable zero-state graphics
    ├── styles/
    │   └── theme.css               # Design tokens, variables & glassmorphism utilities
    ├── data/
    │   └── sampleData.js           # Full mock data schema (Businesses, Services, Staff, Bookings)
    └── views/                      # Platform Modules
        ├── CustomerApp/            # 📱 29 Customer App Screens
        │   ├── SplashScreen.jsx
        │   ├── Onboarding.jsx
        │   ├── LocationModal.jsx
        │   ├── AuthFlow.jsx
        │   ├── HomeScreen.jsx
        │   ├── AllCategoriesScreen.jsx
        │   ├── CategoryDetailScreen.jsx
        │   ├── SearchScreen.jsx
        │   ├── ExploreScreen.jsx
        │   ├── MapViewScreen.jsx
        │   ├── BusinessProfile.jsx
        │   ├── ServiceDetailModal.jsx
        │   ├── StaffSelectionScreen.jsx
        │   ├── DateTimePicker.jsx
        │   ├── AddonsSelection.jsx
        │   ├── BookingSummary.jsx
        │   ├── PaymentScreen.jsx
        │   ├── BookingSuccess.jsx
        │   ├── BookingDetail.jsx
        │   ├── BookingsTab.jsx
        │   ├── FavoritesScreen.jsx
        │   ├── RewardsScreen.jsx
        │   ├── ReferralScreen.jsx
        │   ├── ProfileScreen.jsx
        │   ├── PersonalInfoScreen.jsx
        │   ├── NotificationPreferencesScreen.jsx
        │   ├── AddressManager.jsx
        │   ├── PaymentMethodsManager.jsx
        │   └── HelpSupportScreen.jsx
        │
        ├── BusinessDashboard/      # 🏢 11 Provider SaaS Views
        │   ├── ProviderHeader.jsx
        │   ├── ProviderSidebar.jsx
        │   ├── ProviderOverview.jsx
        │   ├── ProviderCalendar.jsx
        │   ├── ProviderAppointments.jsx
        │   ├── ProviderServices.jsx
        │   ├── ProviderStaff.jsx
        │   ├── ProviderCRM.jsx
        │   ├── ProviderPayments.jsx
        │   ├── ProviderOffers.jsx
        │   └── ProviderAnalytics.jsx
        │
        └── AdminConsole/           # ⚙️ 3 Super Admin Views
            ├── AdminUsers.jsx
            ├── AdminPayments.jsx
            └── AdminSupport.jsx
```

---

## 4. Master Data Schema (`sampleData.js`)

### A. User Profile Model
```js
export const INITIAL_USER = {
  id: "usr_9821",
  name: "Dilshan Perera",
  phone: "+91 98765 43210",
  email: "dilshan.p@example.com",
  location: "Sector 14, Gurugram",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
  points: 2450,
  membershipTier: "Gold Member",
  addresses: [
    { id: "addr_1", label: "Home", address: "Flat 402, Sunshine Heights, Sector 14, Gurugram", isDefault: true },
    { id: "addr_2", label: "Work", address: "Tech Park Block B, 4th Floor, DLF Cyber City", isDefault: false }
  ]
};
```

### B. Business / Provider Model
```js
export const BUSINESSES = [
  {
    id: "biz_1",
    name: "Urban Cut Studio",
    category: "Salon & Barbers",
    rating: 4.9,
    reviewCount: 342,
    distance: "0.8 km",
    address: "Civil Lines, Sector 14, Gurugram",
    heroImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800",
    priceRange: "₹299 – ₹899",
    nextSlot: "Today, 02:30 PM",
    verified: true,
    services: [
      {
        id: "srv_1",
        name: "Classic Haircut & Styling",
        duration: "45 mins",
        price: 329,
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600",
        description: "Precision haircut by top stylists including hair wash & scalp massage.",
        included: ["Scalp Wash", "Style Consultation", "Premium Hair Wax"]
      }
    ],
    staff: [
      { id: "stf_1", name: "Rahul Sharma", role: "Senior Barber", rating: 4.9, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" }
    ]
  }
];
```

### C. Booking Appointment Model
```js
export const INITIAL_BOOKINGS = [
  {
    id: "APT-98241",
    businessName: "Urban Cut Studio",
    serviceName: "Classic Haircut & Styling",
    staffName: "Rahul Sharma",
    date: "14 Aug 2026",
    time: "02:30 PM",
    duration: "45 mins",
    price: 329,
    totalPaid: 349,
    status: "Confirmed", // 'Confirmed' | 'Completed' | 'Cancelled'
    address: "Civil Lines, Sector 14, Gurugram",
    otp: "4892"
  }
];
```

---

## 5. Key UI & Functional Requirements by View

### 📱 A. Customer Mobile App Flow
1. **Header Navigation**: Linear gradient purple squircle logo with `<Sparkles color="#FFFFFF" />` icon mark — **NO letter A**.
2. **Category Selection (`HomeScreen.jsx` -> `CategoryDetailScreen.jsx`)**:
   - Clicking any category icon (*Salons, Dental, Doctors, Gyms*) opens `CategoryDetailScreen` filtering **ONLY** spots under that category.
   - Includes sorting pills (*Rating 4.5+*, *Nearest <2km*, *Price Low to High*, *Open Now*).
3. **All Categories Page (`AllCategoriesScreen.jsx`)**:
   - Displays all 8 categories with 3D emoji badges and venue counters.
4. **Interactive Map View (`MapViewScreen.jsx`)**:
   - Dark mode vector grid canvas.
   - Category filter pills + radius range slider (**`Within 5 km`**).
   - Animated map pins with glowing pulse ring for active marker.
   - Bottom sheet card with **Navigate** (Google Maps) and **View & Book** buttons.
5. **Boarding Pass & Booking Detail (`BookingDetail.jsx`)**:
   - **Live Queue Position Tracker**: *"Live Queue Position: #2 • Est. Wait: 12 mins • On Time"*.
   - Reception counter QR code scanner + Desk OTP pill (`Desk OTP: 4892`).
   - Action Shortcuts: **Call Reception 📞** & **Get Directions 🧭**.
   - Export Tools: **` Apple Wallet Pass`** & **`Download PDF Receipt`**.
6. **Rewards Hub (`RewardsScreen.jsx`)**:
   - 3D Gold VIP Metallic Pass card (`2,450 PTS` valued at `₹245 Instant Cashback`).
   - Reward Vouchers Store with 1-click points deduction & code copy toast.
7. **Invite & Earn (`ReferralScreen.jsx`)**:
   - Total referral cashback ledger (`₹1,500 Earned`).
   - 1-Tap **Share via WhatsApp** button generating referral links.
8. **Profile Sub-Pages (`ProfileScreen.jsx`)**:
   - `PersonalInfoScreen.jsx` (Edit name, phone, email, birth date).
   - `NotificationPreferencesScreen.jsx` (iOS-style push, SMS & WhatsApp switches).
   - `AddressManager.jsx`, `PaymentMethodsManager.jsx`, `HelpSupportScreen.jsx`.

### 🏢 B. Business SaaS Provider Portal
1. **Provider Overview**: Revenue growth stats, today's appointment timeline, top performing services.
2. **Provider Calendar**: Drag & drop slot manager for salon/clinic specialists.
3. **Provider Roster & CRM**: Staff commission splits and customer booking history.

### ⚙️ C. Super Admin Console
1. **Platform Metrics**: Total transactions, active service providers, platform commission earnings.
2. **Partner Verifications**: Queue for reviewing and approving new partner registrations.

---

## 6. How to Rebuild in Another Tech Stack

### For React Native / Expo:
1. Copy `sampleData.js` directly.
2. Replace HTML `<div>` with `<View>`, `<Text>`, `<TouchableOpacity>`, and `<ScrollView>`.
3. Use `react-native-svg` and `@expo/vector-icons` (Lucide equivalent).
4. Replace `backdrop-filter` with `@react-native-community/blur`.

### For Flutter:
1. Convert `sampleData.js` into Dart `Map<String, dynamic>` models.
2. Use `Container`, `Card`, `Container(decoration: BoxDecoration(gradient: ...))`, and `BackdropFilter(filter: ImageFilter.blur(...))`.
3. Use `flutter_lucide` package for icons.

### For Next.js (App Router):
1. Move `views/CustomerApp/` to `app/(customer)/`.
2. Move `views/BusinessDashboard/` to `app/(business)/`.
3. Use `lucide-react` and TailwindCSS or CSS Modules.

---

## 🚀 7. Verification & Build Commands

```bash
# Install dependencies
npm install

# Run development server (Local: http://localhost:5173)
npm run dev

# Production build
npx vite build
```
