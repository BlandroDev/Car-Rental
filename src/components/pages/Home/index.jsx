import { NavBar } from "../../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import imgCity from "src/assets/logos/city-home.png";
import imgCar from "src/assets/logos/car-home2.png";
import { Reserve } from "src/components/Reserve";
export const Home = () => {
  return (
    <div className="container">
    <header className="home">
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
              <button className="home__button--main btn-primary">
                Reservar Paseo <FontAwesomeIcon icon={faCircleCheck} />
              </button>
              <button className="home__button--main btn-secondary">
                Ver Más <FontAwesomeIcon icon={faChevronRight} />
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
    <Reserve/>
    </div>
  );
};
