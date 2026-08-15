import React, { useState } from "react";
import { LayoutDashboard, ShieldCheck, ClipboardList, DollarSign, MoreHorizontal, Shield } from "lucide-react";
import MobileAdminOverview from "./Mobile/MobileAdminOverview";
import MobileAdminVerification from "./Mobile/MobileAdminVerification";
import MobileAdminBookings from "./Mobile/MobileAdminBookings";
import MobileAdminPayments from "./Mobile/MobileAdminPayments";
import MobileAdminMore from "./Mobile/MobileAdminMore";

const TABS = [
  { id: "overview", label: "Pulse", icon: LayoutDashboard },
  { id: "verification", label: "KYC", icon: ShieldCheck },
  { id: "bookings", label: "Bookings", icon: ClipboardList },
  { id: "payments", label: "Payouts", icon: DollarSign },
  { id: "more", label: "More", icon: MoreHorizontal },
];

export default function MobileAdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#090D16", color: "#F8FAFC", position: "relative" }}>
      {/* Active Screen Content */}
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }} className="no-scrollbar">
        {activeTab === "overview" && <MobileAdminOverview onNavigateTab={setActiveTab} />}
        {activeTab === "verification" && <MobileAdminVerification />}
        {activeTab === "bookings" && <MobileAdminBookings />}
        {activeTab === "payments" && <MobileAdminPayments />}
        {activeTab === "more" && <MobileAdminMore />}
      </div>

      {/* Cyber Dark Glass Bottom Navigation Dock */}
      <div style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        height: "62px",
        background: "rgba(19, 27, 46, 0.94)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "4px 6px",
        zIndex: 100,
        boxShadow: "0 -6px 24px rgba(0, 0, 0, 0.6)"
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
                gap: "3px",
                padding: "6px 2px",
                borderRadius: "12px",
                background: isActive ? "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)" : "transparent",
                color: isActive ? "#FFFFFF" : "#94A3B8",
                fontSize: "0.62rem",
                fontWeight: isActive ? 800 : 600,
                boxShadow: isActive ? "0 4px 14px rgba(99, 102, 241, 0.4)" : "none",
                transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: isActive ? "scale(1.05)" : "scale(1)"
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
