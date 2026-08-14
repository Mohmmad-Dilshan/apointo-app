import React from 'react';
import { Wifi, Battery, Signal, Circle, Square, Triangle } from 'lucide-react';

export default function MobileFrame({ children, isDeviceFrame, deviceOs = 'ios' }) {
  if (!isDeviceFrame) {
    return (
      <div style={{
        maxWidth: '480px',
        margin: '20px auto',
        background: '#FFFFFF',
        minHeight: '92vh',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {children}
      </div>
    );
  }

  const isAndroid = deviceOs === 'android';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px 0',
      minHeight: 'calc(100vh - 70px)',
      background: '#090D16'
    }}>
      {/* Smartphone Outer Shell (iOS Titanium vs Android Matte Ceramic) */}
      <div style={{
        width: '400px',
        height: '840px',
        background: isAndroid ? '#18181B' : '#1E293B',
        borderRadius: isAndroid ? '42px' : '52px',
        padding: '12px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), inset 0 0 2px 2px rgba(255, 255, 255, 0.12)',
        position: 'relative',
        border: isAndroid ? '4px solid #27272A' : '4px solid #334155',
        transition: 'all 0.3s ease'
      }}>
        {/* Notch vs Punch Hole Camera */}
        {!isAndroid ? (
          /* iOS Dynamic Island */
          <div style={{
            position: 'absolute',
            top: '22px',
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
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1E293B' }}></div>
          </div>
        ) : (
          /* Android Center Punch Hole Camera */
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#000000',
            zIndex: 999,
            border: '1px solid rgba(255,255,255,0.1)'
          }} />
        )}

        {/* Smartphone Screen Inner Viewport */}
        <div style={{
          width: '100%',
          height: '100%',
          background: '#F8FAFC',
          borderRadius: isAndroid ? '32px' : '40px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Status Bar */}
          <div style={{
            height: '44px',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            fontSize: '0.8rem',
            fontWeight: 800,
            color: '#0F172A',
            zIndex: 998,
            userSelect: 'none'
          }}>
            <span>{isAndroid ? '10:00' : '09:41'}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {isAndroid && <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#E2E8F0', padding: '1px 5px', borderRadius: '4px' }}>5G</span>}
              <Signal size={14} />
              <Wifi size={14} />
              <Battery size={16} />
            </div>
          </div>

          {/* Screen Scrollable View */}
          <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }} className="no-scrollbar">
            {children}
          </div>

          {/* Bottom Bar: iOS Home Indicator vs Android Navigation Pill */}
          <div style={{
            height: '22px',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 998,
            pointerEvents: 'none'
          }}>
            {!isAndroid ? (
              <div style={{ width: '130px', height: '4.5px', background: '#CBD5E1', borderRadius: '999px' }}></div>
            ) : (
              <div style={{ width: '100px', height: '4px', background: '#94A3B8', borderRadius: '999px' }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
