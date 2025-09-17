import React, { useState } from 'react';
import Navbar from "../components/Navbar";

const profile = {
  username: "guardian01",
  name: "Priya Mehra",
  points: 1230,
  avatar: "/generated-image (1).png"
};
const monthlyPoints = [80, 120, 140, 110, 180, 210, 95, 150, 200, 230, 280, 310];
const leaderboard = [
  { name: "Priya Mehra", points: 1230, avatar: "/generated-image (1).png", highlight: true },
  { name: "Anish K.", points: 1085, avatar: "/generated-image (2).png" },
  { name: "Megha Jain", points: 1010, avatar: "/generated-image (3).png" },
  { name: "Sameer R.", points: 900, avatar: "/generated-image (4).png" }
];

export default function ProfileDashboard({ onHome, onLogout }) {
  const [hoveredSection, setHoveredSection] = useState('');
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  return (
    <div style={styles.bg}>
      <Navbar
        active="profile"
        onHome={onHome}
        onQuests={() => alert('Quests')}
        onGames={() => alert('Games')}
        onLearn={() => alert('Learn')}
        onSOS={() => alert('SOS!')}
        onProfile={() => alert('Already Here')}
      />
      <div style={styles.page}>
        {/* Profile Header */}
        <div
          style={{
            ...styles.header,
            ...(hoveredSection === 'header' ? styles.hoverCard : {})
          }}
          onMouseEnter={() => setHoveredSection('header')}
          onMouseLeave={() => setHoveredSection('')}
        >
          <img src={profile.avatar} alt="avatar" style={styles.avatar} />
          <div>
            <div style={styles.username}>@{profile.username}</div>
            <div style={styles.name}>{profile.name}</div>
            <div style={styles.ptsRow}>
              <span style={styles.pointsIcon}>⚡</span>
              <span style={styles.pointsNum}>{profile.points}</span>
              <span style={styles.pointsLbl}>Aura Points</span>
            </div>
          </div>
        </div>

        {/* Growth Chart */}
        <div
          style={{
            ...styles.section,
            ...(hoveredSection === 'growth' ? styles.hoverCard : {})
          }}
          onMouseEnter={() => setHoveredSection('growth')}
          onMouseLeave={() => setHoveredSection('')}
        >
          <div style={styles.sectionTitle}>Monthly Aura Points Growth</div>
          <MonthlyGrowthGraph values={monthlyPoints} />
        </div>

        {/* Leaderboard */}
        <div
          style={{
            ...styles.section,
            ...(hoveredSection === 'leaderboard' ? styles.hoverCard : {})
          }}
          onMouseEnter={() => setHoveredSection('leaderboard')}
          onMouseLeave={() => setHoveredSection('')}
        >
          <div style={styles.sectionTitle}>Leaderboard</div>
          <div style={styles.leaderboardList}>
            {leaderboard.map((u, i) => (
              <div
                key={u.name}
                style={{
                  ...styles.leaderItem,
                  ...(u.highlight ? styles.leaderMe : {}),
                  ...(hoveredLeader === i ? styles.leaderHover : {})
                }}
                onMouseEnter={() => setHoveredLeader(i)}
                onMouseLeave={() => setHoveredLeader(null)}
              >
                <img src={u.avatar} alt="" style={styles.leaderAvatar} />
                <span style={styles.leaderName}>{u.name}</span>
                <span style={styles.leaderScore}>⚡ {u.points}</span>
                {u.highlight && <span style={styles.leaderYou}>You</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Log out button */}
        <button
          style={styles.logout}
          onClick={() => setShowLogoutPrompt(true)}
        >
          Log out
        </button>

        {/* Logout Modal */}
        {showLogoutPrompt && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <div style={{ color: "#FFD600", fontWeight: 600, fontSize: 19, marginBottom: 16 }}>
                Do you want to log out?
              </div>
              <div style={{ display: "flex", gap: 18 }}>
                <button
                  style={styles.modalYes}
                  onClick={() => { setShowLogoutPrompt(false); onLogout(); }}
                >Yes</button>
                <button
                  style={styles.modalNo}
                  onClick={() => setShowLogoutPrompt(false)}
                >No</button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={styles.footer}>
          <img src="/logo.png" alt="StepSafe Logo" style={styles.footerLogo} />
          <span style={styles.footerAppName}>StepSafe</span>
          <span style={styles.footerSpacer}>|</span>
          <span style={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} StepSafe. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

function MonthlyGrowthGraph({ values }) {
  const maxY = Math.max(...values) + 40;
  return (
    <svg width="100%" height="120" style={{ background: "none", margin: "18px 0" }} viewBox="0 0 380 120" preserveAspectRatio="none">
      <polyline
        fill="rgba(92,65,238,0.10)"
        stroke="none"
        points={values.map((v, i) => `${15 + i * 30},${110 - (v / maxY) * 90}`).join(" ") + ` 345,120 15,120`}
      />
      <polyline
        fill="none"
        stroke="#7C3AED"
        strokeWidth="4"
        points={values.map((v, i) => `${15 + i * 30},${110 - (v / maxY) * 90}`).join(" ")}
      />
      {values.map((v, i) =>
        <circle key={i} cx={15 + i * 30} cy={110 - (v / maxY) * 90} r={4} fill="#D8B4FE" />
      )}
    </svg>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)"
  },
  page: {
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    color: "#F5F6FF",
    padding: "44px 50px 30px 50px",
    maxWidth: 1300,
    margin: "auto"
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    margin: "30px 0 16px 0",
    padding: "28px 34px",
    background: "linear-gradient(90deg,#22264A 70%, #252856 100%)",
    borderRadius: 25,
    boxShadow: "0 4px 40px rgba(30,26,58,.13)",
    transition: "box-shadow 0.18s, transform 0.18s"
  },
  hoverCard: {
    boxShadow: "0 8px 40px rgba(110,120,224,0.20), 0 2px 14px #7C3AED55",
    transform: "translateY(-4px) scale(1.018)"
  },
  avatar: {
    width: 86, height: 86, borderRadius: "50%", background: "#232946", border: "4px solid #7C3AED"
  },
  username: {
    fontSize: 19, fontWeight: 700, color: "#B8AFFF", marginBottom: 2
  },
  name: {
    fontSize: 28, fontWeight: 600, color: "#FFD600", letterSpacing: 1, marginBottom: 9
  },
  ptsRow: {
    display: "flex", alignItems: "center", gap: 12
  },
  pointsIcon: {
    fontSize: 23, color: "#FFD600", marginRight: 4
  },
  pointsNum: {
    fontSize: 27, fontWeight: 700, color: "#FFD600"
  },
  pointsLbl: {
    fontSize: 17, color: "#d6e2fb", marginLeft: 8
  },
  section: {
    margin: "34px 0 0 0",
    background: "#23253C",
    borderRadius: 24,
    boxShadow: "0 2px 18px rgba(110,120,224,0.10)",
    padding: "28px 24px 14px 24px",
    transition: "box-shadow 0.18s, transform 0.18s"
  },
  sectionTitle: {
    fontSize: 22, fontWeight: 600, color: "#B8AFFF", marginBottom: 13
  },
  leaderboardList: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    margin: "16px 0"
  },
  leaderItem: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    background: "#191D2E",
    borderRadius: 14,
    padding: "13px 22px",
    fontSize: 17,
    color: "#F4FAFF",
    fontWeight: 500,
    boxShadow: "0 1px 12px rgba(60,70,120,.07)",
    cursor: "pointer",
    transition: "box-shadow 0.18s, background 0.15s, border 0.14s, transform 0.17s"
  },
  leaderMe: {
    border: "2px solid #FFD600"
  },
  leaderHover: {
    background: "#272a46",
    boxShadow: "0 6px 24px #8648f033",
    transform: "translateY(-2px) scale(1.017)",
    border: "2px solid #7C3AED"
  },
  leaderAvatar: {
    width: 46, height: 46, borderRadius: "50%", border: "3px solid #7C3AED", marginRight: 3
  },
  leaderName: {flex:1, color:"#FFD600", fontWeight:600, fontSize:17},
  leaderScore: { fontWeight:700, color:"#A5B4FC" },
  leaderYou: {
    background:"#FFD600", color:"#22264A", fontWeight:600, fontSize:14, padding:"2px 12px", borderRadius:14, marginLeft:16
  },
  logout: {
    margin: "40px 0 0 0",
    background: "#FFD600",
    color: "#23253C",
    fontWeight: 700,
    fontSize: 17,
    padding: "12px 38px",
    border: "none",
    borderRadius: 9,
    cursor: "pointer",
    boxShadow: "0 2px 8px #FFD60038",
    display: "block"
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(24,20,36,0.75)",
    zIndex: 2000,
    display: "flex", alignItems: "center", justifyContent: "center"
  },
  modal: {
    background: "#23253C",
    borderRadius: 16,
    boxShadow: "0 10px 48px #000C",
    padding: "36px 44px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  modalYes: {
    background: "#FFD600",
    color: "#23264A",
    fontWeight: 700,
    fontSize: 16,
    border: "none",
    borderRadius: 8,
    padding: "8px 26px",
    cursor: "pointer"
  },
  modalNo: {
    background: "none",
    color: "#B8AFFF",
    border: "2px solid #B8AFFF",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 16,
    padding: "8px 26px",
    cursor: "pointer"
  },
  footer: {
    background: "#16192A",
    color: "#9CA3AF",
    padding: "22px 0 16px 0",
    marginTop: 40,
    fontSize: 16,
    textAlign: "center",
    boxShadow: "0 -2px 22px 0 rgba(10,12,18,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    borderRadius: 22
  },
  footerLogo: {
    width: 30,
    height: 30,
    marginRight: 6
  },
  footerAppName: {
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
};
