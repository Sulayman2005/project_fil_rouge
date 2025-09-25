import React from "react"
import "./PortfolioPage.scss"

const PortfolioPage = () => {
  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">Sulayman</a>
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
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Bonjour,<br /> <span className="home__title-color">Sulayman</span><br />Développeur web
            </h1>
            <a href="#contact" className="button">Contact</a>
          </div>

          <div className="home__social">
            <a href="https://www.linkedin.com/in/sulayman-canteau-458716370/" className="home__social-icon"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Sulayman2005?tab=repositories" className="home__social-icon"><i className="bx bxl-github"></i></a>
          </div>

          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467">
              <mask id="mask0" maskType="alpha">
                <path d="M9.19 145.96C34.02 76.58 114.86 54.73 184.11 29.48C245.80 6.98 311.86 -14.95 370.73 14.14C431.20 44.02 467.94 107.50 477.19 174.31C485.89 237.22 454.93 294.37 416.50 344.95C373.74 401.24 326.06 462.80 255.44 466.18C179.41 469.83 111.55 422.13 65.15 361.80C17.48 299.81 -17.16 219.58 9.19 145.96Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19 145.96C34.02 76.58 114.86 54.73 184.11 29.48C245.80 6.98 311.86 -14.95 370.73 14.14C431.20 44.02 467.94 107.50 477.19 174.31C485.89 237.22 454.93 294.37 416.50 344.95C373.74 401.24 326.06 462.80 255.44 466.18C179.41 469.83 111.55 422.13 65.15 361.80C17.48 299.81 -17.16 219.58 9.19 145.96Z"/>
                <image className="home__blob-img" x="50" y="60" href="assets/img/Sulayman_preview.webp" />
              </g>
            </svg>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title">A propos</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src="assets/img/picture_dev_preview.webp" alt="caricature développement web" />
            </div>
            <div>
              <h2 className="about__subtitle">Sulayman</h2>
              <p className="about__text">
                J’ai suivi une formation de développeur web d’une durée de 9 mois...
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__title">Sulayman</p>
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=61574804383983&locale=fr_FR" className="footer__icon"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/" className="footer__icon"><i className="bx bxl-instagram"></i></a>
          <a href="https://x.com/home?locale=fr" className="footer__icon"><i className="bx bxl-twitter"></i></a>
        </div>
        <p className="footer__copy">© All rights reserved</p>
      </footer>
    </>
  )
}

export default PortfolioPage
