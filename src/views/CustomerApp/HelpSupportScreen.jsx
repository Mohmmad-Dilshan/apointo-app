import React, { useState } from 'react';
import { ArrowLeft, Search, MessageSquare, PhoneCall, ChevronDown, ChevronUp, FileText } from 'lucide-react';

export default function HelpSupportScreen({ onBack }) {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqs = [
    { q: "How do I reschedule or cancel my booking?", a: "Go to your Bookings tab, select your upcoming appointment, and tap 'Reschedule' or 'Cancel'. You can cancel free of charge up to 2 hours before the slot." },
    { q: "What happens if I am late for my appointment?", a: "Businesses hold your slot for 15 minutes. Beyond that, please contact the business directly or call support." },
    { q: "How do Apointo Reward points work?", a: "You earn 150 points for every completed booking. 1,000 points = ₹100 instant wallet discount at checkout." },
    { q: "Are payments made on Apointo safe?", a: "Yes! All transactions use 256-bit SSL encryption via RBI-compliant payment gateways." }
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Help & Support Center</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>We're here 24/7 for you</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Quick Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button style={{
            background: '#EEF2FF',
            padding: '16px',
            borderRadius: '18px',
            border: '1px solid #C7D2FE',
            textAlign: 'left'
          }}>
            <MessageSquare size={22} color="#4F46E5" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Live Chat Support</h4>
            <p style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>Avg response &lt; 2 mins</p>
          </button>

          <button style={{
            background: '#ECFDF5',
            padding: '16px',
            borderRadius: '18px',
            border: '1px solid #A7F3D0',
            textAlign: 'left'
          }}>
            <PhoneCall size={22} color="#10B981" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Call Toll-Free</h4>
            <p style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>1800-108-APOINTO</p>
          </button>
        </div>

        {/* FAQs Accordion */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Frequently Asked Questions</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '14px 16px',
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{faq.q}</h4>
                    {isOpen ? <ChevronUp size={16} color="#4F46E5" /> : <ChevronDown size={16} color="#94A3B8" />}
                  </div>
                  {isOpen && (
                    <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '8px', lineHeight: 1.5, paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
