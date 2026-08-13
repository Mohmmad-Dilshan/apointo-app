import React from 'react';
import { Heart, Star, ShieldCheck } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';
import EmptyState from '../../components/EmptyState';

export default function FavoritesScreen({ favorites, onSelectBusiness, onToggleFavorite, onNavigateScreen }) {
  const favoriteBusinesses = BUSINESSES.filter(b => favorites.includes(b.id));

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>Saved Favorites</h1>
        <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Quick 1-tap rebooking for your preferred spots</p>
      </div>

      <div style={{ padding: '20px' }}>
        {favoriteBusinesses.length === 0 ? (
          <EmptyState type="favorites" onAction={() => onNavigateScreen('home')} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {favoriteBusinesses.map(biz => (
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
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleFavorite(biz.id); }}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Heart size={18} color="#EF4444" fill="#EF4444" />
                  </button>
                </div>

                <div style={{ padding: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: '#FEF3C7', padding: '2px 6px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706' }}>
                      <Star size={11} fill="#D97706" /> {biz.rating}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{biz.category} • {biz.distance}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</span>
                    <button style={{ padding: '6px 14px', borderRadius: '999px', background: '#4F46E5', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: 700 }}>
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
