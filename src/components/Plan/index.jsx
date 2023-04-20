import { attention, selection, drive } from "src/assets/icons/Plan icons";
export const Plan = () => {
  return (
    <section className="plan">
      <h3 className="plan__h3">Planifica tu viaje ahora</h3>
      <h2 className="plan__h2">Alquiler de coches fácil y rápido</h2>
      <div className="plan__benefits">
        <div className="plan__box--benefits">
          <img
            src={selection}
            alt="Imagen de seleccion de auto"
            className="plan__img--benefits"
          ></img>
          <h3 className="plan__h3--benefits">Seleccionar coche</h3>
          <p className="plan__p--benefits">
            Ofrecemos una amplia gama de vehículos para todas sus necesidades de
            conducción. Tenemos el auto perfecto para satisfacer tus necesidades
          </p>
        </div>
        <div className="plan__box--benefits">
          <img
            src={attention}
            alt="Imagen de Operador Telefonico"
            className="plan__img--benefits"
          ></img>
          <h3 className="plan__h3--benefits">Operador de contacto</h3>
          <p className="plan__p--benefits">
            Nuestros operadores expertos y amables siempre están listos para
            ayudar con cualquier pregunta o inquietud.
          </p>
        </div>
        <div className="plan__box--benefits">
          <img
            src={drive}
            alt="Imagen de Auto en marcha"
            className="plan__img--benefits"
          ></img>
          <h3 className="plan__h3--benefits">Manejemos</h3>
          <p className="plan__p--benefits">
            Ya sea que salga a la carretera abierta, lo tenemos cubierto con
            nuestra amplia gama de automóviles.
          </p>
        </div>
      </div>
    </section>
  );
};
