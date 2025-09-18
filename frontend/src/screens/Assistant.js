import React, { useState } from "react";
import chatbotData from '../chatbot.json';
 // move/copy json as needed
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Assistant() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages(m => [...m, { from: "user", text: input }]);
    const found = chatbotData.intents.find(intent =>
      intent.patterns.some(pattern =>
        input.toLowerCase().includes(pattern.toLowerCase())));
    setTimeout(() => {
      setMessages(m => [
        ...m,
        { from: "bot", text: found ? found.responses[0] : "Sorry, I don't know that yet. Try another question!" }
      ]);
    }, 500);
    setInput("");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#1b1e2a" }}>
      <Navbar />
      <div style={{ maxWidth: 420, margin: "48px auto", padding: 18, background: "#22264a55", borderRadius: 22, boxShadow: "0 2px 12px #422e6522" }}>
        <h2 style={{color:"#FFD600",textAlign:"center"}}>StepSafe Assistant</h2>
        <div style={{ height: 300, overflowY: "auto", background: "#161829", borderRadius: 13, padding: 12, color: "#fff", marginBottom: 15 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              textAlign: msg.from === "bot" ? "left" : "right",
              margin: "7px 0"
            }}>
              <b style={{color: msg.from==="bot"?"#FFD600":"#B8AFFF"}}>{msg.from === "bot" ? "StepSafe" : "You"}: </b>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={e => { e.preventDefault(); sendMessage(); }}>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your question..." style={{ width: "75%", fontSize: 18 }} />
          <button type="submit" style={{ fontSize: 18, marginLeft: 7 }}>Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
