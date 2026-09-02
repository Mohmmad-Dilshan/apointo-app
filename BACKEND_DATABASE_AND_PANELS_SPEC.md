# 🗄️ APOINTO - BACKEND, DATABASE & MULTI-TENANT PANELS SPECIFICATION

> **File Name**: `BACKEND_DATABASE_AND_PANELS_SPEC.md`  
> **Purpose**: Complete Architecture Blueprint for Database Schemas, Multi-Tenant RBAC Authentication, Business Partner Dashboard, Super Admin Portal, and REST/GraphQL API Endpoints.

---

## 1. System Architecture Overview

Apointo operates as a **Multi-Tenant Platform** where three distinct user roles interact with a centralized backend database:

```text
               ┌─────────────────────────────────────────┐
               │    Central PostgreSQL / Supabase DB     │
               └────────────────────┬────────────────────┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          ▼                         ▼                         ▼
┌───────────────────┐     ┌───────────────────┐     ┌───────────────────┐
│   Customer App    │     │   Business SaaS   │     │   Admin Console   │
│  (iOS & Android)  │     │ (Partner Portal)  │     │  (Super Admin)    │
│ Role: 'customer'  │     │ Role: 'provider'  │     │  Role: 'admin'    │
└───────────────────┘     └───────────────────┘     └───────────────────┘
```

---

## 2. Multi-Tenant Role-Based Access Control (RBAC)

### 🔑 User Roles & Permissions

1. **`ROLE_CUSTOMER`**:
   - Access: Customer Mobile App (`iOS` & `Android`).
   - Authentication: Phone OTP / Google OAuth / Apple Sign In.
   - Permissions: Search businesses, view map pins, book slots, view digital boarding passes, earn/redeem points.

2. **`ROLE_PROVIDER` (Business Partner)**:
   - Access: Business SaaS Dashboard (`/business/login`).
   - Authentication: Email + Password + 2FA / Phone OTP.
   - Permissions: Manage live calendar slots, add/edit service menu & prices, assign staff roster, view earnings & request payouts.

3. **`ROLE_ADMIN` (Super Admin)**:
   - Access: Super Admin Control Center (`/admin/login`).
   - Authentication: Hardware Security Key / Admin Email + TOTP 2FA.
   - Permissions: Approve/Reject partner onboarding applications, monitor 10% platform commission revenue, suspend abusive accounts, resolve support tickets.

---

## 3. Production Database Schema (PostgreSQL DDL)

