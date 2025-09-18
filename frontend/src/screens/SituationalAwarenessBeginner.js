import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Example beginner scenario data
const scenarios = [
  {
    id: 1,
    videoSrc: "/videos/beginner_scene.mp4",
    title: "Mall Walk",
    context: "A quiet mall corridor in daytime.",
    description: "You notice someone has been walking behind you for several minutes.",
    options: [
      { text: "Enter a store and wait.", isSafe: true, result: "Excellent, moving to a public space can deter potential threats." },
      { text: "Keep walking and ignore them.", isSafe: false, result: "Ignoring could be risky. Stay alert!" }
    ]
  }
];

export default function SituationalAwarenessBeginner() {
  const [index, setIndex] = useState(null);
  const [chosen, setChosen] = useState(null);
  const navigate = useNavigate();

  if (index === null) {
    return (
      <div style={{ minHeight: "100vh", background: "#181C24", paddingTop: 38 }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <button onClick={() => navigate("/situational-awareness")} style={backBtnStyle}>← Back</button>
          <h2 style={headingStyle}>Beginner Level - Situational Awareness</h2>
          <div style={cardStyle}>
            <video src="/videos/beginner_intro.mp4" style={{ width: "100%", borderRadius: 8 }} controls />
            <p style={{ color: "#B8AFFF", marginTop: 10 }}>
              Learn to spot potential threats and use basic awareness to stay safe.
            </p>
            <button
              style={playBtnStyle}
              onClick={() => setIndex(0)}
            >Start Scenario</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const scenario = scenarios[index];
  return (
    <div style={{ minHeight: "100vh", background: "#181C24", paddingTop: 38 }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <button onClick={() => setIndex(null)} style={backBtnStyle}>← Back</button>
        <div style={cardStyle}>
          <h3 style={{ color: "#FFD600", fontWeight: 800 }}>{scenario.title}</h3>
          <video src={scenario.videoSrc} controls style={{ width: "100%", borderRadius: 8, marginBottom: 10 }} />
          <div style={{ color: "#FFD600", marginBottom: 6 }}>Context: {scenario.context}</div>
          <p style={{ color: "#B8AFFF", marginBottom: 12 }}>{scenario.description}</p>
          {scenario.options.map((opt, i) =>
            <button key={i} style={optionBtnStyle} disabled={!!chosen} onClick={() => setChosen(i)}>
              {opt.text}
            </button>
          )}
          {typeof chosen === "number" && (
            <>
              <div style={{ marginTop: 16, color: scenarios[index].options[chosen].isSafe ? "#45ee8a" : "#e45a72" }}>
                {scenarios[index].options[chosen].result}
              </div>
              <button onClick={() => setIndex(null)} style={playBtnStyle}>Play again</button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// --- Button/Style snippets used for all ---
const backBtnStyle = {
  background: "#FFD600", color: "#232946", border: "none",
  borderRadius: 8, fontWeight: 700, fontSize: 17, padding: "10px 26px", margin: "0 0 18px 0", cursor: "pointer"
};
const playBtnStyle = {
  marginTop: 20, background: "#805ad5", color: "#fff", border: "none",
  fontWeight: 800, fontSize: 17, borderRadius: 10, padding: "12px 0", width: "100%", cursor: "pointer"
};
const optionBtnStyle = {
  display: "block", width: "100%", margin: "9px 0", padding: "13px 0", background: "#232946",
  color: "#fff", borderRadius: 8, border: "2px solid #393b6d", fontWeight: 700, fontSize: 15, cursor: "pointer"
};
const cardStyle = { background: "#22264A", borderRadius: 24, padding: 24, marginBottom: 24, boxShadow: "0 7px 28px #22264a22" };
const headingStyle = { color: "#FFD600", fontWeight: 800, fontSize: "26px", textAlign: "center", margin: "10px 0 28px 0" };
