class BusinessModel {
  final String id;
  final String name;
  final String tagline;
  final String category;
  final double rating;
  final int reviewCount;
  final String distance;
  final String address;
  final String priceRange;
  final bool verified;
  final String nextSlot;
  final String heroImage;
  final String about;
  final List<ServiceModel> services;
  final List<StaffModel> staff;

  BusinessModel({
    required this.id,
    required this.name,
    required this.tagline,
    required this.category,
    required this.rating,
    required this.reviewCount,
    required this.distance,
    required this.address,
    required this.priceRange,
    required this.verified,
    required this.nextSlot,
    required this.heroImage,
    required this.about,
    required this.services,
    required this.staff,
  });
}

class ServiceModel {
  final String id;
  final String name;
  final String description;
  final String duration;
  final int price;
  final int originalPrice;
  final String image;

  ServiceModel({
    required this.id,
    required this.name,
    required this.description,
    required this.duration,
    required this.price,
    required this.originalPrice,
    required this.image,
  });
}

class StaffModel {
  final String id;
  final String name;
  final String role;
  final double rating;
  final String experience;
  final String photo;

  StaffModel({
    required this.id,
    required this.name,
    required this.role,
    required this.rating,
    required this.experience,
    required this.photo,
  });
}

class BookingModel {
  final String id;
  final String businessName;
  final String serviceName;
  final String staffName;
  final String date;
  final String time;
  final int price;
  final String status;

  BookingModel({
    required this.id,
    required this.businessName,
    required this.serviceName,
    required this.staffName,
    required this.date,
    required this.time,
    required this.price,
    required this.status,
  });
}

final sampleBusinesses = [
  BusinessModel(
    id: 'biz_1',
    name: 'Urban Cut Studio',
    tagline: "Premium Men's Grooming & Styling",
    category: 'Salon & Barbers',
    rating: 4.9,
    reviewCount: 342,
    distance: '0.8 km',
    address: '100 Feet Rd, Indiranagar, Bengaluru',
    priceRange: '₹299 - ₹899',
    verified: true,
    nextSlot: 'Today, 02:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    about: 'Urban Cut Studio is Bengaluru premier grooming salon for men.',
    services: [
      ServiceModel(
        id: 'srv_101',
        name: 'Classic Haircut & Styling',
        description: 'Precision haircut, scalp wash, blow dry and hair setting.',
        duration: '45 min',
        price: 299,
        originalPrice: 399,
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400',
      ),
      ServiceModel(
        id: 'srv_102',
        name: 'Haircut + Beard Crafting Combo',
        description: 'Complete signature look overhaul including haircut & hot towel beard sculpting.',
        duration: '60 min',
        price: 499,
        originalPrice: 650,
        image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=400',
      ),
    ],
    staff: [
      StaffModel(
        id: 'stf_1',
        name: 'Rahul Sharma',
        role: 'Senior Master Stylist',
        rating: 4.9,
        experience: '7 yrs',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      ),
      StaffModel(
        id: 'stf_2',
        name: 'Priya Verma',
        role: 'Hair Artist',
        rating: 4.8,
        experience: '5 yrs',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      ),
    ],
  ),
  BusinessModel(
    id: 'biz_2',
    name: 'Glow Beauty Lounge & Spa',
    tagline: 'Luxury Beauty, Skin & Aromatherapy',
    category: 'Beauty & Spa',
    rating: 4.8,
    reviewCount: 512,
    distance: '1.4 km',
    address: '5th Block, Koramangala, Bengaluru',
    priceRange: '₹499 - ₹2,499',
    verified: true,
    nextSlot: 'Today, 03:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    about: 'Step into serenity at Glow Beauty Lounge.',
    services: [
      ServiceModel(
        id: 'srv_201',
        name: 'Aroma Swedish Body Massage',
        description: 'Deep relaxation massage using therapeutic essential oils.',
        duration: '60 min',
        price: 1499,
        originalPrice: 1999,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400',
      )
    ],
    staff: [
      StaffModel(
        id: 'stf_4',
        name: 'Ananya Deshmukh',
        role: 'Senior Therapist',
        rating: 4.9,
        experience: '6 yrs',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      )
    ],
  )
];

final sampleBookings = [
  BookingModel(
    id: 'APT-98241',
    businessName: 'Urban Cut Studio',
    serviceName: 'Classic Haircut & Styling',
    staffName: 'Rahul Sharma',
    date: '14 Aug 2026',
    time: '02:30 PM',
    price: 329,
    status: 'Confirmed',
  ),
  BookingModel(
    id: 'APT-87120',
    businessName: 'Glow Beauty Lounge & Spa',
    serviceName: 'Hydra-Glow Vitamin C Facial',
    staffName: 'Ananya Deshmukh',
    date: '05 Aug 2026',
    time: '04:00 PM',
    price: 1049,
    status: 'Completed',
  )
];
