import { cars } from "src/assets/images/cars";
import { driveIcon, dolarIcon, handIcon } from "src/assets/icons/offer icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export const Offer = () => {
  return (
    <section className="offer">
      <div className="offer__container">
        <img
          className="offer__img"
          src={cars}
          alt="Imagen de Vehiculos Juntos"
        ></img>
        <div className="offer__content">
          <div className="offer__description">
            <h4 className="offer__h4--description">Por qué elegirnos</h4>
            <h2 className="offer__h2--description">
              Las ofertas mejor valoradas que jamás encontrarás
            </h2>
            <p className="offer__p--description">
              Descubre las mejores ofertas que jamás encontrarás con nuestras
              inmejorables ofertas. Estamos dedicados a brindarle el mejor valor
              por su dinero, para que pueda disfrutar de servicios y productos
              de alta calidad sin gastar mucho dinero. Nuestras ofertas están
              diseñadas para brindarle la mejor experiencia de alquiler, así que
              no pierda la oportunidad de ahorrar en grande.
            </p>
            <a className="offer__a--description" href="#reservar">
              Búscar Detalles <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
          <div className="offer__features">
            <div className="offer__box--features">
              <img
                className="offer__img--features"
                src={driveIcon}
                alt="Icono de Conducir"
              ></img>
              <div className="offer__words--features">
                <h3 className="offer__h3--features">
                  Conducir a campo traviesa
                </h3>
                <p className="offer__p--features">
                  Lleve su experiencia de manejo al siguiente nivel con nuestros
                  vehículos de primer nivel para sus aventuras a campo traviesa.
                </p>
              </div>
            </div>
            <div className="offer__box--features">
              <img
                className="offer__img--features"
                src={dolarIcon}
                alt="Icono de Conducir"
              ></img>
              <div className="offer__words--features">
                <h3 className="offer__h3--features">Precios todo incluido</h3>
                <p className="offer__p--features">
                  Obtenga todo lo que necesita a un precio conveniente y
                  transparente con nuestra política de precios con todo
                  incluido.
                </p>
              </div>
            </div>
            <div className="offer__box--features">
              <img
                className="offer__img--features"
                src={handIcon}
                alt="Icono de Conducir"
              ></img>
              <div className="offer__words--features">
                <h3 className="offer__h3--features">Sin cargos ocultos</h3>
                <p className="offer__p--features">
                  Disfrute de la tranquilidad con nuestra política de cargos no
                  ocultos. Creemos en precios transparentes y honestos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
