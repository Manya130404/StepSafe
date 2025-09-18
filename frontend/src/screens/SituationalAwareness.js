import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const cards = [
  {
    title: "Situational Awareness",
    subtitle: "Beginner",
    emoji: "👁️",
    description: "Test your ability to spot potential threats and unsafe situations in various environments.",
    time: "10-15 min",
    points: "+150 AP",
    color: "#805ad5",
    route: "/situational-awareness-beginner"
  },
  {
    title: "Situational Awareness",
    subtitle: "Intermediate",
    emoji: "⚡",
    description: "Learn how to quickly assess and act when facing a potential threat in real-time.",
    time: "8 min",
    points: "+120 AP",
    color: "#27b66e",
    route: "/situational-awareness-intermediate"
  },
  {
    title: "Advanced Threat Recognition",
    subtitle: "Advanced",
    emoji: "💡",
    description: "Recognize subtle cues in complex, high-stress situations with practical scenario drills.",
    time: "18-24 min",
    points: "+200 AP",
    color: "#ee6e3e",
    route: "/situational-awareness-advanced"
  }
];

export default function SituationalAwarenessGame() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#1b1e2a", paddingTop: 38 }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <button
          onClick={() => navigate("/games")}
          style={{
            background: "#FFD600",
            color: "#232946",
            border: "none",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 17,
            padding: "11px 36px",
            marginBottom: 27,
            cursor: "pointer",
            display: "block"
          }}
        >
          ← Back to Games
        </button>
        <h1 style={{
          color: "#FFD600",
          fontWeight: 900,
          fontSize: "2rem",
          marginBottom: 30,
          textAlign: "center"
        }}>
          Situational Awareness
        </h1>
        {cards.map(card =>
          <div key={card.subtitle}
            style={{
              background: "linear-gradient(90deg,#22264A 70%, #23253C 100%)",
              borderRadius: 24,
              padding: "32px 28px",
              boxShadow: "0 7px 28px rgba(110,120,224,0.15)",
              marginBottom: 30
            }}>
            <div style={{
              fontSize: 18,
              fontWeight: 700,
              color: card.color,
              display: "flex",
              alignItems: "center",
              marginBottom: 14
            }}>
              <span role="img" aria-label={card.emoji} style={{ fontSize: 30, marginRight: 10 }}>{card.emoji}</span>
              {card.subtitle}
            </div>
            <p style={{
              color: "#B8AFFF",
              fontSize: 16,
              margin: "10px 0 0 0",
              lineHeight: 1.5
            }}>
              {card.description}
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 20
            }}>
              <div style={{ color: "#FFD600", fontWeight: 700, fontSize: 15 }}>
                ⏱️ {card.time}
              </div>
              <div style={{ color: "#FFD600", fontWeight: 700, fontSize: 15 }}>
                ⚡ {card.points}
              </div>
            </div>
            <button
              style={{
                marginTop: 25,
                background: card.color,
                color: "#fff",
                border: "none",
                padding: "15px 0",
                width: "100%",
                fontWeight: 800,
                fontSize: 18,
                borderRadius: 14,
                cursor: "pointer",
                boxShadow: `0 6px 14px ${card.color}40`,
                transition: "background .13s"
              }}
              onClick={() => navigate(card.route)}
            >
              Start Training
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
