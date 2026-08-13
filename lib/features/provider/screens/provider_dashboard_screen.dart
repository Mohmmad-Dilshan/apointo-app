import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';

class ProviderDashboardScreen extends StatelessWidget {
  const ProviderDashboardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Business Dashboard')),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(child: _buildMetricCard('Appointments', '18', AppColors.primary50, AppColors.primary600)),
                const SizedBox(width: 12),
                Expanded(child: _buildMetricCard("Today's Revenue", '₹42,850', AppColors.emerald50, AppColors.emerald600)),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMetricCard(String label, String value, Color bg, Color text) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: AppColors.borderLight),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.textMuted)),
          const SizedBox(height: 8),
          Text(value, style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: text)),
        ],
      ),
    );
  }
}
