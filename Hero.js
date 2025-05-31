import Image from "next/image";

export default function Hero({ title, subtitle, lang }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-flex">
          <div className="hero-logo">
            <Image
              src="/logo.png"
              alt="Syntea logo"
              width={92}
              height={92}
              priority
              style={{ borderRadius: 20, background: "#181d2b", boxShadow: "0 2px 16px #202a3d66" }}
            />
          </div>
          <div className="hero-text">
            <h1>{title}</h1>
            <p className="hero-sub">{subtitle}</p>
            <a href="#contact" className="cta-btn">
              {lang === "sk" ? "Začať" : "Get Started"}
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background: linear-gradient(120deg, #141b2f 70%, #2ac4ea33 120%);
          padding: 5.5rem 0 3.5rem 0;
          min-height: 68vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-content {
          width: 100%;
        }
        .hero-flex {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          justify-content: center;
        }
        .hero-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-text {
          max-width: 540px;
        }
        h1 {
          font-size: 2.6rem;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          color: var(--blue);
          background: linear-gradient(90deg, var(--blue) 60%, var(--violet) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          margin-bottom: 0.6em;
          line-height: 1.11;
        }
        .hero-sub {
          color: var(--text-muted);
          font-size: 1.19rem;
          margin-bottom: 2.1rem;
          font-weight: 500;
          line-height: 1.5;
        }
        .cta-btn {
          background: linear-gradient(90deg, var(--blue), var(--violet));
          color: #fff;
          border: none;
          border-radius: 18px;
          padding: 0.85em 2.4em;
          font-size: 1.15rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: var(--shadow);
          letter-spacing: 0.01em;
          transition: background 0.3s, transform 0.2s;
          text-decoration: none;
          margin-top: 0.2em;
          display: inline-block;
        }
        .cta-btn:hover, .cta-btn:focus {
          background: linear-gradient(90deg, var(--violet), var(--blue));
          transform: translateY(-2px) scale(1.04);
          outline: none;
        }
        @media (max-width: 900px) {
          .hero-flex {
            flex-direction: column;
            gap: 1.6rem;
          }
          .hero-logo { margin-bottom: 1.3em; }
          h1 { font-size: 2rem; }
        }
        @media (max-width: 600px) {
          .hero-content { padding: 0 0.2em; }
          h1 { font-size: 1.3rem; }
        }
      `}</style>
    </section>
  );
}