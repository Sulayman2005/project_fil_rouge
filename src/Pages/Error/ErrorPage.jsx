import "../Error/Error.scss"
import { Link } from "react-router"
import image from "../../assets/picture_vert.png"

function ErrorPage() {
    return (
        <>
            <section className="all_element">
                <img src={image} alt="image pour illustrer le message d'erreur" className="picture_error" />
                <div className="error_page">OUPS ! PAGE INTROUVABLE</div>
                <p className="text_error">Vous avez certainement frappé à la mauvaise porte, 
                car je n'arrive pas à poser mon oeil sur la page que vous cherchez
                </p>
                <Link to="/">
                    <button className="button_error">Retour à L'accueil</button>
                </Link>
            </section>
            <footer className="footer2">
                <p className="footer-text2">Copyright 2020 Argent Bank</p>
            </footer>
        </>
    )
}

export default ErrorPage