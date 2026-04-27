import { useState } from "react";
import { 
  FiHome,
  FiCalendar,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

import { FaHandsHelping, FaBaby } from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";

const C = {
  teal:        "#1A9E8E",
  tealDark:    "#157a6d",
  orange:      "#E8612A",
  orangeDark:  "#c94e1e",
  green:       "#4CAF50",
  yellow:      "#F5C842",
  lightBlue:   "#7EC8D8",
  bg:          "#FAFAF8",
  dark:        "#1C2B2A",
  darkDeep:    "#111C1B",
  gray:        "#6B7B7A",
  lightTeal:   "#EAF7F5",
  lightOrange: "#FEF0E8",
  border:      "#E8EAE8",
  borderLight: "#F0F0EE",
};

const SERVICES = [
  {
    icon: <FiHome size={22} />,
    bg: C.lightTeal,
    title: "Accompagnement éducatif à domicile",
    desc: "Un suivi personnalisé dans le milieu familier pour favoriser le développement global de votre enfant.",
    list: [
      "Habiletés sociales & communication",
      "Stimulation cognitive adaptée",
      "Autonomie (repas, hygiène, routines)",
      "Gestion des émotions & comportements",
    ],
    featured: true,
  },
  {
    icon: <FiCalendar size={22} />,
    bg: C.lightOrange,
    title: "Mise en place de routines",
    desc: "Structuration du quotidien pour un environnement prévisible et sécurisant.",
    list: ["Routine matin & soir", "Aide aux transitions", "Structuration visuelle"],
  },
  {
    icon: <MdOutlinePsychology size={22} />,
    bg: "#EEF6FF",
    title: "Répit parental",
    desc: "Prenez du recul en toute sérénité pendant que votre enfant est en de bonnes mains.",
    list: ["Encadrement sécurisé", "Activités adaptées", "Disponible en semaine"],
  },
  {
    icon: <FaHandsHelping size={20} />,
    bg: "#F0FAF0",
    title: "Soutien aux parents",
    desc: "Conseils, outils et écoute bienveillante pour accompagner toute la famille.",
    list: ["Conseils éducatifs", "Outils pratiques", "Écoute personnalisée"],
  },
  {
    icon: <FaBaby size={20} />,
    bg: C.lightOrange,
    title: "Service de garde spécialisée",
    desc: "Service de garde à domicile adapté aux enfants TSA et tout type d'enfants.",
    list: ["Disponible le week-end", "Selon vos besoins", "Cadre bienveillant"],
  },
];

const VALUES = [
  { label: "Bienveillance",      color: C.teal      },
  { label: "Respect du rythme",  color: C.orange    },
  { label: "Professionnalisme",  color: C.green     },
  { label: "Collaboration",      color: C.yellow    },
  { label: "Engagement",         color: C.lightBlue },
  { label: "Écoute active",      color: "#C084FC"   },
];

const PRICE_FEATURES = [
  "Services sur rendez-vous uniquement",
  "Accompagnement à domicile",
  "Séances entièrement personnalisées",
  "Répit parental disponible",
  "Service de garde (week-ends inclus)",
  "Suivi et bilan régulier",
];

const CONTACT_ITEMS = [
  { icon: <FiMail />, label: "Courriel", value: "contact@parentszen.ca" },
  { icon: <FiPhone />, label: "Téléphone", value: "+1 438-773-0969\n+1 438-985-6652" },
  { icon: <FiMapPin />, label: "Zone de service", value: "Montréal et Rive-Sud" },
  { icon: <FiCalendar />, label: "Fonctionnement", value: "Sur rendez-vous uniquement" },
];

/* ── Styles ──────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: ${C.bg};
    color: ${C.dark};
    overflow-x: hidden;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: ${C.bg};
    border-bottom: 1.5px solid ${C.border};
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 5%; height: 70px;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 4px;
    font-size: 22px; font-weight: 600; color: ${C.teal};
    text-decoration: none; letter-spacing: -.3px;
  }
  .nav-logo span { color: ${C.orange}; }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a {
    font-size: 14px; font-weight: 500; color: ${C.dark};
    text-decoration: none; transition: color .2s;
  }
  .nav-links a:hover { color: ${C.teal}; }
  .nav-cta {
    background: ${C.teal}; color: #fff;
    border: none; border-radius: 50px;
    padding: 10px 24px; font-size: 14px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: background .2s;
  }
  .nav-cta:hover { background: ${C.tealDark}; }
  .hamburger {
    display: none; background: none; border: none;
    cursor: pointer; padding: 4px; flex-direction: column; gap: 5px;
  }
  .hamburger span {
    display: block; width: 22px; height: 2px;
    background: ${C.dark}; border-radius: 2px;
  }
  .mobile-menu {
    position: fixed; top: 70px; left: 0; right: 0;
    background: ${C.bg}; z-index: 99;
    padding: 8px 5% 20px;
    border-bottom: 1.5px solid ${C.border};
  }
  .mobile-menu a {
    display: block; padding: 13px 0;
    border-bottom: 1px solid ${C.borderLight};
    font-size: 16px; font-weight: 500;
    color: ${C.dark}; text-decoration: none;
  }
  .mobile-menu a:last-child { border-bottom: none; }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 100px 5% 60px;
    position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; top: 0; right: 0;
    width: 52%; height: 100%;
    background: ${C.lightTeal};
    clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: 0;
  }
  .hero-content { position: relative; z-index: 1; max-width: 560px; }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: ${C.lightOrange}; color: ${C.orange};
    border-radius: 50px; padding: 6px 16px;
    font-size: 13px; font-weight: 500; margin-bottom: 28px;
  }
  .hero-tag::before {
    content: ''; display: block; width: 8px; height: 8px;
    border-radius: 50%; background: ${C.orange};
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 5vw, 62px);
    font-weight: 700; line-height: 1.1;
    color: ${C.dark}; margin-bottom: 24px;
  }
  .hero h1 em { font-style: italic; color: ${C.teal}; }
  .hero > .hero-content > p {
    font-size: 17px; line-height: 1.75; color: ${C.gray};
    max-width: 460px; margin-bottom: 40px;
  }
  .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
  .btn-primary {
    background: ${C.orange}; color: #fff;
    border: none; border-radius: 50px;
    padding: 14px 32px; font-size: 15px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: background .2s, transform .1s;
    text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { background: ${C.orangeDark}; transform: translateY(-1px); }
  .btn-secondary {
    color: ${C.teal}; font-size: 15px; font-weight: 500;
    display: flex; align-items: center; gap: 8px;
    text-decoration: none; transition: gap .2s;
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-secondary:hover { gap: 14px; }
  .hero-logo-img {
    position: absolute; right: 3%; bottom: 0; z-index: 1;
    width: 40%; max-width: 480px;
    display: flex; align-items: flex-end; justify-content: center;
  }
  .hero-logo-img img {
    width: 100%; max-width: 400px;
    filter: drop-shadow(0 20px 40px rgba(26,158,142,.15));
  }
  .hero-stats {
    display: flex; gap: 40px;
    margin-top: 56px; padding-top: 40px;
    border-top: 1.5px solid ${C.border};
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px; font-weight: 700;
    color: ${C.teal}; line-height: 1;
  }
  .stat-label { font-size: 13px; color: ${C.gray}; margin-top: 4px; }

  /* SECTION BASE */
  section { padding: 100px 5%; }
  .section-tag {
    font-size: 12px; font-weight: 600; letter-spacing: .12em;
    text-transform: uppercase; color: ${C.teal};
    margin-bottom: 14px; display: block;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 4vw, 46px);
    font-weight: 700; line-height: 1.15;
    color: ${C.dark}; margin-bottom: 20px;
  }
  .section-title em { font-style: italic; color: ${C.orange}; }
  .section-sub {
    font-size: 16px; line-height: 1.75;
    color: ${C.gray}; max-width: 520px;
  }

  /* MISSION */
  .mission { background: ${C.dark}; }
  .mission-inner {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .mission .section-tag { color: ${C.yellow}; }
  .mission .section-title { color: #fff; }
  .mission .section-sub { color: rgba(255,255,255,.62); }
  .mission-values {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 12px; margin-top: 36px;
  }
  .value-chip {
    display: flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 12px; padding: 13px 16px;
    font-size: 14px; font-weight: 500; color: rgba(255,255,255,.82);
  }
  .value-dot {
    width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
  }
  .mission-right {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .m-card {
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 20px; padding: 28px 24px;
  }
  .m-card.accent { grid-column: 1/-1; background: ${C.teal}; border-color: ${C.teal}; }
  .m-card-icon { font-size: 24px; margin-bottom: 14px; }
  .m-card h3 { font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 8px; }
  .m-card p { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.65; }

  /* SERVICES */
  .services { background: ${C.bg}; }
  .services-header {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 60px; align-items: end; margin-bottom: 64px;
  }
  .services-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .srv-card {
    background: #fff;
    border: 1.5px solid ${C.border};
    border-radius: 24px; padding: 36px 28px;
    transition: border-color .2s, transform .2s;
  }
  .srv-card:hover { border-color: ${C.teal}; transform: translateY(-4px); }
  .srv-card.feat {
    background: ${C.teal}; border-color: ${C.teal};
    grid-column: span 2;
    display: flex; gap: 40px; align-items: flex-start;
  }
  .srv-icon {
    width: 52px; height: 52px; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; margin-bottom: 20px; flex-shrink: 0;
  }
  .srv-card h3 { font-size: 18px; font-weight: 600; color: ${C.dark}; margin-bottom: 12px; }
  .srv-card p { font-size: 14px; color: ${C.gray}; line-height: 1.7; }
  .srv-card.feat h3, .srv-card.feat p { color: #fff; }
  .srv-card.feat p { color: rgba(255,255,255,.8); }
  .srv-list { list-style: none; margin-top: 16px; }
  .srv-list li {
    font-size: 13px; color: ${C.gray};
    padding: 7px 0; border-bottom: 1px solid ${C.borderLight};
    display: flex; align-items: center; gap: 8px;
  }
  .srv-list li::before {
    content: ''; display: block; width: 5px; height: 5px;
    border-radius: 50%; background: ${C.teal}; flex-shrink: 0;
  }
  .srv-card.feat .srv-list li { border-color: rgba(255,255,255,.15); color: rgba(255,255,255,.8); }
  .srv-card.feat .srv-list li::before { background: ${C.yellow}; }

  /* TARIF */
  .tarif { background: ${C.lightOrange}; }
  .tarif-inner {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .price-box {
    background: #fff; border-radius: 28px;
    padding: 48px 40px; text-align: center;
    border: 1.5px solid ${C.border};
  }
  .price-amount {
    font-family: 'Playfair Display', serif;
    font-size: 80px; font-weight: 700;
    color: ${C.orange}; line-height: 1;
  }
  .price-unit { font-size: 17px; color: ${C.gray}; margin-top: 4px; margin-bottom: 32px; }
  .price-features { list-style: none; text-align: left; }
  .price-features li {
    display: flex; align-items: center; gap: 12px;
    font-size: 15px; padding: 12px 0;
    border-bottom: 1px solid ${C.borderLight};
    color: ${C.dark};
  }
  .price-features li:last-child { border-bottom: none; }
  .check {
    width: 22px; height: 22px; border-radius: 50%;
    background: ${C.lightTeal}; color: ${C.teal};
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; flex-shrink: 0;
  }
  .tarif-note { margin-top: 24px; font-size: 15px; color: ${C.gray}; line-height: 1.75; }
  .tarif-note strong { color: ${C.dark}; }

  /* TEAM */
  .team { background: ${C.bg}; }
  .team-header { text-align: center; max-width: 560px; margin: 0 auto 64px; }
  .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .team-card {
    background: #fff; border: 1.5px solid ${C.border};
    border-radius: 28px; padding: 36px;
    display: flex; gap: 24px; align-items: flex-start;
  }
  .avatar {
    width: 76px; height: 76px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 26px; font-weight: 700; color: #fff; flex-shrink: 0;
  }
  .team-card h3 { font-size: 20px; font-weight: 600; color: ${C.dark}; margin-bottom: 4px; }
  .team-role { font-size: 13px; color: ${C.teal}; font-weight: 500; margin-bottom: 14px; }
  .team-card p { font-size: 14px; color: ${C.gray}; line-height: 1.7; }
  .team-story {
    margin-top: 28px; background: ${C.lightTeal};
    border-radius: 24px; padding: 36px;
    font-size: 16px; color: ${C.dark}; line-height: 1.8;
  }
  .team-story strong { color: ${C.teal}; }

  /* CONTACT */
  .contact { background: ${C.dark}; }
  .contact .section-tag { color: ${C.yellow}; }
  .contact .section-title { color: #fff; }
  .contact-header { text-align: center; margin-bottom: 60px; }
  .contact-inner {
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  }
  .contact-info { display: flex; flex-direction: column; gap: 20px; }
  .c-item {
    display: flex; align-items: flex-start; gap: 18px;
    padding: 22px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 16px;
  }
  .c-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: ${C.teal};
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .c-item h4 { font-size: 12px; font-weight: 500; color: rgba(255,255,255,.45); margin-bottom: 6px; text-transform: uppercase; letter-spacing: .06em; }
  .c-item p { font-size: 15px; color: #fff; line-height: 1.6; white-space: pre-line; }
  .contact-form {
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 24px; padding: 36px;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .f-field { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }
  .f-field label { font-size: 13px; font-weight: 500; color: rgba(255,255,255,.55); }
  .f-field input,
  .f-field textarea,
  .f-field select {
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 10px; padding: 12px 16px;
    font-size: 14px; color: #fff;
    font-family: 'DM Sans', sans-serif;
    outline: none; transition: border-color .2s; width: 100%;
    appearance: none;
  }
  .f-field input::placeholder,
  .f-field textarea::placeholder { color: rgba(255,255,255,.28); }
  .f-field input:focus,
  .f-field textarea:focus,
  .f-field select:focus { border-color: ${C.teal}; }
  .f-field textarea { min-height: 110px; resize: vertical; }
  .f-field select option { background: ${C.dark}; color: #fff; }
  .form-submit {
    width: 100%; background: ${C.orange}; color: #fff;
    border: none; border-radius: 50px;
    padding: 14px; font-size: 15px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: background .2s; margin-top: 8px;
  }
  .form-submit:hover { background: ${C.orangeDark}; }
  .form-submit.sent { background: ${C.teal}; }

  /* FOOTER */
  .footer {
    background: ${C.darkDeep};
    padding: 36px 5%;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
  }
  .footer-logo { font-size: 18px; font-weight: 600; color: ${C.teal}; }
  .footer-logo span { color: ${C.orange}; }
  .footer p { font-size: 13px; color: rgba(255,255,255,.38); }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .mission-inner,
    .tarif-inner,
    .contact-inner { grid-template-columns: 1fr; gap: 48px; }
    .services-header { grid-template-columns: 1fr; gap: 20px; }
    .services-grid { grid-template-columns: 1fr 1fr; }
    .srv-card.feat { grid-column: span 2; flex-direction: column; gap: 0; }
    .hero-bg { display: none; }
    .hero-logo-img { display: none; }
    .nav-links,
    .nav-cta { display: none; }
    .hamburger { display: flex; }
  }
  @media (max-width: 640px) {
    section { padding: 72px 5%; }
    .services-grid { grid-template-columns: 1fr; }
    .srv-card.feat { grid-column: span 1; }
    .mission-values { grid-template-columns: 1fr; }
    .mission-right { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .hero-stats { flex-direction: column; gap: 20px; }
    .team-grid { grid-template-columns: 1fr; }
    .team-card { flex-direction: column; }
  }
`;

/* ── Component ───────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent]         = useState(false);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <>
      <style>{css}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <a href="#accueil" className="nav-logo">Parents<span>Zen</span></a>
        <ul className="nav-links">
          {[["mission","Mission"],["services","Services"],["tarifs","Tarifs"],["equipe","Notre équipe"],["contact","Contact"]].map(([id, label]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("contact")}>Nous contacter</button>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {[["mission","Mission"],["services","Services"],["tarifs","Tarifs"],["equipe","Équipe"],["contact","Contact"]].map(([id,label]) => (
            <a key={id} href={`#${id}`} onClick={() => scrollTo(id)}>{label}</a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="hero" id="accueil">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-tag">Soutien pour familles TSA</div>
          <h1>
            Accompagner votre enfant,<br />
            <em>soutenir</em> votre famille.
          </h1>
          <p>
            Des éducatrices spécialisées passionnées à vos côtés pour un accompagnement
            personnalisé, humain et bienveillant — à domicile, selon votre rythme.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Prendre rendez-vous
            </button>
            <a href="#services" className="btn-secondary">Nos services →</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">35$</div><div className="stat-label">de l'heure</div></div>
            <div><div className="stat-num">3+</div><div className="stat-label">ans d'expérience</div></div>
            <div><div className="stat-num">5</div><div className="stat-label">services offerts</div></div>
          </div>
        </div>
        <div className="hero-logo-img">
          <img src="/logo.jpeg" alt="ParentsZen logo" />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="mission" id="mission">
        <div className="mission-inner">
          <div>
            <span className="section-tag">Notre mission</span>
            <h2 className="section-title">
              Un accompagnement{" "}
              <em style={{ color: C.yellow }}>au cœur</em> de chaque famille
            </h2>
            <p className="section-sub">
              Nous offrons un accompagnement éducatif personnalisé aux enfants TSA, tout en apportant
              un soutien concret, humain et bienveillant à leurs parents. Notre objectif : favoriser
              le développement global de l'enfant et créer un environnement familial plus serein.
            </p>
            <div className="mission-values">
              {VALUES.map(v => (
                <div className="value-chip" key={v.label}>
                  <span className="value-dot" style={{ background: v.color }} />
                  {v.label}
                </div>
              ))}
            </div>
          </div>
          <div className="mission-right">
            <div className="m-card accent">
              <h3>Notre vision</h3>
              <p>Chaque enfant mérite un accompagnement adapté à son unicité, et chaque parent mérite un soutien sincère et sans jugement.</p>
            </div>
            <div className="m-card">
              <h3>Éducatrices diplômées</h3>
              <p>Deux professionnelles certifiées avec une expertise spécialisée auprès des enfants TSA.</p>
            </div>
            <div className="m-card">
              <h3>À domicile</h3>
              <p>Interventions dans l'environnement familier de l'enfant pour un apprentissage naturel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="services-header">
          <div>
            <span className="section-tag">Nos services</span>
            <h2 className="section-title">Ce que nous <em>offrons</em></h2>
          </div>
          <p className="section-sub">
            Des services pensés pour répondre aux besoins réels des enfants TSA et de leurs
            parents, disponibles sur rendez-vous à domicile.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className={`srv-card${s.featured ? " feat" : ""}`}>
              <div>
                <div className="srv-icon" style={{ background: s.bg }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <ul className="srv-list">
                {s.list.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section className="tarif" id="tarifs">
        <div className="tarif-inner">
          <div>
            <span className="section-tag">Tarification</span>
            <h2 className="section-title">Un tarif <em>clair</em> et accessible</h2>
            <p className="section-sub">
              Nous croyons que l'accès à des services de qualité ne doit pas être une source de
              stress supplémentaire. C'est pourquoi nous proposons un tarif transparent et abordable.
            </p>
            <p className="tarif-note">
              <strong>Tous nos services sont offerts uniquement sur rendez-vous.</strong> Nous nous
              adaptons à votre horaire et à vos besoins spécifiques pour vous offrir le meilleur
              accompagnement possible.
            </p>
            <div style={{ marginTop: 36 }}>
              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Réserver une séance
              </button>
            </div>
          </div>
          <div className="price-box">
            <div className="price-amount">35$</div>
            <div className="price-unit">de l'heure</div>
            <ul className="price-features">
              {PRICE_FEATURES.map(f => (
                <li key={f}>
                  <span className="check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="team" id="equipe">
        <div className="team-header">
          <span className="section-tag">Notre équipe</span>
          <h2 className="section-title" style={{ margin: "0 auto" }}>
            Deux expertes, <em>une passion commune</em>
          </h2>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="avatar" style={{ background: C.teal }}>R</div>
            <div>
              <h3>Ruth Perside</h3>
              <div className="team-role">Éducatrice spécialisée</div>
              <p>
                Diplômée et expérimentée, Ruth accompagne les enfants à besoins particuliers avec
                une approche bienveillante et structurée. Sa sensibilité pour les enfants TSA est au
                cœur de sa pratique quotidienne.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="avatar" style={{ background: C.orange }}>K</div>
            <div>
              <h3>Katia Senge</h3>
              <div className="team-role">Éducatrice spécialisée</div>
              <p>
                Avec plusieurs années d'expérience sur le terrain, Katia a développé une expertise
                reconnue auprès des enfants ayant des besoins spécifiques, notamment les enfants TSA
                de la région montréalaise.
              </p>
            </div>
          </div>
        </div>
        <div className="team-story">
          <strong>Comment ParentsZen est né —</strong> Ruth et Katia ont constaté, au fil de leurs
          expériences, un besoin grandissant de services accessibles, humains et personnalisés pour
          les familles TSA. Animées par le désir de faire une réelle différence, elles ont créé
          ParentsZen pour apporter des solutions concrètes directement dans leur communauté.
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="contact-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Parlons de <em style={{ color: C.yellow }}>votre enfant</em>
          </h2>
        </div>
        <div className="contact-inner">
          <div className="contact-info">
            {CONTACT_ITEMS.map(item => (
              <div className="c-item" key={item.label}>
                <div className="c-icon">{item.icon}</div>
                <div>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="f-field">
                <label>Prénom</label>
                <input type="text" placeholder="Votre prénom" required />
              </div>
              <div className="f-field">
                <label>Nom</label>
                <input type="text" placeholder="Votre nom" required />
              </div>
            </div>
            <div className="f-field">
              <label>Courriel</label>
              <input type="email" placeholder="votre@email.com" required />
            </div>
            <div className="f-field">
              <label>Téléphone</label>
              <input type="tel" placeholder="+1 438-000-0000" />
            </div>
            <div className="f-field">
              <label>Service souhaité</label>
              <select defaultValue="">
                <option value="" disabled>Choisir un service...</option>
                <option>Accompagnement éducatif à domicile</option>
                <option>Mise en place de routines</option>
                <option>Répit parental</option>
                <option>Service de garde spécialisée</option>
                <option>Soutien aux parents</option>
              </select>
            </div>
            <div className="f-field">
              <label>Message</label>
              <textarea placeholder="Parlez-nous de votre enfant et de vos besoins..." />
            </div>
            <button className={`form-submit${sent ? " sent" : ""}`} type="submit">
              {sent ? "✓ Message envoyé !" : "Envoyer ma demande"}
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div>
          <div className="footer-logo">Parents<span>Zen</span></div>
          <p style={{ marginTop: 6 }}>Soutien pour familles TSA</p>
        </div>
        <p style={{  fontSize: 15 }}>
          Réalisé par DevSpace Inc.
        </p>
        <p>© {new Date().getFullYear()} Parentszen. Tous droits réservés.</p>
      </footer>
    </>
  );
}
