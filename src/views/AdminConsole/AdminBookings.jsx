import React from 'react';
import { Search, Building, Calendar } from 'lucide-react';

export default function AdminBookings() {
  const globalBookings = [
    { id: "APT-98241", customer: "Dilshan Perera", business: "Urban Cut Studio", service: "Classic Haircut", date: "14 Aug 2026", time: "02:30 PM", gmv: "₹329", status: "Confirmed" },
    { id: "APT-87120", customer: "Sneha Nair", business: "Glow Beauty Lounge", service: "Hydra Facial", date: "05 Aug 2026", time: "04:00 PM", gmv: "₹1,049", status: "Completed" },
    { id: "APT-76510", customer: "Rohan Kapoor", business: "FitZone Fitness", service: "Workout Pass", date: "10 Aug 2026", time: "06:00 PM", gmv: "₹350", status: "Completed" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Global System Bookings</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Monitor all customer bookings across India</p>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>Booking ID</th>
              <th style={{ padding: '14px 20px' }}>Customer</th>
              <th style={{ padding: '14px 20px' }}>Business</th>
              <th style={{ padding: '14px 20px' }}>Service</th>
              <th style={{ padding: '14px 20px' }}>Slot</th>
              <th style={{ padding: '14px 20px' }}>Amount</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {globalBookings.map(b => (
              <tr key={b.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#4F46E5' }}>#{b.id}</td>
                <td style={{ padding: '16px 20px', fontWeight: 700, color: '#0F172A' }}>{b.customer}</td>
                <td style={{ padding: '16px 20px', fontWeight: 700, color: '#334155' }}>{b.business}</td>
                <td style={{ padding: '16px 20px', color: '#64748B' }}>{b.service}</td>
                <td style={{ padding: '16px 20px', color: '#4F46E5', fontWeight: 600 }}>{b.date} • {b.time}</td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{b.gmv}</td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge ${b.status === 'Confirmed' ? 'badge-success' : 'badge-primary'}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
