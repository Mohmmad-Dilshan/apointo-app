import React from 'react';
import { X, Clock, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function ServiceDetailModal({ service, business, isOpen, onClose, onProceedToStaff }) {
  if (!isOpen || !service) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxHeight: '90vh',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        padding: '24px',
        overflowY: 'auto'
      }} className="animate-slide-up no-scrollbar">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>{service.name}</h3>
            <p style={{ fontSize: '0.82rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
              <Clock size={14} color="#4F46E5" /> {service.duration} • {business.name}
            </p>
          </div>
          <button onClick={onClose} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <X size={18} color="#64748B" />
          </button>
        </div>

        {/* Hero Image */}
        <div style={{ height: '160px', borderRadius: '20px', overflow: 'hidden', marginBottom: '20px' }}>
          <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
          {service.description}
        </p>

        {/* Included List */}
        {service.included && service.included.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '10px' }}>What's Included</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {service.included.map((inc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#334155' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={12} color="#10B981" />
                  </div>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price & Action */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Service Price</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>₹{service.price}</div>
          </div>

          <button
            onClick={() => onProceedToStaff(service)}
            style={{
              padding: '14px 28px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
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
