import React, { useState } from 'react';
import { Palette, Sparkles, Check, Heart, Star, Search, Clock, ShieldCheck, Copy, Wand2 } from 'lucide-react';
import { CardSkeleton } from '../../components/SkeletonLoader';
import EmptyState from '../../components/EmptyState';
import { usePlatform } from '../../context/PlatformContext';

export default function DesignSystemInspector() {
  const { currentTheme, switchTheme, themesCatalog } = usePlatform();
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopy = (hex) => {
    navigator.clipboard?.writeText?.(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div style={{ background: '#F8FAFC', padding: '32px', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '32px' }} className="animate-fade-in">
      {/* Design System Header */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(99,102,241,0.3)'
          }}>
            <Palette size={26} color="#FFFFFF" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>Apo UI Design System & Themes Explorer</h1>
            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Design tokens, typography, 7 curated luxury theme presets, and component library</p>
          </div>
        </div>
      </div>

      {/* Color Palette Tokens */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Color Palette System</h2>
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Click any swatch to copy the hex token</p>
          </div>
          {copiedHex && (
            <span className="badge badge-success animate-pop">
              <Check size={12} /> Copied {copiedHex}!
            </span>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { name: "Primary Brand Indigo", hex: "#4F46E5", role: "Primary CTAs & Active States" },
            { name: "Electric Cyan", hex: "#06B6D4", role: "Category accents & highlights" },
            { name: "Emerald Success", hex: "#10B981", role: "Verified badges & confirmation" },
            { name: "Amber Warning", hex: "#F59E0B", role: "Star ratings & alerts" },
            { name: "Rose Error", hex: "#F43F5E", role: "Cancellation & error states" }
          ].map((c, idx) => {
            const isCopied = copiedHex === c.hex;
            return (
              <div
                key={idx}
                onClick={() => handleCopy(c.hex)}
                style={{
                  borderRadius: '18px',
                  border: isCopied ? '2px solid #10B981' : '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  transform: isCopied ? 'scale(1.03)' : 'scale(1)'
                }}
              >
                <div style={{ height: '80px', background: c.hex, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '8px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: '6px', color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {isCopied ? <Check size={12} color="#10B981" /> : <Copy size={12} />}
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                  </div>
                </div>
                <div style={{ padding: '14px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{c.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#4F46E5', fontWeight: 700, fontFamily: 'monospace' }}>{c.hex}</div>
                  <p style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>{c.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Multi-Theme Presets Switcher */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Curated Theme Presets Showcase</span>
              <span style={{ fontSize: '0.72rem', background: '#EEF2FF', color: '#4F46E5', padding: '3px 10px', borderRadius: '999px', fontWeight: 800 }}>
                7 Presets Available
              </span>
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Click any theme card to test how the entire app morphs dynamically in real-time</p>
          </div>

          <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#4F46E5', background: '#EEF2FF', padding: '6px 14px', borderRadius: '10px' }}>
            Current Active: {themesCatalog.find((t) => t.id === currentTheme)?.name}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '16px' }}>
          {themesCatalog.map((th) => {
            const isSelected = th.id === currentTheme;
            return (
              <div
                key={th.id}
                onClick={() => switchTheme(th.id)}
                style={{
                  borderRadius: '20px',
                  border: isSelected ? `2px solid ${th.primary}` : '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: isSelected ? '#F8FAFC' : '#FFFFFF',
                  boxShadow: isSelected ? `0 8px 24px ${th.primary}30` : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
              >
                <div style={{ height: '54px', background: th.gradient, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.4rem' }}>{th.emoji}</span>
                  <span style={{ fontSize: '0.68rem', background: 'rgba(255,255,255,0.25)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '999px', fontWeight: 800 }}>
                    {th.tag}
                  </span>
                </div>

                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A' }}>{th.name}</h3>
                    {isSelected && (
                      <span style={{ background: '#ECFDF5', color: '#059669', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Check size={12} strokeWidth={3} /> Active
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.74rem', color: '#64748B', minHeight: '34px', marginBottom: '12px' }}>
                    {th.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {th.colors.map((col, i) => (
                        <span key={i} style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: col, display: 'inline-block', border: '1px solid rgba(0,0,0,0.1)' }} />
                      ))}
                    </div>
                    <button
                      style={{
                        padding: '4px 12px',
                        borderRadius: '8px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        background: isSelected ? th.primary : '#F1F5F9',
                        color: isSelected ? '#FFFFFF' : '#475569',
                        cursor: 'pointer'
                      }}
                    >
                      {isSelected ? 'Applied' : 'Preview Theme'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Buttons Showcase */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>Button Components & Variants</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <button style={{ padding: '14px 28px', borderRadius: '999px', background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 6px 20px rgba(79,70,229,0.3)' }}>
            Primary Brand Button
          </button>

          <button style={{ padding: '14px 28px', borderRadius: '999px', background: '#EEF2FF', color: '#4F46E5', fontSize: '0.9rem', fontWeight: 700 }}>
            Secondary Soft Button
          </button>

          <button style={{ padding: '14px 28px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#334155', fontSize: '0.9rem', fontWeight: 700 }}>
            Outline Button
          </button>

          <button style={{ padding: '14px 28px', borderRadius: '999px', background: '#10B981', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700 }}>
            Success Button
          </button>

          <button style={{ padding: '14px 28px', borderRadius: '999px', background: '#F43F5E', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700 }}>
            Danger Button
          </button>
        </div>
      </div>

      {/* Skeleton & Empty States Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Skeleton Loading State</h3>
          <CardSkeleton />
          <CardSkeleton />
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Empty State Pattern</h3>
          <EmptyState type="bookings" />
        </div>
      </div>
    </div>
  );
}

