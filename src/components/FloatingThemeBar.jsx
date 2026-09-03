import React, { useState } from 'react';
import { Palette, ChevronUp, ChevronDown, Sparkles, X, Check, Eye } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

export default function FloatingThemeBar({ onOpenFullModal }) {
  const { currentTheme, switchTheme, themesCatalog } = usePlatform();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const activeTheme = themesCatalog.find(t => t.id === currentTheme) || themesCatalog[0];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
        fontFamily: 'var(--font-sans)',
        pointerEvents: 'auto'
      }}
    >
      {/* Floating Theme Quick Strip */}
      {!isCollapsed ? (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '22px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.25)',
            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Label + Active Indicator */}
          <div
            onClick={onOpenFullModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              paddingRight: '10px',
              borderRight: '1px solid rgba(255, 255, 255, 0.12)',
              cursor: 'pointer'
            }}
            title="Open Full Themes Explorer"
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: activeTheme.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 2px 8px ${activeTheme.accent}50`
              }}
            >
              <Palette size={14} color="#FFFFFF" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.62rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 800, lineHeight: 1 }}>
                Live Theme
              </span>
              <span style={{ fontSize: '0.76rem', color: '#FFFFFF', fontWeight: 800, whiteSpace: 'nowrap' }}>
                {activeTheme.name}
              </span>
            </div>
          </div>

          {/* Quick Emoji Buttons for all 10 themes */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {themesCatalog.map((th) => {
              const isSelected = th.id === currentTheme;
              return (
                <button
                  key={th.id}
                  onClick={() => switchTheme(th.id)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    border: isSelected ? `2px solid ${th.accent}` : '1px solid rgba(255, 255, 255, 0.1)',
                    background: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                    transition: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isSelected ? `0 0 14px ${th.accent}80` : 'none',
                    position: 'relative'
                  }}
                  title={`${th.name} (${th.tag})`}
                >
                  <span>{th.emoji}</span>
                  {isSelected && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        right: '-2px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: th.accent,
                        boxShadow: `0 0 6px ${th.accent}`
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimize / Collapse Button */}
          <button
            onClick={() => setIsCollapsed(true)}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: 'transparent',
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '4px',
              cursor: 'pointer'
            }}
            title="Minimize Quick Theme Bar"
          >
            <ChevronDown size={14} />
          </button>
        </div>
      ) : (
        /* Minimized Floating Orb */
        <button
          onClick={() => setIsCollapsed(false)}
          style={{
            background: activeTheme.gradient,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: '999px',
            padding: '8px 14px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: `0 8px 24px ${activeTheme.accent}60`,
            cursor: 'pointer',
            animation: 'popScale 0.2s ease-out'
          }}
          title="Click to expand Theme Selector"
        >
          <span style={{ fontSize: '1.1rem' }}>{activeTheme.emoji}</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>Theme: {activeTheme.name}</span>
          <ChevronUp size={14} />
        </button>
      )}
    </div>
  );
}
