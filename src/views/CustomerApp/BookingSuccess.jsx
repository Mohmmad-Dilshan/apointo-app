import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar, MapPin, Navigation, Sparkles, ArrowRight, Clock, QrCode, Gift, Star } from 'lucide-react';

export default function BookingSuccess({ bookingData, onViewBooking, onHome }) {
  const [confettiActive, setConfettiActive] = useState(true);
  const [pointsAnimated, setPointsAnimated] = useState(false);

  const bizName = bookingData?.business?.name || "Urban Cut Studio";
  const srvName = bookingData?.service?.name || "Classic Haircut & Styling";
  const stfName = bookingData?.staff?.name || "Rahul Sharma";
  const dateStr = bookingData?.dateTime?.date || "14 Aug 2026";
  const timeStr = bookingData?.dateTime?.time || "02:30 PM";
  const totalAmount = bookingData?.totalAmount || 329;
  const bookingId = "APT-" + Math.floor(10000 + Math.random() * 90000);
  const otp = String(Math.floor(1000 + Math.random() * 9000));

  useEffect(() => {
    setTimeout(() => setPointsAnimated(true), 700);
    setTimeout(() => setConfettiActive(false), 3500);
  }, []);

  const confettiColors = ['#6366F1', '#F59E0B', '#10B981', '#F43F5E', '#8B5CF6', '#06B6D4'];
  const confettiPieces = Array.from({ length: 20 });

  return (
    <div style={{
      height: '100%',
      minHeight: '680px',
      background: 'linear-gradient(180deg, #F0F4FF 0%, #F8FAFC 50%, #FFFFFF 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }} className="animate-fade-in">

      {/* ── CONFETTI BURST ── */}
      {confettiActive && confettiPieces.map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${-10 + Math.random() * 30}%`,
          left: `${5 + (i / confettiPieces.length) * 90}%`,
          width: `${6 + Math.random() * 6}px`,
          height: `${6 + Math.random() * 6}px`,
          borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          background: confettiColors[i % confettiColors.length],
          animation: `confettiFall ${1.2 + Math.random() * 1.5}s ease-out forwards`,
          animationDelay: `${Math.random() * 0.6}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
          pointerEvents: 'none',
          zIndex: 99
        }} />
      ))}

      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }
        @keyframes successPop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.12); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUpPts {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50% { box-shadow: 0 0 0 16px rgba(16,185,129,0); }
        }
      `}</style>

      {/* ── HERO SUCCESS SECTION ── */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(145deg, #0F172A 0%, #1E1B4B 55%, #3730A3 100%)',
        padding: '40px 24px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderBottomLeftRadius: '36px',
        borderBottomRightRadius: '36px',
        position: 'relative'
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(99,102,241,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20px', left: '-50px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', pointerEvents: 'none' }} />

        {/* Animated checkmark */}
        <div style={{
          width: '90px', height: '90px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #10B981, #059669)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '20px',
          animation: 'successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both, pulseGlow 2s ease-in-out 0.5s infinite',
          boxShadow: '0 16px 40px rgba(16,185,129,0.45)',
          position: 'relative', zIndex: 1
        }}>
          <CheckCircle2 size={52} color="#FFFFFF" strokeWidth={2.5} />
        </div>

        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '4px' }}>
          Booking Confirmed! 🎉
        </h1>
        <p style={{ fontSize: '0.82rem', color: '#A5B4FC', marginBottom: '20px' }}>
          Booking ID: <strong style={{ color: '#FCD34D', letterSpacing: '0.04em' }}>#{bookingId}</strong>
        </p>

        {/* Points earned pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(245,158,11,0.2)',
          border: '1px solid rgba(245,158,11,0.4)',
          borderRadius: '999px',
          padding: '8px 20px',
          animation: pointsAnimated ? 'slideUpPts 0.5s ease-out both' : 'none'
        }}>
          <Star size={14} color="#FCD34D" fill="#FCD34D" />
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FCD34D' }}>+33 Reward Points Earned!</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ width: '100%', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>

        {/* Detail Card */}
        <div style={{
          background: '#FFFFFF', borderRadius: '24px', padding: '20px',
          border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0F172A' }}>{bizName}</div>
              <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{srvName} • with {stfName}</p>
            </div>
            <div style={{
              padding: '6px 12px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
              fontSize: '0.78rem', fontWeight: 800, color: '#10B981',
              border: '1px solid #A7F3D0'
            }}>✓ Confirmed</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ background: '#F8FAFC', borderRadius: '14px', padding: '12px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>📅 Date & Time</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{dateStr}</div>
              <div style={{ fontSize: '0.82rem', color: '#4F46E5', fontWeight: 700 }}>{timeStr}</div>
            </div>
            <div style={{ background: '#F8FAFC', borderRadius: '14px', padding: '12px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>💰 Total Paid</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#10B981' }}>₹{totalAmount}</div>
              <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Incl. all taxes</div>
            </div>
          </div>
        </div>

        {/* OTP Check-in Card */}
        <div style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
          borderRadius: '20px', padding: '16px 20px',
          border: '2px dashed #818CF8',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366F1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🔐 Reception Desk OTP
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4F46E5', letterSpacing: '0.1em', marginTop: '2px' }}>
              {otp}
            </div>
            <div style={{ fontSize: '0.7rem', color: '#818CF8' }}>Show this at the reception counter</div>
          </div>
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #4F46E5, #6366F1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(79,70,229,0.35)'
          }}>
            <QrCode size={28} color="#FFFFFF" />
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[
            { icon: <Navigation size={16} color="#4F46E5" />, label: 'Get Directions', bg: '#EEF2FF', color: '#4F46E5' },
            { icon: <Calendar size={16} color="#10B981" />, label: 'Add to Calendar', bg: '#ECFDF5', color: '#10B981' }
          ].map((btn, i) => (
            <button key={i} style={{
              padding: '12px', borderRadius: '14px',
              background: btn.bg, color: btn.color,
              fontSize: '0.82rem', fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              border: `1px solid ${btn.bg}`
            }}>
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CTA BUTTONS ── */}
      <div style={{ width: '100%', padding: '0 16px 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          onClick={() => onViewBooking(bookingId)}
          style={{
            width: '100%', padding: '16px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 800,
            boxShadow: '0 10px 28px rgba(79,70,229,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
          }}
        >
          <span>View Boarding Pass</span>
          <ArrowRight size={18} />
        </button>

        <button
          onClick={onHome}
          style={{
            width: '100%', padding: '14px', borderRadius: '20px',
            background: '#F1F5F9', color: '#64748B', fontSize: '0.9rem', fontWeight: 700
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
