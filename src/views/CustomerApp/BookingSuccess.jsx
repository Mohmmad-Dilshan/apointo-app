import React from 'react';
import { CheckCircle2, Calendar, MapPin, Share2, Navigation, Sparkles, ArrowRight } from 'lucide-react';

export default function BookingSuccess({ bookingData, onViewBooking, onHome }) {
  const bizName = bookingData?.business?.name || "Urban Cut Studio";
  const srvName = bookingData?.service?.name || "Classic Haircut & Styling";
  const stfName = bookingData?.staff?.name || "Rahul Sharma";
  const dateStr = bookingData?.dateTime?.date || "14 Aug 2026";
  const timeStr = bookingData?.dateTime?.time || "02:30 PM";
  const totalAmount = bookingData?.totalAmount || 329;
  const bookingId = "APT-" + Math.floor(10000 + Math.random() * 90000);

  return (
    <div style={{
      height: '100%',
      minHeight: '680px',
      background: '#FFFFFF',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'center'
    }} className="animate-fade-in">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {/* Animated Success Badge */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: '#ECFDF5',
          border: '4px solid #10B981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          boxShadow: '0 10px 30px rgba(16,185,129,0.3)'
        }}>
          <CheckCircle2 size={54} color="#10B981" />
        </div>

        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
          Booking Confirmed! 🎉
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '24px' }}>
          Booking ID: <strong style={{ color: '#4F46E5' }}>#{bookingId}</strong>
        </p>

        {/* Confirmation Detail Card */}
        <div style={{
          width: '100%',
          background: '#F8FAFC',
          borderRadius: '24px',
          padding: '20px',
          border: '1px solid #E2E8F0',
          textAlign: 'left',
          marginBottom: '24px'
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>{bizName}</div>
          <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '14px' }}>{srvName} • {stfName}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '12px', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Date & Time</span>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{dateStr}</div>
              <div style={{ fontSize: '0.82rem', color: '#4F46E5', fontWeight: 700 }}>{timeStr}</div>
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Paid Amount</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>₹{totalAmount}</div>
            </div>
          </div>
        </div>

        {/* Quick Helper Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%', marginBottom: '20px' }}>
          <button style={{ padding: '12px', borderRadius: '14px', background: '#F1F5F9', fontSize: '0.82rem', fontWeight: 700, color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Navigation size={16} color="#4F46E5" /> Directions
          </button>
          <button style={{ padding: '12px', borderRadius: '14px', background: '#F1F5F9', fontSize: '0.82rem', fontWeight: 700, color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Calendar size={16} color="#4F46E5" /> Add Calendar
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          onClick={() => onViewBooking(bookingId)}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.98rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          View Booking Details
        </button>

        <button
          onClick={onHome}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '999px',
            background: 'transparent',
            color: '#64748B',
            fontSize: '0.9rem',
            fontWeight: 700
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
