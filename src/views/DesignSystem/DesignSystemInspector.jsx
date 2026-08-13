import React from 'react';
import { Palette, Sparkles, Check, Heart, Star, Search, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { CardSkeleton } from '../../components/SkeletonLoader';
import EmptyState from '../../components/EmptyState';

export default function DesignSystemInspector() {
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
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>Apointo UI Design System</h1>
            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Design tokens, color semantics, typography & component library</p>
          </div>
        </div>
      </div>

      {/* Color Palette Tokens */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>Color Palette System</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { name: "Primary Brand Indigo", hex: "#4F46E5", role: "Primary CTAs & Active States" },
            { name: "Electric Cyan", hex: "#06B6D4", role: "Category accents & highlights" },
            { name: "Emerald Success", hex: "#10B981", role: "Verified badges & confirmation" },
            { name: "Amber Warning", hex: "#F59E0B", role: "Star ratings & alerts" },
            { name: "Rose Error", hex: "#F43F5E", role: "Cancellation & error states" }
          ].map((c, idx) => (
            <div key={idx} style={{ borderRadius: '18px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
              <div style={{ height: '80px', background: c.hex }} />
              <div style={{ padding: '14px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{c.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#4F46E5', fontWeight: 700, fontFamily: 'monospace' }}>{c.hex}</div>
                <p style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>{c.role}</p>
              </div>
            </div>
          ))}
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
