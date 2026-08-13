import React, { useState, useEffect } from 'react';
import { Mic, X, Sparkles, Volume2 } from 'lucide-react';

export default function VoiceSearchModal({ isOpen, onClose, onSearchSubmit }) {
  const [isListening, setIsListening] = useState(true);
  const [transcript, setTranscript] = useState('');

  const samplePrompts = ["Haircut near me", "Hydra facial treatment", "Best dentist in Bangalore", "Car wash under ₹500"];

  useEffect(() => {
    if (isOpen) {
      setIsListening(true);
      setTranscript('Listening for service or salon...');
      const timer = setTimeout(() => {
        setIsListening(false);
        setTranscript('"Haircut & Styling in Indiranagar"');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,0.7)',
      backdropFilter: 'blur(6px)',
      zIndex: 3000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '360px',
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '28px 24px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }} className="animate-fade-in">
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}
        >
          <X size={18} color="#64748B" />
        </button>

        {/* Pulsing Mic Graphic */}
        <div style={{ position: 'relative', width: '90px', height: '90px', margin: '10px auto 20px' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'rgba(99,102,241,0.2)',
            animation: 'pulseGlow 1.5s infinite'
          }} />
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(79,70,229,0.4)',
            position: 'relative',
            zIndex: 2
          }}>
            <Mic size={40} color="#FFFFFF" />
          </div>
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
          {isListening ? 'Listening...' : 'Search Detected'}
        </h3>

        <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#4F46E5', minHeight: '40px', marginBottom: '20px' }}>
          {transcript}
        </p>

        {/* Sample Voice Prompts */}
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>Or Try Speaking:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSearchSubmit(p);
                  onClose();
                }}
                style={{
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Volume2 size={14} color="#4F46E5" />
                <span>"{p}"</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            onSearchSubmit('haircut');
            onClose();
          }}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.9rem',
            fontWeight: 700,
            boxShadow: '0 6px 18px rgba(79,70,229,0.3)'
          }}
        >
          View Results for "Haircut"
        </button>
      </div>
    </div>
  );
}
