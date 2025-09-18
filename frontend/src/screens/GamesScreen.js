"use client"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const user = {
  name: "Priya Mehra",
  points: 1230,
  level: 7,
  avatar: "/generated-image (1).png",
}

const trainingGames = [
  {
    id: 1,
    title: "Situational Awareness",
    description: "Test your ability to spot potential threats and unsafe situations in various environments.",
    icon: "👁️",
    difficulty: "Beginner",
    points: 150,
    color: "#7C3AED",
    estimatedTime: "10-15 min",
  },
  {
    id: 2,
    title: "De-escalation Drills",
    description: "Practice verbal techniques to defuse tense situations and avoid confrontation.",
    icon: "🗣️",
    difficulty: "Intermediate",
    points: 200,
    color: "#3ca6fc",
    estimatedTime: "15-20 min",
  },
  {
    id: 3,
    title: "Escape Route Recon",
    description: "Learn to quickly identify and plan escape routes in different locations and scenarios.",
    icon: "🚪",
    difficulty: "Advanced",
    points: 250,
    color: "#23dda3",
    estimatedTime: "20-25 min",
  },
]

export default function GamesPage() {
  // ✅ fixed function (no TypeScript)
  const handleStartTraining = (game) => {
    alert(`Starting ${game.title} training...`)
  }

  const handleSOS = () => {
    alert("SOS activated!")
  }

  return (
    <>
      <Navbar user={user} />
      <div style={styles.bg}>
        <div style={styles.container}>
          {/* Header Section */}
          <div style={styles.headerCard}>
            <div style={styles.headerContent}>
              <div style={styles.headerIcon}>🎮</div>
              <h1 style={styles.headerTitle}>Guardian Training Games</h1>
              <p style={styles.headerSubtitle}>
                Build your safety skills through interactive training scenarios. Complete games to earn Aura Points and
                level up your guardian abilities.
              </p>
            </div>

            {/* User Stats */}
            <div style={styles.userStats}>
              <div style={styles.statItem}>
                <span style={styles.statIcon}>⚡</span>
                <span style={styles.statValue}>{user.points}</span>
                <span style={styles.statLabel}>Aura Points</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statIcon}>🏆</span>
                <span style={styles.statValue}>Level {user.level}</span>
                <span style={styles.statLabel}>Guardian</span>
              </div>
            </div>
          </div>

          {/* Training Games Grid */}
          <div style={styles.gamesSection}>
            <h2 style={styles.sectionTitle}>
              <span style={{ fontSize: 24, marginRight: 10 }}>🛡️</span>
              Available Training Games
            </h2>

            <div style={styles.gamesGrid}>
              {trainingGames.map((game) => (
                <div key={game.id} style={{ ...styles.gameCard, borderColor: game.color }} className="game-card">
                  <div style={styles.gameHeader}>
                    <div style={{ ...styles.gameIcon, background: game.color }}>{game.icon}</div>
                    <div style={styles.gameDifficulty}>
                      <span style={{ ...styles.difficultyBadge, background: game.color }}>{game.difficulty}</span>
                    </div>
                  </div>

                  <h3 style={styles.gameTitle}>{game.title}</h3>
                  <p style={styles.gameDescription}>{game.description}</p>

                  <div style={styles.gameStats}>
                    <div style={styles.gameStatItem}>
                      <span style={styles.gameStatIcon}>⏱️</span>
                      <span style={styles.gameStatText}>{game.estimatedTime}</span>
                    </div>
                    <div style={styles.gameStatItem}>
                      <span style={styles.gameStatIcon}>⚡</span>
                      <span style={styles.gameStatText}>+{game.points} AP</span>
                    </div>
                  </div>

                  <button
                    style={{ ...styles.startButton, background: game.color }}
                    onClick={() => handleStartTraining(game)}
                    className="start-button"
                  >
                    Start Training
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Challenge Section */}
          <div style={styles.challengeSection}>
            <h2 style={styles.sectionTitle}>
              <span style={{ fontSize: 24, marginRight: 10 }}>🗓️</span>
              Today's Challenge
            </h2>

            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>🎯</div>
              <div style={styles.challengeContent}>
                <h3 style={styles.challengeTitle}>Master of Awareness</h3>
                <p style={styles.challengeDescription}>
                  Complete all three training games with a score of 80% or higher to earn bonus points!
                </p>
                <div style={styles.challengeReward}>
                  <span style={styles.challengeRewardIcon}>💎</span>
                  <span style={styles.challengeRewardText}>Bonus: +500 AP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating SOS Button */}
        <button className="sos-fab" onClick={handleSOS} aria-label="SOS">
          SOS
        </button>
      </div>
      <Footer />

      <style>
        {`
        .game-card:hover, .game-card:focus-within {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.25);
          border-color: #FFD600 !important;
        }
        
        .start-button:hover, .start-button:focus {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
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
        
        @media (max-width: 768px) {
          .sos-fab {
            right: 16px !important;
            bottom: 16px !important;
            width: 48px; 
            height: 48px; 
            font-size: 1em;
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
    position: "relative",
    fontFamily: "Poppins, Segoe UI, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 16px 80px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  headerCard: {
    background: "linear-gradient(90deg,#22264A 70%, #23253C 100%)",
    borderRadius: 24,
    padding: "32px 28px",
    boxShadow: "0 7px 28px rgba(110,120,224,0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 24,
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: "clamp(28px, 5vw, 42px)",
    fontWeight: 800,
    color: "#FFD600",
    margin: 0,
    letterSpacing: "0.5px",
  },
  headerSubtitle: {
    fontSize: "clamp(16px, 2.5vw, 18px)",
    color: "#B8AFFF",
    lineHeight: 1.6,
    maxWidth: "600px",
    margin: 0,
  },
  userStats: {
    display: "flex",
    gap: 32,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#191D2E",
    padding: "12px 20px",
    borderRadius: 16,
    border: "2px solid #7C3AED",
  },
  statIcon: {
    fontSize: 20,
    color: "#FFD600",
  },
  statValue: {
    fontSize: 18,
    fontWeight: 700,
    color: "#FFD600",
  },
  statLabel: {
    fontSize: 14,
    color: "#B8AFFF",
    marginLeft: 4,
  },
  gamesSection: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  sectionTitle: {
    fontSize: "clamp(22px, 4vw, 28px)",
    fontWeight: 700,
    color: "#FFD600",
    display: "flex",
    alignItems: "center",
    margin: 0,
  },
  gamesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 24,
    width: "100%",
  },
  gameCard: {
    background: "linear-gradient(90deg,#272a49E0 80%, #23243cD7 100%)",
    borderRadius: 20,
    padding: "24px",
    border: "2px solid #7C3AED",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
  },
  gameHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  gameIcon: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  gameDifficulty: {
    display: "flex",
  },
  difficultyBadge: {
    padding: "4px 12px",
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 600,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FFD600",
    margin: 0,
  },
  gameDescription: {
    fontSize: 14,
    color: "#B8AFFF",
    lineHeight: 1.5,
    margin: 0,
    flex: 1,
  },
  gameStats: {
    display: "flex",
    gap: 16,
    marginTop: 8,
  },
  gameStatItem: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  gameStatIcon: {
    fontSize: 16,
    color: "#FFD600",
  },
  gameStatText: {
    fontSize: 13,
    color: "#D6DDFF",
    fontWeight: 600,
  },
  startButton: {
    padding: "12px 24px",
    borderRadius: 12,
    border: "none",
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginTop: 8,
  },
  challengeSection: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  challengeCard: {
    background: "linear-gradient(110deg,#232744E0 60%, #202130F2 100%)",
    border: "2px solid #FFD600",
    borderRadius: 20,
    padding: "24px",
    display: "flex",
    alignItems: "center",
    gap: 20,
    boxShadow: "0 4px 16px rgba(255, 214, 0, 0.1)",
  },
  challengeIcon: {
    fontSize: 48,
    minWidth: 60,
    textAlign: "center",
  },
  challengeContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FFD600",
    margin: 0,
  },
  challengeDescription: {
    fontSize: 14,
    color: "#B8AFFF",
    lineHeight: 1.5,
    margin: 0,
  },
  challengeReward: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  challengeRewardIcon: {
    fontSize: 18,
    color: "#FFD600",
  },
  challengeRewardText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#FFD600",
  },
}
