import React, { useState } from 'react';
import { ShieldCheck, Check, X, FileText, MapPin, Building, AlertCircle } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function BusinessVerification() {
  const [queue, setQueue] = useState(ADMIN_STATS.pendingVerifications);
  const [selectedApp, setSelectedApp] = useState(queue[0]);

  const handleApprove = (id) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: 'Approved ✓' } : item));
  };

  const handleReject = (id) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: 'Rejected ✗' } : item));
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Business Partner Verification</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Inspect business compliance documents & grant verified badge</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        {/* Left Queue List */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>Pending Applications</div>
          {queue.map(app => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app)}
              style={{
                padding: '14px',
                borderRadius: '16px',
                background: selectedApp?.id === app.id ? '#EEF2FF' : '#F8FAFC',
                border: selectedApp?.id === app.id ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{app.name}</div>
              <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{app.category} • {app.city}</p>
              <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{app.date}</span>
                <span className={`badge ${app.status.includes('Approved') ? 'badge-success' : app.status.includes('Rejected') ? 'badge-danger' : 'badge-warning'}`}>
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Details Inspector Panel */}
        {selectedApp && (
          <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #E2E8F0' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>{selectedApp.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Category: {selectedApp.category} • Application #{selectedApp.id}</p>
                </div>
                <span className="badge badge-warning" style={{ padding: '6px 12px', fontSize: '0.82rem' }}>
                  {selectedApp.status}
                </span>
              </div>

              {/* Information Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Owner Name</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{selectedApp.owner}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>City & Region</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{selectedApp.city}</div>
                </div>
              </div>

              {/* Submitted Legal Documents */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>Submitted Verification Documents</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {["Trade License Certificate (PDF)", "GSTIN Registration Document", "Business Location Premises Photos"].map((doc, idx) => (
                    <div key={idx} style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#334155' }}>
                        <FileText size={16} color="#4F46E5" /> {doc}
                      </div>
                      <button style={{ fontSize: '0.78rem', color: '#4F46E5', fontWeight: 700 }}>Preview</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', gap: '12px', paddingTop: '20px', borderTop: '1px solid #E2E8F0' }}>
              <button
                onClick={() => handleApprove(selectedApp.id)}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#10B981',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Check size={18} /> Approve & Grant Verified Badge
              </button>

              <button
                onClick={() => handleReject(selectedApp.id)}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#F43F5E',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <X size={18} /> Reject Application
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
