import React, { useState } from "react";
import {
  Star,
  CornerDownRight,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ThumbsUp,
  Heart,
  TrendingUp,
  X
} from "lucide-react";

export default function MobileReviews() {
  const [replyingId, setReplyingId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState({
    "r1": "Thank you so much Dilshan! Rahul is indeed one of our finest stylists. Look forward to seeing you again soon!"
  });
  const [toastMessage, setToastMessage] = useState(null);

  const reviews = [
    {
      id: "r1",
      author: "Dilshan Perera",
      rating: 5,
      date: "Today, 03:15 PM",
      service: "Classic Haircut & Styling",
      staff: "Rahul Sharma",
      comment: "Amazing precision haircut! Rahul is super skilled with low fades. The scalp wash was extremely relaxing. 10/10 recommended.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "r2",
      author: "Arjun Kapoor",
      rating: 5,
      date: "Yesterday",
      service: "Beard Crafting Combo",
      staff: "Vikram Singh",
      comment: "Great hygiene, very clean salon. The hot towel beard sculpting with Vikram was on point. Definitely my go-to grooming spot.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "r3",
      author: "Priya Sharma",
      rating: 4,
      date: "10 Aug 2026",
      service: "Organic Scalp Therapy & Facial",
      staff: "Priya Verma",
      comment: "Loved the organic facial glow! Priya was gentle and explained all products thoroughly. Only giving 4 stars because parking was slightly tight.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "r4",
      author: "Siddharth Nair",
      rating: 5,
      date: "05 Aug 2026",
      service: "Royal Deluxe Rejuvenation",
      staff: "Rahul Sharma",
      comment: "Best 90 minutes ever! The head massage relieved all my week's stress. Premium luxury experience.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    }
  ];

  const avgRating = "4.9";

  const aiTemplates = [
    "Thank you so much! We are thrilled you had a fantastic experience.",
    "Thank you for the wonderful feedback! Our team takes great pride in precision styling.",
    "Thanks for visiting! We have noted your feedback and look forward to welcoming you back."
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const postReply = (id) => {
    if (!replyText.trim()) return;
    setReplies({ ...replies, [id]: replyText });
    setReplyingId(null);
    setReplyText("");
    showToast("Official merchant reply published!");
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px", position: "relative" }}>
      {/* Toast Alert */}
      {toastMessage && (
        <div style={{
          position: "fixed",
          top: "60px",
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

      {/* Hero Sentiment Header */}
      <div style={{
        background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4F46E5 100%)",
        padding: "20px 16px 30px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "120px", height: "120px", borderRadius: "50%", background: "rgba(245,158,11,0.25)", filter: "blur(25px)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: "4px" }}>Customer Reputation Score</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>{avgRating}</span>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} size={16} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>Based on 342 verified appointments (98% Positive)</p>
            </div>
          </div>

          {/* Star Distribution Bars */}
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "5px" }}>
            {[
              { star: 5, pct: 92, count: 314 },
              { star: 4, pct: 6, count: 21 },
              { star: 3, pct: 2, count: 7 },
              { star: 2, pct: 0, count: 0 },
              { star: 1, pct: 0, count: 0 }
            ].map(r => (
              <div key={r.star} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.7)", width: "12px", fontWeight: 700 }}>{r.star}</span>
                <Star size={10} fill="#FBBF24" color="#FBBF24" />
                <div style={{ flex: 1, height: "6px", borderRadius: "999px", background: "rgba(255,255,255,0.15)", overflow: "hidden" }}>
                  <div style={{ width: `${r.pct}%`, height: "100%", background: "#FBBF24", borderRadius: "999px" }} />
                </div>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", width: "24px", textAlign: "right" }}>{r.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {reviews.map(r => (
          <div
            key={r.id}
            style={{
              background: "#FFFFFF",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
            }}
          >
            {/* Author Row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={r.avatar} alt={r.author} style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A" }}>{r.author}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} size={11} fill={s <= r.rating ? "#FBBF24" : "transparent"} color="#FBBF24" />
                      ))}
                    </div>
                    <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>• {r.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service & Specialist Tag */}
            <div style={{ fontSize: "0.72rem", color: "#4F46E5", fontWeight: 700, marginBottom: "8px", background: "#EEF2FF", display: "inline-block", padding: "2px 8px", borderRadius: "6px" }}>
              {r.service} (Stylist: {r.staff})
            </div>

            {/* Customer Comment */}
            <p style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.5, marginBottom: "12px" }}>
              "{r.comment}"
            </p>

            {/* Existing Official Reply */}
            {replies[r.id] && (
              <div style={{ background: "#F8FAFC", borderLeft: "3px solid #4F46E5", borderRadius: "0 12px 12px 0", padding: "10px 12px", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.68rem", fontWeight: 800, color: "#4F46E5", marginBottom: "3px" }}>
                  <MessageSquare size={12} /> Merchant Response (Urban Cut Studio):
                </div>
                <p style={{ fontSize: "0.76rem", color: "#475569", margin: 0 }}>{replies[r.id]}</p>
              </div>
            )}

            {/* Reply Input or Trigger */}
            {replyingId === r.id ? (
              <div style={{ marginTop: "10px", background: "#F8FAFC", padding: "10px", borderRadius: "12px", border: "1px solid #CBD5E1" }}>
                {/* AI Quick Templates */}
                <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#4F46E5", display: "flex", alignItems: "center", gap: "4px", marginBottom: "6px" }}>
                  <Sparkles size={11} /> 1-Tap AI Quick Suggestions:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "8px" }}>
                  {aiTemplates.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => setReplyText(t)}
                      style={{ textAlign: "left", fontSize: "0.7rem", color: "#334155", background: "#FFFFFF", padding: "6px 8px", borderRadius: "6px", border: "1px solid #E2E8F0", cursor: "pointer" }}
                    >
                      "{t}"
                    </button>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "6px" }}>
                  <input
                    type="text"
                    placeholder="Write official salon response..."
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                    style={{ flex: 1, padding: "8px 10px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "0.78rem", outline: "none" }}
                  />
                  <button
                    onClick={() => postReply(r.id)}
                    style={{ padding: "8px 12px", borderRadius: "8px", background: "linear-gradient(135deg, #4F46E5, #6366F1)", color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Send size={12} /> Post
                  </button>
                  <button
                    onClick={() => setReplyingId(null)}
                    style={{ width: "32px", borderRadius: "8px", background: "#E2E8F0", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                  >
                    <X size={14} color="#64748B" />
                  </button>
                </div>
              </div>
            ) : (
              !replies[r.id] && (
                <button
                  onClick={() => setReplyingId(r.id)}
                  style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.75rem", fontWeight: 800, color: "#4F46E5", background: "none", border: "none", cursor: "pointer", marginTop: "4px" }}
                >
                  <CornerDownRight size={13} /> Respond to client
                </button>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
