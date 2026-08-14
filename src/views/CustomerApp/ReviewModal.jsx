import React, { useState } from 'react';
import { X, Star, Camera, CheckCircle2 } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose, onSubmitReview, booking }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onSubmitReview({ rating, comment });
      onClose();
    }, 1000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,0.65)',
      backdropFilter: 'blur(6px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        padding: '24px',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.3)'
      }} className="animate-slide-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>How was your experience?</h3>
          <button onClick={onClose} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <X size={18} color="#64748B" />
          </button>
        </div>

        {submitted ? (
          <div style={{ padding: '30px 0', textAlign: 'center' }}>
            <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 12px' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Review Submitted!</h4>
            <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Thank you for helping our community grow.</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
              Rate your service at <strong>{booking?.businessName || "Urban Cut Studio"}</strong>
            </p>

            {/* 5 Star Picker */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <Star size={36} fill={star <= rating ? '#F59E0B' : 'none'} color={star <= rating ? '#F59E0B' : '#CBD5E1'} />
                </button>
              ))}
            </div>

            {/* Comment Textarea */}
            <textarea
              placeholder="Write your feedback... (e.g. Rahul gave a great haircut, friendly staff!)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '16px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                fontSize: '0.88rem',
                marginBottom: '16px',
                resize: 'none'
              }}
            />

            {/* Photo Upload Simulator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              borderRadius: '14px',
              border: '1px dashed #CBD5E1',
              background: '#F8FAFC',
              fontSize: '0.82rem',
              color: '#64748B',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '20px'
            }}>
              <Camera size={18} color="#4F46E5" />
              <span>Attach Photos (Optional)</span>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
              }}
            >
              Submit Review
            </button>
          </>
        )}
      </div>
    </div>
  );
}
