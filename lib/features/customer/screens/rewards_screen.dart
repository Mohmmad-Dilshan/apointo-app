import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';

class RewardsScreen extends StatelessWidget {
  const RewardsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bgApp,
      appBar: AppBar(title: const Text('Apointo Rewards'), automaticallyImplyLeading: false),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [AppColors.primary600, AppColors.primary700],
                ),
                borderRadius: BorderRadius.circular(24),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text('GOLD MEMBER STATUS', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: AppColors.primary100, letterSpacing: 1)),
                  SizedBox(height: 8),
                  Text('2,450 PTS', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900, color: Colors.white)),
                  SizedBox(height: 4),
                  Text('Worth ₹245 Instant Cashback', style: TextStyle(fontSize: 13, color: AppColors.primary100)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
