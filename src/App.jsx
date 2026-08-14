import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import MobileFrame from './components/MobileFrame';
import Toast from './components/Toast';
import VoiceSearchModal from './components/VoiceSearchModal';
import { INITIAL_USER, BUSINESSES, INITIAL_BOOKINGS } from './data/sampleData';

/* Customer App Screens */
import SplashScreen from './views/CustomerApp/SplashScreen';
import Onboarding from './views/CustomerApp/Onboarding';
import LocationModal from './views/CustomerApp/LocationModal';
import AuthFlow from './views/CustomerApp/AuthFlow';
import HomeScreen from './views/CustomerApp/HomeScreen';
import SearchScreen from './views/CustomerApp/SearchScreen';
import ExploreScreen from './views/CustomerApp/ExploreScreen';
import MapViewScreen from './views/CustomerApp/MapViewScreen';
import BusinessProfile from './views/CustomerApp/BusinessProfile';
import ServiceDetailModal from './views/CustomerApp/ServiceDetailModal';
import StaffSelectionScreen from './views/CustomerApp/StaffSelectionScreen';
import DateTimePicker from './views/CustomerApp/DateTimePicker';
import AddonsSelection from './views/CustomerApp/AddonsSelection';
import BookingSummary from './views/CustomerApp/BookingSummary';
import PaymentScreen from './views/CustomerApp/PaymentScreen';
import BookingSuccess from './views/CustomerApp/BookingSuccess';
import BookingDetail from './views/CustomerApp/BookingDetail';
import CategoryDetailScreen from './views/CustomerApp/CategoryDetailScreen';
import AllCategoriesScreen from './views/CustomerApp/AllCategoriesScreen';
import BookingsTab from './views/CustomerApp/BookingsTab';
import NotificationsScreen from './views/CustomerApp/NotificationsScreen';
import ReviewModal from './views/CustomerApp/ReviewModal';
import FavoritesScreen from './views/CustomerApp/FavoritesScreen';
import RewardsScreen from './views/CustomerApp/RewardsScreen';
import ReferralScreen from './views/CustomerApp/ReferralScreen';
import ProfileScreen from './views/CustomerApp/ProfileScreen';
import AddressManager from './views/CustomerApp/AddressManager';
import PaymentMethodsManager from './views/CustomerApp/PaymentMethodsManager';
import HelpSupportScreen from './views/CustomerApp/HelpSupportScreen';
import PersonalInfoScreen from './views/CustomerApp/PersonalInfoScreen';
import NotificationPreferencesScreen from './views/CustomerApp/NotificationPreferencesScreen';

/* Business SaaS Dashboard Views */
import ProviderHeader from './views/BusinessDashboard/ProviderHeader';
import ProviderSidebar from './views/BusinessDashboard/ProviderSidebar';
import ProviderOverview from './views/BusinessDashboard/ProviderOverview';
import ProviderCalendar from './views/BusinessDashboard/ProviderCalendar';
import ProviderAppointments from './views/BusinessDashboard/ProviderAppointments';
import ProviderServices from './views/BusinessDashboard/ProviderServices';
import ProviderStaff from './views/BusinessDashboard/ProviderStaff';
import ProviderCRM from './views/BusinessDashboard/ProviderCRM';
import ProviderPayments from './views/BusinessDashboard/ProviderPayments';
import ProviderOffers from './views/BusinessDashboard/ProviderOffers';
import ProviderAnalytics from './views/BusinessDashboard/ProviderAnalytics';
import ProviderReviews from './views/BusinessDashboard/ProviderReviews';
import ProviderSettings from './views/BusinessDashboard/ProviderSettings';

/* Admin Console Views */
import AdminHeader from './views/AdminConsole/AdminHeader';
import AdminSidebar from './views/AdminConsole/AdminSidebar';
import AdminDashboard from './views/AdminConsole/AdminDashboard';
import BusinessVerification from './views/AdminConsole/BusinessVerification';
import AdminBookings from './views/AdminConsole/AdminBookings';
import AdminPayments from './views/AdminConsole/AdminPayments';
import AdminUsers from './views/AdminConsole/AdminUsers';
import AdminSupport from './views/AdminConsole/AdminSupport';

