const whyList = {
  en: [
    "Enterprise-grade security & privacy.",
    "Full support in English & Slovak.",
    "Integration with your systems in days.",
    "No-code management for your team.",
    "Custom AI and consulting included.",
    "Fast, responsive, and scalable.",
  ],
  sk: [
    "Bezpečnosť & súkromie na úrovni enterprise.",
    "Plná podpora v slovenčine aj angličtine.",
    "Napojenie na vaše systémy do pár dní.",
    "No-code správa pre váš tím.",
    "Custom AI a konzultácie v cene.",
    "Rýchlosť, spoľahlivosť, škálovanie.",
  ],
};

export default function WhySyntea({ title, lang }) {
  return (
    <section id="why" className="why-syntea">
      <div className="container">
        <h2>{title}</h2>
        <ul className="why-list">
          {whyList[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .why-syntea { padding: 3.3rem 0 3rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.1rem;
        }
        .why-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .why-list li {
          background: var(--bg-light);
          padding: 1.2em 2.1em;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          font-size: 1.08em;
          min-width: 210px;
          margin: 0;
          transition: background 0.22s, transform 0.19s;
          display: flex;
          align-items: center;
          gap: 0.8em;
          font-family: var(--font-main);
          border-left: 5px solid var(--blue);
        }
        .why-list li:before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background: linear-gradient(90deg, var(--blue), var(--violet));
          border-radius: 50%;
          margin-right: 0.7em;
        }
        .why-list li:hover {
          background: #22283b;
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .why-list { flex-direction: column; align-items: center; gap: 1.2rem; }
        }
      `}</style>
    </section>
  );
}