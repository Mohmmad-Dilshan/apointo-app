import React, { useState } from 'react';
import { Users, Search, ShieldCheck, AlertTriangle, CheckCircle2, UserCheck, UserX } from 'lucide-react';

export default function AdminUsers() {
  const [users, setUsers] = useState([
    { id: "u_1", name: "Dilshan Perera", phone: "+91 98765 43210", email: "dilshan.p@example.com", city: "Bengaluru", points: "2,450", status: "Active" },
    { id: "u_2", name: "Sneha Nair", phone: "+91 98123 45678", email: "sneha.n@example.com", city: "Bengaluru", points: "1,200", status: "Active" },
    { id: "u_3", name: "Karan Mehta", phone: "+91 99887 76655", email: "karan.m@example.com", city: "Mumbai", points: "3,800", status: "Active" },
    { id: "u_4", name: "Rohan Verma", phone: "+91 97766 55443", email: "rohan.v@example.com", city: "Delhi", points: "450", status: "Suspended" }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const toggleUserStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Suspended' : 'Active';
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone.includes(searchQuery)
  );

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>User Directory Management</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Search registered consumer accounts and manage access</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F1F5F9', padding: '8px 14px', borderRadius: '12px', width: '300px' }}>
          <Search size={16} color="#64748B" />
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '0.85rem' }}
          />
        </div>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>User Name</th>
              <th style={{ padding: '14px 20px' }}>Contact Details</th>
              <th style={{ padding: '14px 20px' }}>City</th>
              <th style={{ padding: '14px 20px' }}>Rewards Balance</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
              <th style={{ padding: '14px 20px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{u.name}</td>
                <td style={{ padding: '16px 20px', color: '#64748B' }}>{u.phone} • {u.email}</td>
                <td style={{ padding: '16px 20px', fontWeight: 600, color: '#334155' }}>{u.city}</td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#4F46E5' }}>{u.points} PTS</td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge ${u.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                    {u.status}
                  </span>
                </td>
                <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                  <button
                    onClick={() => toggleUserStatus(u.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: u.status === 'Active' ? '#FFF1F2' : '#ECFDF5',
                      color: u.status === 'Active' ? '#E11D48' : '#059669',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {u.status === 'Active' ? <UserX size={14} /> : <UserCheck size={14} />}
                    <span>{u.status === 'Active' ? 'Suspend' : 'Activate'}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

