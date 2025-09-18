import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ALL_SCENARIOS = [
  
  {
    title: "Medical Emergency in Public",
    color: "#22294E",
    points: [
      "Call the emergency medical number (e.g., 112) immediately.",
      "Attract attention by calling for help from staff/guards.",
      "Stay calm and explain what happened clearly.",
      "Don't accept help from strangers if you're uncomfortable.",
      "Alert a trusted contact if possible."
    ]
  },
  {
    title: "Lost in an Unknown Area",
    color: "#232946",
    points: [
      "Stay in a busy, well-lit place and avoid wandering alone.",
      "Use your phone’s map for directions or ask uniformed staff.",
      "Don’t share your location/personal info with strangers.",
      "Contact someone you trust.",
      "Ask a female staffer or security for help."
    ]
  },
  {
    title: "Stranded Late at Night",
    color: "#23253C",
    points: [
      "Wait in a public spot with security nearby.",
      "Call for a safe pickup or trusted cab.",
      "Don’t accept rides from strangers.",
      "Use an SOS/emergency app if needed.",
      "Update a friend or family on your location."
    ]
  },
  {
    title: "Being Followed/Stalked",
    color: "#23253C",
    points: [
      "Change direction; enter a shop or well-lit area.",
      "Seek assistance from staff or nearby people.",
      "Call someone and share what’s happening.",
      "If threatened, create a commotion for help.",
      "Report to police if you feel endangered."
    ]
  },
  {
    title: "Physical Assault or Attempted Assault",
    color: "#202235",
    points: [
      "Shout to attract attention.",
      "Defend yourself: target eyes, throat, knees.",
      "Use safety alarms or sprays if you have them.",
      "Find a safe space and call the police.",
      "Reach out to support services or someone you trust."
    ]
  },
  {
    title: "Harassment in Cabs/Rideshares",
    color: "#232946",
    points: [
      "Ask the driver to stop at a safe, public spot.",
      "Share ride and location with a trusted contact.",
      "Pretend to call someone, or contact authorities if needed.",
      "Report the driver on the app when you’re safe.",
      "If in danger, alert staff nearby."
    ]
  },
  {
    title: "Suspicion of Spiked Drink",
    color: "#22294E",
    points: [
      "Stop drinking and inform someone you trust.",
      "Ask staff for assistance immediately.",
      "Don't leave alone or with someone you don’t know.",
      "Seek help if unwell or dizzy.",
      "Get medical attention if symptoms worsen."
    ]
  },
  {
    title: "Street Robbery or Snatching",
    color: "#232946",
    points: [
      "Don’t risk injury—your belongings can be replaced.",
      "Shout and get attention from people around.",
      "Note attacker details if possible.",
      "Report to the police as soon as you’re safe.",
      "Block cards and sensitive apps immediately."
    ]
  },
  {
    title: "Unwanted Physical Contact",
    color: "#22294E",
    points: [
      "Move away and speak up if you feel comfortable.",
      "Seek help from staff/security/others around.",
      "Report it to police, organizer, or HR if needed.",
      "Record details as soon as you’re able.",
      "Turn to support groups for advice and comfort."
    ]
  },
  {
    title: "Domestic Violence/Emergency at Home",
    color: "#202235",
    points: [
      "Find a room with an exit route if you’re at risk.",
      "Contact a trusted person or helpline immediately.",
      "Gather documents/essentials if you can do so safely.",
      "Don’t hesitate to leave if you feel threatened.",
      "Reach out to relevant organizations for support."
    ]
  },
  // --- The original 8 physical/mental scenarios ---
  {
    title: "Walking Alone at Night",
    color: "#232946",
    points: [
      "Use busy, well-lit streets and avoid shortcuts.",
      "Share your live location if possible.",
      "Keep keys and phone accessible.",
      "Remove headphones or lower music volume.",
      "Change your route if you sense danger."
    ]
  },
  {
    title: "Using Public Transport",
    color: "#22294E",
    points: [
      "Wait in visible areas, especially at night.",
      "Sit close to the driver or other women, if possible.",
      "Don’t board empty buses/trains late at night.",
      "Trust your instincts about seatmates.",
      "Report harassment to staff or police."
    ]
  },
  {
    title: "Cabs/Rideshares",
    color: "#232946",
    points: [
      "Check the ride details before entering.",
      "Share trip info with a friend/family.",
      "Ride in the back seat.",
      "Don’t share personal info with the driver.",
      "Ask for your preferred route."
    ]
  },
  {
    title: "At Social Gatherings/Events",
    color: "#23253C",
    points: [
      "Watch your drink; never leave it unattended.",
      "Plan an exit strategy with someone you trust.",
      "Keep emergency contacts ready.",
      "Say no or leave if uncomfortable—your safety comes first.",
      "Ask staff/security for help if needed."
    ]
  },
  {
    title: "In Crowded Places (Markets/Festivals)",
    color: "#202235",
    points: [
      "Keep your bag zipped and close.",
      "Stay alert against unsolicited contact.",
      "Move to a busier area if harassed.",
      "Know exits and emergency points.",
      "Avoid isolated areas."
    ]
  },
  {
    title: "Online Harassment/Cyberbullying",
    color: "#22294E",
    points: [
      "Block/report the perpetrator immediately.",
      "Save screenshots of abusive content.",
      "Use privacy settings to limit contact.",
      "If threats are severe, inform police.",
      "Don’t hesitate to log off to protect your wellbeing."
    ]
  },
  {
    title: "Feeling Pressured or Gaslighted",
    color: "#232946",
    points: [
      "Trust your feelings and instincts.",
      "Share your concerns with a supportive friend.",
      "Set and communicate clear boundaries.",
      "Remember, it’s not your fault.",
      "Seek counseling/support if needed."
    ]
  },
  {
    title: "Facing Discrimination at Home/Work",
    color: "#202235",
    points: [
      "Document every incident with date/time.",
      "Inform a respected manager, HR, or mentor.",
      "Connect with community support or helplines.",
      "Practice self-care and positive self-talk.",
      "Seek professional advice if needed."
    ]
  }
];

