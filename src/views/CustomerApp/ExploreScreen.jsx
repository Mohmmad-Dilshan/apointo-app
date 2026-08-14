import React, { useState } from 'react';
import { Search, Sparkles, Star, MapPin, Zap, Flame, Award, ShieldCheck } from 'lucide-react';
import { BUSINESSES, CATEGORIES } from '../../data/sampleData';

export default function ExploreScreen({ onSelectBusiness, onNavigateScreen }) {
  const [selectedCollection, setSelectedCollection] = useState('all');

  const collections = [
    { id: 'all', label: 'All Discovery', icon: <Sparkles size={14} /> },
    { id: 'today', label: 'Available Today', icon: <Zap size={14} /> },
    { id: 'under500', label: 'Under ₹500', icon: <Flame size={14} /> },
    { id: 'top_rated', label: 'Best Rated 4.8+', icon: <Star size={14} /> }
  ];

  return (
    <div style={{ background: '#F8FAFC', paddingBottom: '20px' }} className="animate-fade-in">
      {/* Top Header: Dark Midnight Gradient Mesh Container */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '18px 20px 22px',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        borderBottom: '1px solid rgba(255,255,255,0.12)'
      }}>
        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '4px' }}>Explore & Discover</h1>
        <p style={{ fontSize: '0.82rem', color: '#C7D2FE' }}>Curated beauty, wellness & lifestyle services</p>

        {/* Translucent Glass Search Bar */}
        <button
          onClick={() => onNavigateScreen('search')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '12px 16px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginTop: '14px'
          }}
        >
          <Search size={18} color="#A5B4FC" />
          <span style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)' }}>Search by service, area or salon...</span>
        </button>

        {/* Collection Chips Bar */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginTop: '16px' }} className="no-scrollbar">
          {collections.map(col => {
            const isSelected = selectedCollection === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setSelectedCollection(col.id)}
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: isSelected ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' : 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: isSelected ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isSelected ? '0 6px 18px rgba(99,102,241,0.45)' : 'none',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {col.icon}
                <span>{col.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Banner: Premium Experiences */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          height: '170px',
          borderRadius: '24px',
          backgroundImage: 'linear-gradient(180deg, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.85) 100%), url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: '#FFFFFF',
          boxShadow: '0 12px 28px rgba(0,0,0,0.18)'
        }}>
          <span style={{ fontSize: '0.72rem', background: '#F59E0B', color: '#0F172A', padding: '3px 8px', borderRadius: '6px', fontWeight: 800, width: 'fit-content', textTransform: 'uppercase', marginBottom: '6px' }}>
            Featured Collection
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '2px' }}>Luxury Spa & Wellness Retreats</h3>
          <p style={{ fontSize: '0.8rem', color: '#E2E8F0' }}>Get up to 30% OFF on weekend aroma therapy sessions</p>
        </div>
      </div>

      {/* Business Cards Grid */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {BUSINESSES.map(biz => (
          <div
            key={biz.id}
            onClick={() => onSelectBusiness(biz)}
            style={{
              background: '#FFFFFF',
              borderRadius: '22px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              cursor: 'pointer'
            }}
          >
            <div style={{ height: '145px', position: 'relative' }}>
              <img src={biz.heroImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#FFFFFF', padding: '4px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706', display: 'flex', alignItems: 'center', gap: '2px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Star size={12} fill="#D97706" /> {biz.rating}
              </div>
            </div>

            <div style={{ padding: '16px' }}>
              <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '2px 0 10px' }}>{biz.tagline}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', background: '#ECFDF5', padding: '4px 10px', borderRadius: '8px' }}>
                  {biz.nextSlot}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
