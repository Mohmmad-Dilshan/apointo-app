import React, { useState } from 'react';
import { Search, User, Phone, Mail, Calendar, DollarSign } from 'lucide-react';

export default function ProviderCRM() {
  const [query, setQuery] = useState('');

  const customers = [
    { id: "c_1", name: "Dilshan Perera", phone: "+91 98765 43210", email: "dilshan.p@example.com", totalBookings: 8, totalSpend: "₹4,250", lastVisit: "Today", favorite: "Classic Haircut" },
    { id: "c_2", name: "Arjun Kapoor", phone: "+91 98123 45678", email: "arjun.k@example.com", totalBookings: 5, totalSpend: "₹2,890", lastVisit: "05 Aug 2026", favorite: "Beard Crafting" },
    { id: "c_3", name: "Rohan Malhotra", phone: "+91 99887 76655", email: "rohan.m@example.com", totalBookings: 12, totalSpend: "₹9,400", lastVisit: "28 Jul 2026", favorite: "Royal Deluxe Grooming" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Customer CRM & History</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Search customer directory & purchase history</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F1F5F9', padding: '8px 14px', borderRadius: '12px' }}>
          <Search size={16} color="#64748B" />
          <input
            type="text"
            placeholder="Search name or phone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', fontSize: '0.85rem', outline: 'none' }}
          />
        </div>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>Customer</th>
              <th style={{ padding: '14px 20px' }}>Contact</th>
              <th style={{ padding: '14px 20px' }}>Bookings</th>
              <th style={{ padding: '14px 20px' }}>Total Spend</th>
              <th style={{ padding: '14px 20px' }}>Last Visit</th>
              <th style={{ padding: '14px 20px' }}>Preferred Service</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{c.name}</td>
                <td style={{ padding: '16px 20px', color: '#64748B' }}>{c.phone}</td>
                <td style={{ padding: '16px 20px', fontWeight: 700, color: '#4F46E5' }}>{c.totalBookings} visits</td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#10B981' }}>{c.totalSpend}</td>
                <td style={{ padding: '16px 20px', color: '#64748B' }}>{c.lastVisit}</td>
                <td style={{ padding: '16px 20px', fontWeight: 600, color: '#334155' }}>{c.favorite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
