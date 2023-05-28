import { NavBar } from "src/components/NavBar";
import {
  garageIcon,
  pointsIcon,
  cochesIcon,
} from "src/assets/icons/about icons";
import people from "src/assets/images/peoples/about-people.jpg";
import { Plan } from "src/components/Plan";
import { SecondBanner } from "src/components/SecondBanner";
import { Footer } from "src/components/Footer";
import { Helmet } from "react-helmet";
export const About = () => {
  return (
    <section className="about">
      <Helmet>
        <title>Car Rental | Acerca de</title>
      </Helmet>
      <NavBar className="navBar__image" title={"Acerca de"} subtitle={"Acerca de"}/>
      <div className="about__content">
        <img
          className="about__img--content"
          src={people}
          alt="Imagen de dos personas conversando"
        ></img>
        <div className="about__description--content">
          <h4 className="about__h4">Acerca de la compañía</h4>
          <h2 className="about__h2">
            Arrancas el motor y comienza tu aventura
          </h2>
          <p className="about__p">
            Cierto pero ella pero timidez por qué cabaña. Guy el instrumento
            puesto señor ruega ofendiendo. fingido exquisito verte cordialmente
            el vos. Semanas tranquilas o molestas. Inmóvil si no a la
            imprudencia ofensiva no hay precaución. Mi complacido como
            disposición asistió fuertemente.
          </p>
          <footer className="about__footer--content">
            <div className="about__content--footer">
              <img
                className="about__img--footer"
                src={cochesIcon}
                alt="Icono de Coche"
              ></img>
              <h2 className="about__h2--footer">20</h2>
              <p className="about__p--footer">Tipos de coches</p>
            </div>

            <div className="about__content--footer">
              <img
                className="about__img--footer"
                src={pointsIcon}
                alt="Icono de Coche"
              ></img>
              <h2 className="about__h2--footer">85</h2>
              <p className="about__p--footer">Puntos de venta de alquiler</p>
            </div>

            <div className="about__content--footer">
              <img
                className="about__img--footer"
                src={garageIcon}
                alt="Icono de Coche"
              ></img>
              <h2 className="about__h2--footer">75</h2>
              <p className="about__p--footer">Tienda de reparacion</p>
            </div>
          </footer>
        </div>
      </div>
      <Plan />
      <SecondBanner />
      <Footer />
    </section>
  );
};
