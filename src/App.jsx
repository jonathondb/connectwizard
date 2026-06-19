import { useState, useEffect, useRef } from "react";

// ─── CONFIG ─────────────────────────────────────────────────────────────────
const AMAZON_TAG      = "connectwizard-20";   // Replace with your Associates tag
const ADSENSE_CLIENT  = "ca-pub-4387452115275226";
const ADSENSE_SLOT_TOP    = "1234567890";     // Top banner ad slot
const ADSENSE_SLOT_MID    = "0987654321";     // Mid-page ad slot
const ADSENSE_SLOT_BOTTOM = "1122334455";     // Bottom ad slot
const EMAIL_STORAGE_KEY   = "cw_user_email";

// ─── POPULAR DEVICES ────────────────────────────────────────────────────────
const POPULAR_DEVICES = [
  "iPhone","Android Phone","MacBook","Windows Laptop","iPad","Samsung Tablet",
  "Apple TV","Roku","Fire TV Stick","Smart TV","4K TV","Monitor",
  "PS5","Xbox Series X","Nintendo Switch","Steam Deck",
  "AirPods","Bluetooth Headphones","Soundbar","Home Theater Receiver",
  "Projector","Epson Projector","BenQ Projector",
  "Printer","Wireless Printer","Scanner","Webcam",
  "Raspberry Pi","Arduino","External Hard Drive","NAS Drive",
  "Desktop PC","Mac Mini","iMac","Chromebook",
  "Ring Doorbell","Nest Thermostat","Echo Dot","HomePod","Google Home",
  "GoPro","DSLR Camera","Mirrorless Camera",
  "Apple Watch","Samsung Galaxy Watch","Fitbit",
];

// ─── ADSENSE COMPONENT ──────────────────────────────────────────────────────
function AdSlot({ slot, format = "auto", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "8px 0", ...style }}>
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "10px",
        color: "#333",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "4px",
      }}>Advertisement</div>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// ─── AMAZON BUTTON ──────────────────────────────────────────────────────────
function AmazonButton({ query, label }) {
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: "7px",
      background: "linear-gradient(135deg,#FF9900,#FFB347)",
      color: "#000", fontFamily: "'Syne',sans-serif", fontWeight: "700",
      fontSize: "12px", padding: "9px 16px", borderRadius: "8px",
      textDecoration: "none", letterSpacing: "0.02em",
      boxShadow: "0 2px 12px rgba(255,153,0,.3)",
      transition: "transform .15s, box-shadow .15s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(255,153,0,.5)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 12px rgba(255,153,0,.3)";}}
    >
      🛒 {label}
    </a>
  );
}

