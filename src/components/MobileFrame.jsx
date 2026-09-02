import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export default function MobileFrame({ children, isDeviceFrame, deviceOs = 'ios' }) {
  const isAndroid = deviceOs === 'android';

  if (!isDeviceFrame) {
    return (
      <div
        className="mobile-full-container"
        style={{
          width: '100%',
          maxWidth: '520px',
          margin: '0 auto',
          background: '#FFFFFF',
          minHeight: '100vh',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="mobile-frame-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 70px)',
        background: '#090D16',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      {/* Smartphone Outer Shell (iOS Titanium vs Android Matte Ceramic) */}
      <div
        className="device-outer-shell"
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '844px',
          maxHeight: '92vh',
          background: isAndroid ? '#18181B' : '#1E293B',
          borderRadius: isAndroid ? '42px' : '52px',
          padding: '12px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), inset 0 0 2px 2px rgba(255, 255, 255, 0.12)',
          position: 'relative',
          border: isAndroid ? '4px solid #27272A' : '4px solid #334155',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Notch vs Punch Hole Camera */}
        {!isAndroid ? (
          /* iOS Dynamic Island */
          <div
            className="dynamic-island"
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '115px',
              height: '28px',
              background: '#0F172A',
              borderRadius: '20px',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '10px'
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1E293B' }} />
          </div>
        ) : (
          /* Android Center Punch Hole Camera */
          <div
            className="punch-hole"
            style={{
              position: 'absolute',
              top: '18px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              background: '#000000',
              zIndex: 999,
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
        )}

        {/* Smartphone Screen Inner Viewport */}
        <div
          className="device-inner-viewport"
          style={{
            width: '100%',
            height: '100%',
            background: '#F8FAFC',
            borderRadius: isAndroid ? '32px' : '40px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
        >
          {/* Status Bar */}
          <div
            className="device-status-bar"
            style={{
              height: '40px',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#0F172A',
              zIndex: 998,
              userSelect: 'none',
              flexShrink: 0
            }}
          >
            <span>{isAndroid ? '10:00' : '09:41'}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {isAndroid && <span style={{ fontSize: '0.65rem', fontWeight: 800, background: '#E2E8F0', padding: '1px 5px', borderRadius: '4px' }}>5G</span>}
              <Signal size={13} />
              <Wifi size={13} />
              <Battery size={15} />
            </div>
          </div>

          {/* Screen Scrollable View */}
          <div style={{ flex: 1, overflowY: 'auto', position: 'relative', width: '100%' }} className="no-scrollbar">
            {children}
          </div>

          {/* Bottom Bar: iOS Home Indicator vs Android Navigation Pill */}
          <div
            className="device-bottom-pill"
            style={{
              height: '18px',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 998,
              pointerEvents: 'none',
              flexShrink: 0
            }}
          >
            {!isAndroid ? (
              <div style={{ width: '120px', height: '4px', background: '#CBD5E1', borderRadius: '999px' }} />
            ) : (
              <div style={{ width: '90px', height: '3.5px', background: '#94A3B8', borderRadius: '999px' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
