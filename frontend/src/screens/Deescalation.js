import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Fill with your own 3D video clips or storyboards!
const safetyScenarios3D = [
  {
    id: 1,
    videoSrc: "/videos/urban_parking_lot.mp4",
    thumbnail: "/images/parking-thumbnail.png",
    title: "Parking Lot Encounter",
    contextHints: "It's 9PM. Dimly lit. Your phone is in your bag.",
    description: "You're walking to your car. Someone's footsteps approach quickly behind you.",
    options: [
      {
        text: "Walk faster, ready keys, and look for open areas/cameras",
        outcome: "Smart! Staying aware, prepared, and visible increases your safety.",
        isSafe: true
      },
      {
        text: "Take out phone, heads-down, ignore sounds",
        outcome: "You missed a chance to deter a threat by appearing distracted.",
        isSafe: false
      },
      {
        text: "Turn and confront directly, shouting immediately",
        outcome: "Can escalate risk if you're alone. Seek help, but avoid direct confrontation if possible.",
        isSafe: false
      }
    ]
  },
  {
    id: 2,
    videoSrc: "/videos/cab_ride_start.mp4",
    thumbnail: "/images/car-thumbnail.png",
    title: "Late-Night Cab Ride",
    contextHints: "You're alone. Phone has GPS. Cab takes a detour.",
    description: "Your cab takes an unexpected detour. The driver locks the doors.",
    options: [
      {
        text: "Share live location and call out driver",
        outcome: "Best move: makes it clear you're connected and assertive.",
        isSafe: true
      },
      {
        text: "Try to unlock and jump out at red signal",
        outcome: "Extreme, only if you feel immediate danger.",
        isSafe: false
      },
      {
        text: "Text friend but stay silent",
        outcome: "Good, but better to alert the driver you’re sharing trip.",
        isSafe: false
      }
    ]
  }
];

