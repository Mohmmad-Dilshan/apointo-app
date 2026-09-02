import React, { useState } from 'react';
import { ArrowLeft, MapPin, List, Star, Clock, ShieldCheck, ChevronRight, Navigation, SlidersHorizontal, Zap } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function MapViewScreen({ onBack, onSelectBusiness }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBiz, setSelectedBiz] = useState(BUSINESSES[0]);
  const [radiusKm, setRadiusKm] = useState(5);

  const categories = ['All', 'Salon', 'Dental', 'Doctor', 'Gym'];

  const filteredBusinesses = BUSINESSES.filter(b => {
    if (selectedCategory === 'All') return true;
    return b.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div style={{ position: 'relative', height: '100%', minHeight: '100%', background: '#0F172A', overflow: 'hidden' }} className="animate-fade-in">
      {/* Top Header Bar & Category Pills */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '14px',
        right: '14px',
        zIndex: 150,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Navigation Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={onBack}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 24px rgba(15,23,42,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.8)'
            }}
          >
            <ArrowLeft size={20} color="#0F172A" />
          </button>

          {/* Radius Selector Pill */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '4px 12px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <MapPin size={13} color="#6366F1" />
            <span>Within {radiusKm} km</span>
          </div>

          <button
            onClick={onBack}
            style={{
              padding: '9px 16px',
              borderRadius: '999px',
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(16px)',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <List size={14} />
            <span>List View</span>
          </button>
        </div>

        {/* Category Horizontal Filter Bar */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px'
        }} className="no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: selectedCategory === cat ? '#0F172A' : '#FFFFFF',
                background: selectedCategory === cat ? '#FFFFFF' : 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(12px)',
                border: selectedCategory === cat ? '1px solid #FFFFFF' : '1px solid rgba(255,255,255,0.2)',
                boxShadow: selectedCategory === cat ? '0 4px 14px rgba(0,0,0,0.2)' : 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {cat === 'All' ? '🗺️ All Spots' : cat === 'Salon' ? '✂️ Salons' : cat === 'Dental' ? '🦷 Dental' : cat === 'Doctor' ? '🩺 Doctors' : '🏋️ Gyms'}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map Canvas Container */}
      <div style={{
        width: '100%',
        height: '100%',
        minHeight: '650px',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Dark Mode Vector Map Grid Lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(99,102,241,0.2) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.9
        }} />

        {/* Map Pins */}
        {filteredBusinesses.map((biz, idx) => {
          const isSelected = selectedBiz?.id === biz.id;
          const offsets = [
            { top: '38%', left: '42%' },
            { top: '48%', left: '68%' },
            { top: '28%', left: '72%' },
            { top: '56%', left: '28%' },
            { top: '64%', left: '58%' }
          ];

          const pos = offsets[idx % offsets.length];

          return (
            <button
              key={biz.id}
              onClick={() => setSelectedBiz(biz)}
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                transform: 'translate(-50%, -50%)',
                zIndex: isSelected ? 100 : 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {/* Glowing Pulse Ring for Selected Pin */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(99,102,241,0.3)',
                  animation: 'pulse 1.8s infinite',
                  pointerEvents: 'none'
                }} />
              )}

              <div style={{
                padding: '7px 14px',
                borderRadius: '999px',
                background: isSelected ? 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' : 'rgba(255,255,255,0.95)',
                color: isSelected ? '#FFFFFF' : '#0F172A',
                fontSize: '0.8rem',
                fontWeight: 800,
                boxShadow: isSelected ? '0 8px 24px rgba(79,70,229,0.5)' : '0 6px 18px rgba(0,0,0,0.3)',
                border: isSelected ? '2px solid #FFFFFF' : '1px solid rgba(255,255,255,0.8)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ color: isSelected ? '#FBBF24' : '#D97706' }}>★ {biz.rating}</span>
                <span>{biz.name.split(' ')[0]}</span>
              </div>

              {/* Pin Arrow */}
              <div style={{
                width: '12px',
                height: '12px',
                background: isSelected ? '#4F46E5' : '#FFFFFF',
                transform: 'rotate(45deg)',
                marginTop: '-6px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }} />
            </button>
          );
        })}
      </div>

      {/* Selected Business Preview Bottom Sheet */}
      {selectedBiz && (
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '14px',
          right: '14px',
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '28px',
          padding: '18px',
          boxShadow: '0 18px 48px rgba(15,23,42,0.3)',
          border: '1px solid rgba(255,255,255,0.8)',
          zIndex: 200
        }} className="animate-slide-up">
          <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
            <img
              src={selectedBiz.heroImage}
              alt={selectedBiz.name}
              style={{ width: '84px', height: '84px', borderRadius: '18px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                  {selectedBiz.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '2px 8px', borderRadius: '8px', fontSize: '0.76rem', fontWeight: 800, color: '#D97706' }}>
                  <Star size={11} fill="#D97706" />
                  <span>{selectedBiz.rating}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <MapPin size={12} color="#94A3B8" />
                <span>{selectedBiz.category} • {selectedBiz.distance}</span>
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                <span style={{ fontSize: '0.72rem', background: '#ECFDF5', color: '#059669', padding: '2px 8px', borderRadius: '6px', fontWeight: 800 }}>
                  ⚡ Slot: {selectedBiz.nextSlot}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px' }}>
            <button
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedBiz.name)}`, '_blank')}
              style={{
                padding: '12px',
                borderRadius: '999px',
                background: '#F1F5F9',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Navigation size={14} color="#6366F1" />
              <span>Navigate</span>
            </button>

            <button
              onClick={() => onSelectBusiness(selectedBiz)}
              style={{
                padding: '12px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 6px 18px rgba(79,70,229,0.35)'
              }}
            >
              <span>View & Book</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
