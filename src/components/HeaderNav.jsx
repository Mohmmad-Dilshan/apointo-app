import React from 'react';
import { Smartphone, Building2, ShieldCheck, Palette, Sparkles, Monitor, Apple, Bot } from 'lucide-react';

export default function HeaderNav({ activePlatform, setActivePlatform, isDeviceFrame, setIsDeviceFrame, deviceOs, setDeviceOs }) {
  return (
    <header style={{
      background: '#0F172A',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      color: '#FFFFFF'
    }}>
      {/* Brand Logo & Tagline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(99,102,241,0.4)'
        }}>
          <Sparkles size={22} color="#FFFFFF" />
        </div>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Apointo</span>
            <span style={{ fontSize: '0.65rem', background: 'rgba(99,102,241,0.2)', color: '#818CF8', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PROTOTYPE</span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8', margin: 0 }}>Discover. Book. Go.</p>
        </div>
      </div>

      {/* Main Platform View Selector */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#1E293B',
        padding: '4px',
        borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <button
          onClick={() => setActivePlatform('customer')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: activePlatform === 'customer' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'customer' ? '#4F46E5' : 'transparent',
            boxShadow: activePlatform === 'customer' ? '0 2px 10px rgba(79,70,229,0.3)' : 'none'
          }}
        >
          <Smartphone size={16} />
          <span>Customer Mobile App</span>
        </button>

        <button
          onClick={() => setActivePlatform('business-mobile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: activePlatform === 'business-mobile' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'business-mobile' ? '#4F46E5' : 'transparent',
            boxShadow: activePlatform === 'business-mobile' ? '0 2px 10px rgba(79,70,229,0.3)' : 'none'
          }}
        >
          <Smartphone size={16} />
          <span>Business App</span>
        </button>

        <button
          onClick={() => setActivePlatform('business')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: activePlatform === 'business' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'business' ? '#4F46E5' : 'transparent',
            boxShadow: activePlatform === 'business' ? '0 2px 10px rgba(79,70,229,0.3)' : 'none'
          }}
        >
          <Building2 size={16} />
          <span>Business SaaS</span>
        </button>

        <button
          onClick={() => setActivePlatform('admin')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: activePlatform === 'admin' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'admin' ? '#4F46E5' : 'transparent',
            boxShadow: activePlatform === 'admin' ? '0 2px 10px rgba(79,70,229,0.3)' : 'none'
          }}
        >
          <ShieldCheck size={16} />
          <span>Admin Console</span>
        </button>

        <button
          onClick={() => setActivePlatform('design-system')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: activePlatform === 'design-system' ? '#FFFFFF' : '#94A3B8',
            background: activePlatform === 'design-system' ? '#4F46E5' : 'transparent',
            boxShadow: activePlatform === 'design-system' ? '0 2px 10px rgba(79,70,229,0.3)' : 'none'
          }}
        >
          <Palette size={16} />
          <span>Design System</span>
        </button>
      </div>

      {/* Frame Mode & OS Toggle for Customer App and Business Mobile */}
      {(activePlatform === 'customer' || activePlatform === 'business-mobile') && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* OS Switcher: iOS vs Android */}
          <div style={{
            display: 'flex',
            background: '#1E293B',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <button
              onClick={() => setDeviceOs('ios')}
              style={{
                padding: '5px 10px',
                borderRadius: '7px',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: deviceOs === 'ios' ? '#FFFFFF' : '#94A3B8',
                background: deviceOs === 'ios' ? '#6366F1' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span> iOS</span>
            </button>
            <button
              onClick={() => setDeviceOs('android')}
              style={{
                padding: '5px 10px',
                borderRadius: '7px',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: deviceOs === 'android' ? '#FFFFFF' : '#94A3B8',
                background: deviceOs === 'android' ? '#10B981' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>🤖 Android</span>
            </button>
          </div>

          <button
            onClick={() => setIsDeviceFrame(!isDeviceFrame)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 600,
              background: '#1E293B',
              color: '#CBD5E1',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {isDeviceFrame ? <Monitor size={14} /> : <Smartphone size={14} />}
            <span>{isDeviceFrame ? 'Full View' : 'Phone Frame'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
