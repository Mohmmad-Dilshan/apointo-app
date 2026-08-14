import React, { useState } from 'react';
import { HelpCircle, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export default function AdminSupport() {
  const [tickets, setTickets] = useState([
    { id: "TCK-109", customer: "Dilshan P.", issue: "Refund inquiry on cancelled slot", priority: "High", status: "Open" },
    { id: "TCK-110", customer: "Urban Cut Studio", issue: "Update bank account details for payout", priority: "Medium", status: "Resolved ✓" },
    { id: "TCK-111", customer: "Sneha Nair", issue: "Double debited points adjustment", priority: "High", status: "Open" }
  ]);

  const handleResolveTicket = (id) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: 'Resolved ✓' } : t));
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Escalated Support Desk</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Resolve disputes & customer service tickets</p>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>Ticket ID</th>
              <th style={{ padding: '14px 20px' }}>Requester</th>
              <th style={{ padding: '14px 20px' }}>Issue Description</th>
              <th style={{ padding: '14px 20px' }}>Priority</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
              <th style={{ padding: '14px 20px', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#4F46E5' }}>#{t.id}</td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{t.customer}</td>
                <td style={{ padding: '16px 20px', color: '#334155' }}>{t.issue}</td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge ${t.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>
                    {t.priority}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge ${t.status.includes('Resolved') ? 'badge-success' : 'badge-danger'}`}>
                    {t.status}
                  </span>
                </td>
                <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                  {!t.status.includes('Resolved') && (
                    <button
                      onClick={() => handleResolveTicket(t.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: '#ECFDF5',
                        color: '#059669',
                        border: '1px solid #10B981',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle size={14} /> Resolve Ticket
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

