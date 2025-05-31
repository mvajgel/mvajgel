import React from "react";

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <button
        className={`lang-btn${lang === "en" ? " active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <span style={{ color: "#b0b4c1" }}>/</span>
      <button
        className={`lang-btn${lang === "sk" ? " active" : ""}`}
        aria-pressed={lang === "sk"}
        onClick={() => setLang("sk")}
      >
        SK
      </button>
      <style jsx>{`
        .lang-btn {
          background: none;
          border: none;
          color: #b0b4c1;
          font-size: 1em;
          font-weight: 700;
          cursor: pointer;
          padding: 2px 8px;
          border-radius: 6px;
          outline: none;
          transition: color 0.2s, background 0.2s;
        }
        .lang-btn.active,
        .lang-btn:hover {
          color: var(--blue);
          background: #23263a55;
        }
      `}</style>
    </div>
  );
}