import Image from "next/image";

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <div className="footer-brand">
          <Image src="/logo.png" alt="Syntea logo" width={38} height={38} />
          <span className="footer-title">Syntea</span>
        </div>
        <div className="footer-links">
          <a href="#privacy">{lang === "sk" ? "Súkromie" : "Privacy"}</a>
          <a href="mailto:info@syntea.ai">info@syntea.ai</a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Syntea s.r.o.
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--bg-light);
          padding: 1.5rem 0 1.2rem 0;
          color: var(--text-muted);
          font-size: 1em;
        }
        .footer-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.2em;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.55em;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          font-weight: 700;
          color: var(--blue);
          font-size: 1.18em;
        }
        .footer-title {
          color: var(--text-main);
        }
        .footer-links a {
          margin-right: 1.2em;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.18s;
        }
        .footer-links a:hover {
          color: var(--blue);
        }
        .footer-copy {
          margin-left: auto;
        }
        @media (max-width: 900px) {
          .footer-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.7em;
          }
          .footer-copy { margin-left: 0; }
        }
      `}</style>
    </footer>
  );
}