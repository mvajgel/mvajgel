import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export default function Navbar({ lang, setLang }) {
  const navItems = [
    { href: "#home", label: { en: "Home", sk: "Domov" } },
    { href: "#features", label: { en: "Services", sk: "Služby" } },
    { href: "#usecases", label: { en: "Use Cases", sk: "Využitie" } },
    { href: "#why", label: { en: "Why Syntea?", sk: "Prečo Syntea?" } },
    { href: "#testimonials", label: { en: "Testimonials", sk: "Referencie" } },
    { href: "#faq", label: { en: "FAQ", sk: "FAQ" } },
    { href: "#pricing", label: { en: "Pricing", sk: "Cenník" } },
    { href: "#blog", label: { en: "Blog", sk: "Blog" } },
    { href: "#contact", label: { en: "Contact", sk: "Kontakt" } },
    { href: "#privacy", label: { en: "Privacy", sk: "Súkromie" } }
  ];
  return (
    <header className="site-header">
      <nav className="container nav-flex">
        <Link href="#home" className="logo-link">
          <img src="/logo.png" alt="Syntea logo" width={44} height={44} style={{ verticalAlign: "middle", marginRight: 12 }} />
          <span className="logo-text">Syntea</span>
        </Link>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label[lang]}</a>
            </li>
          ))}
        </ul>
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </nav>
      <style jsx>{`
        .site-header {
          background: var(--bg-light);
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7em 0;
        }
        .logo-link {
          display: flex;
          align-items: center;
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          font-weight: 700;
          font-size: 1.55em;
          color: var(--text-main);
        }
        .nav-list {
          display: flex;
          gap: 1em;
          align-items: center;
        }
        .nav-list a {
          color: var(--text-muted);
          padding: 0.22em 0.5em;
          font-weight: 600;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border 0.2s;
          border-radius: 3px;
        }
        .nav-list a:hover,
        .nav-list a:focus {
          color: var(--blue);
          border-bottom: 2px solid var(--violet);
        }
        @media (max-width: 900px) {
          .nav-list { gap: 0.4em; }
          .nav-flex { flex-wrap: wrap; }
        }
        @media (max-width: 700px) {
          .nav-list { flex-direction: column; gap: 0.2em; }
        }
      `}</style>
    </header>
  );
}