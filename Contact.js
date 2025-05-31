import { useState } from "react";

const labels = {
  en: {
    name: "Your Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    success: "Thank you for contacting us! We’ll reply soon.",
    error: "Please fill out all fields.",
    title: "Get in Touch",
    subtitle: "Want a demo, price offer, or personal consultation? Fill out the form or email us directly at",
  },
  sk: {
    name: "Vaše meno",
    email: "Email",
    message: "Správa",
    submit: "Odoslať správu",
    success: "Ďakujeme za kontaktovanie! Ozveme sa čoskoro.",
    error: "Prosím vyplňte všetky polia.",
    title: "Kontaktujte nás",
    subtitle: "Chcete demo, cenovú ponuku alebo osobnú konzultáciu? Vyplňte formulár alebo napíšte priamo na",
  },
};

export default function Contact({ title, lang }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(labels[lang].error);
      return;
    }
    // This is a static demo – integrate with email API or backend for real submission!
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{labels[lang].title}</h2>
        <div className="contact-flex">
          <div className="contact-info">
            <p>
              {labels[lang].subtitle}{" "}
              <a href="mailto:info@syntea.ai" style={{ color: "var(--blue)", fontWeight: 600 }}>
                info@syntea.ai
              </a>
            </p>
            <p style={{ marginTop: 24, color: "var(--text-muted)" }}>
              Syntea s.r.o.<br />
              Bratislava, Slovakia
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <label>
              {labels[lang].name}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </label>
            <label>
              {labels[lang].email}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </label>
            <label>
              {labels[lang].message}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </label>
            {error && <div className="form-error">{error}</div>}
            {sent && <div className="form-success">{labels[lang].success}</div>}
            <button type="submit">{labels[lang].submit}</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact { padding: 3.2rem 0 2.7rem 0; }
        h2 {
          text-align: center;
          color: var(--blue);
          font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif;
          margin-bottom: 2.1rem;
        }
        .contact-flex {
          display: flex;
          gap: 3.5rem;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .contact-info {
          max-width: 320px;
          font-size: 1.07em;
          color: var(--text-main);
        }
        .contact-form {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          padding: 2em 2em 1.5em 2em;
          min-width: 290px;
          max-width: 340px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
        label {
          font-weight: 600;
          color: var(--blue);
          margin-bottom: 0.3em;
          font-size: 1em;
        }
        input,
        textarea {
          width: 100%;
          padding: 0.7em 1em;
          margin-top: 0.18em;
          border-radius: 8px;
          border: 1.5px solid #232a3b;
          background: #151d31;
          color: var(--text-main);
          font-size: 1em;
          font-family: inherit;
          margin-bottom: 0.16em;
          transition: border 0.18s;
        }
        input:focus,
        textarea:focus {
          border: 1.5px solid var(--blue);
          outline: none;
        }
        .form-error {
          color: #ff6a6a;
          font-size: 0.98em;
          margin-bottom: 0.5em;
        }
        .form-success {
          color: var(--blue);
          font-weight: 600;
          font-size: 1em;
          margin-bottom: 0.5em;
        }
        button[type="submit"] {
          background: linear-gradient(90deg, var(--blue), var(--violet));
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 0.7em 1.7em;
          font-size: 1.09em;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.23s, transform 0.13s;
          margin-top: 0.2em;
        }
        button[type="submit"]:hover,
        button[type="submit"]:focus {
          background: linear-gradient(90deg, var(--violet), var(--blue));
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .contact-flex { flex-direction: column; align-items: center; gap: 2.2rem; }
          .contact-info, .contact-form { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}