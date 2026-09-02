import React, { useState } from 'react';
import { Send, Bell, Users, MessageSquare, CheckCircle2, Sparkles, Smartphone, Clock, AlertCircle } from 'lucide-react';

export default function AdminBroadcast() {
  const [audience, setAudience] = useState('all_customers');
  const [title, setTitle] = useState('🔥 Flash 30% Off This Weekend!');
  const [body, setBody] = useState('Top salons in Bengaluru & Mumbai have open slots today. Book your grooming session with code FLASH30.');
  const [deepLink, setDeepLink] = useState('/explore');
  const [channel, setChannel] = useState('push'); // 'push' | 'sms' | 'both'
  const [isSending, setIsSending] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const [broadcastHistory, setBroadcastHistory] = useState([
    { id: 'bc_1', title: "🎉 Diwali Glow Pass Live!", audience: "All Customers (1,24,000)", channel: "Push + SMS", sentAt: "Yesterday 06:30 PM", delivered: "99.8%", clicks: "14,820 (11.9%)" },
    { id: 'bc_2', title: "📢 Merchant Payout Window Open", audience: "All Merchants (420)", channel: "Push Notification", sentAt: "10 Aug 10:00 AM", delivered: "100%", clicks: "390 (92.8%)" },
    { id: 'bc_3', title: "⚡ Rain Alert: Book Home Grooming", audience: "Bengaluru Users (48,000)", channel: "Push Notification", sentAt: "08 Aug 04:15 PM", delivered: "99.4%", clicks: "6,410 (13.3%)" },
  ]);

  const audienceCounts = {
    all_customers: "1,24,000 Users",
    all_merchants: "420 Partner Salons",
    blr_users: "48,500 Bengaluru Users",
    delhi_users: "36,200 Delhi NCR Users",
    mumbai_users: "29,400 Mumbai Users",
    inactive_30d: "14,200 Inactive Users"
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      const newEntry = {
        id: `bc_${Date.now()}`,
        title,
        audience: audienceCounts[audience],
        channel: channel === 'both' ? 'Push + SMS' : channel === 'push' ? 'Push Notification' : 'Direct SMS',
        sentAt: 'Just now',
        delivered: '99.9%',
        clicks: 'Tracking Live...'
      };

      setBroadcastHistory([newEntry, ...broadcastHistory]);
      setToastMsg(`Broadcast successfully transmitted to ${audienceCounts[audience]}!`);
      setTimeout(() => setToastMsg(null), 3500);
    }, 1000);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header */}
      <div style={{
        background: '#131B2E',
        borderRadius: '20px',
        padding: '22px 24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bell size={22} color="#EC4899" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Automated Global Broadcast & Push Engine</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Send instant rich push alerts, SMS promotions & transactional updates across India
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.78rem', color: '#F472B6', fontWeight: 800 }}>
          <Sparkles size={14} /> High-Speed FCM & Twilio Gateway Live
        </div>
      </div>

      {/* Toast Alert */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Split Composer Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px' }}>
        {/* Composer Form */}
        <form onSubmit={handleSendBroadcast} style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>Compose New Broadcast</h3>

          {/* Target Audience */}
          <div>
            <label style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              Target Audience Cluster ({audienceCounts[audience]})
            </label>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 700, outline: 'none' }}
            >
              <option value="all_customers">👥 All Customers (1,24,000)</option>
              <option value="all_merchants">🏪 All Verified Merchants (420)</option>
              <option value="blr_users">📍 Bengaluru Cluster (48,500)</option>
              <option value="delhi_users">📍 Delhi NCR Cluster (36,200)</option>
              <option value="mumbai_users">📍 Mumbai Cluster (29,400)</option>
              <option value="inactive_30d">💤 Inactive Users &gt;30 Days (14,200)</option>
            </select>
          </div>

          {/* Channel Selector */}
          <div>
            <label style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Delivery Channel</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {[
                { id: 'push', label: '📱 Mobile Push' },
                { id: 'sms', label: '💬 Direct SMS' },
                { id: 'both', label: '🚀 Push + SMS' },
              ].map(ch => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setChannel(ch.id)}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: channel === ch.id ? 'linear-gradient(135deg, #EC4899, #DB2777)' : '#0F172A',
                    color: channel === ch.id ? '#FFFFFF' : '#94A3B8',
                    border: channel === ch.id ? 'none' : '1px solid rgba(255,255,255,0.06)',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Notification Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Flash 30% Off This Weekend!"
              required
              style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 700, outline: 'none' }}
            />
          </div>

          {/* Message Body */}
          <div>
            <label style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Message Body</label>
            <textarea
              rows={3}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Type your broadcast content..."
              required
              style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none', resize: 'none' }}
            />
          </div>

          {/* Deep Link URL */}
          <div>
            <label style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '6px' }}>In-App Deep Link Action</label>
            <input
              type="text"
              value={deepLink}
              onChange={(e) => setDeepLink(e.target.value)}
              placeholder="e.g. /explore or /category/salon"
              style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#A5B4FC', fontSize: '0.82rem', outline: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            style={{
              padding: '14px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
              color: '#FFFFFF',
              fontSize: '0.92rem',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 18px rgba(236, 72, 153, 0.45)',
              marginTop: '8px'
            }}
          >
            <Send size={16} />
            <span>{isSending ? 'Transmitting to 1.24L Devices...' : `Broadcast to ${audienceCounts[audience]}`}</span>
          </button>
        </form>

        {/* Live Device Notification Preview */}
        <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>Live Smartphone Lockscreen Preview</h3>
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '20px' }}>How it appears on iOS & Android lockscreen</p>

            {/* Simulated Smartphone Lockscreen Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(30px) saturate(190%)',
              WebkitBackdropFilter: 'blur(30px) saturate(190%)',
              borderRadius: '20px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#6366F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={11} color="#FFFFFF" />
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.04em' }}>APO</span>
                </div>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>now</span>
              </div>

              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                {title || "Notification Title"}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
                {body || "Notification message content will be previewed here in real-time."}
              </p>
            </div>
          </div>

          <div style={{ background: '#0F172A', borderRadius: '14px', padding: '14px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '20px' }}>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 800 }}>Gateway Pipeline</div>
            <div style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 800, marginTop: '2px' }}>● 10,000 msg/sec Max Throughput</div>
          </div>
        </div>
      </div>

      {/* Broadcast History Table */}
      <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>Recent Broadcast History & Analytics</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {broadcastHistory.map(item => (
            <div key={item.id} style={{ background: '#0F172A', borderRadius: '16px', padding: '16px 20px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>{item.title}</h4>
                <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>
                  Target: {item.audience} • Channel: {item.channel} • Sent: {item.sentAt}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem' }}>
                <span style={{ color: '#34D399', fontWeight: 800 }}>✓ {item.delivered} Delivered</span>
                <span style={{ color: '#FBBF24', fontWeight: 800 }}>📊 {item.clicks} Clicks</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
