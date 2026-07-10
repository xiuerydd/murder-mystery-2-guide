"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        width: "calc(100% - 32px)",
        maxWidth: 800,
      }}
    >
      <div className="sec" style={{ margin: 0, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
        <p style={{ margin: 0, flex: "1 1 300px", fontSize: 14 }}>
          We use cookies and similar technologies to enhance your experience and serve ads.
          By continuing to use this site, you agree to our{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>
        <button
          onClick={() => {
            localStorage.setItem("cookies-accepted", "true");
            setVisible(false);
          }}
          style={{
            background: "var(--red)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
