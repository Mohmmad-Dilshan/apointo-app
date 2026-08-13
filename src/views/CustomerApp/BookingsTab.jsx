import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, RotateCcw, Star } from 'lucide-react';
import EmptyState from '../../components/EmptyState';

export default function BookingsTab({ bookings, onSelectBooking, onBookAgain, onOpenReview }) {
  const [activeSubTab, setActiveSubTab] = useState('upcoming'); // 'upcoming' | 'completed' | 'cancelled'

  const filtered = bookings.filter(b => {
    if (activeSubTab === 'upcoming') return b.status === 'Confirmed' || b.status === 'Upcoming';
    if (activeSubTab === 'completed') return b.status === 'Completed';
    if (activeSubTab === 'cancelled') return b.status === 'Cancelled';
    return true;
  });

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>My Appointments</h1>

        {/* Sub-Tabs Selector */}
        <div style={{ display: 'flex', background: '#F1F5F9', padding: '4px', borderRadius: '14px' }}>
          {[
            { id: 'upcoming', label: 'Upcoming' },
            { id: 'completed', label: 'Completed' },
            { id: 'cancelled', label: 'Cancelled' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              style={{
                flex: 1,
                padding: '8px 0',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: activeSubTab === tab.id ? '#0F172A' : '#64748B',
                background: activeSubTab === tab.id ? '#FFFFFF' : 'transparent',
                boxShadow: activeSubTab === tab.id ? '0 2px 6px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div style={{ padding: '20px' }}>
        {filtered.length === 0 ? (
          <EmptyState type="bookings" />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filtered.map(b => (
              <div
                key={b.id}
                onClick={() => onSelectBooking(b)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Booking #{b.id}</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{b.businessName}</h3>
                  </div>
                  <span className={`badge ${b.status === 'Confirmed' ? 'badge-success' : b.status === 'Completed' ? 'badge-primary' : 'badge-danger'}`}>
                    {b.status}
                  </span>
                </div>

                <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '10px 12px', marginBottom: '12px', fontSize: '0.82rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>{b.serviceName} • {b.staffName}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4F46E5', fontWeight: 600 }}>
                    <Calendar size={14} /> {b.date} at {b.time}
                  </div>
                </div>

                {/* Quick Action Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>₹{b.totalPaid || b.price}</span>

                  {b.status === 'Confirmed' ? (
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>View Details</span>
                      <ChevronRight size={14} />
                    </span>
                  ) : (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenReview(b); }}
                        style={{ padding: '6px 12px', borderRadius: '8px', background: '#FEF3C7', color: '#D97706', fontSize: '0.75rem', fontWeight: 700 }}
                      >
                        Rate & Review
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); onBookAgain(b); }}
                        style={{ padding: '6px 12px', borderRadius: '8px', background: '#EEF2FF', color: '#4F46E5', fontSize: '0.75rem', fontWeight: 700 }}
                      >
                        Book Again
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
