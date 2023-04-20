import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export const People = ({ testimonial, name, city, src }) => {
  return (
    <div className="testimonials__boxTestimonial--content">
      <header className="testimonials__header--content">
        <p className="testimonials__p--header">{testimonial}</p>
      </header>
      <footer className="testimonials__footer--content">
        <div className="testimonials__perfilBox--content">
          <img
            className="testimonials__img--footer"
            src={src}
            alt="Imagen de Persona"
          ></img>
          <div className="testimonials__peopleData--footer">
            <h5 className="testimonials__h5--footer">{name}</h5>
            <p className="testimonials__p--footer">{city}</p>
          </div>
        </div>
        <span className="testimonials__span--footer">
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="testimonials__icon--footer"
          />
        </span>
      </footer>
    </div>
  );
};
