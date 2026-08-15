import React, { useState } from "react";
import { HelpCircle, MessageSquare, CheckCircle, Clock, AlertCircle, Check, Send } from "lucide-react";

export default function MobileAdminSupport() {
  const [tickets, setTickets] = useState([
    { id: "TCK-109", customer: "Dilshan P.", issue: "Refund inquiry on cancelled slot", priority: "High", status: "Open", time: "10 min ago" },
    { id: "TCK-110", customer: "Urban Cut Studio", issue: "Update bank account details for payout", priority: "Medium", status: "Resolved ✓", time: "2 hrs ago" },
    { id: "TCK-111", customer: "Sneha Nair", issue: "Double debited points adjustment", priority: "High", status: "Open", time: "3 hrs ago" },
    { id: "TCK-112", customer: "Glow Beauty", issue: "Staff calendar sync technical error", priority: "Low", status: "Open", time: "5 hrs ago" },
  ]);

  const [activeReply, setActiveReply] = useState(null);
  const [replyMsg, setReplyMsg] = useState("");

  const handleResolveTicket = (id) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: "Resolved ✓" } : t));
    setActiveReply(null);
  };

  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* Header */}
      <div style={{ background: "#131B2E", padding: "16px 16px 14px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "4px" }}>Escalated Support Desk</h2>
        <p style={{ fontSize: "0.7rem", color: "#94A3B8" }}>Customer disputes & merchant operational issues</p>
      </div>

      {/* Tickets List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {tickets.map(t => {
          const isResolved = t.status.includes("Resolved");
          const isHigh = t.priority === "High";

          return (
            <div
              key={t.id}
              style={{
                background: "#131B2E",
                borderRadius: "16px",
                padding: "14px",
                border: isResolved ? "1px solid rgba(52, 211, 153, 0.2)" : isHigh ? "1px solid rgba(244, 63, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#818CF8" }}>#{t.id}</span>
                    <span style={{
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      padding: "2px 6px",
                      borderRadius: "6px",
                      color: isHigh ? "#F43F5E" : "#FBBF24",
                      background: isHigh ? "rgba(244, 63, 94, 0.15)" : "rgba(251, 191, 36, 0.15)"
                    }}>
                      {t.priority} Priority
                    </span>
                  </div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#F8FAFC", marginTop: "3px" }}>{t.customer}</h3>
                </div>

                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "999px",
                  color: isResolved ? "#34D399" : "#F43F5E",
                  background: isResolved ? "rgba(52, 211, 153, 0.15)" : "rgba(244, 63, 94, 0.15)",
                  border: isResolved ? "1px solid rgba(52, 211, 153, 0.3)" : "1px solid rgba(244, 63, 94, 0.3)"
                }}>
                  {t.status}
                </span>
              </div>

              <p style={{ fontSize: "0.78rem", color: "#CBD5E1", lineHeight: 1.4, margin: "6px 0 10px" }}>"{t.issue}"</p>

              {/* Action Area */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ fontSize: "0.65rem", color: "#64748B" }}>Received {t.time}</span>

                {!isResolved && (
                  <button
                    onClick={() => handleResolveTicket(t.id)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "8px",
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(52, 211, 153, 0.3)",
                      color: "#34D399",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    <Check size={12} /> Mark Resolved
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
