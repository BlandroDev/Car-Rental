import { NavBar } from "../../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleCheck,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import imgCity from "src/assets/logos/city-home.png";
import imgCar from "src/assets/logos/car-home2.png";
import { Reserve } from "src/components/Reserve";
import { Plan } from "src/components/Plan";
import { Fleet } from "src/components/Fleet";
import { FirstBanner } from "src/components/FirstBanner";
import { Offer } from "src/components/Offer";
import { Testimonials } from "src/components/Testimonials";
import { Questions } from "src/components/Questions";
import { Download } from "src/components/Download";
import { Footer } from "src/components/Footer";
import { useEffect } from "react";
import { ObserverScrollUp } from "src/functions/ObserverScrollUp";
import { Helmet } from "react-helmet";
export const Home = () => {
  useEffect(() => {
    const scrollUpRefContainer = document.querySelector(".scrollElement");
    const scrollUpRef = document.getElementById("scrollUp");
    ObserverScrollUp(scrollUpRefContainer, scrollUpRef);
  }, []);
  return (
    <div className="container">
      <Helmet>
        <title>Car Rental</title>
      </Helmet>
      <header className="home scrollElement" id="header">
        <NavBar />
        <div className="home__div">
          <img
            className="home__img--city"
            src={imgCity}
            alt="Imagen de Ciudad"
          ></img>
        </div>
        <main className="home__main">
          <section className="home__section">
            <article className="home__article--main">
              <h4 className="home__h4--main">Planifica tu viaje ahora</h4>
              <h1 className="home__h1--main">
                Ahorra a <span className="home__span--h1">lo grande</span> con
                nuestro alquiler de coches
              </h1>
              <p className="home__p--main">
                Alquila el coche de tus sueños. Precios imbatibles, millas
                ilimitadas, opciones de recogida flexibles y mucho más.
              </p>
              <div className="home__div--main">
                <a className="btn-primary home__a" href="#reserve">
                  Reservar Paseo <FontAwesomeIcon icon={faCircleCheck} />
                </a>
                <button className="home__button--main btn-secondary">
                  Ver Más <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </article>
            <img
              className="home__img--car"
              src={imgCar}
              alt="Imagen de Carro Audio Rojo"
            ></img>
          </section>
        </main>
      </header>
      <main>
        <Reserve />
        <Plan />
        <Fleet />
        <FirstBanner />
        <Offer />
        <Testimonials padding="paddingHome" bgColor="bg-color-gray" />
        <Questions />
        <Download />
        <a className="home__scrollUp" id="scrollUp" href="#header">
          <FontAwesomeIcon icon={faAngleUp} />
        </a>
      </main>
      <Footer />
    </div>
  );
};
