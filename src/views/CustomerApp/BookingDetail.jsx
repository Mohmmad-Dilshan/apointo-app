import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Phone, RefreshCw, XCircle, QrCode, ShieldCheck, ChevronRight } from 'lucide-react';
import RescheduleModal from './RescheduleModal';
import CancelModal from './CancelModal';

export default function BookingDetail({ booking, onBack, onReschedule, onCancel, onBookAgain }) {
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  if (!booking) return null;

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Appointment Details</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Booking ID: {booking.id}</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Status Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Booking Status</span>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>{booking.status}</div>
          </div>
          <span className={`badge ${booking.status === 'Confirmed' ? 'badge-success' : booking.status === 'Completed' ? 'badge-primary' : 'badge-danger'}`} style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            ● {booking.status}
          </span>
        </div>

        {/* Check-in QR Code Card */}
        {booking.status === 'Confirmed' && (
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>Digital QR Check-in</div>
            <p style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '12px' }}>Show this QR code at the business counter upon arrival</p>
            <div style={{ width: '130px', height: '130px', margin: '0 auto 12px', background: '#F8FAFC', padding: '8px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${booking.id}`} alt="QR" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4F46E5', letterSpacing: '0.05em' }}>{booking.id}</div>
          </div>
        )}

        {/* Business & Service Info */}
        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>{booking.businessName}</h3>
          <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '14px' }}>{booking.address}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
              <span style={{ color: '#64748B' }}>Service:</span>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>{booking.serviceName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
              <span style={{ color: '#64748B' }}>Specialist:</span>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>{booking.staffName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
              <span style={{ color: '#64748B' }}>Date & Time:</span>
              <span style={{ fontWeight: 800, color: '#4F46E5' }}>{booking.date} at {booking.time}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
              <span style={{ color: '#64748B' }}>Total Paid:</span>
              <span style={{ fontWeight: 800, color: '#10B981' }}>₹{booking.totalPaid || booking.price}</span>
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        {booking.status === 'Confirmed' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button
              onClick={() => setIsRescheduleOpen(true)}
              style={{
                padding: '14px',
                borderRadius: '16px',
                background: '#EEF2FF',
                color: '#4F46E5',
                fontSize: '0.88rem',
                fontWeight: 700,
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
                fontWeight: 700,
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
              fontWeight: 700
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
