import React, { useState } from 'react';
import { Smartphone, Building2, ShieldCheck, Palette, Sparkles, Monitor, Apple, Bot, RotateCcw, Zap } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import ThemeSelectorModal from './ThemeSelectorModal';

export default function HeaderNav({ activePlatform, setActivePlatform, isDeviceFrame, setIsDeviceFrame, deviceOs, setDeviceOs }) {
  const { computedStats, currentTheme, themesCatalog, resetDemoData } = usePlatform();
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const activeTheme = themesCatalog?.find((t) => t.id === currentTheme) || { name: 'Indigo Royal', emoji: '👑' };

  const handleReset = () => {
    if (window.confirm('Reset all demo bookings, added services, staff, and coupons back to default state?')) {
      setIsResetting(true);
      resetDemoData();
      setTimeout(() => {
        setIsResetting(false);
      }, 600);
    }
  };

  return (
    <header style={{
      background: '#0F172A',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      color: '#FFFFFF',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {/* Brand Logo & Tagline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(99,102,241,0.4)'
        }}>
          <Sparkles size={18} color="#FFFFFF" />
        </div>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Apo</span>
            <span style={{ fontSize: '0.6rem', background: 'rgba(99,102,241,0.2)', color: '#818CF8', padding: '1px 5px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PRO</span>
          </div>
          <p style={{ fontSize: '0.65rem', color: '#94A3B8', margin: 0, display: 'none' }} className="brand-sub-text">Discover. Book. Go.</p>
        </div>
      </div>

      {/* Main Platform View Selector */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#1E293B',
        padding: '3px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.05)',
        overflowX: 'auto',
        maxWidth: '100%'
      }} className="no-scrollbar">
        <button
          onClick={() => setActivePlatform('customer')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '9px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: activePlatform === 'customer' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'customer' ? '#4F46E5' : 'transparent',
            boxShadow: activePlatform === 'customer' ? '0 2px 8px rgba(79,70,229,0.3)' : 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Smartphone size={14} />
          <span>Customer</span>
          {computedStats?.activeBookingsCount > 0 && (
            <span style={{
              background: '#F43F5E',
              color: '#FFFFFF',
              fontSize: '0.62rem',
              fontWeight: 800,
              padding: '1px 5px',
              borderRadius: '999px',
              marginLeft: '2px'
            }}>
              {computedStats.activeBookingsCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActivePlatform('business')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '9px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: activePlatform === 'business' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'business' ? '#10B981' : 'transparent',
            boxShadow: activePlatform === 'business' ? '0 2px 8px rgba(16,185,129,0.3)' : 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}
        >
          <Building2 size={14} />
          <span>Business POS</span>
          {computedStats?.totalBookingsCount > 0 && (
            <span style={{
              background: 'rgba(16, 185, 129, 0.25)',
              color: '#10B981',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              fontSize: '0.62rem',
              fontWeight: 800,
              padding: '1px 5px',
              borderRadius: '999px',
              marginLeft: '2px'
            }}>
              {computedStats.totalBookingsCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActivePlatform('admin')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '9px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: activePlatform === 'admin' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'admin' ? '#8B5CF6' : 'transparent',
            boxShadow: activePlatform === 'admin' ? '0 2px 8px rgba(139,92,246,0.3)' : 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}
        >
          <ShieldCheck size={14} />
          <span>Admin</span>
          {computedStats?.pendingVerificationsCount > 0 && (
            <span style={{
              background: '#F59E0B',
              color: '#0F172A',
              fontSize: '0.62rem',
              fontWeight: 900,
              padding: '1px 5px',
              borderRadius: '999px',
              marginLeft: '2px'
            }}>
              {computedStats.pendingVerificationsCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActivePlatform('design-system')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '9px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: activePlatform === 'design-system' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'design-system' ? '#06B6D4' : 'transparent',
            boxShadow: activePlatform === 'design-system' ? '0 2px 8px rgba(6,182,212,0.3)' : 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}
        >
          <Palette size={14} />
          <span>Design</span>
        </button>
      </div>

      {/* Right Controls: Theme Selector + Simulator Frame Mode */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Real-time sync badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: '#34D399',
          padding: '4px 8px',
          borderRadius: '8px',
          fontSize: '0.7rem',
          fontWeight: 700
        }} title="Customer & Business states are synchronized in real-time">
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10B981',
            boxShadow: '0 0 8px #10B981'
          }} />
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            Live Sync <Zap size={11} fill="#10B981" />
          </span>
        </div>

        {/* Reset Demo Data Button */}
        <button
          onClick={handleReset}
          disabled={isResetting}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '6px 10px',
            borderRadius: '10px',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#F87171',
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            cursor: isResetting ? 'wait' : 'pointer',
            transition: 'all 0.2s'
          }}
          title="Reset demo bookings, added services, staff & coupons to default"
        >
          <RotateCcw size={13} className={isResetting ? 'animate-spin' : ''} />
          <span>{isResetting ? 'Resetting...' : 'Reset Demo'}</span>
        </button>

        {/* Live Theme Switcher Button */}
        <button
          onClick={() => setIsThemeModalOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '10px',
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#FFFFFF',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)',
            border: '1px solid rgba(168,85,247,0.4)',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(99,102,241,0.15)',
            transition: 'all 0.2s'
          }}
          title="Preview & Switch App Color Themes"
        >
          <Palette size={14} color="#C084FC" />
          <span>{activeTheme.emoji} {activeTheme.name}</span>
        </button>

        {/* Device Frame Toggle */}
        <button
          onClick={() => setIsDeviceFrame(!isDeviceFrame)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '6px 10px',
            borderRadius: '10px',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#FFFFFF',
            background: isDeviceFrame ? '#334155' : 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer'
          }}
          title={isDeviceFrame ? "Switch to Full Width Mode" : "Switch to Device Frame Mode"}
        >
          <Monitor size={13} />
          <span style={{ display: 'inline-block' }}>{isDeviceFrame ? 'Frame' : 'Full'}</span>
        </button>

        {/* iOS vs Android Toggle */}
        {isDeviceFrame && (
          <div style={{
            display: 'flex',
            background: '#1E293B',
            padding: '2px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <button
              onClick={() => setDeviceOs('ios')}
              style={{
                padding: '5px 8px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: deviceOs === 'ios' ? '#FFFFFF' : '#94A3B8',
                background: deviceOs === 'ios' ? '#4F46E5' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                cursor: 'pointer'
              }}
              title="Apple iOS Simulator"
            >
              <Apple size={13} />
              <span>iOS</span>
            </button>
            <button
              onClick={() => setDeviceOs('android')}
              style={{
                padding: '5px 8px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: deviceOs === 'android' ? '#FFFFFF' : '#94A3B8',
                background: deviceOs === 'android' ? '#10B981' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                cursor: 'pointer'
              }}
              title="Android Material Simulator"
            >
              <Bot size={13} />
              <span>Android</span>
            </button>
          </div>
        )}
      </div>

      {/* Live Theme Selector Modal */}
      <ThemeSelectorModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </header>
  );
}
