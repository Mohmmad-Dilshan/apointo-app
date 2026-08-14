// Comprehensive Sample Data for Apointo Platform (Customer, Business, Admin)

export const INITIAL_USER = {
  name: "Dilshan Perera",
  firstName: "Dilshan",
  phone: "+91 98765 43210",
  email: "dilshan.p@example.com",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  points: 2450,
  membershipTier: "Gold Member",
  profileCompletion: 85,
  location: "Indiranagar, Bengaluru",
  addresses: [
    { id: "addr_1", label: "Home", address: "Flat 402, Sunshine Heights, 12th Main Rd, Indiranagar, Bengaluru", isDefault: true },
    { id: "addr_2", label: "Work", address: "Tech Park Block B, 4th Floor, Outer Ring Rd, Marathahalli, Bengaluru", isDefault: false }
  ],
  savedPaymentMethods: [
    { id: "pm_1", type: "UPI", title: "Google Pay", detail: "dilshan@okicici", isDefault: true },
    { id: "pm_2", type: "CARD", title: "HDFC Regalia Credit Card", detail: "•••• 4291", expires: "08/28", isDefault: false }
  ]
};

export const CATEGORIES = [
  { id: "haircut", name: "Haircut", icon: "Scissors", color: "#6366F1", count: 42 },
  { id: "salon", name: "Salon", icon: "Sparkles", color: "#EC4899", count: 58 },
  { id: "spa", name: "Spa", icon: "Flower2", color: "#14B8A6", count: 24 },
  { id: "gym", name: "Gym", icon: "Dumbbell", color: "#F59E0B", count: 31 },
  { id: "doctor", name: "Doctor", icon: "Stethoscope", color: "#10B981", count: 64 },
  { id: "dental", name: "Dental", icon: "Smile", color: "#3B82F6", count: 19 },
  { id: "carservice", name: "Car Service", icon: "Car", color: "#8B5CF6", count: 27 },
  { id: "homeservice", name: "Home Service", icon: "Home", color: "#EF4444", count: 50 },
  { id: "fitness", name: "Fitness", icon: "Activity", color: "#F97316", count: 35 }
];

