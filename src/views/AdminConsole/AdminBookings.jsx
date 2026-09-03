import React, { useState } from 'react';
import { Search, Calendar, Building, Clock, DollarSign, Filter, MapPin, CheckCircle2, XCircle, ChevronRight, X, AlertCircle } from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

export default function AdminBookings() {
  const { bookings, cancelBooking } = usePlatform();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  const displayBookings = bookings.map(b => {
    const rawGmv = Number(b.totalPaid) || Number(b.price) || 329;
    const cutAmount = (rawGmv * 0.12).toFixed(2);
    return {
      id: b.id,
      customer: b.customer || b.customerName || "Customer",
      phone: b.customerPhone || b.phone || "+91 98765 43210",
      business: b.businessName || b.business || "Urban Cut Studio",
      service: b.serviceName || b.service || "Service",
      specialist: b.staffName || b.specialist || "Rahul Sharma",
      date: b.date || "14 Aug 2026",
      time: b.time || "02:30 PM",
      gmv: `₹${rawGmv}`,
      cut: `₹${cutAmount}`,
      paymentMode: b.paymentMethod || "UPI / Razorpay",
      city: b.address?.split(',')?.pop()?.trim() || "Bengaluru",
      status: b.status || "Confirmed"
    };
  });

  const handleCancelBooking = (id) => {
    cancelBooking(id);
    if (selectedBooking?.id === id) {
      setSelectedBooking(prev => ({ ...prev, status: 'Cancelled' }));
    }
    setToastMsg(`Booking #${id} cancelled & instant refund initiated.`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filtered = displayBookings.filter(b => {
    const matchQuery = b.customer.toLowerCase().includes(query.toLowerCase()) ||
                       b.business.toLowerCase().includes(query.toLowerCase()) ||
                       b.id.toLowerCase().includes(query.toLowerCase()) ||
                       b.city.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === 'all' || b.status.toLowerCase() === filter.toLowerCase();
    return matchQuery && matchFilter;
  });

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header & Controls */}
      <div style={{
        background: '#131B2E',
        borderRadius: '20px',
        padding: '20px 24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={20} color="#818CF8" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Global System Bookings Ledger</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Real-time multi-city appointment registry, GMV attribution & refund management
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#0F172A', padding: '8px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', width: '320px' }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search ID, customer, salon, city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '0.82rem', width: '100%', outline: 'none' }}
          />
        </div>
      </div>

      {/* Filter Tabs & Quick Metrics */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'Confirmed', 'Completed', 'Cancelled'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: filter === f ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : '#131B2E',
                color: filter === f ? '#FFFFFF' : '#94A3B8',
                border: filter === f ? 'none' : '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer'
              }}
            >
              {f === 'all' ? `All Bookings (${bookings.length})` : `${f} (${bookings.filter(b => b.status === f).length})`}
            </button>
          ))}
        </div>

        {toastMsg && (
          <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '10px', padding: '6px 14px', fontSize: '0.78rem', color: '#34D399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} /> {toastMsg}
          </div>
        )}
      </div>

      {/* Bookings Table */}
      <div style={{ background: '#131B2E', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '16px 20px' }}>Booking ID</th>
              <th style={{ padding: '16px 20px' }}>Customer</th>
              <th style={{ padding: '16px 20px' }}>Merchant Salon</th>
              <th style={{ padding: '16px 20px' }}>Service & Slot</th>
              <th style={{ padding: '16px 20px' }}>GMV (Platform Cut)</th>
              <th style={{ padding: '16px 20px' }}>Status</th>
              <th style={{ padding: '16px 20px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(b => {
              const isConfirmed = b.status === 'Confirmed';
              const isCompleted = b.status === 'Completed';
              const isCancelled = b.status === 'Cancelled';

              return (
                <tr key={b.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 800, color: '#818CF8' }}>#{b.id}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 800, color: '#FFFFFF' }}>{b.customer}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{b.phone}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>{b.business}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>📍 {b.city}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 700, color: '#E2E8F0' }}>{b.service}</div>
                    <div style={{ fontSize: '0.72rem', color: '#818CF8' }}>{b.date} • {b.time}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 900, color: '#34D399', fontSize: '0.95rem' }}>{b.gmv}</div>
                    <div style={{ fontSize: '0.68rem', color: '#A5B4FC' }}>Cut: {b.cut}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      color: isConfirmed ? '#34D399' : isCompleted ? '#818CF8' : '#F43F5E',
                      background: isConfirmed ? 'rgba(52, 211, 153, 0.15)' : isCompleted ? 'rgba(129, 140, 248, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                      border: isConfirmed ? '1px solid rgba(52, 211, 153, 0.3)' : isCompleted ? '1px solid rgba(129, 140, 248, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)'
                    }}>
                      {b.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <button
                      onClick={() => setSelectedBooking(b)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: 'rgba(99, 102, 241, 0.15)',
                        color: '#818CF8',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Inspect Dossier
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Booking Dossier Drawer Modal */}
      {selectedBooking && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '26px',
            maxWidth: '560px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF' }}>Appointment Dossier #{selectedBooking.id}</h3>
                <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Booked via Apo Mobile App</p>
              </div>
              <button onClick={() => setSelectedBooking(null)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: '#0F172A', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase' }}>Customer</span>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>{selectedBooking.customer}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{selectedBooking.phone}</div>
              </div>

              <div style={{ background: '#0F172A', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase' }}>Merchant Partner</span>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>{selectedBooking.business}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Specialist: {selectedBooking.specialist}</div>
              </div>

              <div style={{ background: '#0F172A', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase' }}>Scheduled Slot</span>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#818CF8', marginTop: '2px' }}>{selectedBooking.date}</div>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>{selectedBooking.time}</div>
              </div>

              <div style={{ background: '#0F172A', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase' }}>Payment Mode</span>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#34D399', marginTop: '2px' }}>{selectedBooking.gmv}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{selectedBooking.paymentMode}</div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {selectedBooking.status !== 'Cancelled' && (
                <button
                  onClick={() => handleCancelBooking(selectedBooking.id)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(244, 63, 94, 0.15)',
                    border: '1px solid rgba(244, 63, 94, 0.3)',
                    color: '#F43F5E',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  Force Cancel & Refund
                </button>
              )}

              <button
                onClick={() => setSelectedBooking(null)}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
