import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, XCircle, Clock, ChevronRight, Scissors } from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

export default function ProviderAppointments() {
  const { bookings, updateBookingStatus } = usePlatform();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const appointmentsList = bookings.map(b => ({
    id: b.id,
    customer: b.customer || b.customerName || "Customer",
    phone: b.customerPhone || b.phone || "+91 98765 43210",
    service: b.serviceName || b.service || "Service",
    staff: b.staffName || b.staff || "Rahul Sharma",
    date: b.date || "14 Aug 2026",
    time: b.time || "02:30 PM",
    amount: `₹${b.totalPaid || b.totalAmount || b.price || 329}`,
    status: b.status || "Confirmed"
  }));

  const filteredAppointments = appointmentsList.filter(apt => {
    const matchesFilter = filterStatus === 'all' || apt.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch =
      apt.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.staff.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      {/* Header & Controls */}
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Live Appointment Registry</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Synchronized real-time bookings across Customer & Admin platforms</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['all', 'Confirmed', 'In Service', 'Completed', 'Cancelled'].map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: filterStatus === st ? '1px solid #4F46E5' : '1px solid #E2E8F0',
                  background: filterStatus === st ? '#EEF2FF' : '#FFFFFF',
                  color: filterStatus === st ? '#4F46E5' : '#64748B',
                  cursor: 'pointer'
                }}
              >
                {st === 'all' ? 'All Bookings' : st}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F1F5F9', padding: '8px 14px', borderRadius: '12px' }}>
            <Search size={16} color="#64748B" />
            <input
              type="text"
              placeholder="Search customer, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', fontSize: '0.85rem', outline: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>Booking ID</th>
              <th style={{ padding: '14px 20px' }}>Customer</th>
              <th style={{ padding: '14px 20px' }}>Service & Specialist</th>
              <th style={{ padding: '14px 20px' }}>Date & Time</th>
              <th style={{ padding: '14px 20px' }}>Amount</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
              <th style={{ padding: '14px 20px' }}>Live Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#94A3B8' }}>
                  No appointments found matching this filter.
                </td>
              </tr>
            ) : (
              filteredAppointments.map(apt => (
                <tr key={apt.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 800, color: '#4F46E5' }}>#{apt.id}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 800, color: '#0F172A' }}>{apt.customer}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{apt.phone}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 700, color: '#0F172A' }}>{apt.service}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Specialist: {apt.staff}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 700, color: '#0F172A' }}>{apt.date}</div>
                    <div style={{ fontSize: '0.75rem', color: '#4F46E5', fontWeight: 600 }}>{apt.time}</div>
                  </td>
                  <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{apt.amount}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      background: apt.status === 'Completed' ? '#ECFDF5' : apt.status === 'In Service' ? '#EEF2FF' : apt.status === 'Cancelled' ? '#FEF2F2' : '#EFF6FF',
                      color: apt.status === 'Completed' ? '#059669' : apt.status === 'In Service' ? '#4F46E5' : apt.status === 'Cancelled' ? '#DC2626' : '#2563EB',
                      border: `1px solid ${apt.status === 'Completed' ? '#A7F3D0' : apt.status === 'In Service' ? '#C7D2FE' : apt.status === 'Cancelled' ? '#FECACA' : '#BFDBFE'}`
                    }}>
                      {apt.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {apt.status !== 'Completed' && apt.status !== 'Cancelled' && (
                        <>
                          {apt.status !== 'In Service' && (
                            <button
                              onClick={() => updateBookingStatus(apt.id, 'In Service')}
                              style={{
                                padding: '6px 10px',
                                borderRadius: '8px',
                                background: '#EEF2FF',
                                color: '#4F46E5',
                                border: '1px solid #C7D2FE',
                                fontSize: '0.74rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              In Service
                            </button>
                          )}
                          <button
                            onClick={() => updateBookingStatus(apt.id, 'Completed')}
                            style={{
                              padding: '6px 10px',
                              borderRadius: '8px',
                              background: '#ECFDF5',
                              color: '#059669',
                              border: '1px solid #A7F3D0',
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Complete ✓
                          </button>
                        </>
                      )}
                      {apt.status === 'Completed' && (
                        <span style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 700 }}>
                          Points Dispatched
                        </span>
                      )}
                      {apt.status === 'Cancelled' && (
                        <span style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 600 }}>
                          Refund Closed
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
