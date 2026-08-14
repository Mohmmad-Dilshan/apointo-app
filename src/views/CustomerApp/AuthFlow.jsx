import React, { useState } from 'react';
import { Smartphone, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw, Sparkles, Lock, ArrowLeft } from 'lucide-react';

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
    }, 500);
  };

  const handleVerifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 500);
  };

  return (
    <div style={{
      minHeight: '100%',
      background: '#F8FAFC',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: '30px'
    }} className="animate-fade-in">
      {/* Top Header Banner: Dark Midnight Mesh */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '36px 24px 32px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 14px 36px rgba(15,23,42,0.35)',
        position: 'relative'
      }}>
        {step !== 'login' && (
          <button
            onClick={() => setStep('login')}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <ArrowLeft size={18} />
          </button>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(99,102,241,0.45)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <Sparkles size={28} color="#FFFFFF" />
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Welcome to Apointo
            </span>
            <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              {step === 'login' ? 'Instant Sign In ✨' : step === 'otp' ? 'Verify Security OTP 🔒' : 'Complete Profile 👤'}
            </h1>
          </div>
        </div>

        <p style={{ fontSize: '0.84rem', color: '#C7D2FE', lineHeight: 1.45 }}>
          {step === 'login' ? 'Book salons, gyms & doctors with 100% instant confirmation.' : step === 'otp' ? `We sent a 6-digit code to +91 ${phone}` : 'Tell us your name & email to personalize bookings.'}
        </p>
      </div>

      {/* Main Form Body */}
      <div style={{ padding: '24px 20px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        {/* STEP 1: PHONE LOGIN */}
        {step === 'login' && (
          <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '22px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(15,23,42,0.04)' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                Enter Mobile Number
              </label>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: error ? '2px solid #F43F5E' : '1.5px solid #CBD5E1',
                borderRadius: '16px',
                padding: '14px 16px',
                background: '#F8FAFC',
                gap: '12px',
                marginBottom: '12px',
                transition: 'border 0.2s ease'
              }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>🇮🇳</span> +91
                </span>
                <div style={{ width: '1px', height: '22px', background: '#CBD5E1' }} />
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', outline: 'none' }}
                />
              </div>

              {error && (
                <p style={{ fontSize: '0.78rem', color: '#F43F5E', fontWeight: 700, marginBottom: '14px' }}>{error}</p>
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
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                  marginTop: '8px',
                  cursor: 'pointer'
                }}
              >
                <span>{loading ? 'Sending Security OTP...' : 'Continue'}</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Social Logins */}
            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', color: '#94A3B8' }}>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>OR CONTINUE WITH</span>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  onClick={() => setStep('signup')}
                  style={{
                    padding: '14px',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    background: '#FFFFFF',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🌐</span>
                  <span>Google</span>
                </button>

                <button
                  onClick={() => setStep('signup')}
                  style={{
                    padding: '14px',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    background: '#FFFFFF',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}></span>
                  <span>Apple ID</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: 6-DIGIT OTP VERIFICATION */}
        {step === 'otp' && (
          <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '22px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(15,23,42,0.04)' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '12px', display: 'block', textAlign: 'center' }}>
                Enter 6-Digit OTP Code
              </label>

              {/* OTP Boxes */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '22px' }}>
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
                      width: '44px',
                      height: '52px',
                      borderRadius: '14px',
                      border: '2px solid #4F46E5',
                      textAlign: 'center',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      background: '#EEF2FF',
                      outline: 'none'
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
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                  marginBottom: '16px'
                }}
              >
                <span>{loading ? 'Verifying Code...' : 'Verify & Proceed'}</span>
                <CheckCircle2 size={18} />
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                <button onClick={() => setStep('login')} style={{ color: '#64748B', fontWeight: 700 }}>Change Number</button>
                <button style={{ color: '#4F46E5', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <RotateCcw size={13} />
                  <span>Resend OTP</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: NEW USER SIGNUP */}
        {step === 'signup' && (
          <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '22px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', outline: 'none' }}
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
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
                }}
              >
                Complete & Join Apointo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
