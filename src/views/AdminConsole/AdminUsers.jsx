import React from 'react';
import { Users, Search, ShieldCheck } from 'lucide-react';

export default function AdminUsers() {
  const usersList = [
    { id: "u_1", name: "Dilshan Perera", phone: "+91 98765 43210", email: "dilshan.p@example.com", city: "Bengaluru", points: "2,450", status: "Active" },
    { id: "u_2", name: "Sneha Nair", phone: "+91 98123 45678", email: "sneha.n@example.com", city: "Bengaluru", points: "1,200", status: "Active" },
    { id: "u_3", name: "Karan Mehta", phone: "+91 99887 76655", email: "karan.m@example.com", city: "Mumbai", points: "3,800", status: "Active" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>User Directory Management</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Search registered consumer accounts</p>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>User</th>
              <th style={{ padding: '14px 20px' }}>Contact</th>
              <th style={{ padding: '14px 20px' }}>City</th>
              <th style={{ padding: '14px 20px' }}>Rewards Points</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{u.name}</td>
                <td style={{ padding: '16px 20px', color: '#64748B' }}>{u.phone} • {u.email}</td>
                <td style={{ padding: '16px 20px', fontWeight: 600, color: '#334155' }}>{u.city}</td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#4F46E5' }}>{u.points} PTS</td>
                <td style={{ padding: '16px 20px' }}><span className="badge badge-success">{u.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
