const missionItems = [
  {
    title: "Sante Digitale",
    description:
      "Centralisez le suivi de sante de l'enfant avec des outils simples, lisibles et adaptes au quotidien des familles.",
    icon: "/icone/sante-digitale.png",
  },
  {
    title: "Education Eveillee",
    description:
      "Reliez apprentissage, prevention et accompagnement pour aider chaque enfant a grandir dans un cadre plus serein.",
    icon: "/icone/education-eveillee.png",
  },
  {
    title: "Bien-etre Global",
    description:
      "Favorisez une approche complete combinant habitudes de vie, ecoute, coordination et conseils personnalises.",
    icon: "/icone/bien-etre.png",
  },
];

const serviceItems = [
  {
    title: "Suivi sante",
    description:
      "Carnet de suivi digital, rappels utiles et vision claire pour accompagner l'evolution de votre enfant.",
    icon: "/icone/suivi-sante.png",
  },
  {
    title: "Conseils educatifs",
    description:
      "Des ressources pratiques, courtes et accessibles pour aider les parents au quotidien.",
    icon: "/icone/conseil-educatif.png",
  },
  {
    title: "Bien-etre",
    description:
      "Une approche humaine qui rassemble nutrition, sommeil, activites et equilibre emotionnel.",
    icon: "/icone/bien-etre.png",
  },
];

const reasons = [
  {
    title: "Simple",
    description:
      "Une interface intuitive pour suivre les besoins de l'enfant sans complexite inutile.",
    icon: "/icone/simple.png",
  },
  {
    title: "Accessible",
    description:
      "Une plateforme pensee pour les familles, les soignants et les structures educatives.",
    icon: "/icone/accessible.png",
  },
  {
    title: "Fiable",
    description:
      "Des parcours clairs et des informations utiles pour une meilleure prise de decision.",
    icon: "/icone/fiable.png",
  },
];

const testimonials = [
  {
    quote:
      "Mayna-Olthi nous a vraiment aide a suivre les habitudes de notre fille avec beaucoup plus de serenite.",
    author: "Maimouna Dia",
    role: "Maman de 3 ans",
    avatar: "/image/PartieMaimounadia.jpg",
  },
  {
    quote:
      "Lequipe a reussi a creer une experience rassurante, claire et tres utile pour les parents comme pour les professionnels.",
    author: "Dr. Talla",
    role: "Pediatre",
    avatar: "/image/partiDRTALLA.jpg",
  },
];

const presentationStats = [
  {
    value: "6 mois-5 ans",
    label: "Parcours pense pour la petite enfance",
  },
  {
    value: "3 axes",
    label: "Sante, education et bien-etre reunis",
  },
  {
    value: "100% local",
    label: "Presentation consultable directement dans le projet",
  },
];

