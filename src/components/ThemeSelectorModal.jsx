import React, { useState } from 'react';
import { X, Palette, Check, Sparkles, Wand2, Eye, SplitSquareVertical, Sliders, ShieldCheck, Heart } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

const LUXURY_BRAND_SWATCHES = [
  { name: 'Hermès Orange', hex: '#F95A00' },
  { name: 'Tiffany Cyan', hex: '#0ABAB5' },
  { name: 'Chanel Noir', hex: '#111111' },
  { name: 'Gucci Forest', hex: '#005432' },
  { name: 'Cartier Ruby', hex: '#A81C2E' },
  { name: 'Dior Midnight', hex: '#14213D' },
  { name: 'Prada Violet', hex: '#7000FF' },
  { name: 'Rolex Gold', hex: '#B8860B' }
];

export default function ThemeSelectorModal({ isOpen, onClose }) {
  const { currentTheme, switchTheme, themesCatalog, showToast } = usePlatform();
  const [activeModalTab, setActiveModalTab] = useState('all'); // 'all' | 'compare' | 'custom'
  const [compareThemeA, setCompareThemeA] = useState(currentTheme);
  const [compareThemeB, setCompareThemeB] = useState('emerald');
  const [customHex, setCustomHex] = useState('#6366F1');

  if (!isOpen) return null;

  const activeThemeObj = themesCatalog.find(t => t.id === currentTheme) || themesCatalog[0];
  const themeAObj = themesCatalog.find(t => t.id === compareThemeA) || themesCatalog[0];
  const themeBObj = themesCatalog.find(t => t.id === compareThemeB) || themesCatalog[2];

  const handleApplyCustomHex = (hex) => {
    setCustomHex(hex);
    document.documentElement.setAttribute('data-theme', 'custom');
    document.documentElement.style.setProperty('--primary-600', hex);
    document.documentElement.style.setProperty('--primary-500', hex);
    document.documentElement.style.setProperty('--header-gradient', `linear-gradient(135deg, #090D16 0%, #171E2E 60%, ${hex} 100%)`);
    document.documentElement.style.setProperty('--brand-gradient', `linear-gradient(135deg, ${hex} 0%, #8B5CF6 100%)`);
    document.documentElement.style.setProperty('--card-glow', `${hex}45`);
    document.documentElement.style.setProperty('--border-focus', hex);
    showToast({
      message: `Custom brand color ${hex} applied live! 🎨`,
      type: 'success'
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
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
          borderRadius: '26px',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.7)',
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
            background: 'linear-gradient(180deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.9) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(236,72,153,0.4)'
              }}
            >
              <Palette size={22} color="#FFFFFF" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Theme & Aesthetics Explorer</span>
                <span style={{ fontSize: '0.68rem', background: 'rgba(99,102,241,0.25)', color: '#A5B4FC', padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(165,180,252,0.3)' }}>
                  10 Themes Live
                </span>
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: '3px 0 0' }}>
                Compare, customize, and pick the perfect visual identity for your brand
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

        {/* Navigation Tabs (All Themes / Compare Split / Custom Color) */}
        <div style={{ display: 'flex', background: 'rgba(30, 41, 59, 0.6)', padding: '6px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', gap: '8px' }}>
          <button
            onClick={() => setActiveModalTab('all')}
            style={{
              padding: '6px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: activeModalTab === 'all' ? '#FFFFFF' : '#94A3B8',
              background: activeModalTab === 'all' ? 'rgba(255,255,255,0.15)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Palette size={14} />
            <span>All 10 Presets</span>
          </button>

          <button
            onClick={() => setActiveModalTab('compare')}
            style={{
              padding: '6px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: activeModalTab === 'compare' ? '#FFFFFF' : '#94A3B8',
              background: activeModalTab === 'compare' ? 'rgba(255,255,255,0.15)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <SplitSquareVertical size={14} />
            <span>Side-by-Side Comparison</span>
          </button>

          <button
            onClick={() => setActiveModalTab('custom')}
            style={{
              padding: '6px 14px',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: activeModalTab === 'custom' ? '#FFFFFF' : '#94A3B8',
              background: activeModalTab === 'custom' ? 'rgba(255,255,255,0.15)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Sliders size={14} />
            <span>Custom Brand Hex</span>
          </button>
        </div>

        {/* TAB 1: ALL 10 PRESETS GRID */}
        {activeModalTab === 'all' && (
          <div
            style={{
              padding: '20px 24px',
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
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
                    background: isActive ? 'rgba(30, 41, 59, 0.95)' : 'rgba(30, 41, 59, 0.4)',
                    borderRadius: '18px',
                    padding: '16px',
                    border: isActive ? `2px solid ${theme.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isActive ? `0 8px 24px ${theme.accent}40` : 'none'
                  }}
                >
                  <div style={{ height: '6px', width: '100%', position: 'absolute', top: 0, left: 0, background: theme.gradient }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '4px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.5rem' }}>{theme.emoji}</span>
                      <div>
                        <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#FFFFFF' }}>{theme.name}</div>
                        <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontWeight: 600 }}>{theme.tag}</div>
                      </div>
                    </div>

                    {isActive ? (
                      <span style={{ background: theme.primary, color: '#FFFFFF', padding: '4px 10px', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Check size={12} strokeWidth={3} />
                        <span>Active</span>
                      </span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          switchTheme(theme.id);
                        }}
                        style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#C7D2FE', padding: '4px 10px', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        Select
                      </button>
                    )}
                  </div>

                  <p style={{ fontSize: '0.74rem', color: '#94A3B8', marginBottom: '12px', minHeight: '32px' }}>
                    {theme.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {theme.colors.map((color, idx) => (
                        <span key={idx} style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: color, border: '1px solid rgba(255,255,255,0.2)', display: 'inline-block' }} />
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
        )}

        {/* TAB 2: SIDE-BY-SIDE THEME COMPARISON */}
        {activeModalTab === 'compare' && (
          <div style={{ padding: '24px', overflowY: 'auto' }} className="no-scrollbar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '0.84rem', color: '#94A3B8' }}>Compare two themes head-to-head on buttons, badges, and gradients:</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Theme A Card */}
              <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '20px', padding: '18px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800 }}>Option A</span>
                  <select
                    value={compareThemeA}
                    onChange={(e) => setCompareThemeA(e.target.value)}
                    style={{ background: '#1E293B', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '4px 8px', fontSize: '0.76rem', fontWeight: 700 }}
                  >
                    {themesCatalog.map(t => (
                      <option key={t.id} value={t.id}>{t.emoji} {t.name}</option>
                    ))}
                  </select>
                </div>

                {/* Preview Box A */}
                <div style={{ background: themeAObj.gradient, borderRadius: '14px', padding: '16px', color: '#FFFFFF', marginBottom: '14px' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>{themeAObj.name} {themeAObj.emoji}</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.85, marginTop: '2px' }}>Header Gradient Mesh</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => switchTheme(themeAObj.id)}
                    style={{ background: themeAObj.primary, color: '#FFFFFF', padding: '10px', borderRadius: '12px', fontWeight: 800, fontSize: '0.82rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <span>Apply {themeAObj.name}</span>
                    {currentTheme === themeAObj.id && <Check size={14} />}
                  </button>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ background: '#FFFFFF', color: themeAObj.primary, padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                      Badge 🟢
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{themeAObj.tag}</span>
                  </div>
                </div>
              </div>

              {/* Theme B Card */}
              <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '20px', padding: '18px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800 }}>Option B</span>
                  <select
                    value={compareThemeB}
                    onChange={(e) => setCompareThemeB(e.target.value)}
                    style={{ background: '#1E293B', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '4px 8px', fontSize: '0.76rem', fontWeight: 700 }}
                  >
                    {themesCatalog.map(t => (
                      <option key={t.id} value={t.id}>{t.emoji} {t.name}</option>
                    ))}
                  </select>
                </div>

                {/* Preview Box B */}
                <div style={{ background: themeBObj.gradient, borderRadius: '14px', padding: '16px', color: '#FFFFFF', marginBottom: '14px' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>{themeBObj.name} {themeBObj.emoji}</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.85, marginTop: '2px' }}>Header Gradient Mesh</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => switchTheme(themeBObj.id)}
                    style={{ background: themeBObj.primary, color: '#FFFFFF', padding: '10px', borderRadius: '12px', fontWeight: 800, fontSize: '0.82rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <span>Apply {themeBObj.name}</span>
                    {currentTheme === themeBObj.id && <Check size={14} />}
                  </button>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ background: '#FFFFFF', color: themeBObj.primary, padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                      Badge 🟢
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{themeBObj.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CUSTOM BRAND HEX COLOR */}
        {activeModalTab === 'custom' && (
          <div style={{ padding: '24px', overflowY: 'auto' }} className="no-scrollbar">
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
              Custom Palette Generator
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '18px' }}>
              Pick from luxury maison presets or type your exact brand hex code
            </p>

            {/* Luxury Brand Presets */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 800, marginBottom: '8px' }}>
                Designer Presets
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {LUXURY_BRAND_SWATCHES.map((swatch, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleApplyCustomHex(swatch.hex)}
                    style={{
                      background: 'rgba(30, 41, 59, 0.8)',
                      borderRadius: '12px',
                      padding: '10px',
                      border: customHex === swatch.hex ? '2px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: swatch.hex, display: 'inline-block' }} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFFFFF' }}>{swatch.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hex Input & Live Custom Button */}
            <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '18px', padding: '18px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <input
                  type="color"
                  value={customHex}
                  onChange={(e) => handleApplyCustomHex(e.target.value)}
                  style={{ width: '44px', height: '44px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: 'none' }}
                />
                <input
                  type="text"
                  value={customHex}
                  onChange={(e) => handleApplyCustomHex(e.target.value)}
                  placeholder="#6366F1"
                  style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', padding: '10px 14px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 800, fontFamily: 'monospace', width: '140px' }}
                />
                <button
                  onClick={() => handleApplyCustomHex(customHex)}
                  style={{ background: customHex, color: '#FFFFFF', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                >
                  Apply Custom Color
                </button>
              </div>

              {/* Real-time Preview Banner */}
              <div style={{ background: `linear-gradient(135deg, #090D16 0%, #171E2E 60%, ${customHex} 100%)`, borderRadius: '14px', padding: '16px', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Live Generated Header Gradient</div>
                  <div style={{ fontSize: '0.74rem', opacity: 0.8 }}>Hex: {customHex}</div>
                </div>
                <button style={{ background: customHex, color: '#FFFFFF', border: 'none', padding: '6px 14px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  Active CTA
                </button>
              </div>
            </div>
          </div>
        )}

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
