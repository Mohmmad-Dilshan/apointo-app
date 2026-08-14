import React from 'react';
import { User, MapPin, CreditCard, Heart, Calendar, Award, Bell, HelpCircle, Shield, Settings, LogOut, ChevronRight, Sparkles, Phone, Mail } from 'lucide-react';

export default function ProfileScreen({ user, onNavigateScreen }) {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Dark Midnight Profile Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 32px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '22px',
            objectFit: 'cover',
            border: '2.5 solid rgba(255,255,255,0.4)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}
        />

        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>{user.name}</h2>
          <p style={{ fontSize: '0.8rem', color: '#C7D2FE', marginTop: '2px' }}>{user.phone} • {user.email}</p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            color: '#FFFFFF',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            marginTop: '6px',
            boxShadow: '0 4px 12px rgba(245,158,11,0.35)'
          }}>
            <Award size={13} />
            <span>{user.membershipTier} ({user.points} pts)</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu Options */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Account Section */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>
            Account Settings
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 16px rgba(15,23,42,0.03)' }}>
            {[
              { icon: <User size={18} color="#4F46E5" />, title: "Personal Information", action: () => onNavigateScreen('personal-info') },
              { icon: <MapPin size={18} color="#06B6D4" />, title: "Saved Addresses", action: () => onNavigateScreen('addresses') },
              { icon: <CreditCard size={18} color="#10B981" />, title: "Payment Methods", action: () => onNavigateScreen('payment-methods') },
              { icon: <Heart size={18} color="#EC4899" />, title: "Saved Favorites", action: () => onNavigateScreen('favorites') }
            ].map((item, idx, arr) => (
              <button
                key={idx}
                onClick={item.action}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #F1F5F9',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{item.title}</span>
                </div>
                <ChevronRight size={18} color="#94A3B8" />
              </button>
            ))}
          </div>
        </div>

        {/* Benefits & Support */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>
            Rewards & Support
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 16px rgba(15,23,42,0.03)' }}>
            {[
              { icon: <Award size={18} color="#F59E0B" />, title: "Apointo Rewards", action: () => onNavigateScreen('rewards') },
              { icon: <Bell size={18} color="#8B5CF6" />, title: "Notification Preferences", action: () => onNavigateScreen('notification-preferences') },
              { icon: <HelpCircle size={18} color="#3B82F6" />, title: "Help & Customer Support", action: () => onNavigateScreen('support') }
            ].map((item, idx, arr) => (
              <button
                key={idx}
                onClick={item.action}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #F1F5F9',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{item.title}</span>
                </div>
                <ChevronRight size={18} color="#94A3B8" />
              </button>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => onNavigateScreen('auth')}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '20px',
            background: '#FFF1F2',
            color: '#F43F5E',
            fontSize: '0.92rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: '1px solid #FFE4E6',
            boxShadow: '0 4px 12px rgba(244,63,94,0.08)'
          }}
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
