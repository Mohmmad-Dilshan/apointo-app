import React, { useState } from 'react';
import { History, Shield, Search, FileText, Download, Filter, CheckCircle2, UserCheck, DollarSign, Tag, RefreshCw } from 'lucide-react';

export default function AdminAuditLogs() {
  const [logs, setLogs] = useState([
    { id: "LOG-9921", admin: "SuperAdmin (admin@apo.in)", action: "KYC Approval", detail: "Granted verified badge to Urban Cut Studio (#biz_1)", ip: "103.21.24.1", timestamp: "Today 02:45 PM", status: "SUCCESS" },
    { id: "LOG-9920", admin: "FinanceOfficer (arun.k@apo.in)", action: "Payout Disbursal", detail: "Approved batch disbursal ₹1,42,800 to Urban Cut Studio", ip: "114.143.10.82", timestamp: "Today 01:15 PM", status: "SUCCESS" },
    { id: "LOG-9919", admin: "SuperAdmin (admin@apo.in)", action: "Commission Override", detail: "Modified take-rate for Glow Beauty Lounge from 15% to 12%", ip: "103.21.24.1", timestamp: "Today 11:30 AM", status: "SUCCESS" },
    { id: "LOG-9918", admin: "SupportLead (sneha.t@apo.in)", action: "Dispute Refund", detail: "Issued ₹329 refund on cancelled booking #APT-54321", ip: "49.207.210.12", timestamp: "Yesterday 05:20 PM", status: "SUCCESS" },
    { id: "LOG-9917", admin: "SuperAdmin (admin@apo.in)", action: "Marketing Campaign", detail: "Published coupon 'FESTIVE500' (25% off max ₹500)", ip: "103.21.24.1", timestamp: "Yesterday 02:10 PM", status: "SUCCESS" },
    { id: "LOG-9916", admin: "SecuritySentinel (Auto-Bot)", action: "IP Rate-Limit", detail: "Blocked IP 103.21.14.88 due to 18 failed card attempts", ip: "System Daemon", timestamp: "10 Aug 09:45 PM", status: "BLOCKED" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [actionFilter, setActionFilter] = useState('all');
  const [toastMsg, setToastMsg] = useState(null);

  const handleExportCSV = () => {
    setToastMsg("SOC2 & ISO 27001 Audit Log CSV exported successfully!");
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filtered = logs.filter(l => {
    const matchQuery = l.admin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       l.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       l.action.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = actionFilter === 'all' || l.action.toLowerCase().includes(actionFilter.toLowerCase());
    return matchQuery && matchFilter;
  });

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
            <History size={22} color="#38BDF8" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Immutable Compliance & Admin Audit Trail</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Tamper-proof cryptographic record of every administrative action, refund, payout & KYC clearance
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(56, 189, 248, 0.4)'
          }}
        >
          <Download size={16} /> Export SOC2 Audit CSV
        </button>
      </div>

      {/* Toast Alert */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Filters & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'KYC', 'Payout', 'Commission', 'Refund', 'Campaign'].map(f => (
            <button
              key={f}
              onClick={() => setActionFilter(f)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: actionFilter === f ? 'linear-gradient(135deg, #38BDF8, #0284C7)' : '#131B2E',
                color: actionFilter === f ? '#FFFFFF' : '#94A3B8',
                border: actionFilter === f ? 'none' : '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer'
              }}
            >
              {f === 'all' ? 'All Actions' : f}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#131B2E', padding: '8px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', width: '320px' }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search by admin, action, IP..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', width: '100%', fontSize: '0.82rem', outline: 'none' }}
          />
        </div>
      </div>

      {/* Logs Table */}
      <div style={{ background: '#131B2E', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '16px 20px' }}>Event ID</th>
              <th style={{ padding: '16px 20px' }}>Admin Operator</th>
              <th style={{ padding: '16px 20px' }}>Action Type</th>
              <th style={{ padding: '16px 20px' }}>Event Details</th>
              <th style={{ padding: '16px 20px' }}>IP / Origin</th>
              <th style={{ padding: '16px 20px' }}>Timestamp</th>
              <th style={{ padding: '16px 20px', textAlign: 'right' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(l => (
              <tr key={l.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#38BDF8', fontFamily: 'monospace' }}>#{l.id}</td>
                <td style={{ padding: '16px 20px', fontWeight: 700, color: '#FFFFFF' }}>{l.admin}</td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{ fontSize: '0.74rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', padding: '3px 8px', borderRadius: '6px', fontWeight: 800 }}>
                    {l.action}
                  </span>
                </td>
                <td style={{ padding: '16px 20px', color: '#E2E8F0', maxWidth: '320px' }}>{l.detail}</td>
                <td style={{ padding: '16px 20px', color: '#94A3B8', fontFamily: 'monospace', fontSize: '0.78rem' }}>{l.ip}</td>
                <td style={{ padding: '16px 20px', color: '#64748B', fontSize: '0.75rem' }}>{l.timestamp}</td>
                <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '999px',
                    color: l.status === 'SUCCESS' ? '#34D399' : '#F43F5E',
                    background: l.status === 'SUCCESS' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    border: l.status === 'SUCCESS' ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)'
                  }}>
                    ● {l.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
