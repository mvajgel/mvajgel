const pricingData = {
  en: [
    {
      plan: "Starter",
      price: "from €490",
      features: [
        "AI chatbot or knowledge base",
        "No-code admin panel",
        "Up to 2 integrations",
        "Basic support",
      ],
    },
    {
      plan: "Business",
      price: "from €990",
      features: [
        "Chatbots, workflows & integrations",
        "Custom AI training",
        "Unlimited users",
        "Priority support",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Advanced automation & consulting",
        "Custom integrations",
        "Dedicated account manager",
        "SLA & security guarantees",
      ],
    },
  ],
  sk: [
    {
      plan: "Štart",
      price: "od 490 €",
      features: [
        "AI chatbot alebo znalostná báza",
        "No-code admin rozhranie",
        "Do 2 integrácií",
        "Základná podpora",
      ],
    },
    {
      plan: "Biznis",
      price: "od 990 €",
      features: [
        "Chatboty, workflow aj integrácie",
        "Vlastný tréning AI",
        "Neobmedzený počet používateľov",
        "Prioritná podpora",
      ],
    },
    {
      plan: "Enterprise",
      price: "Individuálne",
      features: [
        "Pokročilá automatizácia a poradenstvo",
        "Integrácie na mieru",
        "Dedikovaný account manager",
        "SLA a garancia bezpečnosti",
      ],
    },
  ],
};

export default function Pricing({ title, lang }) {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>{title}</h2>
        <div className="pricing-cards">
          {pricingData[lang].map((plan, i) => (
            <div className="pricing-card" key={i}>
              <div className="plan-title">{plan.plan}</div>
              <div className="plan-price">{plan.price}</div>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="pricing-btn">
                {lang === "sk" ? "Vyžiadať ponuku" : "Request Offer"}
              </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pricing { padding: 3.2rem 0 2.7rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.1rem;
        }
        .pricing-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .pricing-card {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          width: 290px;
          padding: 2em 1.5em 1.4em 1.5em;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2.5px solid #232a3b;
          transition: border 0.2s, transform 0.2s;
        }
        .pricing-card:hover {
          border: 2.5px solid var(--violet);
          transform: translateY(-4px) scale(1.04);
        }
        .plan-title {
          font-size: 1.23em;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          font-weight: 700;
          color: var(--blue);
          margin-bottom: 0.3em;
        }
        .plan-price {
          font-size: 1.09em;
          color: var(--violet);
          font-weight: 700;
          margin-bottom: 1.1em;
        }
        ul {
          padding: 0;
          margin: 0 0 1.1em 0;
          list-style: none;
          width: 100%;
        }
        li {
          color: var(--text-muted);
          font-size: 1em;
          margin-bottom: 0.6em;
          padding-left: 1.1em;
          position: relative;
        }
        li:before {
          content: '';
          display: inline-block;
          width: 7px;
          height: 7px;
          background: linear-gradient(90deg,var(--blue),var(--violet));
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0.6em;
        }
        .pricing-btn {
          background: linear-gradient(90deg, var(--blue), var(--violet));
          color: #fff;
          border: none;
          border-radius: 16px;
          padding: 0.7em 2em;
          font-size: 1.05em;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.28s, transform 0.18s;
          margin-top: 0.6em;
        }
        .pricing-btn:hover, .pricing-btn:focus {
          background: linear-gradient(90deg, var(--violet), var(--blue));
          transform: scale(1.06);
        }
        @media (max-width: 900px) {
          .pricing-cards { flex-direction: column; align-items: center; gap: 1.2rem; }
          .pricing-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}