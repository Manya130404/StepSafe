import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const user = {
  name: "Priya Mehra",
  points: 1230,
  level: 7,
  avatar: "/generated-image (1).png",
  guardian: "/guardian-panda.png"
};

const quickActions = [
  {
    label: "Start a Quest",
    desc: "Embark on safety scenarios and earn Aura Points.",
    icon: "🛡️",
    onClick: () => {},
    color: "#6a49fe"
  },
  {
    label: "Play Mini-Games",
    desc: "Build skills through fun interactive games.",
    icon: "🎮",
    onClick: () => {},
    color: "#3ca6fc"
  },
  {
    label: "Learn & Grow",
    desc: "Access expert safety knowledge and tips.",
    icon: "📖",
    onClick: () => {},
    color: "#23dda3"
  }
];

const daily = [
  { color: "#bb67f8", label: "Complete the \"Digital Guardian\" quest", points: 250 },
  { color: "#5da6fb", label: "Practice 3 self-defense moves", points: 150 },
  { color: "#23dda3", label: "Score 80% in \"Spot the Risk\" game", points: 100 }
];

export default function HomeScreen({ onHome, onProfile, onSOS }) {
  const [checked, setChecked] = useState(Array(daily.length).fill(false));

  return (
    <>
      <Navbar
        active="home"
        user={user}
        onHome={onHome}
        onProfile={onProfile}
        onQuests={() => alert("Quests!")}
        onGames={() => alert("Games")}
        onLearn={() => alert("Learn")}
        onSOS={onSOS}
      />
      <div style={styles.bg}>
        <div style={styles.mainWrap}>
          {/* Quick Actions */}
          <div style={styles.card}>
            <div style={styles.sectionTitle}>
              <span style={{fontSize:20,marginRight:7}}>⚡</span>
              Quick Actions
            </div>
            <div className="quickActionGrid">
              {quickActions.map(q => (
                <div
                  key={q.label}
                  style={{...styles.quickCard, borderColor: q.color}}
                  className="quickCardGlow"
                >
                  <div style={{...styles.quickIcon, background:q.color}}>{q.icon}</div>
                  <div style={styles.quickLabel}>{q.label}</div>
                  <div style={styles.quickDesc}>{q.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Daily Challenges */}
          <div style={styles.dailyCard}>
            <div style={styles.dailyHeader}>
              <span style={{fontSize:21,marginRight:11}}>🗓️</span>
              <span style={{fontWeight:700, fontSize:'0.94em'}}>Daily Challenges</span>
            </div>
            <div style={{color:"#aeb0d1",marginBottom:13,marginTop:2,fontSize:"0.99em"}}>
              Complete these to boost your Aura Points
            </div>
            {daily.map((item, idx) => (
              <label
                key={item.label}
                className="challengeRow"
                style={{
                  ...styles.challengeRow,
                  background: checked[idx] ? "#25204c" : undefined,
                  cursor: "pointer"
                }}
              >
                <input
                  type="checkbox"
                  style={styles.checkbox}
                  checked={checked[idx]}
                  onChange={() => setChecked(ck => ck.map((v, i) => i === idx ? !v : v))}
                />
                <span style={{...styles.challengeDot, background:item.color}}/>
                <span
                  style={{
                    ...styles.challengeLabel,
                    textDecoration: checked[idx] ? "line-through" : undefined,
                    color: checked[idx] ? "#827fa3" : "#eceaff"
                  }}
                >{item.label}</span>
                <span
                  style={{
                    ...styles.challengeBadge,
                    color: checked[idx] ? "#8d89b4" : "#FFD600",
                    background: checked[idx] ? "#19143c" : "#29235a"
                  }}
                >+{item.points} AP</span>
              </label>
            ))}
          </div>
          {/* Wisdom Box */}
          <div style={styles.wisdomBox}>
            <div style={styles.wisdomTitle}><span>⚡</span> Guardian Wisdom of the Day</div>
            <div style={styles.wisdomHighlight}>
              <span style={{fontSize:27,verticalAlign:'middle'}}>💡</span>
              <span style={{fontWeight:700, color:'#FFD600', fontSize: '1.09em', marginLeft:10}}>
                Confidence is Your Superpower
              </span>
            </div>
            <div style={styles.wisdomDesc}>
              Walking with confidence and awareness can deter potential threats. Your posture, eye contact, and purposeful movement send a clear message: "I am alert and prepared." Practice confident body language daily!
            </div>
          </div>
        </div>
        {/* Floating SOS Button OUTSIDE mainWrap for fixed placement */}
        <button
          className="sos-fab"
          onClick={onSOS}
          aria-label="SOS"
        >
          SOS
        </button>
      </div>
      <Footer />
      <style>
        {`
        .quickActionGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 32px;
        }
        @media (max-width: 900px) {
          .quickActionGrid { grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 16px; }
        }
        @media (max-width: 600px) {
          .quickActionGrid { grid-template-columns: 1fr; gap: 10px; }
        }
        .quickCardGlow:hover, .quickCardGlow:focus {
          transform: scale(1.045);
          box-shadow: 0 10px 32px #7c3aed44, 0 1px 10px #bfa3ff16;
          border-color: #FFD600 !important;
        }
        .challengeRow:hover, .challengeRow:focus-within {
          background: #31295b;
          box-shadow: 0 2px 8px 0 #382b661a;
          transform: translateY(-1.5px) scale(1.01);
          z-index: 10;
        }
        .sos-fab {
          position: fixed;
          right: 32px;
          bottom: 36px;
          background: linear-gradient(135deg,#F8274C 70%,#F77A27 100%);
          color: #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          border: none;
          font-size: 1.12em;
          font-weight: bold;
          box-shadow: 0 4px 18px #F8274D55;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3333;
          transition: transform .16s cubic-bezier(.36,1.78,.63,1.01), box-shadow .16s;
        }
        .sos-fab:hover, .sos-fab:focus {
          transform: scale(1.14) rotate(-7deg);
          box-shadow: 0 6px 30px #F8274D88;
          background: linear-gradient(131deg,#FA476A 75%,#FFAA47 100%);
          outline: none;
        }
        @media (max-width:750px) {
          .sos-fab {
            right: 12px !important;
            bottom: 16px !important;
            width: 48px; height: 48px; font-size: 1em;
          }
        }
        `}
      </style>
    </>
  )
}

const styles = {
  bg: {
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
    minHeight: "100vh",
    position: "relative"
  },
  mainWrap: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 16px 60px 16px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 38,
    minHeight: "90vh"
  },
  card: {
    width: "100%",
    background: "linear-gradient(90deg,#272a49E0 80%, #23243cD7 100%)",
    borderRadius: 19,
    boxShadow:"0 2px 12px #111c",
    padding: "22px 22px 28px 22px",
    marginTop: 11,
    boxSizing: "border-box"
  },
  sectionTitle: {
    fontSize: "clamp(16px,1.8vw,21px)",
    fontWeight: 700,
    color: "#FFD600",
    marginBottom: 22,
    display: "flex",
    alignItems: "center"
  },
  quickCard: {
    background: "rgba(36, 37, 64, 0.99)",
    borderRadius: 17,
    border: "2.3px solid #6a49fe",
    boxShadow:"0 1px 7px #25296813",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 5px 22px 5px",
    cursor: "pointer",
    transition: "transform 0.12s, box-shadow 0.15s, border 0.13s",
    outline: "none",
    minWidth: "240px",
    margin: "0 auto",
     height: "100%",        // <-- ADD THIS
  minHeight: "180px", 
     // <-- You can set a minimum, tweak as desired
  boxSizing: "border-box"
  },
  quickIcon: {
    fontSize:32,
    borderRadius:"50%",
    width:44,
    height:44,
    color:"#fff",
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:"0 2px 11px #7c3aed42"
  },
  quickLabel: {
    fontWeight: 800,
    color: "#B8AFFF",
    marginBottom: 7,
    fontSize: "clamp(14.5px,1.7vw,17px)",
    textAlign: "center"
  },
  quickDesc: {
    fontSize: "clamp(11px,1vw,14px)",
    color: "#D6DDFF",
    textAlign: "center"
  },
  dailyCard: {
    background: "linear-gradient(110deg,#232744E0 60%, #202130F2 100%)",
    border: "1.6px solid #382b66",
    borderRadius: 26,
    padding: "18px 18px 10px 18px",
    maxWidth: "100%",
    boxShadow: "0 2px 14px #4c3d9912",
    marginTop: 32,
    marginBottom: 0
  },
  dailyHeader: {
    display: "flex", alignItems: "center", marginBottom: 10, color: "#FFD600", fontSize: "1em"
  },
  challengeRow: {
    padding: "12px 0 10px 0",
    display: "flex",
    alignItems: "center",
    transition: "background .13s, box-shadow .15s, transform .15s",
    borderBottom: "1px solid #312944",
    fontSize: 15,
    marginBottom: 0,
    position: "relative",
    width: "100%",
    gap: 0
  },
  checkbox: {
    accentColor: "#FFD600",
    width: 18,
    height: 18,
    marginRight: 8,
    marginLeft: 0,
    cursor: "pointer"
  },
  challengeDot: {
    display: "inline-block",
    width: 13,
    height: 13,
    borderRadius: "50%",
    marginRight: 13,
    marginLeft: 6
  },
  challengeLabel: {
    fontWeight: 500,
    color: "#eceaff",
    flex: 1,
    marginRight: 10,
    fontSize: 14.2,
    lineHeight: "1.3"
  },
  challengeBadge: {
    background: "#29235a",
    color: "#FFD600",
    fontWeight: 700,
    padding: "4px 14px",
    borderRadius: 15,
    fontSize: 13.5,
    marginLeft: 11,
    minWidth: 61,
    textAlign: "center"
  },
  wisdomBox: {
    background: "linear-gradient(90deg,#1d1833f7,#332b55fa 85%)",
    border: "2px solid #4938a8",
    borderRadius: 24,
    marginTop: 27,
    padding: "18px 18px 28px 18px",
    boxShadow:"0 2px 11px #4c3d9913"
  },
  wisdomTitle: {
    color: "#FFD600",
    fontWeight: 600,
    fontSize: 17,
    marginBottom: 11,
    letterSpacing: 0.5
  },
  wisdomHighlight: {
    fontSize: 15,
    marginBottom: 7,
    display: "flex",
    alignItems: "center"
  },
  wisdomDesc: {
    color: "#ffeeb2",
    fontSize: 14,
    lineHeight: 1.3
  }
};
