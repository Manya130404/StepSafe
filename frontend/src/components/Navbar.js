import React from 'react';

export default function Navbar({ active, onHome, onQuests, onGames, onLearn, onSOS, onProfile }) {
  return (
    <div style={styles.navbar}>
      <div style={styles.logoBox}>
        <img src="/logo.png" alt="Aura" style={styles.logo} />
        <div>
          <span style={styles.logoText}>StepSafe</span>
          <span style={styles.level}>Level 1</span>
          <span style={styles.ap}>• 0 AP</span>
        </div>
      </div>
      <div style={styles.navLinks}>
        <NavButton label="Home" active={active === "home"} onClick={onHome} />
        <NavButton label="Quests" active={active === "quests"} onClick={onQuests} />
        <NavButton label="Games" active={active === "games"} onClick={onGames} />
        <NavButton label="Learn" active={active === "learn"} onClick={onLearn} />
        <SOSButton onClick={onSOS} />
        <NavButton label="Profile" active={active === "profile"} onClick={onProfile} />
      </div>
    </div>
  );
}

// Paste styles object and NavButton, SOSButton below this line from your HomeScreen.js
const styles = {
  navbar: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "0 36px", background: "linear-gradient(90deg,#7931fa 10%, #2563eb 90%)",
    color: "#fff", minHeight: 64, fontSize: 20
  },
  logoBox: { display:"flex",alignItems:"center", gap:11 },
  logo: { width: 40, height: 40, marginRight: 10 }, // Remove borderRadius if not needed
  logoText: { fontSize: 26, fontWeight: 800, letterSpacing:'-1px', marginRight: 12, color: "#FFD600" },
  level: { fontSize:15, fontWeight:600, color:"#FFD600", marginRight:8 },
  ap: { fontSize:15, marginLeft:0, color: "#F5F6FF" },
  navLinks: { display:"flex",alignItems:"center",gap:4 }
};

function NavButton({label, active, onClick}) {
  return (
    <button
      style={{
        background: active ? 'rgba(145,123,255,0.20)' : 'transparent',
        color: active ? '#FFD600' : "#fff",
        border: "none",
        fontSize: 17,
        padding: "0 17px",
        fontWeight: 500,
        cursor: "pointer"
      }}
      onClick={onClick}
    >{label}</button>
  );
}
function SOSButton({onClick}) {
  return (
    <button style={{
      background: "#dc2626",
      color: "#fff",
      border: "none",
      borderRadius: 24,
      fontSize: 18,
      fontWeight: 600,
      margin: "0 8px",
      padding: "7px 20px",
      boxShadow: "0 2px 8px rgba(220,38,38,.18)",
      cursor: "pointer",
      position: "relative"
    }} onClick={onClick}>
      SOS <span style={{
        position:"absolute", top:6, right:4, background:"#FFD600",
        color:'#dc2626', borderRadius:"50%", fontSize:14, padding:"2px 6px"
      }}>!</span>
    </button>
  );
}
