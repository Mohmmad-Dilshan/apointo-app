import React, { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  BarChart3,
  MoreHorizontal,
  Scissors,
  Plus,
  QrCode,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import MobileOverview from "./Mobile/MobileOverview";
import MobileCalendar from "./Mobile/MobileCalendar";
import MobileAppointments from "./Mobile/MobileAppointments";
import MobileAnalytics from "./Mobile/MobileAnalytics";
import MobileServices from "./Mobile/MobileServices";
import MobileMore from "./Mobile/MobileMore";
import WalkInPOSModal from "./Mobile/WalkInPOSModal";
import QRCheckinModal from "./Mobile/QRCheckinModal";
import MobileAutomationsModal from "./Mobile/MobileAutomationsModal";

const TABS = [
  { id: "overview", label: "Home", icon: LayoutDashboard },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "appointments", label: "Bookings", icon: ClipboardList },
  { id: "services", label: "Services", icon: Scissors },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "more", label: "More", icon: MoreHorizontal },
];

import { usePlatform } from "../../context/PlatformContext";

export default function MobileBusinessDashboard() {
  const { createWalkInOrder, updateBookingStatus } = usePlatform();
  const [activeTab, setActiveTab] = useState("overview");
  const [isPOSOpen, setIsPOSOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isAutomationsOpen, setIsAutomationsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handlePOSComplete = (invoice) => {
    createWalkInOrder(invoice);
    setIsPOSOpen(false);
  };

  const handleVerifySuccess = (apt) => {
    updateBookingStatus(apt.id, "In Service");
    showToast(`✓ Check-in verified for ${apt.customer || 'Guest'} (#${apt.otp || 'OK'})`);
    setIsScannerOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F8FAFC", position: "relative" }}>
      {/* Toast popup */}
      {toastMessage && (
        <div style={{
          position: "absolute",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "10px 18px",
          borderRadius: "999px",
          fontSize: "0.78rem",
          fontWeight: 700,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <CheckCircle2 size={14} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Screen Content */}
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }} className="no-scrollbar">
        {activeTab === "overview" && (
          <MobileOverview
            onNavigateTab={setActiveTab}
            onOpenPOS={() => setIsPOSOpen(true)}
            onOpenScanner={() => setIsScannerOpen(true)}
            onOpenAutomations={() => setIsAutomationsOpen(true)}
          />
        )}
        {activeTab === "calendar" && (
          <MobileCalendar
            onOpenPOS={() => setIsPOSOpen(true)}
          />
        )}
        {activeTab === "appointments" && (
          <MobileAppointments
            onOpenPOS={() => setIsPOSOpen(true)}
            onOpenScanner={() => setIsScannerOpen(true)}
          />
        )}
        {activeTab === "services" && <MobileServices />}
        {activeTab === "analytics" && <MobileAnalytics />}
        {activeTab === "more" && <MobileMore onNavigateTab={setActiveTab} />}
      </div>

      {/* Walk-in POS Billing Modal */}
      <WalkInPOSModal
        isOpen={isPOSOpen}
        onClose={() => setIsPOSOpen(false)}
        onCompleteBooking={handlePOSComplete}
      />

      {/* Check-in QR & OTP Scanner Modal */}
      <QRCheckinModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onVerifySuccess={handleVerifySuccess}
      />

      {/* Smart Automations Modal */}
      <MobileAutomationsModal
        isOpen={isAutomationsOpen}
        onClose={() => setIsAutomationsOpen(false)}
      />

      {/* Apple iOS / Android Floating Glass Bottom Navigation Dock */}
      <div style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        height: "64px",
        background: "rgba(255, 255, 255, 0.94)",
        backdropFilter: "blur(28px) saturate(190%)",
        WebkitBackdropFilter: "blur(28px) saturate(190%)",
        borderTop: "1px solid rgba(226, 232, 240, 0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "4px 6px",
        zIndex: 100,
        boxShadow: "0 -6px 24px rgba(15, 23, 42, 0.08)"
      }}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
                padding: "6px 2px",
                borderRadius: "12px",
                border: "none",
                background: isActive ? "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)" : "transparent",
                color: isActive ? "#FFFFFF" : "#64748B",
                fontSize: "0.62rem",
                fontWeight: isActive ? 900 : 700,
                boxShadow: isActive ? "0 4px 14px rgba(79,70,229,0.35)" : "none",
                transition: "all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: isActive ? "scale(1.06)" : "scale(1)",
                cursor: "pointer"
              }}
            >
              <Icon size={17} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
