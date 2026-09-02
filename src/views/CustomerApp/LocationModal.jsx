import React, { useState } from 'react';
import { MapPin, Navigation, Search, Check } from 'lucide-react';

export default function LocationModal({ currentLocation, onSelectLocation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const popularCities = ["Indiranagar, Bengaluru", "Koramangala, Bengaluru", "HSR Layout, Bengaluru", "Bandra West, Mumbai", "Connaught Place, New Delhi"];

  return (
    <div style={{
      minHeight: '100%',
      background: '#FFFFFF',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }} className="animate-fade-in no-scrollbar">
      <div>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          background: '#EEF2FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <MapPin size={32} color="#4F46E5" />
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
          Find services near you
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
          Enable location to discover top salons, spas, fitness studios & doctors available around your immediate vicinity.
        </p>

        {/* Action Button: Auto Detect */}
        <button
          onClick={() => onSelectLocation("Indiranagar, Bengaluru")}
          style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: '16px',
            background: '#4F46E5',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px',
            boxShadow: '0 8px 20px rgba(79,70,229,0.3)'
          }}
        >
          <Navigation size={18} />
          <span>Allow Location Access</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0', color: '#94A3B8' }}>
          <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>OR ENTER MANUALLY</span>
          <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
        </div>

        {/* Manual Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: '#F1F5F9',
          padding: '12px 16px',
          borderRadius: '14px',
          marginBottom: '20px'
        }}>
          <Search size={18} color="#64748B" />
          <input
            type="text"
            placeholder="Search city, area or pincode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.9rem', color: '#0F172A' }}
          />
        </div>

        {/* Popular Locations */}
        <div>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', marginBottom: '10px', textTransform: 'uppercase' }}>Popular Areas</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {popularCities
              .filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((city, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectLocation(city)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: currentLocation === city ? '#EEF2FF' : '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: currentLocation === city ? '#4F46E5' : '#334155'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color={currentLocation === city ? '#4F46E5' : '#94A3B8'} />
                    <span>{city}</span>
                  </div>
                  {currentLocation === city && <Check size={16} color="#4F46E5" />}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
