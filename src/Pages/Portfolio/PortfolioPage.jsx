import "./PortfolioPage.scss"
import {Link} from "react-router"
import Sulayman from "../../assets/Sulayman_preview.webp"
import Preview from "../../assets/picture_dev_preview.webp"
import Work3 from "../../assets/work3.webp"
import Ohmyfood from "../../assets/Ohmyfood_preview.webp"
import Sophie from "../../assets/capture_sophiebluel.webp"
import Kasa from "../../assets/capture_kasa.webp"
import Nina from "../../assets/capture nina_carducci.webp"
import Event from "../../assets/Capture 724_events.webp"
import Bank from "../../assets/Capture argent bank.webp"

export default function App() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <Link to="/">
                <a href="#" className="nav__logo">Sulayman</a>
            </Link>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link">Accueil</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">A propos</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Compétences</a></li>
              <li className="nav__item"><a href="#work" className="nav__link">Projets</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </div>
          
          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        {/* ===== HOME ===== */}
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Bonjour,<br />
              <span className="home__title-color">Sulayman</span><br />
              Développeur web
            </h1>
            <a href="#contact" className="button">Contact</a>
          </div>

          <div className="home__social">
            <a href="https://www.linkedin.com/in/sulayman-canteau-458716370/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/Sulayman2005?tab=repositories" className="home__social-icon"><i className='bx bxl-github'></i></a>
          </div>

          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" maskType="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                <image href={Sulayman} className="home__blob-img" x="50" y="60" alt="image de sulayman l'auteur de ce portfolio" />
              </g>
            </svg>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="about section" id="about">
          <h2 className="section-title">A propos</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src={Preview} alt="image montrant une caricature du développement web" />
            </div>
            <div>
              <h2 className="about__subtitle">Sulayman</h2>
              <p className="about__text">
                J’ai suivi une formation de développeur web d’une durée de 9 mois, durant laquelle j’ai acquis les bases du développement web, notamment côté front-end. En complément, j’ai développé des compétences en no-code, en utilisant des outils comme WordPress et Webflow pour améliorer le design et l’ergonomie des interfaces.<br /><br />
                En dehors de ma formation, j’ai également pris l’initiative d’effectuer plusieurs stages dans le domaine du web, ce qui m’a permis de renforcer mes compétences sur le terrain et de mieux comprendre les attentes du milieu professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Compétences</h2>
          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Projet professionnel</h2>
              <p className="skills__text">J&apos;ai pu conquérir des compétences côté Front-end notamment Html, CSS, JavaScript et React</p>
              
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-html5 skills__icon'></i>
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html"></div>
                <div><span className="skills__percentage">95%</span></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-css3 skills__icon'></i>
                  <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css"></div>
                <div><span className="skills__percentage">85%</span></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-javascript skills__icon'></i>
                  <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js"></div>
                <div><span className="skills__percentage">65%</span></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxs-paint skills__icon'></i>
                  <span className="skills__name">React</span>
                </div>
                <div className="skills__bar skills__ux"></div>
                <div><span className="skills__percentage">85%</span></div>
              </div>
            </div>

            <div>
              <img src={Work3} alt="image d'une personne tapant sur son clavier" className="skills__img" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ===== WORK ===== */}
        <section className="work section" id="work">
          <h2 className="section-title">Projets professionnels</h2>
          <div className="work__container bd-grid">

            <div className="work__item">
              <a href="https://github.com/Sulayman2005/Canteau_Sulayman_P4_ohmyfood" className="work__img">
                <img src={Ohmyfood} alt="projet ohmyfood" loading="lazy" />
              </a>
              <p>Création d’un site mobile-first de menus interactifs pour des restaurants à Paris. Intégration HTML/CSS poussée avec animations.</p>
              <p><em>Stack :</em> HTML, SASS, CSS3</p>
            </div>

            <div className="work__item">
              <a href="https://github.com/Sulayman2005/Page_web_dynamique_javascript" className="work__img">
                <img src={Sophie} alt="projet sophie bluel" loading="lazy" />
              </a>
              <p>Développement d&apos;une page web dynamique avec JavaScript vanilla. Intégration d’un système de filtres interactifs pour une galerie.</p>
              <p><em>Stack :</em> HTML, CSS, JavaScript</p>
            </div>

            <div className="work__item">
              <a href="https://github.com/Sulayman2005/Application-web-React" className="work__img">
                <img src={Kasa} alt="projet kasa" loading="lazy" />
              </a>
              <p>Création d’une application web React affichant des logements. Utilisation de React Router et composants dynamiques.</p>
              <p><em>Stack :</em> React, JavaScript, CSS</p>
            </div>

            <div className="work__item">
              <a href="https://github.com/Sulayman2005/Projet-nina-carducci" className="work__img">
                <img src={Nina} alt="projet nina carducci" loading="lazy" />
              </a>
              <p>Optimisation SEO et accessibilité d’un site existant. Travail sur les performances, structure sémantique, et métadonnées.</p>
              <p><em>Stack :</em> HTML, CSS, Lighthouse, SEO</p>
            </div>

            <div className="work__item">
              <a href="https://github.com/Sulayman2005/debuggez_application" className="work__img">
                <img src={Event} alt="projet debuggez une application" loading="lazy" />
              </a>
              <p>Débogage et correction d’une application JavaScript existante. Résolution de bugs liés aux formulaires et aux appels API.</p>
              <p><em>Stack :</em> JavaScript, Chrome DevTools</p>
            </div>

            <div className="work__item">
              <a href="https://github.com/Sulayman2005/Aregnt_Bank" className="work__img">
                <img src={Bank} alt="projet argent bank" loading="lazy" />
              </a>
              <p>Implémentation du front-end d’une application bancaire avec React et Redux. Authentification, gestion de session et données utilisateurs.</p>
              <p><em>Stack :</em> React, Redux, JavaScript, API REST</p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form action="https://formspree.io/f/xvgrejgp" method="POST" className="contact__form">
              <input type="text" name="name" placeholder="Nom" className="contact__input" required />
              <input type="email" name="email" placeholder="Email" className="contact__input" required />
              <textarea name="message" placeholder="Votre message..." cols="0" rows="10" className="contact__input" required></textarea>
              <input type="submit" value="Envoyer" className="contact__button button" />
            </form>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p className="footer__title">Sulayman</p>
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=61574804383983&locale=fr_FR" className="footer__icon"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/" className="footer__icon"><i className='bx bxl-instagram'></i></a>
          <a href="https://x.com/home?locale=fr" className="footer__icon"><i className='bx bxl-twitter'></i></a>
        </div>
        <p className="footer__copy">&#169; All rights reserved</p>
      </footer>
    </>
  );
}

