import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/sample_data.dart';

class BookingsTab extends StatelessWidget {
  final List<BookingModel> bookings;

  const BookingsTab({Key? key, required this.bookings}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Appointments'),
        automaticallyImplyLeading: false,
      ),
      backgroundColor: AppColors.bgApp,
      body: ListView.builder(
        padding: const EdgeInsets.all(20),
        itemCount: bookings.length,
        itemBuilder: (context, idx) {
          final b = bookings[idx];
          return Container(
            margin: const EdgeInsets.only(bottom: 14),
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: AppColors.borderLight),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('Booking #${b.id}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.primary600)),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: b.status == 'Confirmed' ? AppColors.emerald50 : AppColors.primary50,
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: Text(
                        b.status,
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: b.status == 'Confirmed' ? AppColors.emerald600 : AppColors.primary600,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(b.businessName, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
                const SizedBox(height: 4),
                Text('${b.serviceName} • Specialist: ${b.staffName}', style: const TextStyle(fontSize: 13, color: AppColors.textSecondary)),
                const SizedBox(height: 8),
                Row(
                  children: [
                    const Icon(Icons.calendar_month, color: AppColors.primary600, size: 16),
                    const SizedBox(width: 6),
                    Text('${b.date} at ${b.time}', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppColors.primary600)),
                  ],
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
