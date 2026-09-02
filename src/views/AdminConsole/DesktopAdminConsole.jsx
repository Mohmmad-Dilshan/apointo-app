import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './AdminDashboard';
import AdminMerchants from './AdminMerchants';
import BusinessVerification from './BusinessVerification';
import AdminBookings from './AdminBookings';
import AdminPayments from './AdminPayments';
import AdminPromotions from './AdminPromotions';
import AdminBroadcast from './AdminBroadcast';
import AdminUsers from './AdminUsers';
import AdminSupport from './AdminSupport';
import AdminFraudSecurity from './AdminFraudSecurity';
import AdminAuditLogs from './AdminAuditLogs';
import AdminDiagnostics from './AdminDiagnostics';

export default function DesktopAdminConsole() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#090D16',
      color: '#F8FAFC',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Top Enterprise Command Header */}
      <AdminHeader activeTab={activeTab} />

      {/* Main Workspace Layout (Sidebar + Active View) */}
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 68px)' }}>
        {/* Left Navigation Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Center Dynamic Content Body */}
        <main style={{
          flex: 1,
          background: '#090D16',
          overflowY: 'auto',
          minWidth: 0
        }} className="no-scrollbar">
          {activeTab === 'overview' && <AdminDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'merchants' && <AdminMerchants />}
          {activeTab === 'verification' && <BusinessVerification />}
          {activeTab === 'bookings' && <AdminBookings />}
          {activeTab === 'payments' && <AdminPayments />}
          {activeTab === 'promotions' && <AdminPromotions />}
          {activeTab === 'broadcast' && <AdminBroadcast />}
          {activeTab === 'users' && <AdminUsers />}
          {activeTab === 'support' && <AdminSupport />}
          {activeTab === 'security' && <AdminFraudSecurity />}
          {activeTab === 'audit' && <AdminAuditLogs />}
          {activeTab === 'diagnostics' && <AdminDiagnostics />}
        </main>
      </div>
    </div>
  );
}