// ─── DEVICE COMBO BOX ───────────────────────────────────────────────────────
function DeviceComboBox({ value, onChange, placeholder, excludeValue }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = POPULAR_DEVICES
    .filter(d => d !== excludeValue)
    .filter(d => d.toLowerCase().includes((search || value).toLowerCase()))
    .slice(0, 12);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        value={search || value}
        onChange={e => { setSearch(e.target.value); onChange(e.target.value); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 160)}
        placeholder={placeholder}
        style={{
          width: "100%", background: "#F0F3F8",
          border: "1.5px solid rgba(26,35,50,.15)", borderRadius: "12px",
          padding: "15px 18px", color: "#1A2332", fontFamily: "'Syne',sans-serif",
          fontSize: "15px", outline: "none", boxSizing: "border-box",
          transition: "border-color .2s",
        }}
        onFocus={e => { e.target.style.borderColor="#2563EB"; setOpen(true); }}
        onBlur={e => { e.target.style.borderColor="rgba(255,255,255,.15)"; }}
      />
      {open && filtered.length > 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
          background: "#FFFFFF", border: "1.5px solid rgba(124,58,237,.35)",
          borderRadius: "12px", maxHeight: "200px", overflowY: "auto", zIndex: 200,
          boxShadow: "0 12px 40px rgba(0,0,0,.6)",
        }}>
          {filtered.map(d => (
            <div key={d}
              onMouseDown={() => { onChange(d); setSearch(""); setOpen(false); }}
              style={{ padding: "11px 18px", cursor: "pointer", color: "#4A5568",
                fontFamily: "'Syne',sans-serif", fontSize: "14px",
                transition: "background .1s, color .1s" }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,212,255,.1)";e.currentTarget.style.color="#fff";}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#bbb";}}
            >{d}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── EMAIL GATE MODAL ────────────────────────────────────────────────────────
function EmailModal({ onSuccess }) {
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = name.trim().length > 1 && isValidEmail;

  const inputStyle = (hasError) => ({
    width: "100%", background: "#F0F3F8",
    border: `1.5px solid ${hasError ? "#ff6b6b" : "rgba(255,255,255,.15)"}`,
    borderRadius: "12px", padding: "15px 18px",
    color: "#1A2332", fontFamily: "'Syne',sans-serif", fontSize: "15px",
    outline: "none", boxSizing: "border-box",
  });

  const handleSubmit = async () => {
    if (!name.trim()) { setError("Please enter your first name."); return; }
    if (!isValidEmail) { setError("Please enter a valid email address."); return; }
    setLoading(true);
    setError("");

    try {
      // Send to Google Sheets via serverless function
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
    } catch {
      // Non-blocking — still unlock guide even if sheet write fails
      console.warn("Lead capture failed silently");
    }

    // Store locally so returning users skip the gate
    localStorage.setItem(EMAIL_STORAGE_KEY, email.trim());
    localStorage.setItem("cw_user_name", name.trim());
    setLoading(false);
    onSuccess(name.trim(), email.trim());
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 999,
      background: "rgba(20,30,48,.45)",
      backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: "#FFFFFF",
        border: "1px solid rgba(124,58,237,.35)",
        borderRadius: "24px", padding: "40px 36px",
        maxWidth: "440px", width: "100%",
        animation: "fadeUp .35s ease",
        boxShadow: "0 24px 80px rgba(0,0,0,.7)",
      }}>
        {/* Icon */}
        <div style={{
          width: "56px", height: "56px", borderRadius: "16px",
          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "24px",
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>

        <h2 style={{
          fontFamily: "'Syne',sans-serif", fontWeight: "800", fontSize: "24px",
          color: "#1A2332", marginBottom: "10px", lineHeight: 1.2,
        }}>
          Get Your Free Connection Guide
        </h2>
        <p style={{
          fontFamily: "'Space Grotesk',sans-serif", fontSize: "14px",
          color: "#666", marginBottom: "28px", lineHeight: 1.6,
        }}>
          Enter your details for instant access to step-by-step instructions and the exact parts you need.
        </p>

        {/* Name input */}
        <label style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px",
          color: "#64748B", letterSpacing: ".1em", textTransform: "uppercase",
          display: "block", marginBottom: "8px" }}>First Name</label>
        <input
          type="text"
          value={name}
          onChange={e => { setName(e.target.value); setError(""); }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
          placeholder="John"
          autoFocus
          style={{ ...inputStyle(error && !name.trim()), marginBottom: "14px" }}
          onFocus={e => e.target.style.borderColor="#2563EB"}
          onBlur={e => e.target.style.borderColor="rgba(255,255,255,.15)"}
        />

        {/* Email input */}
        <label style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px",
          color: "#64748B", letterSpacing: ".1em", textTransform: "uppercase",
          display: "block", marginBottom: "8px" }}>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(""); }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
          placeholder="you@email.com"
          style={{ ...inputStyle(error && !isValidEmail), marginBottom: "8px" }}
          onFocus={e => e.target.style.borderColor="#2563EB"}
          onBlur={e => e.target.style.borderColor="rgba(255,255,255,.15)"}
        />

        {error && (
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "12px",
            color: "#ff6b6b", marginBottom: "10px" }}>{error}</p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%", background: "linear-gradient(135deg,#2563EB,#7C3AED)",
            border: "none", borderRadius: "12px", color: "#fff",
            fontFamily: "'Syne',sans-serif", fontWeight: "800", fontSize: "15px",
            padding: "16px", cursor: loading ? "not-allowed" : "pointer",
            marginTop: "8px", letterSpacing: "0.04em",
            opacity: loading ? .7 : 1, transition: "opacity .2s, transform .15s",
            boxShadow: "0 4px 24px rgba(124,58,237,.35)",
          }}
          onMouseEnter={e=>{ if(!loading) e.currentTarget.style.transform="translateY(-1px)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; }}
        >
          {loading ? "Saving…" : "Unlock My Guide →"}
        </button>

        <p style={{
          fontFamily: "'Space Grotesk',sans-serif", fontSize: "11px",
          color: "#94A3B8", textAlign: "center", marginTop: "16px", lineHeight: 1.5,
        }}>
          🔒 No spam, ever. Unsubscribe anytime.<br/>
          By continuing you agree to our Privacy Policy.
        </p>
      </div>
    </div>
  );
}

