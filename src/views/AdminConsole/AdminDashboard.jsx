import React, { useState } from 'react';
import { Users, Building2, Calendar, DollarSign, CheckCircle2, TrendingUp, ShieldAlert, ArrowUpRight, Zap, Activity, Tag, Bell, Shield, Sparkles, MapPin, BarChart3, Clock, AlertTriangle } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function AdminDashboard({ onNavigateTab }) {
  const [chartTimeframe, setChartTimeframe] = useState('7d'); // '7d' | '30d' | '12m'

  const chartData = {
    '7d': {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      points: [42, 58, 65, 78, 92, 118, 142],
      gmvTotal: "₹34.8 Lakhs",
      bookingsTotal: "1,840 Slots"
    },
    '30d': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      points: [180, 240, 310, 420],
      gmvTotal: "₹1.48 Crore",
      bookingsTotal: "7,920 Slots"
    },
    '12m': {
      labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
      points: [45, 90, 140, 220, 360, 580],
      gmvTotal: "₹8.42 Crore",
      bookingsTotal: "48,200 Slots"
    }
  };

  const activeChart = chartData[chartTimeframe];

  // SVG Chart Polyline generator
  const minVal = Math.min(...activeChart.points);
  const maxVal = Math.max(...activeChart.points);
  const svgWidth = 600;
  const svgHeight = 160;
  const polyPoints = activeChart.points.map((val, idx) => {
    const x = (idx / (activeChart.points.length - 1)) * (svgWidth - 40) + 20;
    const y = svgHeight - 20 - ((val - minVal) / (maxVal - minVal || 1)) * (svgHeight - 50);
    return `${x},${y}`;
  }).join(' ');

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
        <div style={{ position: 'absolute', top: -40, right: -40, width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(129, 140, 248, 0.25)', filter: 'blur(50px)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2, flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#A5B4FC', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Apo Unified Marketplace Command Engine
              </span>
            </div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {ADMIN_STATS.gmv} <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#A5B4FC' }}>GMV</span>
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#34D399', fontWeight: 800 }}>
                <TrendingUp size={16} /> +32.4% MoM
              </span>
              <span>• Net Commission: <strong style={{ color: '#FFFFFF' }}>{ADMIN_STATS.commission} (12%)</strong></span>
              <span>• Active Across 14 Metros</span>
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigateTab('merchants')}
              style={{
                padding: '12px 18px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <Building2 size={16} color="#38BDF8" />
              <span>Manage Merchants</span>
            </button>

            <button
              onClick={() => onNavigateTab('verification')}
              style={{
                padding: '12px 18px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <ShieldAlert size={16} color="#FBBF24" />
              <span>KYC Queue ({ADMIN_STATS.pendingVerifications.length})</span>
            </button>

            <button
              onClick={() => onNavigateTab('broadcast')}
              style={{
                padding: '12px 18px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(236, 72, 153, 0.4)'
              }}
            >
              <Bell size={16} />
              <span>Send Broadcast</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Metric KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { title: "Total Consumers", value: ADMIN_STATS.totalUsers.toLocaleString(), sub: "+1,240 this week", icon: <Users size={20} color="#818CF8" />, bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.25)' },
          { title: "Onboarded Salons", value: ADMIN_STATS.totalBusinesses.toLocaleString(), sub: "+45 this month", icon: <Building2 size={20} color="#38BDF8" />, bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.25)' },
          { title: "Gross Bookings", value: ADMIN_STATS.totalBookings.toLocaleString(), sub: "100% fulfillment", icon: <Calendar size={20} color="#34D399" />, bg: 'rgba(52, 211, 153, 0.15)', border: 'rgba(52, 211, 153, 0.25)' },
          { title: "Settled Payouts", value: "₹74,20,000", sub: "Auto-batch Friday 4PM", icon: <DollarSign size={20} color="#FBBF24" />, bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.25)' }
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

      {/* Interactive Visual Revenue Velocity Chart */}
      <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart3 size={18} color="#818CF8" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>Platform Transaction & Revenue Velocity</h3>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '2px' }}>
              Total GMV: <strong style={{ color: '#34D399' }}>{activeChart.gmvTotal}</strong> • Bookings: <strong style={{ color: '#818CF8' }}>{activeChart.bookingsTotal}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', background: '#0F172A', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { id: '7d', label: '7 Days' },
              { id: '30d', label: '30 Days' },
              { id: '12m', label: '1 Year' },
            ].map(tf => (
              <button
                key={tf.id}
                onClick={() => setChartTimeframe(tf.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  background: chartTimeframe === tf.id ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : 'transparent',
                  color: chartTimeframe === tf.id ? '#FFFFFF' : '#94A3B8',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Dynamic SVG Graph */}
        <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden' }}>
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Horizontal Lines */}
            <line x1="0" y1="30" x2={svgWidth} y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
            <line x1="0" y1="80" x2={svgWidth} y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
            <line x1="0" y1="130" x2={svgWidth} y2="130" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

            {/* Area fill */}
            <polygon
              points={`20,${svgHeight - 20} ${polyPoints} ${svgWidth - 20},${svgHeight - 20}`}
              fill="url(#chartGrad)"
            />

            {/* Main Polyline */}
            <polyline
              fill="none"
              stroke="#6366F1"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={polyPoints}
            />

            {/* Points Data Dots */}
            {activeChart.points.map((val, idx) => {
              const x = (idx / (activeChart.points.length - 1)) * (svgWidth - 40) + 20;
              const y = svgHeight - 20 - ((val - minVal) / (maxVal - minVal || 1)) * (svgHeight - 50);
              return (
                <g key={idx}>
                  <circle cx={x} cy={y} r="5" fill="#131B2E" stroke="#818CF8" strokeWidth="2.5" />
                  <text x={x} y={svgHeight} fill="#64748B" fontSize="10" textAnchor="middle" fontWeight="700">
                    {activeChart.labels[idx]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* City Distribution & Category Volume Heatbars */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* City Breakdown */}
        <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <MapPin size={18} color="#38BDF8" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>City Market Penetration</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { city: 'Bengaluru Metros', gmv: '₹3.42 Cr', share: 41, color: '#6366F1' },
              { city: 'Delhi NCR & Gurugram', gmv: '₹2.15 Cr', share: 25, color: '#38BDF8' },
              { city: 'Mumbai & Bandra', gmv: '₹1.92 Cr', share: 23, color: '#34D399' },
              { city: 'Hyderabad & Pune', gmv: '₹0.93 Cr', share: 11, color: '#FBBF24' },
            ].map((c, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span style={{ color: '#E2E8F0' }}>{c.city}</span>
                  <span style={{ color: c.color }}>{c.gmv} ({c.share}%)</span>
                </div>
                <div style={{ width: '100%', height: '8px', borderRadius: '999px', background: '#0F172A', overflow: 'hidden' }}>
                  <div style={{ width: `${c.share}%`, height: '100%', background: c.color, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Share */}
        <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Tag size={18} color="#F59E0B" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>Category Share & Demand</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { category: 'Haircut & Styling Salons', bookings: '20,240 Slots', share: 42, color: '#EC4899' },
              { category: 'Aesthetic & Dermatology', bookings: '12,530 Slots', share: 26, color: '#818CF8' },
              { category: 'Luxury Spa & Ayurveda', bookings: '8,670 Slots', share: 18, color: '#34D399' },
              { category: 'Dental & Smile Clinics', bookings: '6,760 Slots', share: 14, color: '#F59E0B' },
            ].map((cat, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span style={{ color: '#E2E8F0' }}>{cat.category}</span>
                  <span style={{ color: cat.color }}>{cat.bookings} ({cat.share}%)</span>
                </div>
                <div style={{ width: '100%', height: '8px', borderRadius: '999px', background: '#0F172A', overflow: 'hidden' }}>
                  <div style={{ width: `${cat.share}%`, height: '100%', background: cat.color, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
