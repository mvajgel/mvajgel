import Image from "next/image";

const useCasesData = {
  en: [
    {
      title: "Automated Customer Support",
      desc: "AI chatbots answer questions, resolve requests, and handle repetitive support tasks 24/7.",
      icon: "ai-chat",
    },
    {
      title: "HR Process Automation",
      desc: "Streamline onboarding, FAQ, timesheets, and internal requests via agent workflows.",
      icon: "ai-gear",
    },
    {
      title: "Knowledge Base Search",
      desc: "Let employees search company knowledge in seconds — always accurate, always fresh.",
      icon: "brain",
    },
    {
      title: "E-shop Support & Recommendations",
      desc: "Boost sales and support with chatbots for product search, order tracking, and upsell.",
      icon: "ai-chip",
    },
  ],
  sk: [
    {
      title: "Automatizovaná zákaznícka podpora",
      desc: "AI chatboty odpovedajú na otázky, riešia požiadavky a zvládnu rutinnú podporu nonstop.",
      icon: "ai-chat",
    },
    {
      title: "Automatizácia HR procesov",
      desc: "Zjednodušte onboarding, FAQ, výkazy či interné žiadosti cez agent workflowy.",
      icon: "ai-gear",
    },
    {
      title: "Vyhľadávanie v znalostnej databáze",
      desc: "Zamestnanci nájdu informácie v sekundách – vždy správne a vždy aktuálne.",
      icon: "brain",
    },
    {
      title: "E-shop podpora a odporúčania",
      desc: "Zvýšte predaj aj spokojnosť – chatbot poradí s produktmi, objednávkami aj doplnkami.",
      icon: "ai-chip",
    },
  ],
};

export default function UseCases({ title, lang }) {
  return (
    <section id="usecases" className="usecases">
      <div className="container">
        <h2>{title}</h2>
        <div className="usecase-cards">
          {useCasesData[lang].map((uc, i) => (
            <div className="usecase-card" key={i}>
              <div className="usecase-icon">
                <Image
                  src={`/icons/${uc.icon}.png`}
                  alt={uc.title}
                  width={38}
                  height={38}
                />
              </div>
              <div>
                <div className="usecase-title">{uc.title}</div>
                <div className="usecase-desc">{uc.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .usecases { padding: 3.5rem 0 3.2rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.3rem;
        }
        .usecase-cards {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .usecase-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2em;
          background: var(--bg-light);
          border-radius: var(--border-radius);
          width: 380px;
          box-shadow: var(--shadow);
          transition: background 0.3s, transform 0.22s, box-shadow 0.22s;
          margin-bottom: 1.5rem;
          padding: 1.25em 1.4em;
          min-height: 120px;
          border-left: 4px solid var(--violet);
        }
        .usecase-card:hover, .usecase-card:focus {
          background: #20263a;
          transform: scale(1.022);
          box-shadow: 0 8px 40px 0 rgba(60, 90, 240, 0.13);
        }
        .usecase-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          background: #181d2b;
          border-radius: 12px;
          padding: 0.25em;
        }
        .usecase-title {
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          font-weight: 700;
          font-size: 1.19em;
          color: var(--blue);
          margin-bottom: 0.28em;
        }
        .usecase-desc {
          color: var(--text-muted);
          font-size: 1.04em;
        }
        @media (max-width: 900px) {
          .usecase-cards { flex-direction: column; align-items: center; gap: 1.2rem; }
          .usecase-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}