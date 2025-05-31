const blogData = {
  en: [
    {
      title: "How AI chatbots boost customer satisfaction",
      date: "2024-03-12",
      desc: "Learn how Syntea’s AI solutions automate support and improve client experiences.",
      url: "#",
    },
    {
      title: "No-code: Empowering everyone with AI",
      date: "2024-02-07",
      desc: "Discover how no-code tools let your whole team manage content and AI workflows.",
      url: "#",
    },
    {
      title: "Fast & secure AI for enterprises",
      date: "2024-01-18",
      desc: "How Syntea combines speed, privacy, and security in every deployment.",
      url: "#",
    },
  ],
  sk: [
    {
      title: "Ako AI chatboti zvyšujú spokojnosť zákazníkov",
      date: "2024-03-12",
      desc: "Zistite, ako Syntea automatizuje podporu a zlepšuje skúsenosť klientov.",
      url: "#",
    },
    {
      title: "No-code: AI pre každého v tíme",
      date: "2024-02-07",
      desc: "Prečítajte si, ako môže celý tím spravovať obsah a workflowy bez programovania.",
      url: "#",
    },
    {
      title: "Rýchla a bezpečná AI pre firmy",
      date: "2024-01-18",
      desc: "Ako Syntea spája rýchlosť, súkromie a bezpečnosť v každom nasadení.",
      url: "#",
    },
  ],
};

export default function Blog({ title, lang }) {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2>{title}</h2>
        <div className="blog-cards">
          {blogData[lang].map((post, i) => (
            <a className="blog-card" href={post.url} key={i}>
              <div className="blog-date">{post.date}</div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-desc">{post.desc}</div>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blog { padding: 3.1rem 0 2.6rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.1rem;
        }
        .blog-cards {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .blog-card {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          width: 320px;
          padding: 1.5em 1.3em 1.2em 1.3em;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: var(--text-main);
          border: 2.5px solid #232a3b;
          transition: border 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .blog-card:hover {
          border: 2.5px solid var(--violet);
          transform: scale(1.04);
          box-shadow: 0 8px 40px 0 rgba(60, 90, 240, 0.13);
        }
        .blog-date {
          color: var(--blue);
          font-size: 0.95em;
          margin-bottom: 0.2em;
        }
        .blog-title {
          font-size: 1.14em;
          font-weight: 700;
          margin-bottom: 0.2em;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
        }
        .blog-desc {
          color: var(--text-muted);
          font-size: 1.01em;
        }
        @media (max-width: 900px) {
          .blog-cards { flex-direction: column; align-items: center; gap: 1.2rem; }
          .blog-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}