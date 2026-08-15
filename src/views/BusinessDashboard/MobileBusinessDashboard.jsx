import React, { useState } from "react";
import { LayoutDashboard, Calendar, ClipboardList, BarChart3, MoreHorizontal, Scissors } from "lucide-react";
import MobileOverview from "./Mobile/MobileOverview";
import MobileCalendar from "./Mobile/MobileCalendar";
import MobileAppointments from "./Mobile/MobileAppointments";
import MobileAnalytics from "./Mobile/MobileAnalytics";
import MobileServices from "./Mobile/MobileServices";
import MobileMore from "./Mobile/MobileMore";

const TABS = [
  { id: "overview", label: "Home", icon: LayoutDashboard },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "appointments", label: "Bookings", icon: ClipboardList },
  { id: "services", label: "Services", icon: Scissors },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "more", label: "More", icon: MoreHorizontal },
];

export default function MobileBusinessDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F8FAFC", position: "relative" }}>
      {/* Screen Content */}
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }} className="no-scrollbar">
        {activeTab === "overview" && <MobileOverview onNavigateTab={setActiveTab} />}
        {activeTab === "calendar" && <MobileCalendar />}
        {activeTab === "appointments" && <MobileAppointments />}
        {activeTab === "services" && <MobileServices />}
        {activeTab === "analytics" && <MobileAnalytics />}
        {activeTab === "more" && <MobileMore onNavigateTab={setActiveTab} />}
      </div>

      {/* Glass Bottom Nav */}
      <div style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        height: "62px",
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderTop: "1px solid rgba(226, 232, 240, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "4px 6px",
        zIndex: 100,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.06)"
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
                background: isActive ? "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)" : "transparent",
                color: isActive ? "#FFFFFF" : "#94A3B8",
                fontSize: "0.6rem",
                fontWeight: isActive ? 800 : 600,
                boxShadow: isActive ? "0 4px 12px rgba(79,70,229,0.3)" : "none",
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
