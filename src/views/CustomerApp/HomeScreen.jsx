import React from 'react';
import { MapPin, Bell, Search, Mic, Star, Clock, ChevronRight, Tag, Heart, ShieldCheck, RotateCcw } from 'lucide-react';
import { CATEGORIES, BUSINESSES } from '../../data/sampleData';

export default function HomeScreen({ user, onOpenLocation, onOpenNotifications, onNavigateScreen, onSelectBusiness, favorites, onToggleFavorite, onQuickRebook }) {
  return (
    <div style={{ background: '#F8FAFC', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header: Location, Notification & Profile */}
      <div style={{
        background: '#FFFFFF',
        padding: '16px 20px 20px',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          {/* Location Selector */}
          <button
            onClick={onOpenLocation}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', textAlign: 'left' }}
          >
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: '#EEF2FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MapPin size={18} color="#4F46E5" />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Location</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>{user.location}</span>
                <ChevronRight size={14} color="#64748B" />
              </div>
            </div>
          </button>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onOpenNotifications}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <Bell size={18} color="#334155" />
              <span style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#F43F5E'
              }} />
            </button>

            <button
              onClick={() => onNavigateScreen('profile')}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #4F46E5'
              }}
            >
              <img src={user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          </div>
        </div>

        {/* Greeting Banner */}
        <div style={{ marginBottom: '16px' }}>
          <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
            Good morning, {user.firstName} 👋
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Book trusted services near you in seconds</p>
        </div>

        {/* Search Bar Input */}
        <button
          onClick={() => onNavigateScreen('search')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#F1F5F9',
            padding: '12px 16px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748B' }}>
            <Search size={18} color="#4F46E5" />
            <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>Search salons, gyms, doctors...</span>
          </div>
          <Mic size={18} color="#64748B" />
        </button>
      </div>

      {/* Quick Categories Bar */}
      <div style={{ padding: '20px 0 0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>Quick Categories</h2>
          <button onClick={() => onNavigateScreen('explore')} style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5' }}>See All</button>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingRight: '20px', paddingBottom: '6px' }} className="no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onNavigateScreen('search')}
              style={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                fontSize: '1.5rem'
              }}>
                {cat.id === 'haircut' ? '✂️' : cat.id === 'spa' ? '🌿' : cat.id === 'gym' ? '🏋️' : cat.id === 'doctor' ? '🩺' : cat.id === 'dental' ? '🦷' : cat.id === 'carservice' ? '🚗' : cat.id === 'homeservice' ? '🧹' : '✨'}
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155' }}>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Rebook Section */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #C7D2FE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4338CA', textTransform: 'uppercase', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RotateCcw size={12} />
              <span>Quick Repeat Booking</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>Urban Cut Studio</div>
            <p style={{ fontSize: '0.78rem', color: '#475569' }}>Classic Haircut • Rahul Sharma</p>
          </div>
          <button
            onClick={() => onQuickRebook(BUSINESSES[0])}
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              background: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(79,70,229,0.3)'
            }}
          >
            Book Again
          </button>
        </div>
      </div>

      {/* Nearby Businesses */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>Nearby Businesses</h2>
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Verified providers within 3 km</p>
          </div>
          <button onClick={() => onNavigateScreen('map')} style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5' }}>Map View</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {BUSINESSES.map(biz => (
            <div
              key={biz.id}
              onClick={() => onSelectBusiness(biz)}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                cursor: 'pointer'
              }}
            >
              {/* Image & Badges */}
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
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <Heart size={18} color={favorites.includes(biz.id) ? '#EF4444' : '#64748B'} fill={favorites.includes(biz.id) ? '#EF4444' : 'none'} />
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
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '2px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, color: '#D97706' }}>
                    <Star size={12} fill="#D97706" />
                    <span>{biz.rating}</span>
                    <span style={{ color: '#92400E', fontWeight: 500 }}>({biz.reviewCount})</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '10px' }}>{biz.category} • {biz.distance}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Starts at</span>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</div>
                  </div>

                  <button style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    background: '#4F46E5',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}>
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
