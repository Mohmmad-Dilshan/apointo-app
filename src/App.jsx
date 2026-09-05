import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import MobileFrame from './components/MobileFrame';
import Toast from './components/Toast';
import VoiceSearchModal from './components/VoiceSearchModal';
import FloatingThemeBar from './components/FloatingThemeBar';
import ThemeSelectorModal from './components/ThemeSelectorModal';
import { PlatformProvider, usePlatform } from './context/PlatformContext';

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
import MobileBusinessDashboard from './views/BusinessDashboard/MobileBusinessDashboard';
import DesktopBusinessDashboard from './views/BusinessDashboard/DesktopBusinessDashboard';

/* Admin Console Views */
import MobileAdminDashboard from './views/AdminConsole/MobileAdminDashboard';
import DesktopAdminConsole from './views/AdminConsole/DesktopAdminConsole';

/* Design System View */
import DesignSystemInspector from './views/DesignSystem/DesignSystemInspector';

import { Home as HomeIcon, Compass, Calendar as CalendarNav, Award as AwardNav, User as UserNav } from 'lucide-react';

function AppContent() {
  const {
    user,
    setUser,
    businesses,
    bookings,
    favorites,
    setFavorites,
    toast,
    setToast,
    showToast,
    createBooking,
    rescheduleBooking,
    cancelBooking,
    submitReview
  } = usePlatform();

  // Top level platform view: 'customer' | 'business' | 'admin' | 'design-system'
  const [activePlatform, setActivePlatform] = useState('customer');
  const [isDeviceFrame, setIsDeviceFrame] = useState(true);
  const [deviceOs, setDeviceOs] = useState('ios'); // 'ios' | 'android'
  const [isVoiceSearchOpen, setIsVoiceSearchOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  // Customer Screen Router
  const [customerScreen, setCustomerScreen] = useState('home');

  // Booking Flow Draft State
  const [selectedBusiness, setSelectedBusiness] = useState(businesses[0] || null);
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeBookingDetail, setActiveBookingDetail] = useState(null);
  const [reviewModalBooking, setReviewModalBooking] = useState(null);

  // Sync selected business if initial is null
  const currentBusiness = selectedBusiness || businesses[0];

  const handleToggleFavorite = (bizId) => {
    if (favorites.includes(bizId)) {
      setFavorites(favorites.filter(id => id !== bizId));
      showToast({ message: "Removed from favorites", type: "info" });
    } else {
      setFavorites([...favorites, bizId]);
      showToast({ message: "Added to favorites! ❤️", type: "success" });
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

  const [finalBookingDraft, setFinalBookingDraft] = useState(null);

  const handleProceedToPayment = (draft) => {
    setFinalBookingDraft(draft);
    setCustomerScreen('payment');
  };

  const handlePaymentSuccess = (paymentResult) => {
    const draft = finalBookingDraft || {
      business: currentBusiness,
      service: selectedService || currentBusiness.services[0],
      staff: selectedStaff,
      dateTime: selectedDateTime,
      addons: selectedAddons,
      totalAmount: (selectedService?.price || 299) + 20
    };

    const newBooking = createBooking({
      business: draft.business || currentBusiness,
      service: draft.service || selectedService || currentBusiness.services[0],
      staff: draft.staff || selectedStaff,
      dateTime: draft.dateTime || selectedDateTime,
      addons: draft.addons || selectedAddons,
      discount: draft.discount || 0,
      paymentMethod: paymentResult?.paymentMethod || "UPI (Google Pay)",
      totalAmount: paymentResult?.totalAmount || draft.totalAmount || ((draft.service?.price || 299) + 20)
    });

    setActiveBookingDetail(newBooking);
    setCustomerScreen('success');
  };

  const handleQuickRebook = (item) => {
    const targetBusiness = businesses?.find(b => 
      b.id === item?.businessId || 
      b.name === item?.businessName || 
      b.id === item?.id || 
      b.name === item?.name
    ) || businesses?.[0];

    const targetService = targetBusiness?.services?.find(s => 
      s.id === item?.serviceId || 
      s.name === item?.serviceName || 
      s.id === item?.id
    ) || targetBusiness?.services?.[0];

    setSelectedBusiness(targetBusiness);
    setSelectedService(targetService);
    setCustomerScreen('staff');
  };

  const handleReschedule = (bookingId, newDate, newTime) => {
    rescheduleBooking(bookingId, newDate, newTime);
  };

  const handleCancel = (bookingId) => {
    cancelBooking(bookingId);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#090D16' }}>
      {/* Top Header App View Switcher Bar */}
      <HeaderNav
        activePlatform={activePlatform}
        setActivePlatform={setActivePlatform}
        isDeviceFrame={isDeviceFrame}
        setIsDeviceFrame={setIsDeviceFrame}
        deviceOs={deviceOs}
        setDeviceOs={setDeviceOs}
      />

      {/* PLATFORM 1: CUSTOMER MOBILE APP */}
      {activePlatform === 'customer' && (
        <MobileFrame isDeviceFrame={isDeviceFrame} deviceOs={deviceOs}>
          {/* In-Frame Toast Alert Popup */}
          <Toast toast={toast} onClose={() => setToast(null)} />

          {/* In-Frame Voice Search Modal */}
          <VoiceSearchModal
            isOpen={isVoiceSearchOpen}
            onClose={() => setIsVoiceSearchOpen(false)}
            onSearchSubmit={(query) => {
              showToast({ message: `Voice search result for "${query}"`, type: "info" });
              setCustomerScreen('search');
            }}
          />

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
              bookingData={finalBookingDraft || { totalAmount: (selectedService?.price || 299) + 20 }}
              onBack={() => setCustomerScreen('summary')}
              onPaymentSuccess={handlePaymentSuccess}
            />
          )}

          {customerScreen === 'success' && (
            <BookingSuccess
              bookingData={activeBookingDetail || finalBookingDraft || {
                business: selectedBusiness,
                service: selectedService,
                staff: selectedStaff,
                dateTime: selectedDateTime,
                totalAmount: (selectedService?.price || 299) + 20
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
            <ReferralScreen onBack={() => setCustomerScreen('profile')} onShowToast={showToast} />
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
            onSubmitReview={(rev) => {
              submitReview(reviewModalBooking?.businessId || 'biz_1', rev);
              setReviewModalBooking(null);
            }}
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

      {/* PLATFORM 2: BUSINESS DASHBOARD (Widescreen SaaS or Mobile POS Frame) */}
      {activePlatform === 'business' && (
        isDeviceFrame ? (
          <MobileFrame isDeviceFrame={isDeviceFrame} deviceOs={deviceOs}>
            <MobileBusinessDashboard />
          </MobileFrame>
        ) : (
          <DesktopBusinessDashboard />
        )
      )}

      {/* PLATFORM 3: ADMIN CONSOLE (Widescreen Command Center or Mobile KYC Frame) */}
      {activePlatform === 'admin' && (
        isDeviceFrame ? (
          <MobileFrame isDeviceFrame={isDeviceFrame} deviceOs={deviceOs}>
            <MobileAdminDashboard />
          </MobileFrame>
        ) : (
          <DesktopAdminConsole />
        )
      )}

      {/* PLATFORM 4: DESIGN SYSTEM INSPECTOR */}
      {activePlatform === 'design-system' && (
        <DesignSystemInspector />
      )}

      {/* Floating Theme Quick Bar for Instant 1-Tap Switching */}
      <FloatingThemeBar onOpenFullModal={() => setIsThemeModalOpen(true)} />

      {/* Global Live Theme Explorer Modal */}
      <ThemeSelectorModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <PlatformProvider>
      <AppContent />
    </PlatformProvider>
  );
}
