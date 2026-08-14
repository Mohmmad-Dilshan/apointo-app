import React from 'react';
import { Heart, Star, ShieldCheck, ArrowLeft, Clock, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';
import EmptyState from '../../components/EmptyState';

export default function FavoritesScreen({ favorites, onSelectBusiness, onToggleFavorite, onNavigateScreen, onBack }) {
  const favoriteBusinesses = BUSINESSES.filter(b => favorites.includes(b.id));

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Dark Midnight Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 24px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {onBack && (
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
          )}
          <div>
            <span style={{ fontSize: '0.72rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              My Bookmarks
            </span>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Saved Favorites ❤️
            </h1>
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '6px 14px',
          borderRadius: '999px',
          fontSize: '0.78rem',
          fontWeight: 800,
          color: '#C7D2FE'
        }}>
          {favoriteBusinesses.length} Saved
        </div>
      </div>

      {/* Main Content List */}
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
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Hero Image & Badges */}
                <div style={{ height: '150px', position: 'relative' }}>
                  <img src={biz.heroImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    gap: '6px'
                  }}>
                    {biz.verified && (
                      <span className="badge badge-success" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                        <ShieldCheck size={12} /> Verified
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleFavorite(biz.id); }}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(6px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Heart size={18} color="#EF4444" fill="#EF4444" />
                  </button>

                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Clock size={12} />
                    <span>Next: {biz.nextSlot}</span>
                  </div>
                </div>

                {/* Business Info Details */}
                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '3px 8px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 800, color: '#D97706' }}>
                      <Star size={12} fill="#D97706" />
                      <span>{biz.rating}</span>
                      <span style={{ color: '#92400E', fontWeight: 500 }}>({biz.reviewCount})</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} color="#94A3B8" />
                    <span>{biz.category} • {biz.distance}</span>
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Starts at</span>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</div>
                    </div>

                    <button style={{
                      padding: '9px 18px',
                      borderRadius: '999px',
                      background: '#4F46E5',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      boxShadow: '0 4px 12px rgba(79,70,229,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>Book Slot</span>
                      <ChevronRight size={14} />
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
