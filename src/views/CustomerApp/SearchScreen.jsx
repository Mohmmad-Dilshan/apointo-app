import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowLeft, X, Star, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import { BUSINESSES, CATEGORIES } from '../../data/sampleData';
import FilterBottomSheet from './FilterBottomSheet';

export default function SearchScreen({ onBack, onSelectBusiness }) {
  const [query, setQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState(null);

  const recentSearches = ["Haircut near me", "Hydra facial", "Crossfit gym", "Teeth whitening"];
  const trendingSearches = ["Gentlemen's Salon", "Swedish Body Massage", "Full Body Scan", "Car Wash"];

  const filteredBusinesses = BUSINESSES.filter(biz => {
    const q = query.toLowerCase();
    const matchName = biz.name.toLowerCase().includes(q);
    const matchCategory = biz.category.toLowerCase().includes(q);
    const matchServices = biz.services.some(s => s.name.toLowerCase().includes(q));
    return matchName || matchCategory || matchServices;
  });

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header & Search Field */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <ArrowLeft size={20} color="#0F172A" />
          </button>

          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#F1F5F9',
            padding: '10px 14px',
            borderRadius: '14px'
          }}>
            <Search size={18} color="#4F46E5" />
            <input
              type="text"
              placeholder="Search salons, spa, haircut, dental..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.9rem', color: '#0F172A', fontWeight: 600 }}
            />
            {query && (
              <button onClick={() => setQuery('')}>
                <X size={16} color="#64748B" />
              </button>
            )}
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '14px',
              background: filters ? '#EEF2FF' : '#F1F5F9',
              border: filters ? '1px solid #4F46E5' : '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SlidersHorizontal size={18} color={filters ? '#4F46E5' : '#334155'} />
          </button>
        </div>
      </div>

      {/* Query Empty State: Recent & Trending */}
      {!query && (
        <div style={{ padding: '20px' }}>
          {/* Recent Searches */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '12px' }}>Recent Searches</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {recentSearches.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(term)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#334155'
                  }}
                >
                  🔍 {term}
                </button>
              ))}
            </div>
          </div>

          {/* Trending Searches */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TrendingUp size={14} color="#F59E0B" />
              <span>Trending Searches</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {trendingSearches.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(term)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#B45309'
                  }}
                >
                  🔥 {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results Header */}
      {query && (
        <div style={{ padding: '16px 20px 8px', fontSize: '0.85rem', color: '#64748B' }}>
          Showing {filteredBusinesses.length} results for "<strong>{query}</strong>"
        </div>
      )}

      {/* Results List */}
      <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {filteredBusinesses.map(biz => (
          <div
            key={biz.id}
            onClick={() => onSelectBusiness(biz)}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '14px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              gap: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <img
              src={biz.heroImage}
              alt={biz.name}
              style={{ width: '100px', height: '100px', borderRadius: '16px', objectFit: 'cover' }}
            />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: '#FEF3C7', padding: '2px 6px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706' }}>
                    <Star size={11} fill="#D97706" />
                    <span>{biz.rating}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{biz.category} • {biz.distance}</p>
                <p style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginTop: '2px' }}>Slot: {biz.nextSlot}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5' }}>Book Now →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FilterBottomSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={(f) => setFilters(f)}
      />
    </div>
  );
}
