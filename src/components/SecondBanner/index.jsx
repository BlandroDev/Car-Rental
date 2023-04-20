import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export const SecondBanner = () => {
  return (
    <section className="secondBanner">
      <div className="secondBanner__effect">
        <div className="secondBanner__content">
          <h1 className="secondBanner__h1">
            Reserva un coche poniéndote en contacto con nosotros
            <span className="secondBanner__span">
              <FontAwesomeIcon icon={faPhone} /> (123) 456-7869
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
