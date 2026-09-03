import React from 'react';
import { Calendar, DollarSign, Users, Star, TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

export default function ProviderOverview({ onNavigateTab }) {
  const { bookings, computedStats } = usePlatform();

  // Filter today's bookings for Urban Cut Studio or all active bookings
  const todaySchedule = bookings.slice(0, 5).map(b => ({
    time: b.time || "02:30 PM",
    customer: b.customer || b.customerName || "Customer",
    service: b.serviceName || b.service || "Haircut",
    staff: b.staffName || b.staff || "Rahul S.",
    status: b.status || "Confirmed",
    paid: `₹${b.totalPaid || b.price || 329}`
  }));

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }} className="animate-fade-in">
      {/* Metric Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { title: "Today's Appointments", value: bookings.length, sub: "Live synced with App", icon: <Calendar size={22} color="#4F46E5" />, bg: '#EEF2FF' },
          { title: "Today's Revenue", value: `₹${computedStats.providerTodayRevenue.toLocaleString()}`, sub: "Including POS & Online", icon: <DollarSign size={22} color="#10B981" />, bg: '#ECFDF5' },
          { title: "Active Bookings", value: computedStats.activeBookingsCount, sub: "Upcoming & In Service", icon: <Users size={22} color="#06B6D4" />, bg: '#ECFEFF' },
          { title: "Average Rating", value: "4.9 ★", sub: "Based on 342 verified reviews", icon: <Star size={22} color="#F59E0B" />, bg: '#FFFBEB' }
        ].map((card, idx) => (
          <div
            key={idx}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B' }}>{card.title}</span>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
              </div>
            </div>

            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>{card.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginTop: '4px' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Grid: Today's Schedule & Popular Services */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Today's Live Schedule */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Today's Live Schedule</h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B' }}>14 Aug 2026 • Real-time booking slots</p>
            </div>
            <button
              onClick={() => onNavigateTab('appointments')}
              style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4F46E5', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              All Appointments →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {todaySchedule.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#4F46E5', width: '75px' }}>{item.time}</div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{item.customer}</h4>
                    <p style={{ fontSize: '0.78rem', color: '#64748B' }}>{item.service} • {item.staff}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className={`badge ${item.status === 'Completed' ? 'badge-success' : 'badge-primary'}`}>
                    {item.status}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{item.paid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services Chart */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Top Performing Services</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {PROVIDER_STATS.popularServices.map((srv, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', borderRadius: '16px', padding: '14px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                  <span>{srv.name}</span>
                  <span style={{ color: '#4F46E5' }}>₹{srv.revenue.toLocaleString()}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', margin: '4px 0 8px' }}>{srv.bookings} bookings completed</div>
                <div style={{ width: '100%', height: '6px', borderRadius: '999px', background: '#E2E8F0', overflow: 'hidden' }}>
                  <div style={{ width: `${100 - idx * 25}%`, height: '100%', background: '#4F46E5', borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
