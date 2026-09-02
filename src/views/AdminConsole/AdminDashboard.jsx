import React from 'react';
import { Users, Building2, Calendar, DollarSign, CheckCircle2, TrendingUp, ShieldAlert, ArrowUpRight, Zap, Activity } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function AdminDashboard({ onNavigateTab }) {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Platform Gross Volume Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
        borderRadius: '24px',
        padding: '28px 32px',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
      }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(129, 140, 248, 0.2)', filter: 'blur(50px)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2, flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#A5B4FC', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Apointo Unified Marketplace Performance
              </span>
            </div>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {ADMIN_STATS.gmv} <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#A5B4FC' }}>GMV</span>
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#34D399', fontWeight: 800 }}>
                <TrendingUp size={16} /> +32.4% MoM
              </span>
              <span>• Net Platform Commission: <strong style={{ color: '#FFFFFF' }}>{ADMIN_STATS.commission}</strong></span>
              <span>• Active Across 14 Metros</span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => onNavigateTab('verification')}
              style={{
                padding: '12px 20px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <ShieldAlert size={16} color="#FBBF24" />
              <span>Review KYC ({ADMIN_STATS.pendingVerifications.length})</span>
            </button>

            <button
              onClick={() => onNavigateTab('payments')}
              style={{
                padding: '12px 20px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)'
              }}
            >
              <DollarSign size={16} />
              <span>Merchant Payouts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { title: "Total Consumer Accounts", value: ADMIN_STATS.totalUsers.toLocaleString(), sub: "+1,240 this week", icon: <Users size={20} color="#818CF8" />, bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.25)' },
          { title: "Onboarded Salons & Clinics", value: ADMIN_STATS.totalBusinesses.toLocaleString(), sub: "+45 this month", icon: <Building2 size={20} color="#38BDF8" />, bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.25)' },
          { title: "Gross Completed Bookings", value: ADMIN_STATS.totalBookings.toLocaleString(), sub: "100% fulfillment", icon: <Calendar size={20} color="#34D399" />, bg: 'rgba(52, 211, 153, 0.15)', border: 'rgba(52, 211, 153, 0.25)' },
          { title: "Settled Payouts This Month", value: "₹74,20,000", sub: "Auto-batch Friday 4PM", icon: <DollarSign size={20} color="#FBBF24" />, bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.25)' }
        ].map((card, idx) => (
          <div key={idx} style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: `1px solid ${card.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8' }}>{card.title}</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>{card.value}</div>
            <div style={{ fontSize: '0.74rem', color: '#34D399', fontWeight: 700, marginTop: '4px' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Grid: Pending Verifications & Live Event Stream */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Pending Verification Box */}
        <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldAlert size={18} color="#F59E0B" /> Pending Business KYC Applications
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Inspect submitted documents & grant verified badge</p>
            </div>

            <button
              onClick={() => onNavigateTab('verification')}
              style={{
                padding: '8px 16px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Review All ({ADMIN_STATS.pendingVerifications.length})</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ADMIN_STATS.pendingVerifications.map(item => (
              <div
                key={item.id}
                onClick={() => onNavigateTab('verification')}
                style={{
                  background: '#0F172A',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#FFFFFF' }}>{item.name}</h4>
                    <span style={{ fontSize: '0.65rem', background: 'rgba(99, 102, 241, 0.2)', color: '#818CF8', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>#{item.id}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '3px' }}>
                    {item.category} • Owner: {item.owner} ({item.city}) • Submitted: {item.date}
                  </p>
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#FBBF24',
                  background: 'rgba(251, 191, 36, 0.15)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  whiteSpace: 'nowrap'
                }}>
                  Needs Clearance
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Platform Activity Stream */}
        <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Zap size={18} color="#38BDF8" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>Platform Live Ticker</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: '✂️', title: 'New Booking #APT-98241', text: 'Urban Cut Studio (Classic Haircut • ₹329)', time: '2m ago', color: '#10B981' },
              { icon: '👤', title: 'User Registered', text: 'Dilshan Perera (+91 98765 43210)', time: '8m ago', color: '#6366F1' },
              { icon: '💳', title: 'Batch Payout Scheduled', text: '₹1,42,800 to Urban Cut Studio', time: '15m ago', color: '#F59E0B' },
              { icon: '🛡️', title: 'New KYC Submission', text: 'Aura Spa & Wellness uploaded GST', time: '1h ago', color: '#EC4899' },
            ].map((feed, idx) => (
              <div key={idx} style={{ padding: '12px 14px', borderRadius: '14px', background: '#0F172A', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>{feed.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FFFFFF' }}>{feed.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>{feed.text}</div>
                </div>
                <span style={{ fontSize: '0.68rem', color: '#64748B' }}>{feed.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
