import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function ProfileDashboard({ onHome, onLogout, onSOS, onEditProfile }) {
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
        <div className="profileFullWidth" style={styles.page}>
          {/* Summary */}
          <div style={styles.card}>
            <img src={profile.avatar} alt="avatar" style={styles.avatar} />
            <div style={styles.username}>@{profile.username}</div>
            <div style={styles.name}>{profile.name}</div>
            <div style={styles.ptsRow}>
              <span style={styles.pointsIcon}>⚡</span>
              <span style={styles.pointsNum}>{profile.points}</span>
              <span style={styles.pointsLbl}>Aura Points</span>
            </div>
            <button
              style={styles.editBtn}
              onClick={onEditProfile}
            >
              ✏️ Edit Profile
            </button>
          </div>
          {/* Growth Chart */}
          <div style={styles.card}>
            <div style={styles.sectionTitle}>Monthly Aura Points Growth</div>
            <MonthlyGrowthGraph values={monthlyPoints} />
          </div>
          {/* Leaderboard */}
          <div style={styles.card}>
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
        </div>
        <button className="sos-fab" onClick={onSOS} aria-label="SOS">SOS</button>
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
      <Footer />
      <style>{`
        .profileFullWidth {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 38px;
          margin-top: 48px;
          margin-bottom: 64px;
          width: 100vw;
          max-width: 100vw;
          padding-left: 0;
          padding-right: 0;
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
          .profileFullWidth {
            padding-left: 0 !important;
            padding-right: 0 !important;
            gap: 23px;
          }
          .sos-fab {
            right: 14px !important;
            bottom: 14px !important;
            width: 48px; height: 48px; font-size: 1em;
          }
        }
      `}</style>
    </>
  );
}

function MonthlyGrowthGraph({ values }) {
  const maxY = Math.max(...values) + 40;
  return (
    <svg width="100%" height="110" style={{ background: "none", margin: "22px 0", maxWidth: 990 }} viewBox="0 0 800 110" preserveAspectRatio="none">
      <polyline
        fill="rgba(92,65,238,0.13)"
        stroke="none"
        points={values.map((v, i) => `${30 + i * 67},${105 - (v / maxY) * 88}`).join(" ") + ` 760,110 30,110`}
      />
      <polyline
        fill="none"
        stroke="#7C3AED"
        strokeWidth="4"
        points={values.map((v, i) => `${30 + i * 67},${105 - (v / maxY) * 88}`).join(" ")}
      />
      {values.map((v, i) =>
        <circle key={i} cx={30 + i * 67} cy={105 - (v / maxY) * 88} r={7} fill="#D8B4FE" />
      )}
    </svg>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
    width: "100vw",
    boxSizing: "border-box"
  },
  page: {
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    color: "#F5F6FF",
    width: "100vw",
    maxWidth: "100vw",
    padding: "clamp(26px,6vw,44px) 0 60px 0",
    margin: 0,
    boxSizing: "border-box"
  },
  card: {
    background: "linear-gradient(90deg,#22264A 70%, #23253C 100%)",
    borderRadius: 27,
    boxShadow: "0 7px 28px rgba(110,120,224,0.15)",
    padding: "clamp(43px,6vw,68px) clamp(29px,5vw,74px)",
    margin: "0 auto",
    width: "80vw",
    maxWidth: "1380px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    width: "clamp(90px,15vw,164px)",
    height: "clamp(90px,15vw,164px)",
    borderRadius: "50%",
    background: "#232946",
    border: "7px solid #7C3AED",
    marginBottom: 20,
    marginTop: 12
  },
  username: {
    fontSize: "clamp(22px,3vw,32px)", fontWeight: 500, color: "#B8AFFF"
  },
  name: {
    fontSize: "clamp(26px,4vw,45px)", fontWeight: 700, color: "#FFD600", marginBottom: 18
  },
  editBtn: {
    background: "#FFD600",
    color: "#23264A",
    border: "none",
    borderRadius: "13px",
    fontWeight: 700,
    fontSize: "clamp(19px,2vw,31px)",
    padding: "13px 35px",
    marginTop: 35,
    cursor: "pointer",
    marginBottom: 2,
    letterSpacing: ".03em"
  },
  ptsRow: {
    display: "flex", alignItems: "center", gap: 17, marginBottom: 3, marginTop: 10
  },
  pointsIcon: {
    fontSize: "clamp(19px,2.5vw,27px)", color: "#FFD600"
  },
  pointsNum: {
    fontSize: "clamp(18px,3vw,33px)", fontWeight: 800, color: "#FFD600"
  },
  pointsLbl: {
    fontSize: "clamp(15px,2.2vw,19px)", color: "#d6e2fb", marginLeft: 7
  },
  sectionTitle: {
    fontSize: "clamp(19px,2.7vw,32px)", fontWeight: 700, color: "#B8AFFF", marginBottom: 17
  },
  leaderboardList: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(18px,2vw,35px)",
    margin: "13px 0"
  },
  leaderItem: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(15px,2.5vw,28px)",
    background: "#191D2E",
    borderRadius: 16,
    padding: "clamp(15px,2.6vw,35px) clamp(32px,2.5vw,50px)",
    fontSize: "clamp(19px,2.9vw,30px)",
    color: "#F4FAFF",
    fontWeight: 600,
    boxShadow: "0 2px 14px rgba(60,70,120,.13)",
    cursor: "pointer",
    transition: "box-shadow 0.18s, background 0.15s, border 0.14s, transform 0.17s"
  },
  leaderMe: {
    border: "2.5px solid #FFD600"
  },
  leaderHover: {
    background: "#272a46",
    boxShadow: "0 8px 32px #8648f033",
    transform: "scale(1.027)",
    border: "2.5px solid #7C3AED"
  },
  leaderAvatar: {
    width: "clamp(56px,7vw,90px)", height: "clamp(56px,7vw,90px)", borderRadius: "50%", border: "3.5px solid #7C3AED"
  },
  leaderName: { flex: 1, color: "#FFD600", fontWeight: 800 },
  leaderScore: { fontWeight: 700, color: "#A5B4FC" },
  leaderYou: {
    background: "#FFD600", color: "#22264A", fontWeight: 700, fontSize: "clamp(16px,2vw,22px)", padding: "7px 19px", borderRadius: "19px", marginLeft: 18
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
    padding: "34px 36px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  modalYes: {
    background: "#FFD600",
    color: "#23264A",
    fontWeight: 700,
    fontSize: "21px",
    border: "none",
    borderRadius: 10,
    padding: "11px 27px",
    cursor: "pointer"
  },
  modalNo: {
    background: "none",
    color: "#B8AFFF",
    border: "2px solid #B8AFFF",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: "21px",
    padding: "11px 27px",
    cursor: "pointer"
  }
};