```sql
-- 1. USERS TABLE (Multi-Tenant Authentication)
CREATE TYPE user_role AS ENUM ('customer', 'provider', 'admin');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    role user_role NOT NULL DEFAULT 'customer',
    full_name VARCHAR(100) NOT NULL,
    avatar_url TEXT,
    points_balance INT DEFAULT 0,
    membership_tier VARCHAR(50) DEFAULT 'Gold Member',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. SAVED ADDRESSES TABLE
CREATE TABLE addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    label VARCHAR(50) NOT NULL, -- 'Home', 'Work'
    full_address TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_default BOOLEAN DEFAULT FALSE
);

-- 3. BUSINESSES / PROVIDERS TABLE
CREATE TYPE partner_verification_status AS ENUM ('pending', 'approved', 'rejected');

CREATE TABLE businesses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'Salon', 'Dental', 'Doctor', 'Gym', 'Spa'
    address TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    hero_image_url TEXT NOT NULL,
    price_range VARCHAR(50) NOT NULL, -- e.g., '₹299 – ₹899'
    rating DECIMAL(3, 2) DEFAULT 5.00,
    review_count INT DEFAULT 0,
    verification_status partner_verification_status DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. SERVICES TABLE
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    duration_minutes INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    description TEXT,
    included_features JSONB -- Array of features e.g. ["Scalp Wash", "Style Consultation"]
);

-- 5. STAFF SPECIALISTS TABLE
CREATE TABLE staff (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 5.00,
    avatar_url TEXT,
    working_hours JSONB -- e.g., {"monday": {"start": "09:00", "end": "19:00"}}
);

-- 6. BOOKING APPOINTMENTS TABLE
CREATE TYPE booking_status AS ENUM ('confirmed', 'completed', 'cancelled');

CREATE TABLE bookings (
    id VARCHAR(30) PRIMARY KEY, -- e.g., 'APT-98241'
    customer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    service_id UUID REFERENCES services(id),
    staff_id UUID REFERENCES staff(id),
    appointment_date DATE NOT NULL,
    time_slot VARCHAR(20) NOT NULL, -- e.g., '02:30 PM'
    total_price DECIMAL(10, 2) NOT NULL,
    total_paid DECIMAL(10, 2) NOT NULL,
    status booking_status DEFAULT 'confirmed',
    checkin_otp VARCHAR(6) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. REWARD VOUCHERS STORE TABLE
CREATE TABLE reward_vouchers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(150) NOT NULL,
    cost_points INT NOT NULL,
    coupon_code VARCHAR(50) UNIQUE NOT NULL,
    discount_amount DECIMAL(10, 2) NOT NULL,
    description TEXT
);

-- 8. PLATFORM COMMISSIONS & PAYOUTS LEDGER
CREATE TABLE payouts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    gross_earnings DECIMAL(12, 2) NOT NULL,
    platform_commission_10_percent DECIMAL(12, 2) NOT NULL,
    net_payout DECIMAL(12, 2) NOT NULL,
    payout_status VARCHAR(50) DEFAULT 'processed',
    processed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. RESTful API Endpoints Specification

### 🔐 Authentication APIs

- `POST /api/v1/auth/send-otp` -> Send 6-digit SMS OTP to customer phone.
- `POST /api/v1/auth/verify-otp` -> Verify OTP, return JWT access & refresh tokens.
- `POST /api/v1/auth/partner-login` -> Business Partner email/password login.
- `POST /api/v1/auth/admin-login` -> Super Admin 2FA login.

### 📱 Customer Mobile App APIs

- `GET /api/v1/businesses` -> Search & filter businesses by category, rating & location.
- `GET /api/v1/businesses/map` -> Get map pins within specified radius (e.g. `radius=5km`).
- `GET /api/v1/businesses/:id` -> Get business profile, service menu & specialists.
- `POST /api/v1/bookings` -> Create new booking & generate check-in OTP/QR token.
- `GET /api/v1/bookings/my-appointments` -> Fetch user's upcoming, completed & cancelled appointments.
- `POST /api/v1/rewards/redeem` -> Redeem points for voucher coupon code.

### 🏢 Business SaaS Partner Dashboard APIs

- `GET /api/v1/provider/overview` -> Get today's appointment count, revenue charts & timeline stream.
- `GET /api/v1/provider/calendar` -> Get drag-and-drop slot calendar grid.
- `POST /api/v1/provider/services` -> Add/edit service menu item.
- `GET /api/v1/provider/payouts` -> Fetch bank transfer payouts & commission breakdown.

### ⚙️ Super Admin Console APIs

- `GET /api/v1/admin/pending-partners` -> List partner verification requests.
- `POST /api/v1/admin/approve-partner/:id` -> Approve partner business for listing on Customer App.
- `GET /api/v1/admin/revenue` -> Get 10% platform commission revenue metrics.

---

## 5. WebSockets & Real-Time Queue Updates

Use WebSockets / Socket.io for live real-time synchronization:

- **`event: queue_update`**: Broadcast live queue position changes (_"Your position is now #2, est. 12 mins wait"_).
- **`event: new_booking_alert`**: Send instant notification sound to Provider SaaS Dashboard when a customer books a slot.

---

## 6. Recommended Cloud Infrastructure & Deployment

```text
┌─────────────────────────────────────────────────────────────┐
│                    Cloudflare CDN & WAF                     │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼
──────────────────────────────┐
│        API Gateway (Kong / NGINX Reverse Proxy)             │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│      Dockerized Backend Microservices (Node.js / Go)        │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
┌──────────────▼──────────────┐┌──────────────▼──────────────┐
│ PostgreSQL (Supabase / AWS) ││   Redis Cache (Slot Lock)   │
└─────────────────────────────┘└─────────────────────────────┘
```

- **Redis Cache**: Used for 1-second slot locking during checkout to prevent double-booking.
- **Storage**: Amazon S3 / Google Cloud Storage for compressed WebP hero images & user avatars.
