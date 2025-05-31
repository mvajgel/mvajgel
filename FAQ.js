import { useState } from "react";

const faqData = {
  en: [
    {
      q: "How fast can you deploy a chatbot or workflow for us?",
      a: "Most projects go live in 1–3 weeks, depending on your needs and integrations.",
    },
    {
      q: "Which languages do you support?",
      a: "English and Slovak are always included. More languages are available on request.",
    },
    {
      q: "Can we manage content and knowledge base ourselves?",
      a: "Yes! Syntea offers no-code tools for easy content and knowledge management.",
    },
    {
      q: "Is Syntea GDPR compliant?",
      a: "Absolutely. We follow best practices for privacy and security.",
    },
  ],
  sk: [
    {
      q: "Ako rýchlo nasadíte chatbot alebo workflow?",
      a: "Väčšina projektov je nasadená za 1–3 týždne podľa požiadaviek a integrácií.",
    },
    {
      q: "Ktoré jazyky podporujete?",
      a: "Angličtinu a slovenčinu vždy. Ďalšie jazyky na požiadanie.",
    },
    {
      q: "Môžeme si spravovať obsah a znalostnú databázu sami?",
      a: "Áno! Syntea má no-code nástroje na jednoduchú správu obsahu aj znalostí.",
    },
    {
      q: "Je Syntea v súlade s GDPR?",
      a: "Áno, dodržiavame najlepšie štandardy ochrany súkromia a bezpečnosti.",
    },
  ],
};

export default function FAQ({ title, lang }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>{title}</h2>
        <div className="faq-list">
          {faqData[lang].map((item, i) => (
            <div
              className={`faq-item${openIdx === i ? " open" : ""}`}
              key={i}
              tabIndex={0}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpenIdx(openIdx === i ? null : i);
                }
              }}
              aria-expanded={openIdx === i}
              aria-controls={`faq-panel-${i}`}
            >
              <div className="faq-question">{item.q}</div>
              {openIdx === i && (
                <div className="faq-answer" id={`faq-panel-${i}`}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq { padding: 3.2rem 0 2.7rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.1rem;
        }
        .faq-list { max-width: 750px; margin: 0 auto; }
        .faq-item {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          margin-bottom: 1.1em;
          box-shadow: var(--shadow);
          transition: background 0.19s;
          overflow: hidden;
          cursor: pointer;
        }
        .faq-question {
          padding: 1.1em 1.4em;
          font-weight: 600;
          color: var(--blue);
          font-size: 1.08em;
          transition: color 0.18s;
          outline: none;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          position: relative;
        }
        .faq-question:after {
          content: '+';
          color: var(--violet);
          font-size: 1.2em;
          position: absolute;
          right: 1.2em;
          top: 1em;
          transition: transform 0.22s;
        }
        .faq-item.open .faq-question:after {
          content: '–';
          transform: rotate(180deg);
        }
        .faq-question:hover, .faq-question:focus {
          color: var(--violet);
        }
        .faq-answer {
          padding: 0 1.4em 1em 1.4em;
          color: var(--text-muted);
          font-size: 1em;
          animation: fadeIn 0.28s;
          display: block;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}