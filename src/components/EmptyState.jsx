import React from 'react';
import { CalendarX, HeartOff, SearchX, BellOff, Award, CreditCard } from 'lucide-react';

export default function EmptyState({ type = 'bookings', title, message, onAction, actionLabel }) {
  const configs = {
    bookings: {
      icon: <CalendarX size={48} color="#4F46E5" />,
      title: title || "No Bookings Yet",
      message: message || "You haven't booked any appointments yet. Discover top-rated salons, spas, or gyms near you!",
      actionLabel: actionLabel || "Discover Services"
    },
    favorites: {
      icon: <HeartOff size={48} color="#EC4899" />,
      title: title || "No Saved Favorites",
      message: message || "Tap the heart icon on any business profile to save them here for quick 1-click repeat booking.",
      actionLabel: actionLabel || "Explore Nearby"
    },
    search: {
      icon: <SearchX size={48} color="#06B6D4" />,
      title: title || "No Results Found",
      message: message || "We couldn't find matches for your search. Try searching for 'Haircut', 'Spa', or 'Dental'.",
      actionLabel: actionLabel || "Clear Filters"
    },
    notifications: {
      icon: <BellOff size={48} color="#94A3B8" />,
      title: title || "All Caught Up!",
      message: message || "You have no unread notifications right now.",
      actionLabel: actionLabel || "Back to Home"
    },
    rewards: {
      icon: <Award size={48} color="#F59E0B" />,
      title: title || "No Reward History",
      message: message || "Complete your first appointment to earn Apo Reward points and unlock instant discounts!",
      actionLabel: actionLabel || "Book Now"
    },
    payment: {
      icon: <CreditCard size={48} color="#10B981" />,
      title: title || "No Saved Payment Methods",
      message: message || "Add your preferred UPI ID or card for 1-tap fast checkout.",
      actionLabel: actionLabel || "Add Payment Method"
    }
  };

  const current = configs[type] || configs.bookings;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      textAlign: 'center',
      background: '#FFFFFF',
      borderRadius: '24px',
      border: '1px border-subtle',
      margin: '20px'
    }}>
      <div style={{
        width: '88px',
        height: '88px',
        borderRadius: '24px',
        background: '#EEF2FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px'
      }}>
        {current.icon}
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{current.title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#64748B', maxWidth: '300px', lineHeight: 1.5, marginBottom: '20px' }}>{current.message}</p>
      {onAction && (
        <button
          onClick={onAction}
          style={{
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(79,70,229,0.3)'
          }}
        >
          {current.actionLabel}
        </button>
      )}
    </div>
  );
}
