import Image from "next/image";

const icons = [
  "brain",
  "ai-chip",
  "ai-chat",
  "ai-robot",
  "ai-gear",
  "ai-head",
];

const features = {
  en: [
    {
      title: "AI Chatbots",
      desc: "Interactive chatbots for your website or internal systems, available 24/7 and trained in your business.",
      icon: "ai-chat",
    },
    {
      title: "Agent Workflows",
      desc: "Automate HR, support, and business routines. Save hours with AI-powered workflows tailored to your processes.",
      icon: "ai-gear",
    },
    {
      title: "Knowledge Bases",
      desc: "Centralize and query your company’s knowledge. Answers in seconds, always up to date.",
      icon: "brain",
    },
    {
      title: "Integrations",
      desc: "Easy integration with your web, CRM, or tools. Connect Syntea in minutes.",
      icon: "ai-chip",
    },
    {
      title: "No-code options",
      desc: "Set up and manage your AI without coding. Empower anyone in your team.",
      icon: "ai-robot",
    },
    {
      title: "Custom AI",
      desc: "All solutions are tailored for your company, with full support in English and Slovak.",
      icon: "ai-head",
    },
  ],
  sk: [
    {
      title: "AI chatboty",
      desc: "Interaktívne chatboty pre váš web alebo interné systémy, dostupné 24/7 a vytrénované na váš biznis.",
      icon: "ai-chat",
    },
    {
      title: "Agent workflow",
      desc: "Automatizujte HR, podporu a rutinné procesy. Ušetrite hodiny s AI workflow na mieru.",
      icon: "ai-gear",
    },
    {
      title: "Znalostné databázy",
      desc: "Centralizujte a vyhľadávajte firemné know-how. Odpovede okamžite, vždy aktuálne.",
      icon: "brain",
    },
    {
      title: "Integrácie",
      desc: "Jednoduché napojenie na web, CRM či iné nástroje. Syntea spojíte za pár minút.",
      icon: "ai-chip",
    },
    {
      title: "No-code možnosti",
      desc: "Spravujte AI bez programovania. Zvládne to každý vo vašom tíme.",
      icon: "ai-robot",
    },
    {
      title: "Custom AI",
      desc: "Všetky riešenia na mieru vašej firme, s podporou po slovensky aj anglicky.",
      icon: "ai-head",
    },
  ],
};

export default function Features({ title, lang }) {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>{title}</h2>
        <div className="feature-cards">
          {features[lang].map((f, i) => (
            <div className="feature-card" key={i} tabIndex={0} aria-label={f.title}>
              <div className="feature-header">
                <span className="feature-icon">
                  <Image
                    src={`/icons/${f.icon}.png`}
                    alt={f.title}
                    width={36}
                    height={36}
                  />
                </span>
                <span>{f.title}</span>
              </div>
              <div className="feature-body">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features { padding: 3.8rem 0 3.2rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.3rem;
        }
        .feature-cards {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .feature-card {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          width: 320px;
          box-shadow: var(--shadow);
          transition: background 0.3s, transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
          margin-bottom: 1.5rem;
          outline: none;
          position: relative;
          overflow: hidden;
          border: 1.5px solid #232a3b;
        }
        .feature-card:hover, .feature-card:focus {
          background: #20263a;
          transform: scale(1.034);
          box-shadow: 0 8px 40px 0 rgba(60, 90, 240, 0.13);
        }
        .feature-header {
          display: flex;
          align-items: center;
          gap: 0.95em;
          padding: 1.45em 1.2em 1em 1.2em;
          font-size: 1.14em;
          font-weight: 600;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
        }
        .feature-icon {
          display: flex;
          align-items: center;
          background: #181d2b;
          border-radius: 10px;
          padding: 0.25em;
        }
        .feature-body {
          padding: 0 1.2em 1.3em 1.2em;
          color: var(--text-muted);
          font-size: 1.06em;
          min-height: 70px;
        }
        @media (max-width: 900px) {
          .feature-cards { flex-direction: column; align-items: center; gap: 1.2rem; }
          .feature-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}