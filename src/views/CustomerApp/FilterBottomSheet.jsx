import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function FilterBottomSheet({ isOpen, onClose, onApplyFilters }) {
  const [distance, setDistance] = useState('3km');
  const [rating, setRating] = useState('4.5');
  const [price, setPrice] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  const [openNow, setOpenNow] = useState(true);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,0.65)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        maxHeight: '85vh',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        padding: '20px 24px 30px',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
        overflowY: 'auto'
      }} className="animate-slide-up no-scrollbar">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Filters & Sorting</h3>
          <button onClick={onClose} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <X size={18} color="#64748B" />
          </button>
        </div>

        {/* Sort By */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>Sort By</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { id: 'recommended', label: 'Recommended' },
              { id: 'nearest', label: 'Nearest' },
              { id: 'top_rated', label: 'Top Rated' },
              { id: 'price_low', label: 'Price: Low to High' },
              { id: 'earliest', label: 'Earliest Available' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setSortBy(opt.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: sortBy === opt.id ? '#4F46E5' : '#F1F5F9',
                  color: sortBy === opt.id ? '#FFFFFF' : '#334155',
                  border: sortBy === opt.id ? '1px solid #4F46E5' : '1px solid #E2E8F0'
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Distance */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>Distance Radius</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {['1km', '3km', '5km', '10km'].map(d => (
              <button
                key={d}
                onClick={() => setDistance(d)}
                style={{
                  padding: '10px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: distance === d ? '#EEF2FF' : '#F8FAFC',
                  color: distance === d ? '#4F46E5' : '#334155',
                  border: distance === d ? '2px solid #4F46E5' : '1px solid #E2E8F0'
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Minimum Rating */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>Rating</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['4.5', '4.0', '3.5'].map(r => (
              <button
                key={r}
                onClick={() => setRating(r)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: rating === r ? '#FEF3C7' : '#F8FAFC',
                  color: rating === r ? '#D97706' : '#334155',
                  border: rating === r ? '2px solid #F59E0B' : '1px solid #E2E8F0'
                }}
              >
                ★ {r}+
              </button>
            ))}
          </div>
        </div>

        {/* Toggle: Open Now */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          background: '#F8FAFC',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          marginBottom: '24px'
        }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Open Now</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Only show businesses currently taking slots</div>
          </div>
          <button
            onClick={() => setOpenNow(!openNow)}
            style={{
              width: '44px',
              height: '24px',
              borderRadius: '999px',
              background: openNow ? '#4F46E5' : '#CBD5E1',
              position: 'relative',
              transition: 'all 0.2s'
            }}
          >
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#FFFFFF',
              position: 'absolute',
              top: '3px',
              left: openNow ? '23px' : '3px',
              transition: 'all 0.2s'
            }} />
          </button>
        </div>

        {/* Apply Button */}
        <button
          onClick={() => {
            onApplyFilters({ distance, rating, price, sortBy, openNow });
            onClose();
          }}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
