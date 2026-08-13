import React from 'react';
import { Users, Building2, Calendar, DollarSign, CheckCircle2, AlertCircle } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function AdminDashboard({ onNavigateTab }) {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }} className="animate-fade-in">
      {/* Metric KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
        {[
          { title: "Total Users", value: ADMIN_STATS.totalUsers.toLocaleString(), sub: "+1,240 this week", icon: <Users size={20} color="#4F46E5" />, bg: '#EEF2FF' },
          { title: "Active Businesses", value: ADMIN_STATS.totalBusinesses.toLocaleString(), sub: "+45 this month", icon: <Building2 size={20} color="#06B6D4" />, bg: '#ECFEFF' },
          { title: "Total Bookings", value: ADMIN_STATS.totalBookings.toLocaleString(), sub: "100% fulfilled", icon: <Calendar size={20} color="#10B981" />, bg: '#ECFDF5' },
          { title: "Platform GMV", value: ADMIN_STATS.gmv, sub: "Gross volume", icon: <DollarSign size={20} color="#F59E0B" />, bg: '#FFFBEB' },
          { title: "Commission Rate", value: ADMIN_STATS.commission, sub: "Avg platform cut", icon: <DollarSign size={20} color="#EC4899" />, bg: '#FCE7F3' }
        ].map((card, idx) => (
          <div key={idx} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '18px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B' }}>{card.title}</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
              </div>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>{card.value}</div>
            <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700, marginTop: '2px' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Grid: Pending Verifications & Activity Stream */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Pending Verification Banner Box */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Pending Business Applications</h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B' }}>3 new businesses awaiting document verification</p>
            </div>

            <button
              onClick={() => onNavigateTab('verification')}
              style={{ padding: '8px 16px', borderRadius: '10px', background: '#4F46E5', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700 }}
            >
              Review All Queue →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ADMIN_STATS.pendingVerifications.map(item => (
              <div key={item.id} style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{item.name}</div>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{item.category} • Owner: {item.owner} ({item.city})</p>
                </div>
                <span className="badge badge-warning">Needs Verification</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time System Feed */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>System Live Feed</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.82rem', color: '#475569' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: '#F8FAFC', borderLeft: '3px solid #10B981' }}>
              <strong>New Booking:</strong> #APT-98241 confirmed at Urban Cut Studio (₹329)
            </div>
            <div style={{ padding: '10px', borderRadius: '12px', background: '#F8FAFC', borderLeft: '3px solid #4F46E5' }}>
              <strong>User Signup:</strong> Dilshan Perera (+91 98765 43210) joined
            </div>
            <div style={{ padding: '10px', borderRadius: '12px', background: '#F8FAFC', borderLeft: '3px solid #F59E0B' }}>
              <strong>Business Payout:</strong> ₹28,400 queued for settlement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
