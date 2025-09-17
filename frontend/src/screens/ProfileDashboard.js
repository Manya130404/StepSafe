import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Make sure the path is correct

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

export default function ProfileDashboard({ onHome, onLogout, onSOS }) {
  const [hoveredSection, setHoveredSection] = useState('');
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  return (
    <>
      <div style={styles.bg}>
        <Navbar
          active="profile"
          onHome={onHome}
          onQuests={() => alert('Quests')}
          onGames={() => alert('Games')}
          onLearn={() => alert('Learn')}
          onSOS={onSOS}
          onProfile={() => {}}
        />
        <div style={styles.page}>
          {/* Header */}
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
        </div>
      </div>
      <Footer />
    </>
  );
}

function MonthlyGrowthGraph({ values }) {
  const maxY = Math.max(...values) + 40;
  return (
    <svg width="100%" height="110" style={{ background: "none", margin: "14px 0", maxWidth: "100vw" }} viewBox="0 0 350 110" preserveAspectRatio="none">
      <polyline
        fill="rgba(92,65,238,0.12)"
        stroke="none"
        points={values.map((v, i) => `${15 + i * 27},${105 - (v / maxY) * 88}`).join(" ") + ` 330,110 15,110`}
      />
      <polyline
        fill="none"
        stroke="#7C3AED"
        strokeWidth="4"
        points={values.map((v, i) => `${15 + i * 27},${105 - (v / maxY) * 88}`).join(" ")}
      />
      {values.map((v, i) =>
        <circle key={i} cx={15 + i * 27} cy={105 - (v / maxY) * 88} r={4} fill="#D8B4FE" />
      )}
    </svg>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
    width: "100%"
  },
  page: {
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    color: "#F5F6FF",
    width: "100%",
    maxWidth: 500,
    padding: "6vw 2vw 10vw 2vw",
    margin: "0 auto",
    boxSizing: "border-box"
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "4vw",
    margin: "6vw 0 4vw 0",
    padding: "5vw 4vw",
    background: "linear-gradient(90deg,#22264A 70%, #252856 100%)",
    borderRadius: 28,
    boxShadow: "0 3px 25px rgba(30,26,58,.12)",
    flexWrap: "wrap"
  },
  hoverCard: {
    boxShadow: "0 6px 26px rgba(110,120,224,0.17), 0 2px 8px #7C3AED43",
    transform: "scale(1.013)"
  },
  avatar: {
    width: "18vw", maxWidth: 70, minWidth: 48, height: "18vw", maxHeight: 70, minHeight: 48,
    borderRadius: "50%", background: "#232946", border: "3.5px solid #7C3AED"
  },
  username: {
    fontSize: "4vw", minFontSize: 14, fontWeight: 700, color: "#B8AFFF", marginBottom: 2
  },
  name: {
    fontSize: "6vw", minFontSize: 18, fontWeight: 600, color: "#FFD600", letterSpacing: 1, marginBottom: 8
  },
  ptsRow: {
    display: "flex", alignItems: "center", gap: 10
  },
  pointsIcon: {
    fontSize: "5vw", color: "#FFD600", marginRight: 3
  },
  pointsNum: {
    fontSize: "5vw", fontWeight: 700, color: "#FFD600"
  },
  pointsLbl: {
    fontSize: "3.5vw", color: "#d6e2fb", marginLeft: 7
  },
  section: {
    margin: "5vw 0 0 0",
    background: "#23253C",
    borderRadius: 18,
    boxShadow: "0 2px 18px rgba(110,120,224,0.08)",
    padding: "5vw 4vw 3vw 4vw",
    transition: "box-shadow 0.18s, transform 0.18s"
  },
  sectionTitle: {
    fontSize: "5vw", minFontSize: 18, fontWeight: 600, color: "#B8AFFF", marginBottom: 11
  },
  leaderboardList: {
    display: "flex",
    flexDirection: "column",
    gap: "3vw",
    margin: "10px 0"
  },
  leaderItem: {
    display: "flex",
    alignItems: "center",
    gap: "4vw",
    background: "#191D2E",
    borderRadius: 13,
    padding: "2.2vw 4vw",
    fontSize: "4.2vw",
    color: "#F4FAFF",
    fontWeight: 500,
    boxShadow: "0 1px 10px rgba(60,70,120,.07)",
    cursor: "pointer",
    transition: "box-shadow 0.18s, background 0.15s, border 0.14s, transform 0.17s"
  },
  leaderMe: {
    border: "2px solid #FFD600"
  },
  leaderHover: {
    background: "#272a46",
    boxShadow: "0 6px 24px #8648f033",
    transform: "scale(1.017)",
    border: "2px solid #7C3AED"
  },
  leaderAvatar: {
    width: "11vw", minWidth: 37, height: "11vw", minHeight: 37, borderRadius: "50%", border: "2px solid #7C3AED"
  },
  leaderName: {flex:1, color:"#FFD600", fontWeight:600, fontSize:"4vw"},
  leaderScore: { fontWeight:700, color:"#A5B4FC" },
  leaderYou: {
    background:"#FFD600", color:"#22264A", fontWeight:600, fontSize:"3vw", padding:"2px 10px", borderRadius:"16px", marginLeft:11
  },
  logout: {
    margin: "7vw 0 0 0",
    background: "#FFD600",
    color: "#23253C",
    fontWeight: 700,
    fontSize: "4vw",
    padding: "10px 30px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    boxShadow: "0 2px 8px #FFD60038",
    display: "block"
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(28, 24, 40, 0.62)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 2000
  },
  modal: {
    background: "#23253C",
    borderRadius: 18,
    boxShadow: "0 8px 38px #0007",
    padding: "9vw 10vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  modalYes: {
    background: "#FFD600",
    color: "#23264A",
    fontWeight: 700,
    fontSize: "4vw",
    border: "none",
    borderRadius: 8,
    padding: "8px 22px",
    cursor: "pointer"
  },
  modalNo: {
    background: "none",
    color: "#B8AFFF",
    border: "2px solid #B8AFFF",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: "4vw",
    padding: "8px 22px",
    cursor: "pointer"
  }
};
