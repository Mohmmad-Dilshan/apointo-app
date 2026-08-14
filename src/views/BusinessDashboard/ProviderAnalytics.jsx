import React, { useState } from 'react';
import { TrendingUp, Users, Clock, Flame, Calendar, DollarSign, ArrowUpRight, Filter } from 'lucide-react';

export default function ProviderAnalytics() {
  const [timeframe, setTimeframe] = useState('7d');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Weekly Revenue Trend Data Points (Aug 8 - Aug 14)
  const revenueData = [
    { day: 'Mon', rev: 28400, bookings: 12 },
    { day: 'Tue', rev: 32100, bookings: 14 },
    { day: 'Wed', rev: 31000, bookings: 13 },
    { day: 'Thu', rev: 39500, bookings: 16 },
    { day: 'Fri', rev: 42850, bookings: 18 },
    { day: 'Sat', rev: 51200, bookings: 22 },
    { day: 'Sun', rev: 48900, bookings: 20 }
  ];

  const maxRev = 60000;
  const chartHeight = 180;
  const chartWidth = 550;

  // Generate SVG path for smooth bezier curve
  const points = revenueData.map((d, i) => {
    const x = (i / (revenueData.length - 1)) * (chartWidth - 40) + 20;
    const y = chartHeight - (d.rev / maxRev) * (chartHeight - 40) - 20;
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, pt, i, a) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = a[i - 1];
    const cx = (prev.x + pt.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${pt.y}, ${pt.x} ${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }} className="animate-fade-in">
      {/* Analytics Header */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>Business Performance Analytics</h2>
            <span className="badge badge-success"><TrendingUp size={12} /> +24.8% YoY</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '2px' }}>Real-time revenue, booking velocity & retention metrics</p>
        </div>

        <div style={{ display: 'flex', gap: '8px', background: '#F1F5F9', padding: '4px', borderRadius: '12px' }}>
          {['7d', '30d', '90d', '1y'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: timeframe === tf ? '#FFFFFF' : 'transparent',
                color: timeframe === tf ? '#4F46E5' : '#64748B',
                boxShadow: timeframe === tf ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              {tf.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 Metric Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { title: "Weekly Revenue", val: "₹2,73,950", change: "+14.2%", icon: <DollarSign size={20} color="#4F46E5" />, bg: "#EEF2FF" },
          { title: "Avg Ticket Value", val: "₹2,382", change: "+8.5%", icon: <TrendingUp size={20} color="#10B981" />, bg: "#ECFDF5" },
          { title: "Peak Occupancy", val: "88.4%", change: "04-07 PM", icon: <Clock size={20} color="#F59E0B" />, bg: "#FFFBEB" },
          { title: "Repeat Rate", val: "92.4%", change: "High Loyalty", icon: <Users size={20} color="#06B6D4" />, bg: "#ECFEFF" }
        ].map((item, idx) => (
          <div key={idx} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B' }}>{item.title}</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>{item.val}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', marginTop: '4px' }}>{item.change}</div>
          </div>
        ))}
      </div>

      {/* Main Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Revenue Trend SVG Line Chart */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Revenue Growth Curve</h3>
              <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Daily revenue progression in INR (₹)</p>
            </div>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4F46E5' }}>Total: ₹2.73L</span>
          </div>

          {/* SVG Area Chart */}
          <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: '200px', overflow: 'visible' }}>
              <defs>
                <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Background Grid Lines */}
              {[0, 0.33, 0.66, 1].map((ratio, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={ratio * (chartHeight - 30) + 10}
                  x2={chartWidth}
                  y2={ratio * (chartHeight - 30) + 10}
                  stroke="#F1F5F9"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Filled Area */}
              <path d={areaD} fill="url(#revGradient)" />

              {/* Smooth Path Line */}
              <path d={pathD} fill="none" stroke="#4F46E5" strokeWidth="3.5" strokeLinecap="round" />

              {/* Data Points */}
              {points.map((pt, i) => (
                <g key={i} onMouseEnter={() => setHoveredPoint(pt)} onMouseLeave={() => setHoveredPoint(null)}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint?.day === pt.day ? "7" : "5"}
                    fill="#FFFFFF"
                    stroke="#4F46E5"
                    strokeWidth="3"
                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                  />
                  <text x={pt.x} y={chartHeight + 15} textAnchor="middle" fontSize="11" fontWeight="700" fill="#64748B">
                    {pt.day}
                  </text>
                </g>
              ))}
            </svg>

            {/* Hover Tooltip */}
            {hoveredPoint && (
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                {hoveredPoint.day}: ₹{hoveredPoint.rev.toLocaleString()} ({hoveredPoint.bookings} bookings)
              </div>
            )}
          </div>
        </div>

        {/* Category Breakdown Donut / Bar Chart */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>Revenue Distribution</h3>
            <p style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '20px' }}>By service categories</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { name: "Haircut & Styling", pct: 45, color: "#6366F1", val: "₹1,23,200" },
                { name: "Beard Sculpting", pct: 30, color: "#06B6D4", val: "₹82,100" },
                { name: "Facial & Grooming", pct: 15, color: "#10B981", val: "₹41,050" },
                { name: "Add-ons & Products", pct: 10, color: "#F59E0B", val: "₹27,600" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                      <span>{item.name}</span>
                    </div>
                    <span>{item.val}</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: '999px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Top Growth: Haircut & Styling</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10B981' }}>+32%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

