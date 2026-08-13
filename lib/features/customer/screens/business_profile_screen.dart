import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/sample_data.dart';

class BusinessProfileScreen extends StatelessWidget {
  final BusinessModel business;
  final VoidCallback onBack;
  final Function(ServiceModel) onSelectService;

  const BusinessProfileScreen({
    Key? key,
    required this.business,
    required this.onBack,
    required this.onSelectService,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bgApp,
      body: Stack(
        children: [
          SingleChildScrollView(
            padding: const EdgeInsets.only(bottom: 90),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Hero Image
                Stack(
                  children: [
                    Image.network(
                      business.heroImage,
                      height: 220,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                    SafeArea(
                      child: Padding(
                        padding: const EdgeInsets.all(16),
                        child: CircleAvatar(
                          backgroundColor: Colors.white.withOpacity(0.9),
                          child: IconButton(
                            icon: const Icon(Icons.arrow_back, color: AppColors.textPrimary),
                            onPressed: onBack,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),

                // Main Info Header
                Container(
                  padding: const EdgeInsets.all(20),
                  color: Colors.white,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                            child: Text(
                              business.name,
                              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: AppColors.textPrimary),
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: AppColors.amber50,
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: Row(
                              children: [
                                const Icon(Icons.star, color: AppColors.amber600, size: 16),
                                const SizedBox(width: 4),
                                Text('${business.rating}', style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.amber600)),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(business.tagline, style: const TextStyle(fontSize: 13, color: AppColors.textSecondary)),
                      const SizedBox(height: 12),
                      Row(
                        children: [
                          const Icon(Icons.location_on, color: AppColors.primary600, size: 16),
                          const SizedBox(width: 4),
                          Text(business.address, style: const TextStyle(fontSize: 13, color: AppColors.textSecondary)),
                        ],
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 16),

                // Services Section Title
                const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 20),
                  child: Text('Services Catalog', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
                ),

                const SizedBox(height: 12),

                // Services List
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: business.services.map((srv) {
                      return Container(
                        margin: const EdgeInsets.only(bottom: 12),
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: AppColors.borderLight),
                        ),
                        child: Row(
                          children: [
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12),
                              child: Image.network(srv.image, width: 80, height: 80, fit: BoxFit.cover),
                            ),
                            const SizedBox(width: 14),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(srv.name, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
                                  const SizedBox(height: 4),
                                  Text('${srv.duration} • ₹${srv.price}', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppColors.primary600)),
                                ],
                              ),
                            ),
                            ElevatedButton(
                              onPressed: () => onSelectService(srv),
                              child: const Text('Book'),
                            ),
                          ],
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),
          ),
          
          // Sticky Bottom CTA
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              color: Colors.white,
              padding: const EdgeInsets.all(16),
              child: ElevatedButton(
                onPressed: () => onSelectService(business.services[0]),
                child: const Text('Book Appointment'),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
