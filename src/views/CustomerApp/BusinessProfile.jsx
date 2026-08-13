import React, { useState } from 'react';
import { ArrowLeft, Share2, Heart, Phone, Navigation, Star, ShieldCheck, Clock, MapPin, ChevronRight, Check } from 'lucide-react';

export default function BusinessProfile({ business, onBack, onSelectService, favorites, onToggleFavorite }) {
  const [activeTab, setActiveTab] = useState('services'); // 'services' | 'staff' | 'about' | 'reviews'

  if (!business) return null;

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Hero Gallery & Header Navigation */}
      <div style={{ position: 'relative', height: '220px' }}>
        <img
          src={business.heroImage}
          alt={business.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}>
          <button
            onClick={onBack}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ArrowLeft size={20} color="#0F172A" />
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Share2 size={18} color="#0F172A" />
            </button>

            <button
              onClick={() => onToggleFavorite(business.id)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Heart size={18} color={favorites.includes(business.id) ? '#EF4444' : '#0F172A'} fill={favorites.includes(business.id) ? '#EF4444' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Info Card */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '24px 24px 0 0',
        marginTop: '-24px',
        position: 'relative',
        zIndex: 5,
        padding: '20px 20px 0',
        boxShadow: '0 -10px 25px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>{business.name}</span>
              {business.verified && <ShieldCheck size={18} color="#10B981" />}
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>{business.tagline}</p>
          </div>

          <div style={{ background: '#FEF3C7', padding: '6px 10px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.9rem', fontWeight: 800, color: '#D97706' }}>
              <Star size={14} fill="#D97706" /> {business.rating}
            </div>
            <div style={{ fontSize: '0.68rem', color: '#92400E', fontWeight: 600 }}>{business.reviewCount} reviews</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#64748B', marginBottom: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={14} color="#4F46E5" /> {business.address}
          </span>
        </div>

        {/* Quick Actions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <button style={{
            padding: '10px',
            borderRadius: '12px',
            background: '#F1F5F9',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Phone size={14} color="#4F46E5" />
            <span>Call Business</span>
          </button>

          <button style={{
            padding: '10px',
            borderRadius: '12px',
            background: '#EEF2FF',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#4F46E5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Navigation size={14} color="#4F46E5" />
            <span>Get Directions</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0' }}>
          {[
            { id: 'services', label: 'Services' },
            { id: 'staff', label: 'Staff' },
            { id: 'about', label: 'About' },
            { id: 'reviews', label: 'Reviews' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '12px 0',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: activeTab === tab.id ? '#4F46E5' : '#64748B',
                borderBottom: activeTab === tab.id ? '3px solid #4F46E5' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Contents */}
      <div style={{ padding: '20px' }}>
        {/* SERVICES TAB */}
        {activeTab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {business.services.map(srv => (
              <div
                key={srv.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  display: 'flex',
                  gap: '14px'
                }}
              >
                <img src={srv.image} alt={srv.name} style={{ width: '90px', height: '90px', borderRadius: '16px', objectFit: 'cover' }} />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{srv.name}</h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 6px' }}>{srv.duration} • {srv.description.substring(0, 55)}...</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>₹{srv.price}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'line-through', marginLeft: '6px' }}>₹{srv.originalPrice}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(srv)}
                      style={{
                        padding: '8px 18px',
                        borderRadius: '999px',
                        background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                        color: '#FFFFFF',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(79,70,229,0.25)'
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STAFF TAB */}
        {activeTab === 'staff' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {business.staff.map(stf => (
              <div key={stf.id} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <img src={stf.photo} alt={stf.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 10px' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{stf.name}</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '2px 0 6px' }}>{stf.role}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706' }}>
                  ★ {stf.rating} ({stf.experience})
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', lineHeight: 1.6 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>About {business.name}</h3>
            <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '16px' }}>{business.about}</p>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Cancellation Policy</h4>
            <p style={{ fontSize: '0.82rem', color: '#64748B' }}>{business.cancellationPolicy}</p>
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === 'reviews' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {business.reviews.map(rev => (
              <div key={rev.id} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={rev.avatar} alt={rev.author} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{rev.author}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{rev.date}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#475569' }}>"{rev.comment}"</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Bottom CTA */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        padding: '12px 20px',
        borderTop: '1px solid #E2E8F0',
        zIndex: 100
      }}>
        <button
          onClick={() => onSelectService(business.services[0])}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.98rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
