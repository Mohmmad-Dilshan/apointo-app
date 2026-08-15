import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react";

export default function MobileCalendar() {
  const [viewMode, setViewMode] = useState("Day");
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dates = [10,11,12,13,14,15,16];
  const [activeDay, setActiveDay] = useState(14);

  const appointments = [
    { hour: "09:00", customer: "Vikram R.", service: "Classic Haircut", staff: "Rahul S.", color: "#4F46E5", duration: "45m" },
    { hour: "10:00", customer: "Arjun K.", service: "Beard Crafting", staff: "Vikram S.", color: "#06B6D4", duration: "30m" },
    { hour: "14:00", customer: "Dilshan P.", service: "Haircut & Styling", staff: "Rahul S.", color: "#10B981", duration: "45m" },
    { hour: "17:00", customer: "Siddharth N.", service: "Royal Deluxe Package", staff: "Priya V.", color: "#F59E0B", duration: "90m" },
  ];

  const hours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Header */}
      <div style={{ background: "#FFFFFF", padding: "16px 16px 12px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button style={{ width: "30px", height: "30px", borderRadius: "8px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft size={14} /></button>
            <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>August 2026</span>
            <button style={{ width: "30px", height: "30px", borderRadius: "8px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronRight size={14} /></button>
          </div>
          <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "10px" }}>
            {["Day","Week"].map(m => (
              <button key={m} onClick={() => setViewMode(m)} style={{ padding: "5px 12px", borderRadius: "7px", fontSize: "0.75rem", fontWeight: 700, background: viewMode === m ? "#FFFFFF" : "transparent", color: viewMode === m ? "#4F46E5" : "#64748B", boxShadow: viewMode === m ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>{m}</button>
            ))}
          </div>
        </div>

        {/* Days Strip */}
        <div style={{ display: "flex", gap: "6px", overflowX: "auto" }} className="no-scrollbar">
          {days.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(dates[i])} style={{ minWidth: "44px", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "8px 4px", borderRadius: "12px", background: activeDay === dates[i] ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "transparent" }}>
              <span style={{ fontSize: "0.62rem", fontWeight: 700, color: activeDay === dates[i] ? "rgba(255,255,255,0.7)" : "#64748B" }}>{d}</span>
              <span style={{ fontSize: "0.9rem", fontWeight: 800, color: activeDay === dates[i] ? "#FFFFFF" : "#0F172A" }}>{dates[i]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAB Add */}
      <button style={{ position: "fixed", bottom: "80px", right: "20px", width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #6366F1, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(79,70,229,0.4)", zIndex: 50 }}>
        <Plus size={22} color="#FFFFFF" />
      </button>

      {/* Timeline */}
      <div style={{ padding: "14px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {hours.map(hour => {
            const match = appointments.find(a => a.hour === hour);
            return (
              <div key={hour} style={{ display: "flex", gap: "12px", minHeight: "64px" }}>
                <div style={{ width: "44px", paddingTop: "6px", fontSize: "0.7rem", fontWeight: 700, color: "#94A3B8", flexShrink: 0 }}>{hour}</div>
                <div style={{ flex: 1, borderLeft: "1px solid #E2E8F0", paddingLeft: "12px", paddingBottom: "8px" }}>
                  {match ? (
                    <div style={{ background: match.color + "18", borderLeft: "3px solid " + match.color, borderRadius: "10px", padding: "10px 12px", marginTop: "4px" }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>{match.customer}</div>
                      <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>{match.service} • {match.staff}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                        <Clock size={10} color={match.color} />
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: match.color }}>{match.duration}</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
                      <span style={{ fontSize: "0.72rem", color: "#CBD5E1" }}>Available</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
