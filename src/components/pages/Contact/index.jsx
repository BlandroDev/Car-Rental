import { NavBar } from "src/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { SecondBanner } from "src/components/SecondBanner";
import { Footer } from "src/components/Footer";
import { handleSubmit } from "src/functions/handleSubmit";
import { Helmet } from "react-helmet";
export const Contact = () => {
  return (
    <section className="contact">
      <Helmet>
        <title>Car Rental | Contacto</title>
      </Helmet>
      <NavBar className="navBar__image" title={"Contacto"} subtitle={"Contacto"}/>
      <div className="contact__content">
        <div className="contact__description">
          <h1 className="contact__h1--description">
            ¿Necesita información adicional?
          </h1>
          <p className="contact__p--description">
            Un profesional multifacético experto en múltiples campos de
            investigación, desarrollo y especialista en aprendizaje. Más de 15
            años de experiencia.
          </p>
          <a className="contact__a--description" href="tel:+595 994260858">
            <FontAwesomeIcon
              icon={faPhone}
              className="contact__icon--description"
            />
            (+595)-994-260-858
          </a>
          <a
            className="contact__a--description"
            href="mailto:  alquilerdecoches@gmail.com"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact__icon--description"
            />
            alquilerdecoches@gmail.com
          </a>
          <a className="contact__a--description">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="contact__icon--description"
            />
            Asunción
          </a>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label--form" htmlFor="contact_name">
            Nombre completo <b className="contact__b--label">*</b>
          </label>
          <input
            className="contact__inputTxt--form"
            placeholder='Ej: "Fernando Ruiz"'
            name="contact_name"
            id="contact_name"
          />
          <label className="contact__label--form" htmlFor="contact_email">
            Correo electrónico <b className="contact__b--label">*</b>
          </label>
          <input
            className="contact__inputTxt--form"
            placeholder="sucorreoelectronico@ejemplo.com"
            name="contact_email"
            id="contact_email"
          />
          <label className="contact__label--form" htmlFor="contact_text">
            Cuéntanos al respecto <b className="contact__b--label">*</b>
          </label>
          <textarea
            className="contact__txt--form"
            placeholder="Escribe aquí..."
            name="contact_text"
            id="contact_text"
          />
          <button className="contact__button--form">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="contact__icon--description"
            />
            Enviar mensaje
          </button>
        </form>
      </div>
      <SecondBanner />
      <Footer />
    </section>
  );
};
