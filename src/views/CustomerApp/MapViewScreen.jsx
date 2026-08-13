import React, { useState } from 'react';
import { ArrowLeft, MapPin, List, Star, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function MapViewScreen({ onBack, onSelectBusiness }) {
  const [selectedBiz, setSelectedBiz] = useState(BUSINESSES[0]);

  return (
    <div style={{ position: 'relative', height: '100%', minHeight: '650px', background: '#E2E8F0', overflow: 'hidden' }} className="animate-fade-in">
      {/* Top Navigation Bar */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        right: '16px',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={onBack}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowLeft size={20} color="#0F172A" />
        </button>

        <button
          onClick={onBack}
          style={{
            padding: '8px 16px',
            borderRadius: '999px',
            background: '#0F172A',
            color: '#FFFFFF',
            fontSize: '0.82rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          <List size={14} />
          <span>Switch to List</span>
        </button>
      </div>

      {/* Mock Interactive Map Canvas */}
      <div style={{
        width: '100%',
        height: '100%',
        minHeight: '650px',
        background: 'radial-gradient(circle, #F1F5F9 0%, #E2E8F0 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Map Grid Pattern Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.8
        }} />

        {/* Map Markers */}
        {BUSINESSES.map((biz, idx) => {
          const isSelected = selectedBiz.id === biz.id;
          const offsets = [
            { top: '35%', left: '45%' },
            { top: '48%', left: '65%' },
            { top: '25%', left: '70%' },
            { top: '55%', left: '30%' },
            { top: '65%', left: '55%' }
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
                zIndex: isSelected ? 50 : 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                padding: '6px 12px',
                borderRadius: '999px',
                background: isSelected ? '#4F46E5' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#0F172A',
                fontSize: '0.78rem',
                fontWeight: 800,
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                border: isSelected ? '2px solid #FFFFFF' : '1px solid #CBD5E1',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span>★ {biz.rating}</span>
                <span>• {biz.name.split(' ')[0]}</span>
              </div>
              <div style={{
                width: '12px',
                height: '12px',
                background: isSelected ? '#4F46E5' : '#FFFFFF',
                transform: 'rotate(45deg)',
                marginTop: '-6px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }} />
            </button>
          );
        })}
      </div>

      {/* Bottom Sheet Card for Selected Business */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '16px',
        right: '16px',
        background: '#FFFFFF',
        borderRadius: '24px',
        padding: '16px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        border: '1px solid #E2E8F0',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
          <img
            src={selectedBiz.heroImage}
            alt={selectedBiz.name}
            style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }}
          />

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{selectedBiz.name}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: '#FEF3C7', padding: '2px 6px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706' }}>
                <Star size={11} fill="#D97706" /> {selectedBiz.rating}
              </div>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0' }}>{selectedBiz.category} • {selectedBiz.distance}</p>
            <p style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>Slot: {selectedBiz.nextSlot}</p>
          </div>
        </div>

        <button
          onClick={() => onSelectBusiness(selectedBiz)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.88rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(79,70,229,0.3)'
          }}
        >
          <span>View Business & Book</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