/* Design System View */
import DesignSystemInspector from './views/DesignSystem/DesignSystemInspector';

import { Home as HomeIcon, Compass, Calendar as CalendarNav, Award as AwardNav, User as UserNav } from 'lucide-react';

export default function App() {
  // Top level platform view: 'customer' | 'business' | 'admin' | 'design-system'
  const [activePlatform, setActivePlatform] = useState('customer');
  const [isDeviceFrame, setIsDeviceFrame] = useState(true);

  // Global State Store
  const [user, setUser] = useState(INITIAL_USER);
  const [favorites, setFavorites] = useState(['biz_1']);
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [toast, setToast] = useState(null);
  const [isVoiceSearchOpen, setIsVoiceSearchOpen] = useState(false);

  // Customer Screen Router
  const [customerScreen, setCustomerScreen] = useState('home');

  // Booking Flow Draft State
  const [selectedBusiness, setSelectedBusiness] = useState(BUSINESSES[0]);
  const [selectedService, setSelectedService] = useState(BUSINESSES[0].services[0]);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeBookingDetail, setActiveBookingDetail] = useState(null);
  const [reviewModalBooking, setReviewModalBooking] = useState(null);

  // Business Dashboard Active Tab
  const [providerTab, setProviderTab] = useState('overview');

  // Admin Console Active Tab
  const [adminTab, setAdminTab] = useState('overview');

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => setToast(null), 3000);
  };

  const handleToggleFavorite = (bizId) => {
    if (favorites.includes(bizId)) {
      setFavorites(favorites.filter(id => id !== bizId));
      showToast({ message: "Removed from Favorites", type: "info" });
    } else {
      setFavorites([...favorites, bizId]);
      showToast({ message: "Saved to Favorites ❤️", type: "success" });
    }
  };

  const handleSelectBusiness = (biz) => {
    setSelectedBusiness(biz);
    setCustomerScreen('business');
  };

  const handleOpenServiceModal = (srv) => {
    setSelectedService(srv);
    setIsServiceModalOpen(true);
  };

  const handleProceedToStaff = (srv) => {
    setSelectedService(srv);
    setIsServiceModalOpen(false);
    setCustomerScreen('staff');
  };

  const handleSelectStaff = (stf) => {
    setSelectedStaff(stf);
    setCustomerScreen('datetime');
  };

  const handleConfirmDateTime = (dt) => {
    setSelectedDateTime(dt);
    setCustomerScreen('addons');
  };

  const handleConfirmAddons = (addons) => {
    setSelectedAddons(addons);
    setCustomerScreen('summary');
  };

  const handleProceedToPayment = (finalDraft) => {
    setCustomerScreen('payment');
  };

  const handlePaymentSuccess = () => {
    const newBooking = {
      id: "APT-" + Math.floor(10000 + Math.random() * 90000),
      businessName: selectedBusiness.name,
      businessImage: selectedBusiness.heroImage,
      serviceName: selectedService.name,
      staffName: selectedStaff?.name || "Rahul Sharma",
      date: selectedDateTime?.date || "14 Aug 2026",
      time: selectedDateTime?.time || "02:30 PM",
      duration: selectedService.duration,
      price: selectedService.price,
      totalPaid: selectedService.price + 20,
      status: "Confirmed",
      address: selectedBusiness.address
    };

    setBookings([newBooking, ...bookings]);
    setActiveBookingDetail(newBooking);
    setCustomerScreen('success');
  };

  const handleQuickRebook = (biz) => {
    setSelectedBusiness(biz);
    setSelectedService(biz.services[0]);
    setCustomerScreen('staff');
  };

  const handleReschedule = (bookingId, newDate, newTime) => {
    setBookings(bookings.map(b => b.id === bookingId ? { ...b, date: newDate, time: newTime, status: 'Confirmed' } : b));
    showToast({ message: "Appointment rescheduled successfully!", type: "success" });
  };

  const handleCancel = (bookingId) => {
    setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b));
    showToast({ message: "Appointment cancelled. Full refund initiated.", type: "info" });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#090D16' }}>
      {/* Top Header App View Switcher Bar */}
      <HeaderNav
        activePlatform={activePlatform}
        setActivePlatform={setActivePlatform}
        isDeviceFrame={isDeviceFrame}
        setIsDeviceFrame={setIsDeviceFrame}
      />

      {/* Global Toast Alert Popup */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Voice Search Modal */}
      <VoiceSearchModal
        isOpen={isVoiceSearchOpen}
        onClose={() => setIsVoiceSearchOpen(false)}
        onSearchSubmit={(query) => {
          showToast({ message: `Voice search result for "${query}"`, type: "info" });
          setCustomerScreen('search');
        }}
      />

      {/* PLATFORM 1: CUSTOMER MOBILE APP */}
      {activePlatform === 'customer' && (
        <MobileFrame isDeviceFrame={isDeviceFrame}>
          {customerScreen === 'splash' && (
            <SplashScreen onStart={() => setCustomerScreen('onboarding')} />
          )}

          {customerScreen === 'onboarding' && (
            <Onboarding onFinish={() => setCustomerScreen('location')} />
          )}

          {customerScreen === 'location' && (
            <LocationModal
              currentLocation={user.location}
              onSelectLocation={(loc) => {
                setUser({ ...user, location: loc });
                setCustomerScreen('auth');
              }}
            />
          )}

          {customerScreen === 'auth' && (
            <AuthFlow onLoginSuccess={() => setCustomerScreen('home')} />
          )}

          {customerScreen === 'home' && (
            <HomeScreen
              user={user}
              onOpenLocation={() => setCustomerScreen('location')}
              onOpenNotifications={() => setCustomerScreen('notifications')}
              onNavigateScreen={(scr) => setCustomerScreen(scr)}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setCustomerScreen('category-detail');
              }}
              onSelectBusiness={handleSelectBusiness}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onQuickRebook={handleQuickRebook}
              onOpenVoiceSearch={() => setIsVoiceSearchOpen(true)}
            />
          )}

          {customerScreen === 'category-detail' && (
            <CategoryDetailScreen
              category={selectedCategory}
              onBack={() => setCustomerScreen('home')}
              onSelectBusiness={handleSelectBusiness}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {customerScreen === 'all-categories' && (
            <AllCategoriesScreen
              onBack={() => setCustomerScreen('home')}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setCustomerScreen('category-detail');
              }}
            />
          )}

          {customerScreen === 'search' && (
            <SearchScreen
              onBack={() => setCustomerScreen('home')}
              onSelectBusiness={handleSelectBusiness}
            />
          )}

          {customerScreen === 'explore' && (
            <ExploreScreen
              onSelectBusiness={handleSelectBusiness}
              onNavigateScreen={(scr) => setCustomerScreen(scr)}
            />
          )}

          {customerScreen === 'map' && (
            <MapViewScreen
              onBack={() => setCustomerScreen('home')}
              onSelectBusiness={handleSelectBusiness}
            />
          )}

          {customerScreen === 'business' && (
            <BusinessProfile
              business={selectedBusiness}
              onBack={() => setCustomerScreen('home')}
              onSelectService={handleOpenServiceModal}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {customerScreen === 'staff' && (
            <StaffSelectionScreen
              staffList={selectedBusiness.staff}
              onBack={() => setCustomerScreen('business')}
              onSelectStaff={handleSelectStaff}
            />
          )}

          {customerScreen === 'datetime' && (
            <DateTimePicker
              service={selectedService}
              staff={selectedStaff}
              onBack={() => setCustomerScreen('staff')}
              onConfirmDateTime={handleConfirmDateTime}
            />
          )}

          {customerScreen === 'addons' && (
            <AddonsSelection
              service={selectedService}
              onBack={() => setCustomerScreen('datetime')}
              onConfirmAddons={handleConfirmAddons}
            />
          )}

          {customerScreen === 'summary' && (
            <BookingSummary
              bookingDraft={{
                business: selectedBusiness,
                service: selectedService,
                staff: selectedStaff,
                dateTime: selectedDateTime,
                addons: selectedAddons
              }}
              onBack={() => setCustomerScreen('addons')}
              onProceedToPayment={handleProceedToPayment}
            />
          )}

          {customerScreen === 'payment' && (
            <PaymentScreen
              bookingData={{ totalAmount: selectedService.price + 20 }}
              onBack={() => setCustomerScreen('summary')}
              onPaymentSuccess={handlePaymentSuccess}
            />
          )}

          {customerScreen === 'success' && (
            <BookingSuccess
              bookingData={{
                business: selectedBusiness,
                service: selectedService,
                staff: selectedStaff,
                dateTime: selectedDateTime,
                totalAmount: selectedService.price + 20
              }}
              onViewBooking={() => setCustomerScreen('booking-detail')}
              onHome={() => setCustomerScreen('home')}
            />
          )}

          {customerScreen === 'booking-detail' && (
            <BookingDetail
              booking={activeBookingDetail || bookings[0]}
              onBack={() => setCustomerScreen('bookings')}
              onReschedule={handleReschedule}
              onCancel={handleCancel}
              onBookAgain={handleQuickRebook}
            />
          )}

          {customerScreen === 'bookings' && (
            <BookingsTab
              bookings={bookings}
              onSelectBooking={(b) => {
                setActiveBookingDetail(b);
                setCustomerScreen('booking-detail');
              }}
              onBookAgain={handleQuickRebook}
              onOpenReview={(b) => setReviewModalBooking(b)}
            />
          )}

          {customerScreen === 'notifications' && (
            <NotificationsScreen onBack={() => setCustomerScreen('home')} />
          )}

          {customerScreen === 'favorites' && (
            <FavoritesScreen
              favorites={favorites}
              onSelectBusiness={handleSelectBusiness}
              onToggleFavorite={handleToggleFavorite}
              onNavigateScreen={(scr) => setCustomerScreen(scr)}
              onBack={() => setCustomerScreen('profile')}
            />
          )}

          {customerScreen === 'rewards' && (
            <RewardsScreen user={user} onNavigateScreen={(scr) => setCustomerScreen(scr)} />
          )}

          {customerScreen === 'referral' && (
            <ReferralScreen onBack={() => setCustomerScreen('rewards')} onShowToast={showToast} />
          )}

          {customerScreen === 'profile' && (
            <ProfileScreen user={user} onNavigateScreen={(scr) => setCustomerScreen(scr)} />
          )}

          {customerScreen === 'personal-info' && (
            <PersonalInfoScreen
              user={user}
              onBack={() => setCustomerScreen('profile')}
              onSaveUser={(updated) => {
                setUser({ ...user, ...updated });
                showToast({ message: "Personal Info updated successfully!", type: "success" });
              }}
            />
          )}

          {customerScreen === 'notification-preferences' && (
            <NotificationPreferencesScreen onBack={() => setCustomerScreen('profile')} />
          )}

          {customerScreen === 'addresses' && (
            <AddressManager addresses={user.addresses} onBack={() => setCustomerScreen('profile')} />
          )}

          {customerScreen === 'payment-methods' && (
            <PaymentMethodsManager onBack={() => setCustomerScreen('profile')} />
          )}

          {customerScreen === 'support' && (
            <HelpSupportScreen onBack={() => setCustomerScreen('profile')} />
          )}

          {/* Service Detail Modal */}
          <ServiceDetailModal
            service={selectedService}
            business={selectedBusiness}
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            onProceedToStaff={handleProceedToStaff}
          />

          {/* Review Modal */}
          <ReviewModal
            isOpen={!!reviewModalBooking}
            onClose={() => setReviewModalBooking(null)}
            onSubmitReview={(rev) => showToast({ message: "Review posted successfully!", type: "success" })}
            booking={reviewModalBooking}
          />

          {/* Apple iOS 18 HIG Floating Glass Pill Dock */}
          {['home', 'explore', 'bookings', 'rewards', 'profile'].includes(customerScreen) && (
            <div style={{
              position: 'sticky',
              bottom: '12px',
              left: '12px',
              right: '12px',
              width: 'calc(100% - 24px)',
              height: '62px',
              margin: 'auto 12px 12px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(30px) saturate(190%)',
              WebkitBackdropFilter: 'blur(30px) saturate(190%)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              zIndex: 1000,
              padding: '4px 6px'
            }}>
              {[
                { id: 'home', label: 'Home', icon: <HomeIcon size={18} /> },
                { id: 'explore', label: 'Explore', icon: <Compass size={18} /> },
                { id: 'bookings', label: 'Bookings', icon: <CalendarNav size={18} /> },
                { id: 'rewards', label: 'Rewards', icon: <AwardNav size={18} /> },
                { id: 'profile', label: 'Profile', icon: <UserNav size={18} /> }
              ].map(tab => {
                const isActive = customerScreen === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setCustomerScreen(tab.id)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2px',
                      padding: '6px 0',
                      borderRadius: '999px',
                      background: isActive ? 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#64748B',
                      fontSize: '0.68rem',
                      fontWeight: isActive ? 800 : 600,
                      boxShadow: isActive ? '0 4px 14px rgba(79,70,229,0.35)' : 'none',
                      border: isActive ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                      transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: isActive ? 'scale(1.04)' : 'scale(1)'
                    }}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </MobileFrame>
      )}

      {/* PLATFORM 2: BUSINESS SaaS DASHBOARD */}
      {activePlatform === 'business' && (
        <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
          <ProviderHeader
            businessName={selectedBusiness.name}
            onAddAppointment={() => showToast({ message: "New appointment modal triggered!", type: "info" })}
          />
          <div style={{ display: 'flex' }}>
            <ProviderSidebar activeTab={providerTab} setActiveTab={setProviderTab} />
            <main style={{ flex: 1, minHeight: 'calc(100vh - 65px)' }}>
              {providerTab === 'overview' && <ProviderOverview onNavigateTab={setProviderTab} />}
              {providerTab === 'calendar' && <ProviderCalendar />}
              {providerTab === 'appointments' && <ProviderAppointments />}
              {providerTab === 'services' && <ProviderServices />}
              {providerTab === 'staff' && <ProviderStaff />}
              {providerTab === 'crm' && <ProviderCRM />}
              {providerTab === 'payments' && <ProviderPayments />}
              {providerTab === 'offers' && <ProviderOffers />}
              {providerTab === 'analytics' && <ProviderAnalytics />}
              {providerTab === 'reviews' && <ProviderReviews />}
              {providerTab === 'settings' && <ProviderSettings />}
            </main>
          </div>
        </div>
      )}

      {/* PLATFORM 3: ADMIN CONSOLE */}
      {activePlatform === 'admin' && (
        <div style={{ minHeight: '100vh', background: '#090D16', color: '#F8FAFC' }}>
          <AdminHeader />
          <div style={{ display: 'flex' }}>
            <AdminSidebar activeTab={adminTab} setActiveTab={setAdminTab} />
            <main style={{ flex: 1, minHeight: 'calc(100vh - 65px)' }}>
              {adminTab === 'overview' && <AdminDashboard onNavigateTab={setAdminTab} />}
              {adminTab === 'verification' && <BusinessVerification />}
              {adminTab === 'bookings' && <AdminBookings />}
              {adminTab === 'payments' && <AdminPayments />}
              {adminTab === 'users' && <AdminUsers />}
              {adminTab === 'support' && <AdminSupport />}
            </main>
          </div>
        </div>
      )}

      {/* PLATFORM 4: DESIGN SYSTEM INSPECTOR */}
      {activePlatform === 'design-system' && (
        <DesignSystemInspector />
      )}
    </div>
  );
}