// Accordion/dropdown card
function DropdownCard({ title, color, points }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`dropdown-scenario-card${open ? " open" : ""}`}
      style={{
        background: `linear-gradient(120deg, #212A42bb 70%, ${color} 100%)`,
        border: `2.8px solid #2e4ba7`,
        minWidth: 300,
        maxWidth: 420,
        flex: "1 1 370px",
        borderRadius: 32,
        marginBottom: 22,
        color: "#e2eaff",
        boxShadow: `0 6px 22px #21338827`,
        fontSize: "12px",
        padding: "24px 26px 17px 26px",
        transition: "box-shadow .23s, transform .14s, border-color .15s, background .13s"
      }}
      tabIndex={0}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpen(o => !o); }}
    >
      <div style={{
        display: "flex", alignItems: "center", cursor: "pointer", userSelect: "none", minHeight: 52
      }}>
        <h3 style={{
          color: "#7BB3FF",
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: "0.7px",
          margin: "0 0 0 0",
          flex: 1,
          textAlign: "left"
        }}>{title}</h3>
        <span style={{
          fontSize: 26, fontWeight: 600, marginLeft: 13,
          color: open ? "#FFD600" : "#85B6FF", transition: ".15s"
        }}>
          {open ? "▲" : "▼"}
        </span>
      </div>
      {open &&
        <ul style={{
          paddingLeft: 22,
          marginBottom: 0,
          marginTop: 11,
          fontSize: 15,
          lineHeight: 1.64,
          color: "#fff9ec"
        }}>
          {points.map((tip, i) => <li key={i} style={{marginBottom: 4}}>{tip}</li>)}
        </ul>
      }
    </div>
  );
}

export default function PersonalSafetyPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1B2336 55%, #364265 100%)"
    }}>
      <Navbar />
      <main style={{
        maxWidth: 1240,
        margin: "48px auto 0 auto",
        padding: "38px 22px 56px 22px",
        borderRadius: 36,
        background: "linear-gradient(108deg, #22305A 66%, #172340 100%)",
        boxShadow: "0 7px 46px rgba(44,70,176,0.065)",
        color: "#DEE8FF"
      }}>
        <button
          onClick={() => navigate("/learn")}
          style={{
            display: "block",
            margin: "0 auto 34px auto",
            background: "#27468E",
            color: "#e6eFFF",
            fontWeight: 600,
            border: "none",
            borderRadius: 21,
            boxShadow: "0 2px 12px #23294617",
            padding: "13px 38px",
            fontSize: 17.3,
            opacity: 0.97,
            cursor: "pointer",
            zIndex: 1,
            letterSpacing: "0.03em"
          }}
        >← Back to Learn</button>
        <h1 style={{
          color: "#7BB3FF",
          fontSize: "clamp(27px,6vw,46px)",
          fontWeight: 900,
          letterSpacing: "1.7px",
          textAlign: "center",
          marginBottom: 18,
          textShadow: "0 2px 16px #0c163133"
        }}>Personal Safety Scenarios & Tips</h1>
        <div style={{
          color: "#B8D2FF",
          fontSize: 18,
          textAlign: "center",
          fontWeight: 600,
          marginBottom: 34,
          lineHeight: 1.44
        }}>
          Practical scenarios and tips for your daily peace of mind and quick reference.
        </div>
        <section>
          <div style={{
            display: "flex", flexWrap: "wrap",
            gap: "32px 34px", justifyContent: "center"
          }}>
            {ALL_SCENARIOS.map((sc, idx) =>
              <DropdownCard key={sc.title + "-" + idx} {...sc} />
            )}
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 780px) {
          main {
            padding: 9vw 5vw 16vw 5vw !important;
            max-width: 100vw !important;
          }
          .dropdown-scenario-card {
            min-width: 93vw !important;
            max-width: 99vw !important;
            border-radius: 7vw !important;
            padding: 18px 4vw 16px 4vw !important;
          }
        }
        .dropdown-scenario-card {
          transition: box-shadow 0.2s, transform 0.15s, border-color 0.13s, background 0.13s;
        }
        .dropdown-scenario-card:hover, .dropdown-scenario-card:focus-within {
          box-shadow: 0 11px 38px #55A8F966, 0 2.5px 18px #1B233630;
          transform: translateY(-7px) scale(1.035);
          border-color: #3A85FF !important;
          cursor: pointer;
          background: linear-gradient(110deg, #293a66 60%, #3a85ff45 100%) !important;
          filter: brightness(1.07);
        }
        .dropdown-scenario-card ul {
          margin-top: 10px;
          animation: fadeInAccordion .18s;
        }
        @keyframes fadeInAccordion {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
