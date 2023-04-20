import people1 from "src/assets/images/peoples/people1.jpg";
import people2 from "src/assets/images/peoples/people2.jpg";
import { People } from "./components/People";

export const Testimonials = ({ padding = "", bgColor = "" }) => {
  return (
    <section className={`testimonials ${padding} ${bgColor}`}>
      <div className="testimonials__content">
        <div className="testimonials__boxTitles--content">
          <h4 className={`testimonials__h4--boxTitles`}>
            Revisado por personas
          </h4>
          <h2 className="testimonials__h2--boxTitles">
            Testimonios de clientes
          </h2>
          <p className="testimonials__p--boxTtitles">
            Descubra el impacto positivo que hemos tenido en nuestros clientes
            leyendo sus testimonios. Nuestros clientes han experimentado nuestro
            servicio y resultados, y están ansiosos por compartir sus
            experiencias positivas con usted.
          </p>
        </div>
        <People
          testimonial='"¡Alquilamos un automóvil desde este sitio web y tuvimos una experiencia increíble! La reserva fue fácil y las tarifas de alquiler fueron muy asequibles".'
          name={"Raúl Rojas"}
          city="Luque"
          src={people1}
        />
        <People
          testimonial='"El auto estaba en excelentes condiciones e hizo que nuestro viaje fuera aún mejor. ¡Muy recomendable para este sitio web de alquiler de autos!"'
          name={"Daniel Ruiz"}
          city="Asunción"
          src={people2}
        />
      </div>
    </section>
  );
};
