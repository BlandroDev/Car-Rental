import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { handleSubmit } from "src/functions/handleSubmit";
export const Reserve = () => {
  return (
    <section className="reserve" id="reservar">
      <main className="reserve__main">
        <h2 className="reserve__h2">Reservar un Coche</h2>
        <form className="reserve__form" onSubmit={handleSubmit}>
          <div className="reserve__selected">
            <label className="reserve__label--selected" htmlFor="carSelect">
              <FontAwesomeIcon icon={faCar} className="reserve__icon" />
              Seleccionar modelo <b className="reserve__b--form">*</b>
            </label>
            <select className="reserve__select--selected" name="carSelect" id="carSelect">
              <option className="reserve__option">Audi A1S-Line</option>
              <option className="reserve__option">Volkswagen</option>
              <option className="reserve__option">Kia</option>
              <option className="reserve__option">Toyota</option>
              <option className="reserve__option">Jeep</option>
              <option className="reserve__option">Mercedes</option>
            </select>
          </div>
          <div className="reserve__selected">
            <label className="reserve__label--selected" htmlFor="pickupSelect">
              
              <FontAwesomeIcon
                icon={faLocationDot}
                className="reserve__icon"
              />
              Recogida <b className="reserve__b--form">*</b>
            </label>
            <select className="reserve__select--selected" name="pickupSelect" id="pickupSelect">
              <option className="reserve__option">Asunción</option>
              <option className="reserve__option">Capiata</option>
              <option className="reserve__option">San Lorenzo</option>
              <option className="reserve__option">Villa Elisa</option>
              <option className="reserve__option">Lambare</option>
              <option className="reserve__option">Luque</option>
            </select>
          </div>
          <div className="reserve__selected">
            <label className="reserve__label--selected" htmlFor="deliverySelect">
              <FontAwesomeIcon icon={faLocationDot} className="reserve__icon" />
              Entrega <b className="reserve__b--form">*</b>
            </label>
            <select className="reserve__select--selected" name="deliverySelect" id="deliverySelect">
              <option className="reserve__option">Asunción</option>
              <option className="reserve__option">Capiata</option>
              <option className="reserve__option">San Lorenzo</option>
              <option className="reserve__option">Villa Elisa</option>
              <option className="reserve__option">Lambare</option>
              <option className="reserve__option">Luque</option>
            </select>
          </div>
          <div className="reserve__selected">
            <label className="reserve__label--selected" htmlFor="pickupDate">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="reserve__icon"
              />
              Fecha de Recogida <b className="reserve__b--form">*</b>
            </label>
            <input type="date" className="reserve__date--selected" name="pickupDate" id="pickupDate"></input>
          </div>
          <div className="reserve__selected">
            <label className="reserve__label--selected" htmlFor="deliveryDate">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="reserve__icon"
              />
              Fecha de Entrega <b className="reserve__b--form">*</b>
            </label>
            <input type="date" className="reserve__date--selected" name="deliveryDate" id="deliveryDate"></input>
          </div>
          <button className="reserve__button">Buscar</button>
        </form>
      </main>
    </section>
  );
};
