import React from 'react';
import { X, Clock, Sparkles, Check, ChevronRight, ShieldCheck, Zap, Award } from 'lucide-react';

export default function ServiceDetailModal({ service, business, isOpen, onClose, onProceedToStaff }) {
  if (!isOpen || !service) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.72)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '0 8px 8px 8px'
      }}
      className="animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '480px',
          maxHeight: '88vh',
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '24px 22px',
          boxShadow: '0 -16px 48px rgba(15,23,42,0.35)',
          overflowY: 'auto',
          position: 'relative'
        }}
        className="animate-slide-up no-scrollbar"
      >
        {/* Apple iOS Handlebar */}
        <div style={{
          width: '40px',
          height: '5px',
          borderRadius: '999px',
          background: '#CBD5E1',
          margin: '0 auto 16px'
        }} />

        {/* Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#EEF2FF', color: '#4F46E5', padding: '3px 10px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, marginBottom: '6px' }}>
              <Clock size={12} />
              <span>{service.duration} • {business?.name || 'Partner Salon'}</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {service.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              flexShrink: 0
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Hero Image with Floating Instant Tag */}
        <div style={{ height: '170px', borderRadius: '24px', overflow: 'hidden', marginBottom: '18px', position: 'relative' }}>
          <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            padding: '5px 12px',
            borderRadius: '999px',
            fontSize: '0.74rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Zap size={13} color="#F59E0B" />
            <span>Instant Confirmation</span>
          </div>
        </div>

        {/* Description Paragraph */}
        <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
          {service.description || "Comprehensive service performed by top certified specialists using premium products and sterilised medical-grade equipment."}
        </p>

        {/* What's Included */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>
            What's Included
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {(service.included || ['Vitals & Consultation', 'Doctor Medical Advice', 'Digital Prescription', 'Free Follow-up']).map((inc, idx) => (
              <div
                key={idx}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '14px',
                  padding: '10px 12px',
                  border: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#0F172A'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981',
                  flexShrink: 0
                }}>
                  <Check size={13} />
                </div>
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Row: Price & Choose Staff Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid #F1F5F9'
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.04em' }}>
              Service Fee
            </span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              ₹{service.price}
            </div>
          </div>

          <button
            onClick={() => onProceedToStaff(service)}
            style={{
              padding: '14px 24px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
              color: '#FFFFFF',
              fontSize: '0.92rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
              cursor: 'pointer'
            }}
          >
            <span>Choose Staff</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