export const BUSINESSES = [
  {
    id: "biz_1",
    name: "Urban Cut Studio",
    tagline: "Premium Men's Grooming & Styling",
    category: "Salon & Barbers",
    categoryId: "haircut",
    rating: 4.9,
    reviewCount: 342,
    distance: "0.8 km",
    address: "100 Feet Rd, Indiranagar, Bengaluru",
    priceRange: "₹299 - ₹899",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 02:30 PM",
    heroImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800"
    ],
    about: "Urban Cut Studio is Bengaluru's premier grooming salon for men. We offer bespoke haircuts, beard styling, head massage, and facial treatments performed by expert stylists with years of luxury experience.",
    cancellationPolicy: "Free cancellation up to 2 hours before appointment slot. 50% charge thereafter.",
    services: [
      {
        id: "srv_101",
        name: "Classic Haircut & Styling",
        description: "Precision haircut, scalp wash, blow dry and hair setting with premium styling products.",
        duration: "45 min",
        price: 299,
        originalPrice: 399,
        discount: "25% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400",
        included: ["Consultation", "Hair Wash", "Precision Cut", "Blow Dry", "Styling Wax"],
        addons: [
          { id: "add_1", name: "Hair Wash & Conditioning", price: 100 },
          { id: "add_2", name: "Beard Trim & Oil Styling", price: 150 },
          { id: "add_3", name: "Express Charcoal Face Scrub", price: 200 }
        ]
      },
      {
        id: "srv_102",
        name: "Haircut + Beard Crafting Combo",
        description: "Complete signature look overhaul including haircut, hot towel beard sculpting and beard oil application.",
        duration: "60 min",
        price: 499,
        originalPrice: 650,
        discount: "23% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=400",
        included: ["Haircut", "Hot Towel Beard Trim", "Beard Oil Treatment", "Face Hydration"],
        addons: [
          { id: "add_1", name: "Hair Wash & Conditioning", price: 100 },
          { id: "add_4", name: "Relaxing Scalp Massage (15m)", price: 250 }
        ]
      },
      {
        id: "srv_103",
        name: "Royal Deluxe Grooming Package",
        description: "The ultimate rejuvenation: haircut, beard trim, organic facial glow treatment, and 20 min head/shoulder massage.",
        duration: "90 min",
        price: 899,
        originalPrice: 1200,
        discount: "25% OFF",
        popular: false,
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400",
        included: ["Haircut", "Beard Styling", "Organic Glow Facial", "Head & Shoulder Massage", "Complimentary Beverage"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_1", name: "Rahul Sharma", role: "Senior Master Stylist", rating: 4.9, experience: "7 yrs", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: "stf_2", name: "Priya Verma", role: "Hair Color & Style Specialist", rating: 4.8, experience: "5 yrs", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
      { id: "stf_3", name: "Vikram Singh", role: "Beard & Grooming Sculptor", rating: 4.9, experience: "8 yrs", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: [
      { id: "rev_1", author: "Karan Mehta", rating: 5, date: "2 days ago", comment: "Rahul gave me the cleanest fade I've ever had in Bangalore. Super courteous team and hygienic environment!", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
      { id: "rev_2", author: "Aakash Roy", rating: 5, date: "1 week ago", comment: "Booked via Apointo app seamlessly. No waiting time at all. Worth every rupee!", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" }
    ]
  },
  {
    id: "biz_2",
    name: "Glow Beauty Lounge & Spa",
    tagline: "Luxury Beauty, Skin & Aromatherapy",
    category: "Beauty & Spa",
    categoryId: "spa",
    rating: 4.8,
    reviewCount: 512,
    distance: "1.4 km",
    address: "5th Block, Koramangala, Bengaluru",
    priceRange: "₹499 - ₹2,499",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 03:00 PM",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
    ],
    about: "Step into serenity at Glow Beauty Lounge. We specialize in organic facials, Swedish massages, bridal makeup, nail art, and holistic wellness therapies.",
    cancellationPolicy: "Free cancellation up to 4 hours in advance.",
    services: [
      {
        id: "srv_201",
        name: "Aroma Swedish Full Body Massage",
        description: "Deep relaxation massage using therapeutic essential oils to relieve stress and muscle stiffness.",
        duration: "60 min",
        price: 1499,
        originalPrice: 1999,
        discount: "25% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400",
        included: ["Foot Soak", "Essential Aromatherapy Oils", "Steam Shower", "Green Tea"],
        addons: [
          { id: "add_5", name: "Hot Stone Therapy Add-on", price: 300 }
        ]
      },
      {
        id: "srv_202",
        name: "Hydra-Glow Vitamin C Facial",
        description: "Advanced skin brightening treatment with hyaluronic serum & herbal face pack.",
        duration: "50 min",
        price: 999,
        originalPrice: 1400,
        discount: "28% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
        included: ["Deep Cleansing", "Micro-exfoliation", "Vitamin Serum", "Cooling Mask"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_4", name: "Ananya Deshmukh", role: "Senior Therapist", rating: 4.9, experience: "6 yrs", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: [
      { id: "rev_3", author: "Sneha Nair", rating: 5, date: "3 days ago", comment: "The Aroma Swedish Massage was divine! Highly recommend Glow Beauty Lounge.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" }
    ]
  },
  {
    id: "biz_3",
    name: "FitZone Crossfit & Gym",
    tagline: "Transform Your Body & Mind",
    category: "Gym & Fitness",
    categoryId: "gym",
    rating: 4.7,
    reviewCount: 198,
    distance: "2.1 km",
    address: "27th Main Rd, HSR Layout, Bengaluru",
    priceRange: "₹350 - ₹1,999",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 04:00 PM",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"],
    about: "State of the art functional fitness, strength conditioning, personal training and group HIIT sessions.",
    cancellationPolicy: "Cancel 1 hour before session.",
    services: [
      {
        id: "srv_301",
        name: "Personal Fitness Assessment & Workout Pass",
        description: "1-on-1 consultation with certified fitness trainer + full gym access pass.",
        duration: "60 min",
        price: 350,
        originalPrice: 500,
        discount: "30% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
        included: ["BMI & Muscle Scan", "Custom Workout Plan", "Full Gym Access", "Locker Access"],
        addons: [{ id: "add_6", name: "Post-workout Protein Shake", price: 120 }]
      }
    ],
    staff: [
      { id: "stf_5", name: "Rohan Kapoor", role: "Head Fitness Coach", rating: 4.8, experience: "9 yrs", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_4",
    name: "SmileCare Dental & Orthodontics",
    tagline: "Gentle Dental Care & Teeth Whitening",
    category: "Dental Clinic",
    categoryId: "dental",
    rating: 4.9,
    reviewCount: 284,
    distance: "1.9 km",
    address: "4th Block, Jayanagar, Bengaluru",
    priceRange: "₹499 - ₹3,500",
    verified: true,
    isOpen: true,
    nextSlot: "Tomorrow, 10:00 AM",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"],
    about: "Modern dental studio equipped with 3D digital imaging, laser whitening, and painless treatment procedures.",
    cancellationPolicy: "Free cancellation up to 3 hours prior.",
    services: [
      {
        id: "srv_401",
        name: "Comprehensive Dental Checkup & Polishing",
        description: "Complete intraoral checkup, digital X-rays, cavity detection and ultrasonic scaling.",
        duration: "45 min",
        price: 499,
        originalPrice: 800,
        discount: "37% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400",
        included: ["Consultation", "Ultrasonic Scaling", "Fluoride Treatment", "Oral Health Report"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_6", name: "Dr. Kavita Rao", role: "Senior Dentist (BDS, MDS)", rating: 4.9, experience: "12 yrs", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_5",
    name: "AutoPro Car & Bike Service",
    tagline: "Certified Multi-Brand Auto Workshop",
    category: "Car & Bike Service",
    categoryId: "carservice",
    rating: 4.6,
    reviewCount: 165,
    distance: "3.2 km",
    address: "ITPL Main Rd, Whitefield, Bengaluru",
    priceRange: "₹399 - ₹4,999",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 05:00 PM",
    heroImage: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800"],
    about: "Full vehicle servicing, foam wash, wheel alignment, oil replacement, and multi-point safety inspection.",
    cancellationPolicy: "Free cancellation anytime before pick-up.",
    services: [
      {
        id: "srv_501",
        name: "Express Foam Car Wash & Vacuuming",
        description: "High pressure exterior foam wash, body wax polish, interior vacuuming and dashboard dressing.",
        duration: "40 min",
        price: 399,
        originalPrice: 600,
        discount: "33% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400",
        included: ["Pressure Wash", "Underbody Wash", "Interior Vacuum", "Tire Polish"],
        addons: [{ id: "add_7", name: "Engine Bay Degreasing", price: 200 }]
      }
    ],
    staff: [
      { id: "stf_7", name: "Suresh Kumar", role: "Lead Automotive Technician", rating: 4.7, experience: "10 yrs", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_6",
    name: "Lifeline Multispecialty Clinic",
    tagline: "Expert Doctor Consultation & Health Checkups",
    category: "Doctor Clinic",
    categoryId: "doctor",
    rating: 4.9,
    reviewCount: 420,
    distance: "1.1 km",
    address: "12th Main Rd, Indiranagar, Bengaluru",
    priceRange: "₹500 - ₹1,500",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 03:30 PM",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"],
    about: "Lifeline Clinic offers experienced General Physicians, Dermatologists, Pediatricians, and diagnostic consultations.",
    cancellationPolicy: "Free cancellation 1 hour before appointment.",
    services: [
      {
        id: "srv_601",
        name: "General Physician Consultation",
        description: "Full health check, blood pressure & vitals checkup, prescription & medical advice.",
        duration: "30 min",
        price: 500,
        originalPrice: 700,
        discount: "28% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        included: ["Vitals Check", "Doctor Advice", "Digital Prescription"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_8", name: "Dr. Rajesh Gupta", role: "MD General Medicine", rating: 4.9, experience: "14 yrs", photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_7",
    name: "Envi Unisex Salon & Makeover",
    tagline: "Hair Styling, Facials & Party Makeover",
    category: "Salon",
    categoryId: "salon",
    rating: 4.8,
    reviewCount: 310,
    distance: "1.7 km",
    address: "80 Feet Rd, Koramangala, Bengaluru",
    priceRange: "₹399 - ₹2,999",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 04:30 PM",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"],
    about: "Envi Unisex Salon provides premium haircuts, facial glow treatments, keratin hair smoothing, and bridal styling.",
    cancellationPolicy: "Free cancellation 2 hours prior.",
    services: [
      {
        id: "srv_701",
        name: "Fruit Facial + Threading & Cleanup",
        description: "Herbal fruit glow facial treatment + eyebrows & upper lip threading.",
        duration: "50 min",
        price: 499,
        originalPrice: 800,
        discount: "37% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
        included: ["Cleansing", "Fruit Scrub", "Face Massage", "Threading"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_9", name: "Meera Kapoor", role: "Senior Makeup Artist", rating: 4.8, experience: "6 yrs", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_8",
    name: "CleanHome Expert Services",
    tagline: "Deep House Cleaning, AC & Plumbing Repair",
    category: "Home Service",
    categoryId: "homeservice",
    rating: 4.9,
    reviewCount: 540,
    distance: "0.5 km",
    address: "Indiranagar 1st Stage, Bengaluru",
    priceRange: "₹299 - ₹3,499",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 05:30 PM",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"],
    about: "Verified doorstep professionals for AC service & gas recharge, bathroom deep cleaning, plumbing and electrical work.",
    cancellationPolicy: "Free cancellation before technician dispatch.",
    services: [
      {
        id: "srv_801",
        name: "Full Home Deep Cleaning & Sanitization",
        description: "Complete room scrubbing, window cleaning, kitchen degreasing & bathroom sanitization.",
        duration: "180 min",
        price: 1499,
        originalPrice: 2200,
        discount: "31% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
        included: ["Floor Scrubbing", "Bathroom Cleaning", "Kitchen Degreasing", "Cobweb Removal"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_10", name: "Ramesh Pawar", role: "Master Home Cleaning Specialist", rating: 4.9, experience: "8 yrs", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  }
];

export const COUPONS = [
  { code: "APOINTO100", title: "Flat ₹100 OFF", description: "Valid on all bookings above ₹400", amount: 100, minOrder: 400, type: "FLAT" },
  { code: "FIRSTBOOK20", title: "20% OFF First Booking", description: "Maximum discount up to ₹150 for new users", percentage: 20, maxDiscount: 150, minOrder: 300, type: "PERCENT" },
  { code: "GLOW50", title: "Flat ₹50 OFF Spa & Beauty", description: "Applicable on Spa & Beauty services", amount: 50, minOrder: 500, type: "FLAT" }
];

export const NOTIFICATIONS = [
  { id: "n_1", type: "reminder", title: "Appointment Tomorrow ⏰", message: "Reminder: Classic Haircut at Urban Cut Studio tomorrow at 02:30 PM.", time: "10m ago", read: false },
  { id: "n_2", type: "reward", title: "+150 Points Earned! 🎉", message: "You earned 150 points for your last appointment at Glow Beauty Lounge.", time: "2h ago", read: false },
  { id: "n_3", type: "offer", title: "Special Weekend Offer 🔥", message: "Get Flat ₹100 OFF on all salon services this weekend with code APOINTO100.", time: "1d ago", read: true }
];

export const INITIAL_BOOKINGS = [
  {
    id: "APT-98241",
    businessName: "Urban Cut Studio",
    businessImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=300",
    serviceName: "Classic Haircut & Styling",
    staffName: "Rahul Sharma",
    date: "14 Aug 2026",
    time: "02:30 PM",
    duration: "45 min",
    price: 299,
    totalPaid: 329,
    status: "Confirmed",
    address: "100 Feet Rd, Indiranagar, Bengaluru",
    code: "APT-98241",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=APT-98241"
  },
  {
    id: "APT-87120",
    businessName: "Glow Beauty Lounge & Spa",
    businessImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=300",
    serviceName: "Hydra-Glow Vitamin C Facial",
    staffName: "Ananya Deshmukh",
    date: "05 Aug 2026",
    time: "04:00 PM",
    duration: "50 min",
    price: 999,
    totalPaid: 1049,
    status: "Completed",
    address: "5th Block, Koramangala, Bengaluru",
    code: "APT-87120"
  }
];

export const PROVIDER_STATS = {
  todayAppointments: 18,
  todayRevenue: 42850,
  totalCustomers: 1240,
  pendingRequests: 3,
  rating: 4.9,
  cancellationRate: "1.2%",
  popularServices: [
    { name: "Classic Haircut & Styling", bookings: 142, revenue: 42458 },
    { name: "Haircut + Beard Combo", bookings: 98, revenue: 48902 },
    { name: "Royal Deluxe Grooming", bookings: 34, revenue: 30566 }
  ],
  scheduleToday: [
    { time: "09:00 AM", customer: "Vikram R.", service: "Classic Haircut", staff: "Rahul S.", status: "Completed", paid: "₹299" },
    { time: "10:30 AM", customer: "Arjun K.", service: "Beard Crafting", staff: "Vikram S.", status: "Completed", paid: "₹199" },
    { time: "02:30 PM", customer: "Dilshan P.", service: "Classic Haircut & Styling", staff: "Rahul S.", status: "Confirmed", paid: "₹329" },
    { time: "04:00 PM", customer: "Siddharth N.", service: "Royal Deluxe Package", staff: "Priya V.", status: "Confirmed", paid: "₹899" }
  ]
};

export const ADMIN_STATS = {
  totalUsers: 48200,
  totalBusinesses: 1850,
  totalBookings: 142000,
  gmv: "₹8.4 Cr",
  commission: "12%",
  pendingVerifications: [
    { id: "v_1", name: "Velvet Spa & Wellness", category: "Spa & Massage", owner: "Ritu Sharma", city: "Mumbai", docsSubmitted: 3, date: "12 Aug 2026", status: "Pending" },
    { id: "v_2", name: "Dr. Mehta Dental Studio", category: "Dental Clinic", owner: "Dr. Alok Mehta", city: "Delhi", docsSubmitted: 4, date: "13 Aug 2026", status: "Pending" },
    { id: "v_3", name: "SpeedyWheels Auto Care", category: "Car Service", owner: "Manish Goel", city: "Bengaluru", docsSubmitted: 3, date: "13 Aug 2026", status: "Pending" }
  ]
};