function Icon({ name }) {
  const icons = {
    shield: (
      <>
        <path d="M12 3.75 18.5 6v5.72c0 3.92-2.54 6.99-6.5 8.53-3.96-1.54-6.5-4.61-6.5-8.53V6L12 3.75Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.7" />
      </>
    ),
    book: (
      <>
        <path d="M5 6.75A2.75 2.75 0 0 1 7.75 4h9.5A1.75 1.75 0 0 1 19 5.75v11.5A1.75 1.75 0 0 1 17.25 19h-9.5A2.75 2.75 0 0 0 5 21.75" />
        <path d="M7.75 4A2.75 2.75 0 0 0 5 6.75v15" />
        <path d="M9 8.5h7" />
        <path d="M9 12h7" />
      </>
    ),
    heart: (
      <>
        <path d="M12 19s-6.75-4.34-8.5-8.07C2.16 8.2 3.64 5 7.06 5c1.94 0 3.03 1.08 3.64 2 .61-.92 1.7-2 3.64-2 3.42 0 4.9 3.2 3.56 5.93C18.75 14.66 12 19 12 19Z" />
      </>
    ),
    screen: (
      <>
        <rect x="5" y="4.5" width="14" height="11" rx="2.5" />
        <path d="M9 19.5h6" />
        <path d="M12 15.5v4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
        <path d="m16.8 7.2 2.2-2.2" />
      </>
    ),
    spark: (
      <>
        <path d="m12 4 1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" />
        <path d="M5 18h.01" />
        <path d="M19 6h.01" />
      </>
    ),
    wand: (
      <>
        <path d="m5 19 8.5-8.5" />
        <path d="m13.5 10.5 1.4-1.4" />
        <path d="M15 5v2" />
        <path d="M19 9h-2" />
        <path d="m17.5 6.5-1 1" />
      </>
    ),
    devices: (
      <>
        <rect x="4" y="6" width="11" height="8" rx="1.8" />
        <rect x="16" y="8" width="4" height="10" rx="1.4" />
        <path d="M8 18h4" />
      </>
    ),
    badge: (
      <>
        <path d="M12 4.5 14.2 6l2.65-.12.87 2.5 2.03 1.73-1.05 2.44.35 2.63-2.35 1.2L15.6 19l-2.6-.5-2.6.5-1.1-2.62-2.35-1.2.35-2.63L4.25 10.1 6.28 8.37l.87-2.5L9.8 6 12 4.5Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.7" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5.5 8 6.5 4.7L18.5 8" />
      </>
    ),
    phone: (
      <>
        <path d="M8.2 4.5h7.6A1.7 1.7 0 0 1 17.5 6.2v11.6a1.7 1.7 0 0 1-1.7 1.7H8.2a1.7 1.7 0 0 1-1.7-1.7V6.2a1.7 1.7 0 0 1 1.7-1.7Z" />
        <path d="M11 16.5h2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 20s5.5-5.31 5.5-9.5A5.5 5.5 0 1 0 6.5 10.5C6.5 14.69 12 20 12 20Z" />
        <circle cx="12" cy="10.5" r="1.8" />
      </>
    ),
    facebook: (
      <>
        <path d="M13.5 20v-6.2h2.1l.3-2.5h-2.4V9.7c0-.72.2-1.2 1.23-1.2H16V6.3c-.22-.03-.98-.08-1.87-.08-1.85 0-3.13 1.13-3.13 3.2v1.85H9v2.5h2.12V20" />
      </>
    ),
    linkedin: (
      <>
        <path d="M7.2 9.5V17" />
        <path d="M7.2 7.4h.01" />
        <path d="M11 17V9.5" />
        <path d="M11 12.6c0-1.9 1.2-3.1 2.9-3.1 1.6 0 2.6 1 2.6 3.2V17" />
      </>
    ),
    instagram: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.4 7.6h.01" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function InfoCard({ title, description, icon, tone = "light" }) {
  const isImage = icon && icon.includes('.');
  return (
    <article className={`info-card info-card--${tone}`}>
      <div className={`icon-chip icon-chip--${tone}`}>
        {isImage ? (
          <img src={icon} alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
        ) : (
          <Icon name={icon} />
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function ContactItem({ icon, title, text }) {
  const isImage = icon && icon.includes('.');
  return (
    <div className="contact-item">
      <div className="contact-icon">
        {isImage ? (
          <img src={icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        ) : (
          <Icon name={icon} />
        )}
      </div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function App() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#accueil">
            <img src="/image/logo-mayna.png" alt="Mayna-Olthi Logo" className="brand-logo" />
          </a>

          <nav className="main-nav" aria-label="Navigation principale">
            <a href="#apropos">A Propos</a>
            <a href="#services">Fonctionnalites</a>
            <a href="#pourquoi">Pourquoi ?</a>
            <a href="#mission">Avantages</a>
            <a href="#temoignages">Temoignages</a>
          </nav>

          <a className="header-cta" href="#contact">
            Nous contacter
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="accueil">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Plateforme pediatrique et educative</p>
              <h1>
                Accompagner chaque enfant vers un avenir
                <span> en pleine sante</span>
              </h1>
              <p className="hero-text">
                Mayna-Olthi est la plateforme digitale qui reunit parents,
                professionnels de sante et accompagnants autour du bien-etre des
                enfants de 6 mois a 5 ans.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#services">
                  Decouvrir la plateforme
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-photo-card">
                <img
                  src="/image/premierparti.png"
                  alt="Apercu Mayna-Olthi"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="presentation-strip" aria-label="Resume de la presentation">
          <div className="container presentation-strip__grid">
            {presentationStats.map((item) => (
              <article className="presentation-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-card">
              <h2>Pret a simplifier le bien-etre de votre enfant ?</h2>
              <p>
                Recevez notre communaute de parents et de professionnels pour un
                accompagnement serein et eclaire.
              </p>
              <form className="newsletter-form" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Votre adresse email" />
                <button className="button button--primary" type="submit">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="feature-section" id="apropos">
          <div className="container feature-grid">
            <div className="feature-image">
              <img
                src="/image/partieAPropos.png"
                alt="Enfant souriant"
              />
            </div>

            <div className="feature-copy">
              <h2>Concu specifiquement pour la petite enfance</h2>
              <p>
                Nous nous concentrons sur la fenetre critique du developpement
                infantile afin d'offrir une hygiene de vie saine, un suivi plus
                clair et une meilleure coordination.
              </p>
              <ul className="feature-list">
                <li>Suivi des etapes motrices</li>
                <li>Developpement du langage</li>
                <li>Apprentissage de la socialisation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading section-heading--center">
              <h2>Services integres</h2>
            </div>

            <div className="card-grid card-grid--three card-grid--soft">
              {serviceItems.map((item) => (
                <InfoCard key={item.title} {...item} tone="soft" />
              ))}
            </div>
          </div>
        </section>

        <section className="reasons-section" id="pourquoi">
          <div className="container">
            <div className="section-heading section-heading--center">
              <h2>Pourquoi choisir Mayna-Olthi ?</h2>
            </div>

            <div className="reason-grid">
              {reasons.map((item) => {
                const isImage = item.icon && item.icon.includes('.');
                return (
                  <div className="reason-card" key={item.title}>
                    <div className="icon-chip icon-chip--outline">
                      {isImage ? (
                        <img src={item.icon} alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                      ) : (
                        <Icon name={item.icon} />
                      )}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mission-section" id="mission">
          <div className="container">
            <div className="section-heading section-heading--center section-heading--light">
              <p className="section-kicker">Notre Mission</p>
              <h2>
                Nous soutenons le developpement des enfants dans une approche
                claire, preventive et humaine.
              </h2>
            </div>

            <div className="card-grid card-grid--three">
              {missionItems.map((item) => (
                <InfoCard key={item.title} {...item} tone="white" />
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section" id="temoignages">
          <div className="container">
            <div className="section-heading section-heading--center">
              <h2>Ils nous font confiance</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.author}>
                  <div className="stars">*****</div>
                  <p>{item.quote}</p>
                  <div className="testimonial-author">
                    {item.avatar ? (
                      <img src={item.avatar} alt={item.author} className="avatar-img" />
                    ) : (
                      <span className="avatar">{item.author.charAt(0)}</span>
                    )}
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <h2>Rejoignez-nous des aujourd'hui</h2>
              <p>
                Offrez a votre enfant le meilleur accompagnement digital pour son
                avenir sereinement.
              </p>
              <a className="button button--primary" href="#contact">
                Creer mon compte gratuit
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="section-kicker">Contactez-nous</p>
              <h2>
                Nous serons heureux de vous aider et de vous accompagner dans
                votre premiere prise en main.
              </h2>
            </div>

            <div className="contact-grid">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <label>
                    <span>Nom complet</span>
                    <input type="text" placeholder="Votre nom" />
                  </label>
                  <label>
                    <span>Adresse email</span>
                    <input type="email" placeholder="Email" />
                  </label>
                </div>

                <label>
                  <span>Message</span>
                  <textarea
                    rows="5"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </label>

                <button className="button button--primary button--block" type="submit">
                  Envoyer le message
                </button>
              </form>

              <div className="contact-panel">
                <ContactItem
                  icon="/icone/email.png"
                  title="Email"
                  text="binetahanne198@gmail.com"
                />
                <ContactItem icon="/icone/telephone.png" title="Telephone" text="785370835" />
                <ContactItem
                  icon="/icone/siege-social.png"
                  title="Siege social"
                  text="Site sonatel patt d'oie villa N°57"
                />

                <div className="socials">
                  <span>Suivez-nous</span>
                  <div className="social-list">
                    <a href="/" aria-label="Facebook">
                      <Icon name="facebook" />
                    </a>
                    <a href="/" aria-label="LinkedIn">
                      <Icon name="linkedin" />
                    </a>
                    <a href="/" aria-label="Instagram">
                      <Icon name="instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#accueil">
            <img src="/image/logo-mayna.png" alt="Mayna-Olthi Logo" className="brand-logo" />
          </a>
          <div className="footer-links">
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>
            <a href="#mission">Mentions legales</a>
          </div>
          <p>(c) 2026 Mayna-Olthi. Tous droits reserves.</p>
        </div>
      </footer>
    </div>
  );
}
