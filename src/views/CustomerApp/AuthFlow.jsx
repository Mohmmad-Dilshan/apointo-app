import React, { useState } from 'react';
import { Smartphone, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

export default function AuthFlow({ onLoginSuccess }) {
  const [step, setStep] = useState('login'); // 'login' | 'otp' | 'signup'
  const [phone, setPhone] = useState('9876543210');
  const [otp, setOtp] = useState(['5', '8', '2', '4', '1', '0']);
  const [name, setName] = useState('Dilshan Perera');
  const [email, setEmail] = useState('dilshan.p@example.com');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = () => {
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 600);
  };

  const handleVerifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 600);
  };

  return (
    <div style={{
      height: '100%',
      minHeight: '650px',
      background: '#FFFFFF',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* STEP 1: PHONE LOGIN */}
      {step === 'login' && (
        <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '20px',
              background: '#EEF2FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Smartphone size={30} color="#4F46E5" />
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Welcome to Apointo
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '28px' }}>
              Enter your mobile number to get started with instant bookings & rewards.
            </p>

            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '8px', display: 'block' }}>
              Mobile Number
            </label>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: error ? '2px solid #F43F5E' : '1px solid #CBD5E1',
              borderRadius: '16px',
              padding: '14px 16px',
              background: '#F8FAFC',
              gap: '12px',
              marginBottom: '12px'
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>🇮🇳 +91</span>
              <div style={{ width: '1px', height: '20px', background: '#CBD5E1' }} />
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
                style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}
              />
            </div>

            {error && (
              <p style={{ fontSize: '0.78rem', color: '#F43F5E', fontWeight: 600, marginBottom: '16px' }}>{error}</p>
            )}

            <button
              onClick={handleSendOtp}
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                marginTop: '12px'
              }}
            >
              <span>{loading ? 'Sending OTP...' : 'Continue'}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '24px 0', color: '#94A3B8' }}>
              <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>OR CONTINUE WITH</span>
              <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                onClick={() => setStep('signup')}
                style={{
                  padding: '12px',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#334155'
                }}
              >
                🌐 Google
              </button>

              <button
                onClick={() => setStep('signup')}
                style={{
                  padding: '12px',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#334155'
                }}
              >
                 Apple ID
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: 6-DIGIT OTP VERIFICATION */}
      {step === 'otp' && (
        <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Verify OTP Code
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
              Sent 6-digit code to <strong>+91 {phone}</strong>
            </p>

            {/* OTP Boxes */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '24px' }}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    newOtp[idx] = e.target.value;
                    setOtp(newOtp);
                  }}
                  style={{
                    width: '46px',
                    height: '54px',
                    borderRadius: '12px',
                    border: '2px solid #4F46E5',
                    textAlign: 'center',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    background: '#EEF2FF'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                marginBottom: '20px'
              }}
            >
              <span>{loading ? 'Verifying...' : 'Verify & Proceed'}</span>
              <CheckCircle2 size={18} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <button onClick={() => setStep('login')} style={{ color: '#64748B', fontWeight: 600 }}>Change Number</button>
              <button style={{ color: '#4F46E5', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <RotateCcw size={14} />
                <span>Resend OTP</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: NEW USER SIGNUP */}
      {step === 'signup' && (
        <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Complete Profile
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '24px' }}>
              Tell us a bit about yourself to personalize your booking experience.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.95rem', fontWeight: 600 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>Email Address (Optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.95rem', fontWeight: 600 }}
                />
              </div>
            </div>

            <button
              onClick={onLoginSuccess}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
              }}
            >
              Complete & Join Apointo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
