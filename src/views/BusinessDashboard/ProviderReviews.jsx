import React, { useState } from 'react';
import { Star, MessageSquare, CornerDownRight } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function ProviderReviews() {
  const [replyText, setReplyText] = useState('');
  const [replyingId, setReplyingId] = useState(null);

  const reviews = BUSINESSES[0].reviews;

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Customer Reviews</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Read ratings & respond to feedback</p>
        </div>
        <div style={{ background: '#FEF3C7', padding: '6px 14px', borderRadius: '12px', fontSize: '1rem', fontWeight: 800, color: '#D97706' }}>
          ★ 4.9 Overall Rating
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {reviews.map(r => (
          <div key={r.id} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={r.avatar} alt={r.author} style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{r.author}</span>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D97706' }}>★ {r.rating}.0</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#475569', margin: '8px 0 12px' }}>"{r.comment}"</p>

            {replyingId === r.id ? (
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                <input
                  type="text"
                  placeholder="Write an official response..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '0.85rem' }}
                />
                <button
                  onClick={() => setReplyingId(null)}
                  style={{ padding: '8px 16px', borderRadius: '10px', background: '#4F46E5', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700 }}
                >
                  Post Reply
                </button>
              </div>
            ) : (
              <button
                onClick={() => setReplyingId(r.id)}
                style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <CornerDownRight size={14} /> Reply to Customer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
