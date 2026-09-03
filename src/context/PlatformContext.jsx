import React, { createContext, useContext, useState, useMemo } from 'react';
import {
  INITIAL_USER,
  BUSINESSES as INITIAL_BUSINESSES,
  INITIAL_BOOKINGS,
  NOTIFICATIONS as INITIAL_NOTIFICATIONS,
  ADMIN_STATS as INITIAL_ADMIN_STATS,
  PROVIDER_STATS as INITIAL_PROVIDER_STATS
} from '../data/sampleData';

const PlatformContext = createContext(null);

export function PlatformProvider({ children }) {
  // Global State
  const [user, setUser] = useState(INITIAL_USER);
  const [businesses, setBusinesses] = useState(INITIAL_BUSINESSES);
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [pendingVerifications, setPendingVerifications] = useState(INITIAL_ADMIN_STATS.pendingVerifications);
  const [favorites, setFavorites] = useState(['biz_1', 'biz_3']);
  const [toast, setToast] = useState(null);

  // Quick Global Toast Trigger
  const showToast = (toastObj) => {
    setToast(typeof toastObj === 'string' ? { message: toastObj, type: 'info' } : toastObj);
    setTimeout(() => setToast(null), 3500);
  };

  // 1. Customer Booking Actions
  const createBooking = (bookingData) => {
    const bookingId = "APT-" + Math.floor(10000 + Math.random() * 90000);
    const otp = String(Math.floor(1000 + Math.random() * 9000));
    const newBooking = {
      id: bookingId,
      customer: user.name,
      customerPhone: user.phone,
      businessId: bookingData.business.id,
      businessName: bookingData.business.name,
      businessImage: bookingData.business.heroImage,
      serviceId: bookingData.service.id,
      serviceName: bookingData.service.name,
      staffName: bookingData.staff?.name || "Senior Specialist",
      date: bookingData.dateTime?.date || "Today, 14 Aug 2026",
      time: bookingData.dateTime?.time || "02:30 PM",
      duration: bookingData.service.duration,
      price: bookingData.service.price,
      tax: 20,
      totalPaid: bookingData.totalAmount || (bookingData.service.price + 20),
      status: "Confirmed",
      address: bookingData.business.address,
      otp: otp,
      code: bookingId,
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${bookingId}`,
      createdAt: new Date().toISOString()
    };

    setBookings((prev) => [newBooking, ...prev]);

    // Send transactional notification to Customer
    const notif = {
      id: `notif_${Date.now()}`,
      type: "reminder",
      title: "Booking Confirmed! 🎉",
      message: `Your appointment for ${newBooking.serviceName} at ${newBooking.businessName} is scheduled for ${newBooking.date} at ${newBooking.time}. Desk OTP: ${otp}`,
      time: "Just now",
      read: false
    };
    setNotifications((prev) => [notif, ...prev]);

    showToast({
      message: `Appointment ${bookingId} booked! Synced to Business & Admin.`,
      type: "success"
    });

    return newBooking;
  };

  // 2. Business & Customer Booking Status Modifications
  const updateBookingStatus = (bookingId, newStatus, extraNotes = "") => {
    setBookings((prev) =>
      prev.map((b) => {
        if (b.id === bookingId) {
          return { ...b, status: newStatus, notes: extraNotes || b.notes };
        }
        return b;
      })
    );

    // If Completed, award user loyalty points
    if (newStatus === "Completed") {
      const pointsEarned = 150;
      setUser((prevUser) => ({
        ...prevUser,
        points: prevUser.points + pointsEarned
      }));

      const rewardNotif = {
        id: `notif_${Date.now()}`,
        type: "reward",
        title: `+${pointsEarned} VIP Points Earned! 🏆`,
        message: `Your service for appointment ${bookingId} was marked completed. 150 points added to your balance.`,
        time: "Just now",
        read: false
      };
      setNotifications((prev) => [rewardNotif, ...prev]);

      showToast({
        message: `Appointment ${bookingId} Completed! +150 Points awarded to customer.`,
        type: "success"
      });
    } else {
      showToast({
        message: `Appointment ${bookingId} updated to: ${newStatus}`,
        type: "info"
      });
    }
  };

  const rescheduleBooking = (bookingId, newDate, newTime) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId ? { ...b, date: newDate, time: newTime, status: "Confirmed" } : b
      )
    );
    showToast({ message: "Appointment rescheduled successfully!", type: "success" });
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "Cancelled" } : b))
    );
    showToast({ message: "Appointment cancelled. Full refund initiated.", type: "info" });
  };

  // 3. Walk-In POS Order from Business Dashboard
  const createWalkInOrder = (invoice) => {
    const bookingId = "POS-" + Math.floor(10000 + Math.random() * 90000);
    const newWalkIn = {
      id: bookingId,
      customer: invoice.customerName || "Walk-In Guest",
      customerPhone: invoice.customerPhone || "+91 90000 00000",
      businessId: "biz_1",
      businessName: "Urban Cut Studio",
      serviceName: invoice.services?.[0]?.name || "Walk-In Custom Service",
      staffName: invoice.staffName || "Staff On Duty",
      date: "Today, 14 Aug 2026",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      duration: "30 min",
      price: invoice.subtotal || invoice.finalTotal,
      tax: invoice.tax || 0,
      totalPaid: invoice.finalTotal || invoice.subtotal,
      status: "Completed",
      paymentMethod: invoice.paymentMethod || "Cash at Desk",
      address: "100 Feet Rd, Indiranagar, Bengaluru",
      code: bookingId,
      isWalkIn: true
    };

    setBookings((prev) => [newWalkIn, ...prev]);
    showToast({
      message: `Walk-in POS billed (₹${invoice.finalTotal}) - Added to appointments & GMV!`,
      type: "success"
    });
    return newWalkIn;
  };

  // 4. Admin KYC Business Verification
  const verifyBusinessApplication = (verificationId, action) => {
    const item = pendingVerifications.find((v) => v.id === verificationId);
    if (!item) return;

    if (action === "approve") {
      // Remove from pending
      setPendingVerifications((prev) => prev.filter((v) => v.id !== verificationId));

      // Add to verified businesses directory if not present, or set verified: true
      const existingBiz = businesses.find((b) => b.name.toLowerCase() === item.name.toLowerCase());
      if (existingBiz) {
        setBusinesses((prev) =>
          prev.map((b) => (b.id === existingBiz.id ? { ...b, verified: true } : b))
        );
      } else {
        const newBiz = {
          id: `biz_${Date.now()}`,
          name: item.name,
          tagline: `Premier ${item.category} in ${item.city}`,
          category: item.category,
          categoryId: item.category.toLowerCase().includes("spa") ? "spa" : "salon",
          rating: 5.0,
          reviewCount: 1,
          distance: "1.4 km",
          address: `${item.name}, Central Mall, ${item.city}`,
          priceRange: "₹499 - ₹2,999",
          verified: true,
          isOpen: true,
          nextSlot: "Today, 03:00 PM",
          heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
          images: [
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
          ],
          about: `Newly verified luxury partner on Apo Platform offering signature ${item.category} services.`,
          cancellationPolicy: "Free cancellation up to 2 hours prior.",
          services: [
            {
              id: `srv_${Date.now()}`,
              name: `Signature ${item.category} Experience`,
              description: "Complete premium care and signature treatment.",
              duration: "60 min",
              price: 699,
              originalPrice: 999,
              discount: "30% OFF",
              popular: true,
              image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400",
              included: ["Consultation", "Signature Treatment", "Hydration Mask"],
              addons: []
            }
          ],
          staff: [
            {
              id: `stf_${Date.now()}`,
              name: item.owner || "Master Specialist",
              role: "Lead Director",
              rating: 5.0,
              experience: "8 yrs",
              photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
            }
          ],
          reviews: []
        };
        setBusinesses((prev) => [newBiz, ...prev]);
      }

      showToast({
        message: `✓ ${item.name} approved! Now live & verified in Customer App discovery.`,
        type: "success"
      });
    } else {
      // Reject
      setPendingVerifications((prev) => prev.filter((v) => v.id !== verificationId));
      showToast({
        message: `Application for ${item.name} declined.`,
        type: "info"
      });
    }
  };

  // 5. Admin Broadcast Notification Engine
  const sendAdminBroadcast = (broadcastData) => {
    const newBroadcast = {
      id: `broadcast_${Date.now()}`,
      type: broadcastData.type || "offer",
      title: broadcastData.title || "Platform Announcement 📢",
      message: broadcastData.message,
      time: "Just now",
      read: false
    };

    setNotifications((prev) => [newBroadcast, ...prev]);
    showToast({
      message: `Broadcast sent to ${broadcastData.targetGroup || 'all customers'}!`,
      type: "success"
    });
  };

  // 6. Customer Review Submission
  const submitReview = (bizId, reviewData) => {
    const newReview = {
      id: `rev_${Date.now()}`,
      author: user.name,
      rating: reviewData.rating || 5,
      date: "Just now",
      comment: reviewData.comment || "Outstanding service experience!",
      avatar: user.avatar
    };

    setBusinesses((prev) =>
      prev.map((b) => {
        if (b.id === bizId) {
          const updatedReviews = [newReview, ...(b.reviews || [])];
          return {
            ...b,
            reviews: updatedReviews,
            reviewCount: (b.reviewCount || 0) + 1
          };
        }
        return b;
      })
    );

    showToast({
      message: "Review posted! Synchronized to Business & Admin feedback.",
      type: "success"
    });
  };

  // 7. Business Automations & Smart Rules Engine
  const [automationSettings, setAutomationSettings] = useState({
    autoConfirm: true,
    whatsappReminders: true,
    smartStaffDispatch: true,
    offPeakDynamicYield: false,
    autoLoyaltyCashback: true,
    autoReviewCollector: true,
  });

  const [automationLogs, setAutomationLogs] = useState([
    { id: 1, time: "10:45 AM", rule: "WhatsApp Automation", action: "Sent 2-hr pre-arrival reminder to Dilshan Perera (+91 98765 43210)", status: "Delivered", icon: "💬" },
    { id: 2, time: "10:30 AM", rule: "Smart Dispatcher", action: "Auto-assigned walk-in guest to Vikram Singh (workload: 40%)", status: "Executed", icon: "⚡" },
    { id: 3, time: "09:45 AM", rule: "Loyalty Cashback", action: "Credited 150 reward points to Vikram Malhotra post service", status: "Success", icon: "🎁" },
    { id: 4, time: "09:00 AM", rule: "Auto Confirm", action: "Instant confirmation granted for online booking APT-98241", status: "Confirmed", icon: "✅" }
  ]);

  const toggleAutomation = (ruleKey) => {
    setAutomationSettings((prev) => {
      const nextVal = !prev[ruleKey];
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        rule: "Rule Modified",
        action: `Manager toggled '${ruleKey}' to ${nextVal ? 'ACTIVE 🟢' : 'DISABLED 🔴'}`,
        status: nextVal ? "Active" : "Disabled",
        icon: "⚙️"
      };
      setAutomationLogs((logs) => [logEntry, ...logs]);
      showToast({
        message: `Automation updated: ${ruleKey} is now ${nextVal ? 'Enabled' : 'Disabled'}`,
        type: nextVal ? 'success' : 'info'
      });
      return { ...prev, [ruleKey]: nextVal };
    });
  };

  // 1-Click Queue Advance: Calls next waiting customer into service
  const callNextInQueue = () => {
    const nextCandidate = bookings.find(b => b.status === "Waiting in Lounge" || b.status === "Waiting") ||
                          bookings.find(b => b.status === "Confirmed");
    if (!nextCandidate) {
      showToast({ message: "No waiting appointments in queue!", type: "info" });
      return null;
    }

    updateBookingStatus(nextCandidate.id, "In Service");

    const logEntry = {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      rule: "Queue Automation",
      action: `Advanced #${nextCandidate.id} (${nextCandidate.customer || nextCandidate.customerName || 'Client'}) to Chair 1 (${nextCandidate.staffName || 'Specialist'})`,
      status: "In Service",
      icon: "📢"
    };
    setAutomationLogs((logs) => [logEntry, ...logs]);

    // Send urgent alert to Customer
    const urgentNotif = {
      id: `notif_${Date.now()}`,
      type: "alert",
      title: "Your Chair is Ready! 💈",
      message: `${nextCandidate.staffName || 'Your specialist'} is ready for you now at Chair 1. Please proceed inside!`,
      time: "Just now",
      read: false
    };
    setNotifications((prev) => [urgentNotif, ...prev]);

    showToast({
      message: `Called ${nextCandidate.customer || 'Client'} to Chair! Live status updated.`,
      type: "success"
    });

    return nextCandidate;
  };

  // Customer Self Check-in from Boarding Pass ("I've Arrived")
  const customerCheckIn = (bookingId) => {
    updateBookingStatus(bookingId, "Waiting in Lounge");

    const logEntry = {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      rule: "Self Check-in",
      action: `Customer arrived at reception for #${bookingId}. Waiting in lounge.`,
      status: "In Lounge",
      icon: "📍"
    };
    setAutomationLogs((logs) => [logEntry, ...logs]);

    showToast({
      message: "Reception notified! Take a seat in the lounge. Specialist alerted.",
      type: "success"
    });
  };

  // Clear automation logs
  const clearAutomationLogs = () => {
    setAutomationLogs([]);
    showToast({ message: "Automation activity logs cleared.", type: "info" });
  };

  // 8. Dynamic Real-time Calculations
  const computedStats = useMemo(() => {
    // Total gross booking value
    const totalGmv = bookings.reduce((sum, b) => sum + (Number(b.totalPaid) || Number(b.price) || 0), 0);
    // Platform commission (10%)
    const netPlatformRevenue = Math.round(totalGmv * 0.10);
    // Active (upcoming/confirmed/in-service) bookings count
    const activeBookingsCount = bookings.filter(
      (b) => b.status === "Confirmed" || b.status === "In Service" || b.status === "In Progress" || b.status === "Waiting in Lounge"
    ).length;
    // Waiting count
    const waitingCount = bookings.filter(b => b.status === "Waiting in Lounge" || b.status === "Waiting").length;
    // Completed count
    const completedBookingsCount = bookings.filter((b) => b.status === "Completed").length;
    // Provider specific revenue for 'Urban Cut Studio'
    const providerTodayRevenue = bookings
      .filter((b) => (b.businessName?.includes("Urban") || b.businessId === "biz_1"))
      .reduce((sum, b) => sum + (Number(b.totalPaid) || Number(b.price) || 0), 42850);

    return {
      totalGmv,
      netPlatformRevenue,
      activeBookingsCount,
      waitingCount,
      completedBookingsCount,
      totalBookingsCount: bookings.length,
      providerTodayRevenue,
      pendingVerificationsCount: pendingVerifications.length,
      unreadNotificationsCount: notifications.filter((n) => !n.read).length
    };
  }, [bookings, businesses, pendingVerifications, notifications]);

  const value = {
    // State
    user,
    setUser,
    businesses,
    setBusinesses,
    bookings,
    setBookings,
    notifications,
    setNotifications,
    pendingVerifications,
    setPendingVerifications,
    favorites,
    setFavorites,
    toast,
    setToast,
    computedStats,
    automationSettings,
    automationLogs,
    // Actions
    showToast,
    createBooking,
    updateBookingStatus,
    rescheduleBooking,
    cancelBooking,
    createWalkInOrder,
    verifyBusinessApplication,
    sendAdminBroadcast,
    submitReview,
    toggleAutomation,
    callNextInQueue,
    customerCheckIn,
    clearAutomationLogs
  };

  return <PlatformContext.Provider value={value}>{children}</PlatformContext.Provider>;
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
}
