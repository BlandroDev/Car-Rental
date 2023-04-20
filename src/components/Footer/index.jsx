import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__rentBox--content">
          <h3 className="footer__h3--rentBox h3">
            CAR <span className="footer__span--h3">Rental</span>
          </h3>
          <p className="footer__p--rentBox">
            Ofrecemos una amplia gama de vehículos para todas sus necesidades de
            conducción. Tenemos el coche perfecto para satisfacer tus
            necesidades.
          </p>
          <a className="footer__a--rentBox" href="tel:+595 994260858">
            <FontAwesomeIcon icon={faPhone} />
            (+595)-994-260-858
          </a>
          <a
            className="footer__a--rentBox"
            href="mailto:  alquilerdecoches@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            alquilerdecoches@gmail.com
          </a>
        </div>
        <div className="footer__companyBox--content">
          <h3 className="footer__h3--companyBox h3">COMPAÑÍA</h3>
          <ul className="footer__ul--companyBox">
            <li className="footer__li--companyBox">Historia</li>
            <li className="footer__li--companyBox">Quiero Trabajar</li>
            <li className="footer__li--companyBox">Móvil</li>
            <li className="footer__li--companyBox">Blog</li>
            <li className="footer__li--companyBox">Cómo trabajamos</li>
          </ul>
        </div>
        <div className="footer__hoursBox--content">
          <h3 className="footer__h3--hoursBox h3">HORAS LABORALES</h3>
          <p className="footer__p--hoursBox">Lun - Vie: 9:00 AM - 9:00 PM</p>
          <p className="footer__p--hoursBox">Sáb: 9:00 AM - 7:00 PM</p>
          <p className="footer__p--hoursBox">Dom: Cerrado</p>
        </div>
        <div className="footer__suscribeBox--content">
          <h3 className="footer__h3--suscribeBox h3">SUSCRIPCIÓN</h3>
          <p className="footer__p--suscribeBox">
            Suscriba su dirección de correo electrónico para recibir las últimas
            noticias y actualizaciones.
          </p>
          <input
            placeholder="Introducir Correo"
            className="footer__txt--suscribeBox"
          ></input>
          <button className="footer__button--suscribeBox">Suscribirme</button>
        </div>
      </div>
    </footer>
  );
};
