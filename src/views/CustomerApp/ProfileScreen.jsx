import React from 'react';
import { User, MapPin, CreditCard, Heart, Calendar, Award, Bell, HelpCircle, Shield, Settings, LogOut, ChevronRight, Sparkles } from 'lucide-react';

export default function ProfileScreen({ user, onNavigateScreen }) {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Header Profile Info */}
      <div style={{ background: '#FFFFFF', padding: '24px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={user.avatar}
          alt={user.name}
          style={{ width: '64px', height: '64px', borderRadius: '20px', objectFit: 'cover', border: '2px solid #4F46E5' }}
        />

        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>{user.name}</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>{user.phone} • {user.email}</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', color: '#D97706', padding: '2px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800, marginTop: '4px' }}>
            <Award size={12} /> {user.membershipTier} ({user.points} pts)
          </div>
        </div>
      </div>

      {/* Navigation Menu Options */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Account Section */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>Account Settings</div>

          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            {[
              { icon: <User size={18} color="#4F46E5" />, title: "Personal Information", action: () => {} },
              { icon: <MapPin size={18} color="#06B6D4" />, title: "Saved Addresses", action: () => onNavigateScreen('addresses') },
              { icon: <CreditCard size={18} color="#10B981" />, title: "Payment Methods", action: () => onNavigateScreen('payment-methods') },
              { icon: <Heart size={18} color="#EC4899" />, title: "Saved Favorites", action: () => onNavigateScreen('favorites') }
            ].map((item, idx, arr) => (
              <button
                key={idx}
                onClick={item.action}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #F1F5F9',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {item.icon}
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{item.title}</span>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>
            ))}
          </div>
        </div>

        {/* Benefits & Support */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>Rewards & Support</div>

          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            {[
              { icon: <Award size={18} color="#F59E0B" />, title: "Apointo Rewards", action: () => onNavigateScreen('rewards') },
              { icon: <Bell size={18} color="#8B5CF6" />, title: "Notification Preferences", action: () => onNavigateScreen('notifications') },
              { icon: <HelpCircle size={18} color="#3B82F6" />, title: "Help & Customer Support", action: () => onNavigateScreen('support') }
            ].map((item, idx, arr) => (
              <button
                key={idx}
                onClick={item.action}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #F1F5F9',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {item.icon}
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{item.title}</span>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button style={{
          width: '100%',
          padding: '14px',
          borderRadius: '16px',
          background: '#FFF1F2',
          color: '#F43F5E',
          fontSize: '0.88rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <LogOut size={16} /> Log Out
        </button>
      </div>
    </div>
  );
}
