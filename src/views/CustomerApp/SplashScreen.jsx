import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SplashScreen({ onStart }) {
  return (
    <div style={{
      height: '100%',
      minHeight: '700px',
      background: 'linear-gradient(180deg, #4F46E5 0%, #3730A3 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px 24px 40px',
      color: '#FFFFFF',
      textAlign: 'center'
    }} className="animate-fade-in">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '28px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          marginBottom: '24px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <Sparkles size={48} color="#FFFFFF" />
        </div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '8px' }}>
          Apo
        </h1>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#C7D2FE', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Discover. Book. Go.
        </p>
      </div>

      <div style={{ width: '100%' }}>
        <button
          onClick={onStart}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: '#FFFFFF',
            color: '#4F46E5',
            fontSize: '1rem',
            fontWeight: 700,
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
