import React, { useState } from 'react';
import { ArrowLeft, Share2, Copy, Check, Gift, Users } from 'lucide-react';

export default function ReferralScreen({ onBack, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const referralCode = "DILSHAN50";

  const handleCopy = () => {
    setCopied(true);
    if (onShowToast) onShowToast({ message: "Referral code copied to clipboard!", type: "success" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Invite Friends</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Earn ₹100 for every friend who books</p>
        </div>
      </div>

      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '24px',
          background: '#EEF2FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}>
          <Gift size={40} color="#4F46E5" />
        </div>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
          Invite Friends. Earn Rewards.
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#64748B', maxWidth: '300px', lineHeight: 1.5, marginBottom: '24px' }}>
          Share your unique referral code. Your friend gets ₹100 OFF their first booking, and you get 500 Apointo Points!
        </p>

        {/* Code Box */}
        <div style={{
          width: '100%',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '16px 20px',
          border: '2px dashed #4F46E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', textAlign: 'left' }}>Your Referral Code</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#4F46E5', letterSpacing: '0.08em' }}>{referralCode}</div>
          </div>

          <button
            onClick={handleCopy}
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              background: copied ? '#10B981' : '#EEF2FF',
              color: copied ? '#FFFFFF' : '#4F46E5',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Social Share Buttons */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={handleCopy}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '999px',
              background: '#25D366',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 8px 20px rgba(37,211,102,0.3)'
            }}
          >
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={handleCopy}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '999px',
              background: '#F1F5F9',
              color: '#334155',
              fontSize: '0.9rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Share2 size={16} />
            <span>Share Other Apps</span>
          </button>
        </div>
      </div>
    </div>
  );
}
