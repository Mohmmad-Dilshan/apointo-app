import React, { useState } from 'react';
import { Plus, UserCheck, Star, Calendar, ToggleLeft, Phone, Clock, MoreVertical, TrendingUp, Award, Edit3 } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

const SHIFT_COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EC4899'];

export default function ProviderStaff() {
  const staff = (BUSINESSES[0]?.staff || []).map((s, i) => ({
    ...s,
    active: true,
    phone: `+91 9876${String(543200 + i).padStart(6, '0')}`,
    shift: '09:00 AM – 07:00 PM',
    commission: `${15 + i * 2}%`,
    bookingsToday: Math.floor(4 + Math.random() * 5),
    color: SHIFT_COLORS[i % SHIFT_COLORS.length]
  }));

  const [staffList, setStaffList] = useState(staff);
  const [activeTab, setActiveTab] = useState('all');

  const toggleActive = (id) => setStaffList(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));

  const filtered = activeTab === 'all' ? staffList : activeTab === 'active' ? staffList.filter(s => s.active) : staffList.filter(s => !s.active);

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>👥 Staff Management</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>Stylists, schedules & commissions</p>
        </div>
        <button style={{
          padding: '10px 18px', borderRadius: '14px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          color: '#FFFFFF', fontSize: '0.84rem', fontWeight: 800,
          display: 'flex', alignItems: 'center', gap: '6px',
          boxShadow: '0 6px 18px rgba(79,70,229,0.35)'
        }}>
          <Plus size={16} /> Add Staff
        </button>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[
          { label: 'Total Staff', value: staffList.length, color: '#6366F1', bg: '#EEF2FF' },
          { label: 'On Shift', value: staffList.filter(s => s.active).length, color: '#10B981', bg: '#ECFDF5' },
          { label: "Today's Bookings", value: staffList.reduce((a, s) => a + s.bookingsToday, 0), color: '#F59E0B', bg: '#FEF3C7' }
        ].map((st, i) => (
          <div key={i} style={{ background: st.bg, borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: st.color }}>{st.value}</div>
            <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 700, marginTop: '2px' }}>{st.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['all', 'active', 'inactive'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: '8px 18px', borderRadius: '999px',
            background: activeTab === tab ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : '#F1F5F9',
            color: activeTab === tab ? '#FFFFFF' : '#64748B',
            fontSize: '0.8rem', fontWeight: 800,
            boxShadow: activeTab === tab ? '0 4px 12px rgba(79,70,229,0.3)' : 'none',
            transition: 'all 0.2s'
          }}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Staff Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
        {filtered.map(stf => (
          <div key={stf.id} style={{
            background: '#FFFFFF', borderRadius: '22px',
            padding: '16px', border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
            opacity: stf.active ? 1 : 0.65,
            position: 'relative', overflow: 'hidden'
          }}>
            {/* Active indicator */}
            <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
              <button onClick={() => toggleActive(stf.id)} style={{
                width: '36px', height: '20px', borderRadius: '999px',
                background: stf.active ? '#10B981' : '#E2E8F0',
                position: 'relative', transition: 'background 0.2s'
              }}>
                <div style={{
                  position: 'absolute', top: '3px',
                  left: stf.active ? '18px' : '3px',
                  width: '14px', height: '14px',
                  borderRadius: '50%', background: '#FFFFFF',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                  transition: 'left 0.2s'
                }} />
              </button>
            </div>

            {/* Avatar */}
            <div style={{ position: 'relative', marginBottom: '12px', width: 'fit-content' }}>
              <img src={stf.photo} alt={stf.name} style={{ width: '64px', height: '64px', borderRadius: '20px', objectFit: 'cover', border: `3px solid ${stf.color}30` }} />
              <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '18px', height: '18px', borderRadius: '50%', background: stf.active ? '#10B981' : '#94A3B8', border: '2px solid #FFFFFF' }} />
            </div>

            <h3 style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0F172A', marginBottom: '1px' }}>{stf.name}</h3>
            <p style={{ fontSize: '0.72rem', color: '#64748B', marginBottom: '10px' }}>{stf.role} • {stf.experience}</p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={11} color="#F59E0B" fill={i <= Math.round(stf.rating) ? "#F59E0B" : "none"} />
              ))}
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#D97706', marginLeft: '2px' }}>{stf.rating}</span>
            </div>

            {/* Stats */}
            <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700 }}>SHIFT</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0F172A' }}>9AM–7PM</div>
              </div>
              <div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700 }}>COMMISSION</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10B981' }}>{stf.commission}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700 }}>TODAY</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: stf.color }}>{stf.bookingsToday} bookings</div>
              </div>
              <div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700 }}>STATUS</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: stf.active ? '#10B981' : '#94A3B8' }}>{stf.active ? '🟢 On Shift' : '⚪ Off Duty'}</div>
              </div>
            </div>

            {/* Edit Button */}
            <button style={{
              width: '100%', marginTop: '10px',
              padding: '8px', borderRadius: '10px',
              background: '#F8FAFC', color: '#475569',
              fontSize: '0.76rem', fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
              border: '1px solid #E2E8F0'
            }}>
              <Edit3 size={12} /> Edit Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
