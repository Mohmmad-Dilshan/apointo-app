import React, { useState } from 'react';
import ProviderHeader from './ProviderHeader';
import ProviderSidebar from './ProviderSidebar';
import ProviderOverview from './ProviderOverview';
import ProviderCalendar from './ProviderCalendar';
import ProviderAppointments from './ProviderAppointments';
import ProviderServices from './ProviderServices';
import ProviderStaff from './ProviderStaff';
import ProviderCRM from './ProviderCRM';
import ProviderPayments from './ProviderPayments';
import ProviderOffers from './ProviderOffers';
import ProviderAnalytics from './ProviderAnalytics';
import ProviderReviews from './ProviderReviews';
import ProviderSettings from './ProviderSettings';

export default function DesktopBusinessDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#F8FAFC', width: '100%', overflowX: 'hidden' }}>
      <ProviderHeader activeTab={activeTab} />
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 65px)' }}>
        <ProviderSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main style={{ flex: 1, overflowY: 'auto', minWidth: 0 }}>
          {activeTab === 'overview' && <ProviderOverview onNavigateTab={setActiveTab} />}
          {activeTab === 'calendar' && <ProviderCalendar />}
          {activeTab === 'appointments' && <ProviderAppointments />}
          {activeTab === 'services' && <ProviderServices />}
          {activeTab === 'staff' && <ProviderStaff />}
          {activeTab === 'crm' && <ProviderCRM />}
          {activeTab === 'payments' && <ProviderPayments />}
          {activeTab === 'offers' && <ProviderOffers />}
          {activeTab === 'analytics' && <ProviderAnalytics />}
          {activeTab === 'reviews' && <ProviderReviews />}
          {activeTab === 'settings' && <ProviderSettings />}
        </main>
      </div>
    </div>
  );
}
