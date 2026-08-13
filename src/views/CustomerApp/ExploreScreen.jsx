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
    <div style={{ background: '#F8FAFC', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>Explore & Discover</h1>
        <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Curated beauty, wellness & lifestyle services</p>

        {/* Search Bar */}
        <button
          onClick={() => onNavigateScreen('search')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#F1F5F9',
            padding: '10px 14px',
            borderRadius: '14px',
            marginTop: '12px'
          }}
        >
          <Search size={16} color="#4F46E5" />
          <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Search by service, area or salon...</span>
        </button>
      </div>

      {/* Collection Chips Bar */}
      <div style={{ padding: '16px 0 0 20px' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingRight: '20px', paddingBottom: '6px' }} className="no-scrollbar">
          {collections.map(col => (
            <button
              key={col.id}
              onClick={() => setSelectedCollection(col.id)}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: selectedCollection === col.id ? '#4F46E5' : '#FFFFFF',
                color: selectedCollection === col.id ? '#FFFFFF' : '#334155',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
              }}
            >
              {col.icon}
              <span>{col.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Banner: Premium Experiences */}
      <div style={{ padding: '16px 20px 0' }}>
        <div style={{
          height: '160px',
          borderRadius: '24px',
          backgroundImage: 'linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%), url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: '#FFFFFF',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
        }}>
          <span style={{ fontSize: '0.72rem', background: '#F59E0B', color: '#0F172A', padding: '2px 8px', borderRadius: '6px', fontWeight: 800, width: 'fit-content', textTransform: 'uppercase', marginBottom: '4px' }}>
            Featured Collection
          </span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Luxury Spa & Wellness Retreats</h3>
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
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
              cursor: 'pointer'
            }}
          >
            <div style={{ height: '140px', position: 'relative' }}>
              <img src={biz.heroImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#FFFFFF', padding: '4px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Star size={12} fill="#D97706" /> {biz.rating}
              </div>
            </div>

            <div style={{ padding: '14px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '2px 0 8px' }}>{biz.tagline}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', background: '#ECFDF5', padding: '4px 8px', borderRadius: '6px' }}>
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
