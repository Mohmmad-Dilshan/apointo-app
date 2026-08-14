import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Phone, RefreshCw, XCircle, QrCode, ShieldCheck, ChevronRight, Download, Share2, Wallet, CheckCircle2, Navigation, AlertCircle, Sparkles } from 'lucide-react';
import RescheduleModal from './RescheduleModal';
import CancelModal from './CancelModal';

export default function BookingDetail({ booking, onBack, onReschedule, onCancel, onBookAgain }) {
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [downloadToast, setDownloadToast] = useState(null);

  if (!booking) return null;

  const handleDownloadInvoice = () => {
    setDownloadToast("Downloading Invoice PDF...");
    setTimeout(() => {
      setDownloadToast(`Invoice #${booking.id}.pdf saved to Downloads!`);
      setTimeout(() => setDownloadToast(null), 3000);
    }, 1000);
  };

  const handleAddToWallet = () => {
    setDownloadToast("Pass added to Apple Wallet! ");
    setTimeout(() => setDownloadToast(null), 3000);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Toast Alert */}
      {downloadToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2500,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(16px)',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '999px',
          fontSize: '0.84rem',
          fontWeight: 800,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255,255,255,0.2)'
        }} className="animate-fade-in">
          <CheckCircle2 size={16} color="#10B981" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Dark Midnight Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 32px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onBack}
            style={{
              width: '38px',
              height: '38px',
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
            <ArrowLeft size={20} />
          </button>

          <div>
            <span style={{ fontSize: '0.72rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Digital Boarding Pass
            </span>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Booking #{booking.id}
            </h1>
          </div>
        </div>

        <button
          onClick={handleDownloadInvoice}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}
          title="Download PDF Receipt"
        >
          <Download size={18} />
        </button>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        
        {/* Live Queue Status Banner */}
        {booking.status === 'Confirmed' && (
          <div style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)',
            borderRadius: '20px',
            padding: '14px 18px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 24px rgba(79,70,229,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={20} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800 }}>Live Queue Position: #2</div>
                <div style={{ fontSize: '0.74rem', color: '#C7D2FE', marginTop: '1px' }}>Est. Wait: 12 mins • Arrive by 02:20 PM</div>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', background: '#ECFDF5', color: '#059669', padding: '3px 8px', borderRadius: '999px', fontWeight: 800 }}>
              On Time
            </span>
          </div>
        )}

        {/* Futuristic Physical Boarding Pass Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '22px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 12px 32px rgba(15,23,42,0.05)',
          position: 'relative'
        }}>
          {/* Header Row: Status + Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 800 }}>Appointment Status</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>{booking.status}</div>
            </div>

            <span className={`badge ${booking.status === 'Confirmed' || booking.status === 'Upcoming' ? 'badge-success' : booking.status === 'Completed' ? 'badge-primary' : 'badge-danger'}`} style={{ padding: '6px 14px', fontSize: '0.82rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {booking.status === 'Confirmed' || booking.status === 'Upcoming' ? '🟢 Confirmed' : booking.status === 'Completed' ? '✅ Completed' : '❌ Cancelled'}
            </span>
          </div>

          {/* QR & OTP Scanner Card */}
          {booking.status !== 'Cancelled' && (
            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '18px', textAlign: 'center', border: '1px solid #F1F5F9', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>Counter Check-in Pass</div>
              <p style={{ fontSize: '0.76rem', color: '#64748B', marginBottom: '14px' }}>Scan QR or verify OTP code at reception</p>

              <div style={{ width: '145px', height: '145px', margin: '0 auto 12px', background: '#FFFFFF', padding: '10px', borderRadius: '20px', boxShadow: '0 6px 18px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${booking.id}`} alt="QR Code" style={{ width: '100%', height: '100%' }} />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EEF2FF', border: '1px solid #C7D2FE', color: '#4F46E5', padding: '5px 16px', borderRadius: '999px', fontSize: '0.84rem', fontWeight: 800 }}>
                <ShieldCheck size={15} />
                <span>Desk OTP: {booking.otp || '4892'}</span>
              </div>
            </div>
          )}

          {/* Venue & Service Info breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>Salon / Clinic:</span>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{booking.businessName}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>Service Name:</span>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{booking.serviceName}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>Assigned Specialist:</span>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{booking.staffName}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>Date & Slot:</span>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#4F46E5' }}>{booking.date} at {booking.time}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px dashed #E2E8F0' }}>
              <span style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800 }}>Total Paid:</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>₹{booking.totalPaid || booking.price}</span>
            </div>
          </div>
        </div>

        {/* Venue Action Shortcuts: Call & Navigate */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            onClick={() => window.open(`tel:+919876543210`)}
            style={{
              padding: '14px',
              borderRadius: '18px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#334155',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <Phone size={15} color="#4F46E5" />
            <span>Call Reception</span>
          </button>

          <button
            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(booking.businessName)}`, '_blank')}
            style={{
              padding: '14px',
              borderRadius: '18px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#334155',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <Navigation size={15} color="#6366F1" />
            <span>Get Directions</span>
          </button>
        </div>

        {/* Quick Export Tools Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            onClick={handleAddToWallet}
            style={{
              padding: '14px',
              borderRadius: '18px',
              background: '#0F172A',
              color: '#FFFFFF',
              fontSize: '0.84rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 6px 18px rgba(15,23,42,0.25)'
            }}
          >
            <Wallet size={16} />
            <span> Apple Wallet</span>
          </button>

          <button
            onClick={handleDownloadInvoice}
            style={{
              padding: '14px',
              borderRadius: '18px',
              background: '#EEF2FF',
              color: '#4F46E5',
              fontSize: '0.84rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              border: '1px solid #C7D2FE'
            }}
          >
            <Download size={16} />
            <span>PDF Receipt</span>
          </button>
        </div>

        {/* Booking Management Actions */}
        {booking.status === 'Confirmed' || booking.status === 'Upcoming' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button
              onClick={() => setIsRescheduleOpen(true)}
              style={{
                padding: '15px',
                borderRadius: '18px',
                background: '#F1F5F9',
                color: '#334155',
                fontSize: '0.88rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={16} /> Reschedule
            </button>

            <button
              onClick={() => setIsCancelOpen(true)}
              style={{
                padding: '15px',
                borderRadius: '18px',
                background: '#FFF1F2',
                color: '#F43F5E',
                fontSize: '0.88rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <XCircle size={16} /> Cancel Slot
            </button>
          </div>
        ) : (
          <button
            onClick={() => onBookAgain(booking)}
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
            Book Again
          </button>
        )}
      </div>

      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        onConfirm={(newDate, newTime) => {
          onReschedule(booking.id, newDate, newTime);
          setIsRescheduleOpen(false);
        }}
      />

      <CancelModal
        isOpen={isCancelOpen}
        onClose={() => setIsCancelOpen(false)}
        onConfirm={() => {
          onCancel(booking.id);
          setIsCancelOpen(false);
        }}
      />
    </div>
  );
}