export default function Safety3DGame() {
  const [scenarioIdx, setScenarioIdx] = useState(null);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const resetScenario = () => {
    setSelectedOptionIdx(null);
    setShowOutcome(false);
    setScenarioIdx(null);
  };

  const startScenario = idx => {
    setScenarioIdx(idx);
    setSelectedOptionIdx(null);
    setShowOutcome(false);
  };

  const handleOption = (optionIdx) => {
    setSelectedOptionIdx(optionIdx);
    setShowOutcome(true);
    const scenario = safetyScenarios3D[scenarioIdx];
    if (scenario.options[optionIdx].isSafe) setScore(s => s + 100);
  };

  // Main menu (grid of scenarios)
  if (scenarioIdx === null) {
    return (
      <div style={{ minHeight: "100vh", background: "#1b1e2a", paddingTop: 38 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            textAlign: "center",
            color: "#FFD600",
            fontSize: 32,
            fontWeight: 900,
            marginTop: 16
          }}>
            Urban Shield: Women's Safety Scenarios
          </h1>
          <div style={{
            maxWidth: 800,
            margin: "30px auto",
            padding: 20,
            borderRadius: 25,
            background: "#223052"
          }}>
            <div style={{ fontSize: 19, marginBottom: 24, color: "#B8D2FF" }}>
              Explore real-life 3D safety situations. Make smart decisions and learn what keeps you safest.
            </div>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 38,
            justifyContent: "center",
            margin: "26px auto 60px auto",
            maxWidth: 1200
          }}>
            {safetyScenarios3D.map((sc, idx) => (
              <div
                key={sc.id}
                style={{
                  width: 340, background: "#161d34", borderRadius: 21, boxShadow: "0 2px 18px #1b233640",
                  padding: 0, overflow: 'hidden', cursor: "pointer", border: "2.5px solid #7BB3FF"
                }}
                onClick={() => startScenario(idx)}
              >
                <img src={sc.thumbnail} alt={sc.title} style={{
                  width: "100%", height: 190, objectFit: "cover", display: "block"
                }}/>
                <div style={{ padding: 19 }}>
                  <div style={{ fontWeight: 900, color: "#FFD600", fontSize: 17 }}>{sc.title}</div>
                  <div style={{ color: "#fff9e5", fontWeight: 700, fontSize: 14, margin: "10px 0 5px 0" }}>{sc.contextHints}</div>
                  <div style={{ color: "#B8D2FF" }}>{sc.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", fontSize: 18, color: "#FFD600", marginBottom: 45 }}>
            Total Safe Actions Score: {score}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Scenario View
  const scenario = safetyScenarios3D[scenarioIdx];
  const chosen = selectedOptionIdx !== null ? scenario.options[selectedOptionIdx] : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #181D2E 80%, #2F395E 100%)",
      color: "#fff",
      paddingTop: 38
    }}>
      <div style={{ maxWidth: 660, margin: "24px auto", padding: 24 }}>
        <button
          onClick={resetScenario}
          style={{
            border: "none", background: "#FFD600", color: "#232946", fontWeight: 700, fontSize: 17,
            borderRadius: 8, padding: "9px 34px", marginBottom: 21, cursor: "pointer"
          }}>
          ← Back to Scenarios
        </button>
        <div style={{
          borderRadius: 18, background: "#242A48", boxShadow: "0 4px 24px #19244A44", padding: 23, marginBottom: 15
        }}>
          <h2 style={{ marginBottom: 6, color: "#FFD600", fontWeight: 900 }}>{scenario.title}</h2>
          <div>
            <video key={scenario.videoSrc} src={scenario.videoSrc} controls autoPlay loop style={{ width: "100%", borderRadius: 12, margin: "16px 0" }} />
            <div style={{ color: "#c3defa", fontSize: 15, margin: "8px 0 15px 0" }}><b>Context:</b> {scenario.contextHints}</div>
            <div style={{ color: "#ffeecb", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{scenario.description}</div>
          </div>
          <div>
            {scenario.options.map((option, idx) => (
              <button
                key={idx}
                disabled={showOutcome}
                style={{
                  display: "block", width: "100%", textAlign: "left", marginBottom: 14, padding: "14px 11px",
                  fontSize: "15.6px", borderRadius: 9, background: "#232946", border: "2px solid #293369",
                  color: "#fff", fontWeight: 600, cursor: showOutcome ? "not-allowed" : "pointer",
                  transition: ".13s",
                  ...(showOutcome && selectedOptionIdx === idx
                    ? option.isSafe
                      ? { background: "#38BD4850", color: "#68ffb0", border: "2px solid #53d785" }
                      : { background: "#BE1D3466", color: "#ffbdbd", border: "2px solid #c8375a" }
                    : {})
                }}
                onClick={() => handleOption(idx)}
              >
                {option.text}
                {showOutcome && selectedOptionIdx === idx && (
                  <b style={{
                    float: "right",
                    fontWeight: 700,
                    fontSize: 18,
                    color: option.isSafe ? "#2fd785" : "#eb3758"
                  }}>
                    {option.isSafe ? "✔" : "✖"}
                  </b>
                )}
              </button>
            ))}
            {showOutcome && (
              <div>
                <div style={{
                  background: "#2a355a",
                  color: "#FFD600",
                  padding: 17,
                  marginTop: 8,
                  borderRadius: 10,
                  fontWeight: 700
                }}>{chosen.outcome}</div>
                <button
                  style={{
                    marginTop: 18, background: "#7BB3FF", color: "#fff", border: "none",
                    borderRadius: 11, fontWeight: 700, padding: "13px 37px", fontSize: 16, cursor: "pointer"
                  }}
                  onClick={resetScenario}
                >
                  Continue
                </button>
                <button
                  onClick={() => navigate("/games")}
                  style={{
                    marginTop: 12, background: "#FFD600", color: "#232946", border: "none",
                    borderRadius: 8, fontWeight: 700, fontSize: 16, padding: "10px 30px", marginLeft: 22, cursor: "pointer"
                  }}
                >
                  ← Back to Games
                </button>
              </div>
            )}
          </div>
        </div>
        <div style={{ color: "#FFD600", fontWeight: 500, fontSize: 17, marginTop: 19 }}>
          Safe Actions Score: {score}
        </div>
      </div>
      <Footer />
    </div>
  );
}
