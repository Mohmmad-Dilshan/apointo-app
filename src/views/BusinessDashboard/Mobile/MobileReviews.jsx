import React, { useState } from "react";
import { Star, CornerDownRight, Send, MessageSquare } from "lucide-react";
import { BUSINESSES } from "../../../data/sampleData";

export default function MobileReviews() {
  const [replyingId, setReplyingId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [posted, setPosted] = useState([]);

  const reviews = (BUSINESSES[0] && BUSINESSES[0].reviews) ? BUSINESSES[0].reviews : [
    { id: "r1", author: "Dilshan P.", rating: 5, comment: "Amazing haircut! Rahul is super skilled. Will definitely come back.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" },
    { id: "r2", author: "Arjun K.", rating: 4, comment: "Great service, very clean salon. Beard crafting was on point.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80" },
    { id: "r3", author: "Priya S.", rating: 5, comment: "Loved the head spa! Priya was very professional.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80" },
  ];

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const postReply = (id) => {
    if (!replyText.trim()) return;
    setPosted([...posted, id]);
    setReplyingId(null);
    setReplyText("");
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Rating Hero */}
      <div style={{ background: "linear-gradient(135deg, #1E1B4B, #4338CA)", padding: "20px 16px 28px" }}>
        <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>Customer Reviews</h2>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
          <div style={{ fontSize: "3rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>{avgRating}</div>
          <div>
            <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={16} fill={s <= Math.round(avgRating) ? "#FBBF24" : "transparent"} color="#FBBF24" />
              ))}
            </div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>Based on {reviews.length} reviews</p>
          </div>
        </div>

        {/* Star Bars */}
        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
          {[5,4,3,2,1].map(star => {
            const count = reviews.filter(r => r.rating === star).length;
            const pct = (count / reviews.length) * 100;
            return (
              <div key={star} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", width: "12px" }}>{star}</span>
                <Star size={9} fill="#FBBF24" color="#FBBF24" />
                <div style={{ flex: 1, height: "5px", borderRadius: "999px", background: "rgba(255,255,255,0.15)", overflow: "hidden" }}>
                  <div style={{ width: pct + "%", height: "100%", background: "#FBBF24", borderRadius: "999px" }} />
                </div>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", width: "16px" }}>{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {reviews.map(r => (
          <div key={r.id} style={{ background: "#FFFFFF", borderRadius: "18px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            {/* Author Row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={r.avatar} alt={r.author} style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{r.author}</div>
                  <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} fill={s <= r.rating ? "#FBBF24" : "transparent"} color="#FBBF24" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Comment */}
            <p style={{ fontSize: "0.84rem", color: "#475569", lineHeight: 1.5, fontStyle: "italic", marginBottom: "12px" }}>"{r.comment}"</p>

            {/* Reply */}
            {posted.includes(r.id) ? (
              <div style={{ background: "#EEF2FF", borderRadius: "10px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <MessageSquare size={13} color="#4F46E5" />
                <span style={{ fontSize: "0.75rem", color: "#4F46E5", fontWeight: 600 }}>Reply posted successfully</span>
              </div>
            ) : replyingId === r.id ? (
              <div style={{ display: "flex", gap: "8px" }}>
                <input type="text" placeholder="Write a response..." value={replyText} onChange={e => setReplyText(e.target.value)} style={{ flex: 1, padding: "9px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }} />
                <button onClick={() => postReply(r.id)} style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366F1, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Send size={15} color="#FFFFFF" />
                </button>
              </div>
            ) : (
              <button onClick={() => setReplyingId(r.id)} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", fontWeight: 700, color: "#4F46E5" }}>
                <CornerDownRight size={13} /> Reply to customer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
