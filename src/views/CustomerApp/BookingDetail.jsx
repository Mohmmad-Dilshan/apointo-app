import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Phone, RefreshCw, XCircle, QrCode, ShieldCheck, ChevronRight, Download, Share2, Wallet, CheckCircle2 } from 'lucide-react';
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
      setDownloadToast(`Invoice #${booking.id}.pdf saved!`);
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
          background: '#0F172A',
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
        padding: '24px 20px 28px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px',
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
              Booking Reference
            </span>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              #{booking.id}
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
        {/* Booking Pass Card with QR */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Status</span>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>{booking.status}</div>
            </div>

            <span className={`badge ${booking.status === 'Confirmed' || booking.status === 'Upcoming' ? 'badge-success' : booking.status === 'Completed' ? 'badge-primary' : 'badge-danger'}`} style={{ padding: '6px 14px', fontSize: '0.82rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {booking.status === 'Confirmed' || booking.status === 'Upcoming' ? '🟢 Confirmed' : booking.status === 'Completed' ? '✅ Completed' : '❌ Cancelled'}
            </span>
          </div>

          {/* QR Code section */}
          {booking.status !== 'Cancelled' && (
            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '16px', textAlign: 'center', border: '1px solid #F1F5F9', marginBottom: '16px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>Salon Check-in Pass</div>
              <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '12px' }}>Show QR or OTP code at reception counter</p>

              <div style={{ width: '140px', height: '140px', margin: '0 auto 10px', background: '#FFFFFF', padding: '8px', borderRadius: '18px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${booking.id}`} alt="QR" style={{ width: '100%', height: '100%' }} />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EEF2FF', border: '1px solid #C7D2FE', color: '#4F46E5', padding: '4px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800 }}>
                <span>Desk OTP: {booking.otp || '4892'}</span>
              </div>
            </div>
          )}

          {/* Service breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
              <span style={{ color: '#64748B', fontWeight: 600 }}>Venue:</span>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>{booking.businessName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
              <span style={{ color: '#64748B', fontWeight: 600 }}>Service:</span>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>{booking.serviceName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
              <span style={{ color: '#64748B', fontWeight: 600 }}>Specialist:</span>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>{booking.staffName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
              <span style={{ color: '#64748B', fontWeight: 600 }}>Date & Time:</span>
              <span style={{ fontWeight: 800, color: '#4F46E5' }}>{booking.date} at {booking.time}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', paddingTop: '8px', borderTop: '1px dashed #E2E8F0' }}>
              <span style={{ color: '#0F172A', fontWeight: 800 }}>Total Paid:</span>
              <span style={{ fontWeight: 800, color: '#10B981', fontSize: '1rem' }}>₹{booking.totalPaid || booking.price}</span>
            </div>
          </div>
        </div>

        {/* Quick Tools Row: Apple Wallet & Download PDF */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            onClick={handleAddToWallet}
            style={{
              padding: '12px',
              borderRadius: '16px',
              background: '#0F172A',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px rgba(15,23,42,0.2)'
            }}
          >
            <Wallet size={16} />
            <span> Apple Wallet</span>
          </button>

          <button
            onClick={handleDownloadInvoice}
            style={{
              padding: '12px',
              borderRadius: '16px',
              background: '#EEF2FF',
              color: '#4F46E5',
              fontSize: '0.8rem',
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

        {/* Actions Grid */}
        {booking.status === 'Confirmed' || booking.status === 'Upcoming' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button
              onClick={() => setIsRescheduleOpen(true)}
              style={{
                padding: '14px',
                borderRadius: '16px',
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
                padding: '14px',
                borderRadius: '16px',
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
              <XCircle size={16} /> Cancel
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
