import React from 'react';
import { X, Palette, Check, Sparkles, Wand2, Eye, ShieldCheck, Heart } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

export default function ThemeSelectorModal({ isOpen, onClose }) {
  const { currentTheme, switchTheme, themesCatalog } = usePlatform();

  if (!isOpen) return null;

  const activeThemeObj = themesCatalog.find(t => t.id === currentTheme) || themesCatalog[0];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0F172A',
          color: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden',
          animation: 'popScale 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.8) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(236,72,153,0.35)'
              }}
            >
              <Palette size={22} color="#FFFFFF" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Theme & Aesthetics Explorer</span>
                <span style={{ fontSize: '0.68rem', background: 'rgba(99,102,241,0.2)', color: '#A5B4FC', padding: '2px 8px', borderRadius: '999px', border: '1px solid rgba(165,180,252,0.3)' }}>
                  7 Themes Live
                </span>
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: '2px 0 0' }}>
                Compare and select the best design mood for your customers and brand
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94A3B8',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Live Active Theme Preview Banner */}
        <div style={{ padding: '16px 24px', background: 'rgba(30, 41, 59, 0.5)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontWeight: 800, marginBottom: '8px' }}>
            Live Active Preset
          </div>

          <div
            style={{
              background: activeThemeObj.gradient,
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: `0 8px 24px ${activeThemeObj.accent}40`,
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '2rem' }}>{activeThemeObj.emoji}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>{activeThemeObj.name}</span>
                  <span style={{ fontSize: '0.68rem', background: 'rgba(255,255,255,0.2)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    {activeThemeObj.tag}
                  </span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.85)', margin: '3px 0 0' }}>{activeThemeObj.desc}</p>
              </div>
            </div>

            {/* Mini preview widgets */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                style={{
                  background: activeThemeObj.primary,
                  color: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                Sample Button
              </button>
              <span style={{ background: '#FFFFFF', color: activeThemeObj.primary, padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 800 }}>
                Sample Badge
              </span>
            </div>
          </div>
        </div>

        {/* Themes Grid List */}
        <div
          style={{
            padding: '20px 24px',
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '14px'
          }}
          className="no-scrollbar"
        >
          {themesCatalog.map((theme) => {
            const isActive = theme.id === currentTheme;
            return (
              <div
                key={theme.id}
                onClick={() => switchTheme(theme.id)}
                style={{
                  background: isActive ? 'rgba(30, 41, 59, 0.9)' : 'rgba(30, 41, 59, 0.4)',
                  borderRadius: '18px',
                  padding: '16px',
                  border: isActive ? `2px solid ${theme.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isActive ? `0 8px 24px ${theme.accent}35` : 'none'
                }}
              >
                {/* Gradient Header Strip */}
                <div
                  style={{
                    height: '6px',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: theme.gradient
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '4px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.4rem' }}>{theme.emoji}</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>{theme.name}</div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontWeight: 600 }}>{theme.tag}</div>
                    </div>
                  </div>

                  {isActive ? (
                    <span
                      style={{
                        background: theme.primary,
                        color: '#FFFFFF',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                      <span>Active</span>
                    </span>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        switchTheme(theme.id);
                      }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#C7D2FE',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Select
                    </button>
                  )}
                </div>

                <p style={{ fontSize: '0.74rem', color: '#94A3B8', marginBottom: '12px', minHeight: '32px' }}>
                  {theme.desc}
                </p>

                {/* Color Swatch Palette Circles */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {theme.colors.map((color, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: color,
                          border: '1px solid rgba(255,255,255,0.2)',
                          display: 'inline-block'
                        }}
                        title={color}
                      />
                    ))}
                  </div>

                  <span style={{ fontSize: '0.68rem', color: theme.accent, fontWeight: 700 }}>
                    {theme.primary}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0B0F19'
          }}
        >
          <button
            onClick={() => switchTheme('royal')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94A3B8',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Wand2 size={14} />
            <span>Reset to Apple HIG Royal (Default)</span>
          </button>

          <button
            onClick={onClose}
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
              color: '#FFFFFF',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(79,70,229,0.3)'
            }}
          >
            Done Previewing
          </button>
        </div>
      </div>
    </div>
  );
}
