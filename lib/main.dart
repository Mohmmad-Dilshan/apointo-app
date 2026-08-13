import 'package:flutter/material.dart';
import 'core/theme/app_theme.dart';
import 'core/theme/app_colors.dart';
import 'core/utils/sample_data.dart';
import 'features/customer/screens/splash_screen.dart';
import 'features/customer/screens/home_screen.dart';
import 'features/customer/screens/business_profile_screen.dart';
import 'features/customer/screens/bookings_tab.dart';
import 'features/customer/screens/rewards_screen.dart';
import 'features/customer/screens/profile_screen.dart';
import 'features/provider/screens/provider_dashboard_screen.dart';

void main() {
  runApp(const ApointoApp());
}

class ApointoApp extends StatelessWidget {
  const ApointoApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Apointo',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      home: const MainAppWrapper(),
    );
  }
}

class MainAppWrapper extends StatefulWidget {
  const MainAppWrapper({Key? key}) : super(key: key);

  @override
  State<MainAppWrapper> createState() => _MainAppWrapperState();
}

class _MainAppWrapperState extends State<MainAppWrapper> {
  bool isSplash = false;
  int currentTab = 0;
  BusinessModel? selectedBiz;

  @override
  Widget build(BuildContext context) {
    if (isSplash) {
      return SplashScreen(
        onGetStarted: () => setState(() => isSplash = false),
      );
    }

    if (selectedBiz != null) {
      return BusinessProfileScreen(
        business: selectedBiz!,
        onBack: () => setState(() => selectedBiz = null),
        onSelectService: (srv) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Selected ${srv.name} for booking!'),
              backgroundColor: AppColors.primary600,
            ),
          );
        },
      );
    }

    final pages = [
      HomeScreen(
        onSelectBusiness: (biz) => setState(() => selectedBiz = biz),
        onOpenSearch: () {},
      ),
      const Center(child: Text('Explore Tab', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold))),
      BookingsTab(bookings: sampleBookings),
      const RewardsScreen(),
      const ProfileScreen(),
    ];

    return Scaffold(
      body: pages[currentTab],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: currentTab,
        onTap: (idx) => setState(() => currentTab = idx),
        selectedItemColor: AppColors.primary600,
        unselectedItemColor: AppColors.textMuted,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home_outlined), activeIcon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.explore_outlined), activeIcon: Icon(Icons.explore), label: 'Explore'),
          BottomNavigationBarItem(icon: Icon(Icons.calendar_month_outlined), activeIcon: Icon(Icons.calendar_month), label: 'Bookings'),
          BottomNavigationBarItem(icon: Icon(Icons.stars_outlined), activeIcon: Icon(Icons.stars), label: 'Rewards'),
          BottomNavigationBarItem(icon: Icon(Icons.person_outline), activeIcon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}
