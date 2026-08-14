import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, RotateCcw, Star, ShieldCheck, Navigation, QrCode, Ticket, CheckCircle2, AlertCircle } from 'lucide-react';
import EmptyState from '../../components/EmptyState';

export default function BookingsTab({ bookings, onSelectBooking, onBookAgain, onOpenReview }) {
  const [activeSubTab, setActiveSubTab] = useState('upcoming');

  const upcomingBookings = bookings.filter(b => b.status === 'Confirmed' || b.status === 'Upcoming');
  const completedBookings = bookings.filter(b => b.status === 'Completed');
  const cancelledBookings = bookings.filter(b => b.status === 'Cancelled');

  const filtered = activeSubTab === 'upcoming' ? upcomingBookings : activeSubTab === 'completed' ? completedBookings : cancelledBookings;

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Dark Midnight Header with Glassmorphism */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 22px',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px',
        color: '#FFFFFF',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        borderBottom: '1px solid rgba(255,255,255,0.12)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              My Appointments
            </span>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Manage Bookings 📅
            </h1>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 800,
            color: '#C7D2FE'
          }}>
            {upcomingBookings.length} Active
          </div>
        </div>

        {/* Apple Segmented Pill Tabs */}
        <div style={{
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '4px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {[
            { id: 'upcoming', label: 'Upcoming', count: upcomingBookings.length },
            { id: 'completed', label: 'Completed', count: completedBookings.length },
            { id: 'cancelled', label: 'Cancelled', count: cancelledBookings.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              style={{
                flex: 1,
                padding: '9px 0',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: activeSubTab === tab.id ? '#0F172A' : '#C7D2FE',
                background: activeSubTab === tab.id ? '#FFFFFF' : 'transparent',
                boxShadow: activeSubTab === tab.id ? '0 4px 14px rgba(0,0,0,0.18)' : 'none',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <span>{tab.label}</span>
              {tab.count > 0 && (
                <span style={{
                  fontSize: '0.68rem',
                  padding: '2px 6px',
                  borderRadius: '999px',
                  background: activeSubTab === tab.id ? '#EEF2FF' : 'rgba(255,255,255,0.2)',
                  color: activeSubTab === tab.id ? '#4F46E5' : '#FFFFFF',
                  fontWeight: 800
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List Cards */}
      <div style={{ padding: '20px' }}>
        {filtered.length === 0 ? (
          <EmptyState type="bookings" />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filtered.map(b => (
              <div
                key={b.id}
                onClick={() => onSelectBooking(b)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  padding: '18px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Header Row: ID + Status Pill */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: '#EEF2FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4F46E5'
                    }}>
                      <Ticket size={16} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.04em' }}>
                      #{b.id}
                    </span>
                  </div>

                  <span className={`badge ${b.status === 'Confirmed' || b.status === 'Upcoming' ? 'badge-success' : b.status === 'Completed' ? 'badge-primary' : 'badge-danger'}`} style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    {b.status === 'Confirmed' || b.status === 'Upcoming' ? '🟢 Confirmed' : b.status === 'Completed' ? '✅ Completed' : '❌ Cancelled'}
                  </span>
                </div>

                {/* Business Info Banner */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: '0 4px 10px rgba(79,70,229,0.12)'
                  }}>
                    ✂️
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                      {b.businessName}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                      <MapPin size={12} color="#94A3B8" />
                      <span>{b.businessAddress || 'Civil Lines, Sector 14, Gurugram'}</span>
                    </p>
                  </div>
                </div>

                {/* Service Details Box */}
                <div style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '12px 14px',
                  marginBottom: '14px',
                  border: '1px solid #F1F5F9'
                }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    {b.serviceName} • {b.staffName}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4F46E5', fontWeight: 700, fontSize: '0.8rem' }}>
                      <Calendar size={14} />
                      <span>{b.date} at {b.time}</span>
                    </div>

                    {/* OTP Box for Upcoming */}
                    {(b.status === 'Confirmed' || b.status === 'Upcoming') && (
                      <div style={{
                        background: '#EEF2FF',
                        border: '1px solid #C7D2FE',
                        padding: '3px 8px',
                        borderRadius: '8px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#4338CA'
                      }}>
                        OTP: {b.otp || '4892'}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Total Paid</span>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>₹{b.totalPaid || b.price}</div>
                  </div>

                  {(b.status === 'Confirmed' || b.status === 'Upcoming') ? (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://maps.google.com/?q=${encodeURIComponent(b.businessName)}`, '_blank');
                        }}
                        style={{
                          padding: '8px 14px',
                          borderRadius: '999px',
                          background: '#F1F5F9',
                          color: '#334155',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <Navigation size={13} />
                        <span>Navigate</span>
                      </button>
                      <button
                        style={{
                          padding: '8px 14px',
                          borderRadius: '999px',
                          background: '#4F46E5',
                          color: '#FFFFFF',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          boxShadow: '0 4px 12px rgba(79,70,229,0.25)'
                        }}
                      >
                        <span>Details</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {b.status === 'Completed' && (
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenReview(b); }}
                          style={{
                            padding: '8px 14px',
                            borderRadius: '999px',
                            background: '#FEF3C7',
                            color: '#D97706',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Star size={13} fill="#D97706" />
                          <span>Rate</span>
                        </button>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); onBookAgain(b); }}
                        style={{
                          padding: '8px 14px',
                          borderRadius: '999px',
                          background: '#EEF2FF',
                          color: '#4F46E5',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <RotateCcw size={13} />
                        <span>Book Again</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
