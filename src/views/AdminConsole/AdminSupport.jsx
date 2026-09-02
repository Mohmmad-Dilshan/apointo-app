import React, { useState } from 'react';
import { HelpCircle, MessageSquare, CheckCircle, Clock, AlertCircle, Check, Send, X } from 'lucide-react';

export default function AdminSupport() {
  const [tickets, setTickets] = useState([
    { id: "TCK-109", customer: "Dilshan P.", role: "Customer", issue: "Refund inquiry on cancelled booking #APT-54321", priority: "High", status: "Open", time: "10 min ago", chat: ["Customer: I cancelled 2 hours prior, please verify refund.", "System: Auto-checking cancellation policy."] },
    { id: "TCK-110", customer: "Urban Cut Studio", role: "Merchant", issue: "Update bank account IFSC for Friday payout", priority: "Medium", status: "Resolved ✓", time: "2 hrs ago", chat: ["Merchant: Submitted new HDFC branch IFSC code.", "Admin: Verified and updated payout ledger."] },
    { id: "TCK-111", customer: "Sneha Nair", role: "Customer", issue: "Double debited 500 loyalty points adjustment", priority: "High", status: "Open", time: "3 hrs ago", chat: ["Customer: Points deducted twice during booking checkout."] },
    { id: "TCK-112", customer: "Glow Beauty Lounge", role: "Merchant", issue: "Specialist staff calendar sync technical issue", priority: "Low", status: "Open", time: "5 hrs ago", chat: ["Merchant: Pooja's Friday slots not appearing in explore."] }
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyInput, setReplyInput] = useState('');
  const [toastMsg, setToastMsg] = useState(null);

  const handleSendReply = () => {
    if (!replyInput.trim() || !selectedTicket) return;
    const updatedTickets = tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return {
          ...t,
          chat: [...t.chat, `Admin: ${replyInput}`],
          status: 'In-Progress'
        };
      }
      return t;
    });
    setTickets(updatedTickets);
    setSelectedTicket(prev => ({ ...prev, chat: [...prev.chat, `Admin: ${replyInput}`], status: 'In-Progress' }));
    setReplyInput('');
    setToastMsg(`Official response dispatched for Ticket #${selectedTicket.id}`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleResolveTicket = (id) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: 'Resolved ✓' } : t));
    if (selectedTicket?.id === id) {
      setSelectedTicket(prev => ({ ...prev, status: 'Resolved ✓' }));
    }
    setToastMsg(`Ticket #${id} marked as resolved!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header */}
      <div style={{
        background: '#131B2E',
        borderRadius: '20px',
        padding: '20px 24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={20} color="#F43F5E" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Escalated Customer & Merchant Disputes Desk</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Multi-tier ticket triage, refund arbitration & direct chat resolution
          </p>
        </div>

        {toastMsg && (
          <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '10px', padding: '6px 14px', fontSize: '0.78rem', color: '#34D399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle size={14} /> {toastMsg}
          </div>
        )}
      </div>

      {/* Tickets Table */}
      <div style={{ background: '#131B2E', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '16px 20px' }}>Ticket ID</th>
              <th style={{ padding: '16px 20px' }}>Requester</th>
              <th style={{ padding: '16px 20px' }}>Issue Description</th>
              <th style={{ padding: '16px 20px' }}>Priority</th>
              <th style={{ padding: '16px 20px' }}>Status</th>
              <th style={{ padding: '16px 20px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => {
              const isResolved = t.status.includes('Resolved');
              const isHigh = t.priority === 'High';

              return (
                <tr key={t.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 800, color: '#818CF8' }}>#{t.id}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 800, color: '#FFFFFF' }}>{t.customer}</div>
                    <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>{t.role} • {t.time}</span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#E2E8F0', maxWidth: '300px' }}>"{t.issue}"</td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      color: isHigh ? '#F43F5E' : '#FBBF24',
                      background: isHigh ? 'rgba(244, 63, 94, 0.15)' : 'rgba(251, 191, 36, 0.15)'
                    }}>
                      {t.priority}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      color: isResolved ? '#34D399' : '#F43F5E',
                      background: isResolved ? 'rgba(52, 211, 153, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                      border: isResolved ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)'
                    }}>
                      {t.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '8px' }}>
                      <button
                        onClick={() => setSelectedTicket(t)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '8px',
                          background: 'rgba(99, 102, 241, 0.15)',
                          color: '#818CF8',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Reply & Inspect
                      </button>

                      {!isResolved && (
                        <button
                          onClick={() => handleResolveTicket(t.id)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: 'rgba(16, 185, 129, 0.15)',
                            color: '#34D399',
                            border: '1px solid rgba(52, 211, 153, 0.3)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          <Check size={12} /> Resolve
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Ticket Chat & Resolution Modal */}
      {selectedTicket && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '26px',
            maxWidth: '540px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>Ticket #{selectedTicket.id}</h3>
                <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Requester: {selectedTicket.customer} ({selectedTicket.role})</p>
              </div>
              <button onClick={() => setSelectedTicket(null)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '14px', marginBottom: '16px' }}>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Issue Description</div>
              <p style={{ fontSize: '0.85rem', color: '#FFFFFF', marginTop: '4px', lineHeight: 1.4 }}>"{selectedTicket.issue}"</p>
            </div>

            {/* Chat Thread */}
            <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', padding: '10px', background: '#0F172A', borderRadius: '14px' }} className="no-scrollbar">
              {selectedTicket.chat.map((msg, i) => (
                <div key={i} style={{ fontSize: '0.78rem', color: msg.startsWith('Admin:') ? '#A5B4FC' : '#CBD5E1', padding: '6px 10px', background: msg.startsWith('Admin:') ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  {msg}
                </div>
              ))}
            </div>

            {/* Reply Composer */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <input
                type="text"
                placeholder="Type official admin response..."
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendReply()}
                style={{ flex: 1, padding: '12px 14px', borderRadius: '12px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.82rem', outline: 'none' }}
              />
              <button
                onClick={handleSendReply}
                style={{ padding: '12px 16px', borderRadius: '12px', background: '#6366F1', color: '#FFFFFF', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}
              >
                <Send size={14} /> Send
              </button>
            </div>

            {!selectedTicket.status.includes('Resolved') && (
              <button
                onClick={() => handleResolveTicket(selectedTicket.id)}
                style={{ width: '100%', padding: '12px', borderRadius: '12px', background: 'linear-gradient(135deg, #10B981, #059669)', color: '#FFFFFF', fontWeight: 800, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <Check size={16} /> Mark Ticket as Resolved
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
