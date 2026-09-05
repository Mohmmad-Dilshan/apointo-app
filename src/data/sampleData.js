// Comprehensive Sample Data for Apo Platform (Customer, Business, Admin)

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
  { id: "haircut", name: "Haircut", emoji: "✂️", icon: "Scissors", color: "#6366F1", count: 42 },
  { id: "salon", name: "Salon", emoji: "✨", icon: "Sparkles", color: "#EC4899", count: 58 },
  { id: "spa", name: "Spa", emoji: "🌿", icon: "Flower2", color: "#14B8A6", count: 24 },
  { id: "hotel", name: "Hotels & Stays", emoji: "🏨", icon: "Hotel", color: "#4F46E5", count: 38 },
  { id: "dining", name: "Dining & Lounges", emoji: "🍽️", icon: "Utensils", color: "#F59E0B", count: 46 },
  { id: "gym", name: "Gym", emoji: "🏋️", icon: "Dumbbell", color: "#F59E0B", count: 31 },
  { id: "yoga", name: "Yoga & Wellness", emoji: "🧘", icon: "Heart", color: "#10B981", count: 28 },
  { id: "photography", name: "Photo Studios", emoji: "📸", icon: "Camera", color: "#EC4899", count: 22 },
  { id: "petcare", name: "Pet Care & Vet", emoji: "🐾", icon: "Dog", color: "#F97316", count: 29 },
  { id: "doctor", name: "Doctor", emoji: "🩺", icon: "Stethoscope", color: "#10B981", count: 64 },
  { id: "dental", name: "Dental", emoji: "🦷", icon: "Smile", color: "#3B82F6", count: 19 },
  { id: "tattoo", name: "Tattoo & Piercing", emoji: "🎨", icon: "PenTool", color: "#8B5CF6", count: 17 },
  { id: "carservice", name: "Car Service", emoji: "🚗", icon: "Car", color: "#8B5CF6", count: 27 },
  { id: "rentals", name: "Luxury Rentals", emoji: "🚙", icon: "Key", color: "#0EA5E9", count: 15 },
  { id: "homeservice", name: "Home Service", emoji: "🧹", icon: "Home", color: "#EF4444", count: 50 },
  { id: "fitness", name: "Fitness & HIIT", emoji: "🏃", icon: "Activity", color: "#F97316", count: 35 }
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
      { id: "rev_2", author: "Aakash Roy", rating: 5, date: "1 week ago", comment: "Booked via Apo app seamlessly. No waiting time at all. Worth every rupee!", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" }
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
  },
  {
    id: "biz_9",
    name: "The Grand Orchid Luxury Hotel & Suites",
    tagline: "Boutique Suites, Pool Villas & Day-Stays",
    category: "Hotels & Stays",
    categoryId: "hotel",
    rating: 4.9,
    reviewCount: 480,
    distance: "2.4 km",
    address: "MG Road, Central Business District, Bengaluru",
    priceRange: "₹1,999 - ₹6,499",
    verified: true,
    isOpen: true,
    nextSlot: "Today, Check-in Anytime",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    ],
    about: "5-Star rated boutique hotel offering luxury day-use refresh suites, weekend luxury getaways, and rooftop pool villa cabanas.",
    cancellationPolicy: "Free cancellation up to 6 hours prior to check-in.",
    services: [
      {
        id: "srv_901",
        name: "Day-Use Deluxe Suite Pass (4 Hours)",
        description: "Private air-conditioned king suite, high-speed WiFi, welcome mocktail, and pool access.",
        duration: "240 min",
        price: 1999,
        originalPrice: 2800,
        discount: "29% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
        included: ["King Bed Suite", "Swimming Pool Access", "Welcome Drink", "High Speed WiFi"],
        addons: []
      },
      {
        id: "srv_902",
        name: "Weekend Luxury Suite with Buffet Breakfast",
        description: "Overnight suite stay with complimentary international buffet breakfast and late checkout.",
        duration: "Overnight",
        price: 4499,
        originalPrice: 6000,
        discount: "25% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=400",
        included: ["Buffet Breakfast", "Fitness Center", "Steam & Sauna", "Late 2 PM Checkout"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_11", name: "Siddharth Sen", role: "Head Concierge & Hospitality Lead", rating: 4.9, experience: "11 yrs", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_10",
    name: "Skyline Terrace & Rooftop Lounge",
    tagline: "Panoramic City View Dining & Craft Mocktails",
    category: "Dining & Lounges",
    categoryId: "dining",
    rating: 4.8,
    reviewCount: 630,
    distance: "1.2 km",
    address: "UB City, Lavelle Road, Bengaluru",
    priceRange: "₹499 - ₹2,999",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 07:30 PM",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
    ],
    about: "Premier 16th floor rooftop destination with live acoustic music, gourmet woodfired pizzas, and reserved VIP sunset tables.",
    cancellationPolicy: "Free table cancellation up to 1 hour prior.",
    services: [
      {
        id: "srv_1001",
        name: "VIP Sunset Table Reservation with Welcome Drink",
        description: "Guaranteed prime skyline table booking + 2 complimentary artisan drinks.",
        duration: "120 min",
        price: 499,
        originalPrice: 800,
        discount: "38% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=400",
        included: ["Priority Table", "Welcome Drink", "Live Music Access"],
        addons: []
      },
      {
        id: "srv_1002",
        name: "4-Course Candlelight Chef Tasting Dinner",
        description: "Curated 4-course gourmet dinner for two with appetizer, woodfired main, artisan dessert.",
        duration: "90 min",
        price: 2499,
        originalPrice: 3200,
        discount: "22% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
        included: ["4 Gourmet Courses", "Dessert Platter", "Personal Butler Service"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_12", name: "Chef Marco Rossi", role: "Executive Head Chef", rating: 4.9, experience: "15 yrs", photo: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_11",
    name: "Aura Creative & Podcast Studios",
    tagline: "4K Multi-Cam Podcast & Fashion Photo Studio",
    category: "Photo Studios",
    categoryId: "photography",
    rating: 4.9,
    reviewCount: 210,
    distance: "1.8 km",
    address: "100 Feet Rd, Indiranagar, Bengaluru",
    priceRange: "₹1,499 - ₹4,999",
    verified: true,
    isOpen: true,
    nextSlot: "Tomorrow, 11:00 AM",
    heroImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"],
    about: "Acoustically treated creator studios with Rode broadcast mics, Sony 4K cameras, and professional motorized backdrops.",
    cancellationPolicy: "Reschedule free 24 hours prior.",
    services: [
      {
        id: "srv_1101",
        name: "2-Hour 4K Podcast Studio Recording",
        description: "Studio engineer included, 3x Shure SM7B microphones, live audio switcher and raw 4K footage handover.",
        duration: "120 min",
        price: 1999,
        originalPrice: 2800,
        discount: "29% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400",
        included: ["Studio Engineer", "3 Mics Setup", "Raw 4K Video Files", "Soundproof Booth"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_13", name: "Devansh Rao", role: "Studio Sound & Visual Director", rating: 4.9, experience: "7 yrs", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_12",
    name: "Paws & Tails Luxury Pet Spa & Clinic",
    tagline: "Canine Hydrotherapy, Haircuts & Vet Care",
    category: "Pet Care & Vet",
    categoryId: "petcare",
    rating: 4.9,
    reviewCount: 350,
    distance: "1.5 km",
    address: "Koramangala 4th Block, Bengaluru",
    priceRange: "₹499 - ₹1,499",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 03:00 PM",
    heroImage: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"],
    about: "Dedicated pet care sanctuary featuring warm hydro-baths, hypoallergenic coat grooming, ear cleaning, and certified veterinary checks.",
    cancellationPolicy: "Free cancellation 2 hours prior.",
    services: [
      {
        id: "srv_1201",
        name: "Full Canine Royal Spa & Fur Styling",
        description: "Warm water bath, gentle organic shampoo, blow dry, paw pad balm, and hygienic trim.",
        duration: "60 min",
        price: 899,
        originalPrice: 1200,
        discount: "25% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
        included: ["Organic Bath", "Fur Detangling", "Nail Clipping", "Ear Cleaning"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_14", name: "Dr. Shalini Das", role: "Chief Veterinary Officer", rating: 4.9, experience: "9 yrs", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_13",
    name: "Prana Soul Yoga & Sound Sanctuary",
    tagline: "Reformer Pilates, Yin Yoga & Sound Healing",
    category: "Yoga & Wellness",
    categoryId: "yoga",
    rating: 4.9,
    reviewCount: 290,
    distance: "2.0 km",
    address: "Defence Colony, Indiranagar, Bengaluru",
    priceRange: "₹599 - ₹1,999",
    verified: true,
    isOpen: true,
    nextSlot: "Tomorrow, 07:00 AM",
    heroImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"],
    about: "Peaceful bamboo studio for mindful movement, reformer pilates machines, Tibetan singing bowl meditations, and breathwork.",
    cancellationPolicy: "Cancel 3 hours prior for full credit.",
    services: [
      {
        id: "srv_1301",
        name: "Tibetan Sound Bowl & Chakra Meditation",
        description: "Full sound immersion therapy with 7 chakra bronze singing bowls for deep stress relief.",
        duration: "60 min",
        price: 599,
        originalPrice: 850,
        discount: "30% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
        included: ["Singing Bowl Therapy", "Guided Breathwork", "Herbal Tea"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_15", name: "Tara Mehra", role: "Certified Yoga & Sound Master", rating: 4.9, experience: "10 yrs", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_14",
    name: "InkMinds Artisan Tattoo & Piercing",
    tagline: "Custom Fine-Line Art & Hospital-Grade Piercing",
    category: "Tattoo & Piercing",
    categoryId: "tattoo",
    rating: 4.9,
    reviewCount: 415,
    distance: "1.6 km",
    address: "Church Street, Central Bengaluru",
    priceRange: "₹499 - ₹3,999",
    verified: true,
    isOpen: true,
    nextSlot: "Today, 04:00 PM",
    heroImage: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800"],
    about: "Sterile single-use studio specializing in botanical fine-line tattoos, micro-realism, and medical-grade titanium piercings.",
    cancellationPolicy: "Free rescheduling up to 12 hours prior.",
    services: [
      {
        id: "srv_1401",
        name: "Custom Minimalist Tattoo (Up to 2x2 Inch)",
        description: "Bespoke fine-line design, dynamic black ink, sterile single-use needles, and second-skin bandage.",
        duration: "60 min",
        price: 1499,
        originalPrice: 2000,
        discount: "25% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=400",
        included: ["Custom Stencil", "Sterile Needle", "Second-Skin Bandage", "Aftercare Balm"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_16", name: "Zack D'Souza", role: "Lead Fine-Line Tattoo Artist", rating: 4.9, experience: "8 yrs", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  },
  {
    id: "biz_15",
    name: "Apex Luxury Drive & Chauffeur Services",
    tagline: "Mercedes Airport Transit & Self-Drive SUVs",
    category: "Car Rentals & EV",
    categoryId: "rentals",
    rating: 4.8,
    reviewCount: 185,
    distance: "3.5 km",
    address: "Hebbal, Airport Expressway, Bengaluru",
    priceRange: "₹299 - ₹4,999",
    verified: true,
    isOpen: true,
    nextSlot: "Today, Available 24/7",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"],
    about: "Chauffeur driven Mercedes & BMW sedans, verified airport transit, and self-drive 4x4 Thar rentals with comprehensive insurance.",
    cancellationPolicy: "Free cancellation up to 2 hours before trip.",
    services: [
      {
        id: "srv_1501",
        name: "Mercedes E-Class VIP Airport Transit",
        description: "Uniformed chauffeur, chilled mineral water, flight tracking, and toll included.",
        duration: "75 min",
        price: 2199,
        originalPrice: 2800,
        discount: "21% OFF",
        popular: true,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400",
        included: ["Mercedes Luxury Ride", "Airport Tolls", "Mineral Water", "Flight Tracking"],
        addons: []
      }
    ],
    staff: [
      { id: "stf_17", name: "Gurpreet Singh", role: "Senior VIP Chauffeur", rating: 4.9, experience: "12 yrs", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    reviews: []
  }
];

export const COUPONS = [
  { code: "APO100", title: "Flat ₹100 OFF", description: "Valid on all bookings above ₹400", amount: 100, minOrder: 400, type: "FLAT" },
  { code: "FIRSTBOOK20", title: "20% OFF First Booking", description: "Maximum discount up to ₹150 for new users", percentage: 20, maxDiscount: 150, minOrder: 300, type: "PERCENT" },
  { code: "GLOW50", title: "Flat ₹50 OFF Spa & Beauty", description: "Applicable on Spa & Beauty services", amount: 50, minOrder: 500, type: "FLAT" }
];

export const NOTIFICATIONS = [
  { id: "n_1", type: "reminder", title: "Appointment Tomorrow ⏰", message: "Reminder: Classic Haircut at Urban Cut Studio tomorrow at 02:30 PM.", time: "10m ago", read: false },
  { id: "n_2", type: "reward", title: "+150 Points Earned! 🎉", message: "You earned 150 points for your last appointment at Glow Beauty Lounge.", time: "2h ago", read: false },
  { id: "n_3", type: "offer", title: "Special Weekend Offer 🔥", message: "Get Flat ₹100 OFF on all salon services this weekend with code APO100.", time: "1d ago", read: true }
];

export const INITIAL_BOOKINGS = [
  {
    id: "APT-98241",
    customer: "Dilshan P.",
    customerPhone: "+91 98765 43210",
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
    otp: "4892",
    code: "APT-98241",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=APT-98241"
  },
  {
    id: "APT-87120",
    customer: "Dilshan P.",
    customerPhone: "+91 98765 43210",
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
    otp: "1923",
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
