import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export default function MobileFrame({ children, isDeviceFrame }) {
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

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px 0',
      minHeight: 'calc(100vh - 70px)',
      background: '#090D16'
    }}>
      {/* Smartphone Outer Shell */}
      <div style={{
        width: '400px',
        height: '840px',
        background: '#1E293B',
        borderRadius: '52px',
        padding: '12px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), inset 0 0 2px 2px rgba(255, 255, 255, 0.1)',
        position: 'relative',
        border: '4px solid #334155'
      }}>
        {/* Notch Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '110px',
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

        {/* Smartphone Screen Inner Viewport */}
        <div style={{
          width: '100%',
          height: '100%',
          background: '#F8FAFC',
          borderRadius: '40px',
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
            fontWeight: 700,
            color: '#0F172A',
            zIndex: 998,
            userSelect: 'none'
          }}>
            <span>09:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Signal size={14} />
              <Wifi size={14} />
              <Battery size={16} />
            </div>
          </div>

          {/* Screen Scrollable View */}
          <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }} className="no-scrollbar">
            {children}
          </div>

          {/* iOS Home Indicator Bar */}
          <div style={{
            height: '20px',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 998,
            pointerEvents: 'none'
          }}>
            <div style={{ width: '130px', height: '4px', background: '#CBD5E1', borderRadius: '999px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
