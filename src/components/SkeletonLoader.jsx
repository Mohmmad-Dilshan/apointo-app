import React from 'react';

export function CardSkeleton() {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '20px',
      padding: '12px',
      border: '1px solid #E2E8F0',
      marginBottom: '14px',
      display: 'flex',
      gap: '14px'
    }}>
      <div className="shimmer-bg" style={{ width: '100px', height: '100px', borderRadius: '16px', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
        <div className="shimmer-bg" style={{ height: '16px', width: '70%', borderRadius: '6px' }} />
        <div className="shimmer-bg" style={{ height: '12px', width: '40%', borderRadius: '4px' }} />
        <div className="shimmer-bg" style={{ height: '12px', width: '85%', borderRadius: '4px' }} />
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          <div className="shimmer-bg" style={{ height: '24px', width: '60px', borderRadius: '999px' }} />
          <div className="shimmer-bg" style={{ height: '24px', width: '80px', borderRadius: '999px' }} />
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton() {
  return (
    <div style={{ padding: '16px' }}>
      <div className="shimmer-bg" style={{ height: '48px', borderRadius: '16px', marginBottom: '20px' }} />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
