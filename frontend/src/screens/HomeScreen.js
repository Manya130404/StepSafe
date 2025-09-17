import React from 'react';

export default function HomeScreen({ onStartQuest, onPlayGames, onLearnGrow, onProfile, onSOS }) {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logoBox}>
          <img src="/logo.png" alt="Aura" style={{...styles.logo, borderRadius:0}} />
          <div>
            <span style={styles.logoText}>StepSafe</span>
            <span style={styles.level}>Level 1</span>
            <span style={styles.ap}>• 0 Aura Points</span>
          </div>
        </div>
        <div style={styles.navLinks}>
          <NavButton label="Home" active />
          <NavButton label="Quests" />
          <NavButton label="Games" />
          <NavButton label="Learn" />
          <SOSButton onClick={onSOS} />
          <NavButton label="Profile" onClick={onProfile} />
        </div>
      </div>
      {/* Welcome Banner */}
      <div style={styles.banner}>
        <div>
          <div style={styles.bannerTitle}>Good morning, Guardian!</div>
          <div style={styles.bannerDesc}>Ready to strengthen your safety aura today?</div>
          <div style={styles.bannerLevel}>
            <span style={styles.bannerLevelNum}>1</span> Level 1 <span style={styles.bannerLevelDot}>⚡</span> 0 AP
          </div>
        </div>
        <div>
          <img src="https://img.icons8.com/color/48/000000/shield.png" alt="" style={{marginRight: 16}} />
          <img src="https://img.icons8.com/color/48/000000/sparkle.png" alt="" />
        </div>
      </div>
      {/* Quick Actions */}
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Quick Actions</div>
        <div style={styles.quickGrid}>
          <ActionCard
            color="#9333EA"
            icon="🛡️"
            title="Start a Quest"
            desc="Embark on safety scenarios and earn Aura Points"
            onClick={onStartQuest}
          />
          <ActionCard
            color="#2563EB"
            icon="🎮"
            title="Play Mini-Games"
            desc="Build skills through fun interactive training"
            onClick={onPlayGames}
          />
          <ActionCard
            color="#10B981"
            icon="📚"
            title="Learn & Grow"
            desc="Access expert safety knowledge and techniques"
            onClick={onLearnGrow}
          />
        </div>
      </div>
      {/* Daily Challenges */}
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Daily Challenges</div>
        <div style={styles.fakeChallenge}>
          Complete these to boost your Aura Points.
        </div>
      </div>
      <div style={styles.footer}>
  <div style={styles.footerContent}>
    <img src="/logo.png" alt="Aura Logo" style={styles.footerLogo} />
    <span style={styles.footerBrand}>StepSafe</span>
    <span style={styles.footerSpacer}>|</span>
    <span style={styles.footerCopyright}>
      &copy; {new Date().getFullYear()} StepSafe. All rights reserved.
    </span>
  </div>
</div>

    </div>
  );
}

// NAV BUTTON
function NavButton({label, active, onClick}) {
  return (
    <button
      style={{
        ...navBtnStyle,
        background: active ? 'rgba(145,123,255,0.20)' : 'transparent',
        color: active ? '#FFD600' : "#fff"
      }}
      onClick={onClick}
    >{label}</button>
  );
}

// SOS BUTTON
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

// ACTION CARD
function ActionCard({ color, icon, title, desc, onClick }) {
  return (
    <button style={{
      background: "#181E30",
      border: `2px solid ${color}`,
      borderRadius: 16,
      flex: 1,
      margin: 8,
      display: "flex", flexDirection: "column", alignItems: "center",
      boxShadow: "0 1px 9px rgba(145,123,255,.07)",
      padding: "28px 20px",
      cursor: "pointer", minWidth: 210,
      color: "#fff"
    }} onClick={onClick}>
      <div style={{ fontSize: 34, background: color, color: "#fff", borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 19, marginBottom: 6 }}>{title}</div>
      <div style={{ color: "#C0CBF8", fontSize:16, marginBottom: 0 }}>{desc}</div>
    </button>
  );
}

// STYLES
const styles = {
    footer: {
  background: "#16192A",
  color: "#9CA3AF",
  padding: "20px 0 16px 0",
  marginTop: 40,
  fontSize: 16,
  textAlign: "center",
  boxShadow: "0 -2px 22px 0 rgba(10,12,18,0.22)"
},
footerContent: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
  flexWrap: "wrap"
},
footerLogo: {
  width: 30,
  height: 30,
  marginRight: 6
},
footerBrand: {
  fontWeight: 700,
  fontSize: 20,
  color: "#FFD600"
},
footerSpacer: {
  color: "#393E5A",
  margin: "0 8px",
  fontSize: 22
},
footerCopyright: {
  fontSize: 15,
  color: "#9CA3AF"
}
,
  page: {
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
    minHeight: "100vh",
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    color: "#F5F6FF"
  },
  navbar: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "0 36px", background: "linear-gradient(90deg,#7931fa 10%, #2563eb 90%)",
    color: "#fff", minHeight: 64, fontSize: 20
  },
  logoBox: { display:"flex",alignItems:"center", gap:11 },
  logo: { width: 40, height: 40, marginRight: 10 }, // NO borderRadius
  logoText: { fontSize: 26, fontWeight: 800, letterSpacing:'-1px', marginRight: 12, color: "#FFD600" },
  level: { fontSize:15, fontWeight:600, color:"#FFD600", marginRight:8 },
  ap: { fontSize:15, marginLeft:0, color: "#F5F6FF" },
  navLinks: { display:"flex",alignItems:"center",gap:4 },
  banner: {
    margin: "34px 28px 18px 28px", padding: "28px 38px",
    background: "linear-gradient(90deg,#242652 60%, #2D3355 100%)",
    borderRadius: 26, boxShadow:"0 2px 18px rgba(110,120,180,0.18)", display:"flex", alignItems:"center", justifyContent:"space-between"
  },
  bannerTitle: { fontSize: 28, fontWeight: 700, color:"#B8AFFF", marginBottom: 5 },
  bannerDesc: { fontSize:17, color:"#d6e2fb", marginBottom:15 },
  bannerLevel: { fontSize:17, fontWeight: "bold", color:"#FFD600", alignItems:"center" },
  bannerLevelNum: { fontWeight: 700, background:"#6C63FF",color:"#fff", borderRadius: "50%", padding: "4px 11px", marginRight:9 },
  bannerLevelDot: { marginLeft:10, color:"#FFD600",fontSize:17 },
  section: { margin:"36px 28px", background:"#262e4b", borderRadius:18, boxShadow:"0 2px 16px rgba(153,153,180,0.11)", padding:"28px", color:"#fff" },
  sectionTitle: { fontSize:22, fontWeight:600, marginBottom:16, color:"#B8AFFF" },
  quickGrid: { display:"flex", gap:20, marginTop:12 },
  fakeChallenge: { color:"#C0CBF8", background:"#181c28", padding:"18px 20px", borderRadius:13, fontSize:16 }
};

const navBtnStyle = {
  background: "transparent", color: "#F5F6FF", border: "none", fontSize: 17, padding: "0 17px", fontWeight: 500, cursor: "pointer"
};
