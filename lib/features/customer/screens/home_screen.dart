import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/sample_data.dart';

class HomeScreen extends StatelessWidget {
  final Function(BusinessModel) onSelectBusiness;
  final VoidCallback onOpenSearch;

  const HomeScreen({
    Key? key,
    required this.onSelectBusiness,
    required this.onOpenSearch,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bgApp,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.only(bottom: 90),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Top Header Card
              Container(
                color: Colors.white,
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.all(8),
                              decoration: BoxDecoration(
                                color: AppColors.primary50,
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: const Icon(Icons.location_on, color: AppColors.primary600, size: 20),
                            ),
                            const SizedBox(width: 8),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: const [
                                Text('LOCATION', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: AppColors.textMuted)),
                                Text('Indiranagar, Bengaluru', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
                              ],
                            ),
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: AppColors.bgSubtle,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: const Icon(Icons.notifications_none, color: AppColors.textPrimary, size: 20),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    const Text('Good morning, Dilshan 👋', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: AppColors.textPrimary)),
                    const SizedBox(height: 4),
                    const Text('Book trusted services near you in seconds', style: TextStyle(fontSize: 13, color: AppColors.textSecondary)),
                    const SizedBox(height: 16),
                    
                    // Search Bar Widget
                    GestureDetector(
                      onTap: onOpenSearch,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                        decoration: BoxDecoration(
                          color: AppColors.bgSubtle,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: AppColors.borderLight),
                        ),
                        child: Row(
                          children: const [
                            Icon(Icons.search, color: AppColors.primary600, size: 20),
                            SizedBox(width: 10),
                            Text('Search salons, gyms, doctors...', style: TextStyle(fontSize: 14, color: AppColors.textMuted)),
                            Spacer(),
                            Icon(Icons.mic_none, color: AppColors.textMuted, size: 20),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 20),

              // Categories Header
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: Text('Quick Categories', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
              ),
              const SizedBox(height: 12),
              
              // Category Row
              SizedBox(
                height: 90,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  children: [
                    _buildCategoryChip('Haircut', '✂️'),
                    _buildCategoryChip('Spa & Massage', '🌿'),
                    _buildCategoryChip('Gym & Fitness', '🏋️'),
                    _buildCategoryChip('Doctor Clinic', '🩺'),
                    _buildCategoryChip('Dental Care', '🦷'),
                  ],
                ),
              ),

              const SizedBox(height: 20),

              // Nearby Businesses Header
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: Text('Nearby Businesses', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
              ),
              const SizedBox(height: 12),

              // Business Cards
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  children: sampleBusinesses.map((biz) {
                    return GestureDetector(
                      onTap: () => onSelectBusiness(biz),
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 16),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: AppColors.borderLight),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            ClipRRect(
                              borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
                              child: Image.network(
                                biz.heroImage,
                                height: 140,
                                width: double.infinity,
                                fit: BoxFit.cover,
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(16),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(biz.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
                                      Container(
                                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                        decoration: BoxDecoration(
                                          color: AppColors.amber50,
                                          borderRadius: BorderRadius.circular(6),
                                        ),
                                        child: Row(
                                          children: [
                                            const Icon(Icons.star, color: AppColors.amber600, size: 14),
                                            const SizedBox(width: 4),
                                            Text('${biz.rating}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.amber600)),
                                          ],
                                        ),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 4),
                                  Text('${biz.category} • ${biz.distance}', style: const TextStyle(fontSize: 13, color: AppColors.textSecondary)),
                                  const SizedBox(height: 12),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(biz.priceRange, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: AppColors.primary600)),
                                      ElevatedButton(
                                        onPressed: () => onSelectBusiness(biz),
                                        child: const Text('Book Slot'),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildCategoryChip(String title, String emoji) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 4),
      width: 76,
      child: Column(
        children: [
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: AppColors.borderLight),
            ),
            child: Center(child: Text(emoji, style: const TextStyle(fontSize: 26))),
          ),
          const SizedBox(height: 6),
          Text(title, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.textPrimary), textAlign: TextAlign.center, maxLines: 1),
        ],
      ),
    );
  }
}
