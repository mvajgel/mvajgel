const testimonialsData = {
  en: [
    {
      quote: "Syntea’s chatbot transformed our customer support, handling 80% of repetitive questions instantly!",
      author: "Anna, E-shop Manager",
    },
    {
      quote: "We automated HR onboarding with Syntea workflows. Our new hires get answers instantly.",
      author: "Peter, HR Lead",
    },
    {
      quote: "Great team, fast integration, and truly multilingual support. Highly recommended.",
      author: "Marek, CTO",
    },
  ],
  sk: [
    {
      quote: "Chatbot od Syntea zvládne 80% opakujúcich sa otázok zákazníkov – okamžite a nonstop!",
      author: "Anna, Manažérka e-shopu",
    },
    {
      quote: "HR onboarding sme vďaka Syntea agentom zrýchlili a zjednodušili pre všetkých nových kolegov.",
      author: "Peter, HR líder",
    },
    {
      quote: "Výborný tím, rýchla integrácia, skutočne viacjazyčná podpora. Odporúčam.",
      author: "Marek, CTO",
    },
  ],
};

export default function Testimonials({ title, lang }) {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>{title}</h2>
        <div className="testimonial-list">
          {testimonialsData[lang].map((item, i) => (
            <blockquote key={i}>
              <p>{item.quote}</p>
              <cite>{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonials { padding: 3.2rem 0 2.7rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.1rem;
        }
        .testimonial-list {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          justify-content: center;
        }
        blockquote {
          font-size: 1.11em;
          color: var(--violet);
          background: var(--bg-light);
          border-left: 5px solid var(--blue);
          margin: 0 0 1.5em 0;
          padding: 1em 1.5em;
          border-radius: var(--border-radius);
          max-width: 350px;
          box-shadow: var(--shadow);
          position: relative;
        }
        blockquote:before {
          content: '“';
          font-size: 2.9em;
          color: var(--violet);
          position: absolute;
          left: 0.2em;
          top: -0.1em;
          opacity: 0.13;
        }
        cite {
          color: var(--text-muted);
          font-size: 0.96em;
          margin-top: 0.4em;
          display: block;
        }
        @media (max-width: 900px) {
          .testimonial-list { flex-direction: column; gap: 1.3rem; }
          blockquote { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}