// ─── CONNECTION RESULT ───────────────────────────────────────────────────────
function ConnectionResult({ result }) {
  if (!result) return null;
  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid rgba(0,212,255,.2)",
      borderRadius: "20px", padding: "32px", marginTop: "32px",
      animation: "fadeUp .4s ease",
    }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(0,212,255,.1)", border: "1px solid rgba(124,58,237,.35)",
          borderRadius: "100px", padding: "6px 16px", marginBottom: "14px",
        }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%",
            background: "#2563EB", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px",
            color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Connection Guide
          </span>
        </div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "20px",
          fontWeight: "800", color: "#1A2332", margin: 0 }}>
          {result.deviceA} ↔ {result.deviceB}
        </h2>
      </div>

      {result.methods?.map((method, i) => (
        <div key={i} style={{
          background: "#FFFFFF",
          border: "1px solid rgba(26,35,50,.10)",
          borderRadius: "16px", padding: "22px", marginBottom: "14px",
        }}>
          {/* Method header */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{
              background: method.type === "wireless"
                ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                : "linear-gradient(135deg,#FF6B35,#FFB347)",
              borderRadius: "10px", padding: "8px",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {method.type === "wireless"
                ? <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                : <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M7 5h10v2l3-3-3-3v2H5v6h2V5zm10 14H7v-2l-3 3 3 3v-2h12v-6h-2v4z"/></svg>
              }
            </div>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700",
                color: "#1A2332", fontSize: "15px" }}>{method.name}</div>
              <div style={{ fontSize: "11px", textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: method.type === "wireless" ? "#7C3AED" : "#FF6B35" }}>
                {method.type === "wireless" ? "⚡ Wireless" : "🔌 Wired"}
              </div>
            </div>
          </div>

          {/* Steps */}
          {method.steps?.map((step, si) => (
            <div key={si} style={{ display: "flex", gap: "12px",
              marginBottom: "10px", alignItems: "flex-start" }}>
              <div style={{
                background: "rgba(0,212,255,.15)", color: "#2563EB",
                borderRadius: "8px", width: "26px", height: "26px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Syne',sans-serif", fontWeight: "800",
                fontSize: "12px", flexShrink: 0, marginTop: "2px",
              }}>{si + 1}</div>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "14px", color: "#4A5568", margin: 0, lineHeight: 1.6 }}>{step}</p>
            </div>
          ))}

          {/* Parts */}
          {method.parts?.length > 0 && (
            <div style={{
              background: "rgba(255,153,0,.06)",
              border: "1px solid rgba(255,153,0,.2)",
              borderRadius: "12px", padding: "14px", marginTop: "14px",
            }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px",
                color: "#FFB347", letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "10px" }}>
                🛒 Parts You May Need
              </div>
              {method.parts.map((part, pi) => (
                <div key={pi} style={{ display: "flex", alignItems: "center",
                  justifyContent: "space-between", flexWrap: "wrap",
                  gap: "8px", marginBottom: pi < method.parts.length - 1 ? "10px" : "0" }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: "14px", color: "#475569" }}>{part.name}</span>
                  <AmazonButton query={part.searchQuery} label={part.name} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Tips */}
      {result.tips?.length > 0 && (
        <div style={{
          background: "rgba(123,47,255,.08)",
          border: "1px solid rgba(123,47,255,.25)",
          borderRadius: "12px", padding: "16px 18px",
        }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px",
            color: "#A78BFA", letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: "10px" }}>
            💡 Pro Tips
          </div>
          {result.tips.map((tip, i) => (
            <p key={i} style={{ fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "13px", color: "#64748B",
              margin: i < result.tips.length - 1 ? "0 0 6px" : "0",
              lineHeight: 1.5 }}>• {tip}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── REQUEST A GUIDE PROMPT ──────────────────────────────────────────────────
function RequestGuide({ deviceA, deviceB }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async () => {
    setSending(true);
    try {
      await fetch("/api/log-demand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "request", deviceA, deviceB, email: email.trim() }),
      });
      setSent(true);
    } catch {
      setSent(true); // treat as done either way — non-critical
    }
    setSending(false);
  };

  if (sent) {
    return (
      <div style={{ background: "rgba(0,212,255,.06)", border: "1px solid rgba(0,212,255,.25)",
        borderRadius: "14px", padding: "20px", marginTop: "20px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700", color: "#2563EB", fontSize: "15px" }}>
          ✓ Thanks! We've logged your request.
        </p>
        <p style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#64748B", fontSize: "13px", marginTop: "6px" }}>
          Popular requests get turned into full step-by-step guides.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: "#FFFFFF", border: "1px solid rgba(26,35,50,.10)",
      borderRadius: "14px", padding: "22px", marginTop: "20px" }}>
      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700", color: "#1A2332", fontSize: "15px", marginBottom: "6px" }}>
        Want this as a permanent, detailed guide?
      </p>
      <p style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#64748B", fontSize: "13px", marginBottom: "14px" }}>
        Request a full {deviceA} → {deviceB} guide. Add your email and we'll notify you when it's live (optional).
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com (optional)"
          style={{ flex: "1 1 200px", background: "#F0F3F8",
            border: "1.5px solid rgba(26,35,50,.15)", borderRadius: "10px",
            padding: "12px 16px", color: "#1A2332", fontFamily: "'Syne',sans-serif", fontSize: "14px", outline: "none" }}
        />
        <button
          onClick={submit}
          disabled={sending}
          style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", border: "none",
            borderRadius: "10px", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: "800",
            fontSize: "14px", padding: "12px 22px", cursor: sending ? "default" : "pointer",
            opacity: sending ? 0.6 : 1, whiteSpace: "nowrap" }}>
          {sending ? "Sending…" : "Request Guide"}
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [deviceA, setDeviceA]         = useState("");
  const [deviceB, setDeviceB]         = useState("");
  const [loading, setLoading]         = useState(false);
  const [result, setResult]           = useState(null);
  const [error, setError]             = useState(null);
  const [showModal, setShowModal]     = useState(false);
  const [userEmail, setUserEmail]     = useState(null);
  const [pendingSearch, setPendingSearch] = useState(false);

  const [userName, setUserName] = useState(null);

  // Check for returning authenticated user
  useEffect(() => {
    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
    const storedName  = localStorage.getItem("cw_user_name");
    if (storedEmail) setUserEmail(storedEmail);
    if (storedName)  setUserName(storedName);
  }, []);

  // Load AdSense script once
  useEffect(() => {
    if (document.querySelector('script[src*="adsbygoogle"]')) return;
    const s = document.createElement("script");
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    s.async = true; s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }, []);

  const runSearch = async () => {
    if (!deviceA.trim() || !deviceB.trim()) return;
    setLoading(true); setResult(null); setError(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceA, deviceB }),
      });
      const parsed = await res.json();
      if (parsed.error) throw new Error(parsed.error);
      setResult(parsed);
      // Silently log this combo as a demand signal (fire-and-forget)
      fetch("/api/log-demand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "search", deviceA, deviceB }),
      }).catch(() => {});
    } catch {
      setError("Something went wrong generating the guide. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = () => {
    if (!deviceA.trim() || !deviceB.trim()) return;
    if (userEmail) {
      runSearch();           // Already authenticated — go straight to results
    } else {
      setPendingSearch(true);
      setShowModal(true);    // Gate first-time users
    }
  };

  const handleEmailSuccess = (name, email) => {
    setUserEmail(email);
    setUserName(name);
    setShowModal(false);
    if (pendingSearch) { setPendingSearch(false); runSearch(); }
  };

  const canGenerate = deviceA.trim().length > 1 && deviceB.trim().length > 1 && !loading;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#F7F9FC;min-height:100vh;font-family:'Space Grotesk',sans-serif;}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-track{background:#F7F9FC;}
        ::-webkit-scrollbar-thumb{background:rgba(124,58,237,.35);border-radius:3px;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .grid-bg{
          position:fixed;inset:0;pointer-events:none;
          background-image:linear-gradient(rgba(37,99,235,.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(37,99,235,.04) 1px,transparent 1px);
          background-size:42px 42px;
        }
        .orb1{position:fixed;top:-180px;right:-80px;width:560px;height:560px;
          background:radial-gradient(circle,rgba(124,58,237,.10) 0%,transparent 70%);pointer-events:none;}
        .orb2{position:fixed;bottom:-180px;left:-80px;width:480px;height:480px;
          background:radial-gradient(circle,rgba(37,99,235,.08) 0%,transparent 70%);pointer-events:none;}
        .gen-btn{
          background:linear-gradient(135deg,#2563EB,#7C3AED);border:none;border-radius:12px;
          color:#fff;font-family:'Syne',sans-serif;font-weight:800;font-size:15px;
          padding:15px 32px;cursor:pointer;letter-spacing:.04em;
          box-shadow:0 4px 24px rgba(124,58,237,.35);transition:transform .2s,box-shadow .2s,opacity .2s;
          white-space:nowrap;
        }
        .gen-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,212,255,.45);}
        .gen-btn:disabled{opacity:.4;cursor:not-allowed;}
        .chip{
          background:#FFFFFF;border:1px solid rgba(26,35,50,.12);
          border-radius:100px;padding:7px 15px;color:#777;
          font-family:'Space Grotesk',sans-serif;font-size:12px;cursor:pointer;
          transition:all .2s;
        }
        .chip:hover{background:rgba(0,212,255,.08);border-color:rgba(124,58,237,.35);color:#2563EB;}
      `}</style>

      {/* Background */}
      <div className="grid-bg" /><div className="orb1" /><div className="orb2" />

      {/* Email gate modal */}
      {showModal && <EmailModal onSuccess={handleEmailSuccess} />}

      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", padding: "0 20px 80px" }}>

        {/* ── NAV ── */}
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 0", maxWidth: "880px", margin: "0 auto",
          borderBottom: "1px solid rgba(26,35,50,.08)", marginBottom: "60px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="ConnectWizard logo" width="40" height="40"
              style={{ borderRadius: "50%", display: "block" }} />
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: "800",
              fontSize: "18px", color: "#1A2332", letterSpacing: "-.02em" }}>
              Connect<span style={{ color: "#2563EB" }}>Wizard</span>
            </span>
          </div>
          {userEmail && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%",
                background: "#2563EB", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "12px", color: "#64748B" }}>
                {userName ? `Hey, ${userName} 👋` : userEmail}
              </span>
            </div>
          )}
        </nav>

        {/* ── TOP AD BANNER ── */}
        <div style={{ maxWidth: "880px", margin: "0 auto 40px" }}>
          <AdSlot slot={ADSENSE_SLOT_TOP} format="horizontal" />
        </div>

        {/* ── HERO ── */}
        <div style={{ textAlign: "center", maxWidth: "680px",
          margin: "0 auto 56px", animation: "fadeUp .6s ease" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(0,212,255,.08)", border: "1px solid rgba(0,212,255,.2)",
            borderRadius: "100px", padding: "5px 15px", marginBottom: "26px",
          }}>
            <span style={{ fontSize: "13px" }}>⚡</span>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px",
              color: "#2563EB", letterSpacing: ".1em", textTransform: "uppercase" }}>
              AI-Powered Device Guide
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(38px,7vw,68px)", fontWeight: "800",
            color: "#1A2332", lineHeight: 1.06, letterSpacing: "-.03em", marginBottom: "18px",
          }}>
            Connect Any<br />
            <span style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Two Devices
            </span>
          </h1>

          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "17px",
            color: "#64748B", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto" }}>
            Pick two devices. Get step-by-step instructions for every connection method — wired and wireless — plus the exact parts you need.
          </p>
        </div>

        {/* ── SEARCH BOX ── */}
        <div style={{
          maxWidth: "880px", margin: "0 auto",
          background: "#FFFFFF",
          border: "1px solid rgba(26,35,50,.10)",
          borderRadius: "24px", padding: "30px",
          backdropFilter: "blur(10px)", animation: "fadeUp .7s ease",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto 1fr",
            gap: "14px", alignItems: "center", marginBottom: "22px",
          }}>
            <div>
              <label style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px",
                color: "#64748B", letterSpacing: ".1em", textTransform: "uppercase",
                display: "block", marginBottom: "9px" }}>Device One</label>
              <DeviceComboBox value={deviceA} onChange={setDeviceA}
                placeholder="e.g. MacBook, iPhone, PS5…" excludeValue={deviceB} />
            </div>

            <div style={{ display: "flex", alignItems: "center",
              justifyContent: "center", marginTop: "19px" }}>
              <div style={{
                width: "40px", height: "40px",
                background: "rgba(0,212,255,.1)", border: "1px solid rgba(124,58,237,.35)",
                borderRadius: "50%", display: "flex", alignItems: "center",
                justifyContent: "center", color: "#2563EB", fontSize: "17px",
                fontWeight: "700", flexShrink: 0,
              }}>↔</div>
            </div>

            <div>
              <label style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px",
                color: "#64748B", letterSpacing: ".1em", textTransform: "uppercase",
                display: "block", marginBottom: "9px" }}>Device Two</label>
              <DeviceComboBox value={deviceB} onChange={setDeviceB}
                placeholder="e.g. Smart TV, Projector…" excludeValue={deviceA} />
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="gen-btn" onClick={handleGenerate} disabled={!canGenerate}>
              {loading
                ? <span style={{ display: "flex", alignItems: "center",
                    gap: "9px", justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Generating Guide…
                  </span>
                : "Generate Connection Guide →"
              }
            </button>
          </div>
        </div>

        {/* ── ERROR ── */}
        {error && (
          <div style={{ maxWidth: "880px", margin: "18px auto 0",
            background: "rgba(255,50,50,.08)", border: "1px solid rgba(255,50,50,.2)",
            borderRadius: "12px", padding: "14px 18px",
            color: "#ff6b6b", fontFamily: "'Space Grotesk',sans-serif", fontSize: "14px" }}>
            {error}
          </div>
        )}

        {/* ── RESULT + MID AD ── */}
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <ConnectionResult result={result} />

          {result && (
            <>
              <RequestGuide deviceA={result.deviceA} deviceB={result.deviceB} />
              <div style={{ marginTop: "32px" }}>
                <AdSlot slot={ADSENSE_SLOT_MID} format="rectangle" />
              </div>
            </>
          )}
        </div>

        {/* ── POPULAR CHIPS ── */}
        {!result && !loading && (
          <div style={{ maxWidth: "880px", margin: "44px auto 0",
            animation: "fadeUp .9s ease" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px",
              color: "#383838", letterSpacing: ".1em", textTransform: "uppercase",
              marginBottom: "14px", textAlign: "center" }}>Popular Searches</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "9px",
              justifyContent: "center" }}>
              {[
                ["MacBook","4K Monitor"],["iPhone","Smart TV"],
                ["PS5","Soundbar"],["Laptop","Projector"],
                ["iPad","Keyboard"],["Android Phone","Windows Laptop"],
                ["Nintendo Switch","TV"],["GoPro","MacBook"],
              ].map(([a,b]) => (
                <button key={`${a}-${b}`} className="chip"
                  onClick={() => { setDeviceA(a); setDeviceB(b); }}>
                  {a} → {b}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── BOTTOM AD ── */}
        <div style={{ maxWidth: "880px", margin: "56px auto 0" }}>
          <AdSlot slot={ADSENSE_SLOT_BOTTOM} format="auto" />
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          maxWidth: "880px", margin: "48px auto 0", textAlign: "center",
          borderTop: "1px solid rgba(26,35,50,.08)", paddingTop: "28px",
        }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "11px",
            color: "#2e2e2e", lineHeight: 1.7 }}>
            ConnectWizard.tech · As an Amazon Associate we earn from qualifying purchases.<br/>
            <span style={{ color: "#252525" }}>© 2026 ConnectWizard · Privacy Policy · Terms</span>
          </p>
        </div>
      </div>
    </>
  );
}
