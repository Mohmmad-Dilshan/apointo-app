import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, XCircle, Clock, ChevronRight } from 'lucide-react';
import { INITIAL_BOOKINGS } from '../../data/sampleData';

export default function ProviderAppointments() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const appointmentsList = [
    { id: "APT-98241", customer: "Dilshan Perera", phone: "+91 98765 43210", service: "Classic Haircut & Styling", staff: "Rahul Sharma", date: "14 Aug 2026", time: "02:30 PM", amount: "₹329", status: "Confirmed" },
    { id: "APT-87120", customer: "Arjun Kapoor", phone: "+91 98123 45678", service: "Beard Crafting Combo", staff: "Vikram Singh", date: "14 Aug 2026", time: "10:30 AM", amount: "₹499", status: "Completed" },
    { id: "APT-76510", customer: "Rohan Malhotra", phone: "+91 99887 76655", service: "Royal Deluxe Grooming", staff: "Priya Verma", date: "15 Aug 2026", time: "05:00 PM", amount: "₹899", status: "Upcoming" },
    { id: "APT-65430", customer: "Siddharth Nair", phone: "+91 97766 55443", service: "Head Spa & Massage", staff: "Rahul Sharma", date: "12 Aug 2026", time: "04:00 PM", amount: "₹399", status: "Cancelled" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      {/* Header & Controls */}
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Appointment Management</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>View & manage customer bookings</p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F1F5F9', padding: '8px 14px', borderRadius: '12px' }}>
            <Search size={16} color="#64748B" />
            <input
              type="text"
              placeholder="Search by customer or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', fontSize: '0.85rem', outline: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>Booking ID</th>
              <th style={{ padding: '14px 20px' }}>Customer</th>
              <th style={{ padding: '14px 20px' }}>Service & Specialist</th>
              <th style={{ padding: '14px 20px' }}>Date & Time</th>
              <th style={{ padding: '14px 20px' }}>Amount</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
              <th style={{ padding: '14px 20px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointmentsList.map(apt => (
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
                  <span className={`badge ${apt.status === 'Confirmed' ? 'badge-success' : apt.status === 'Completed' ? 'badge-primary' : 'badge-danger'}`}>
                    {apt.status}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <button style={{ padding: '6px 12px', borderRadius: '8px', background: '#F1F5F9', fontSize: '0.78rem', fontWeight: 700, color: '#334155' }}>
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
