import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faStar } from "@fortawesome/free-solid-svg-icons";
export const Model = ({
  brand,
  model,
  fuel,
  doors,
  price,
  transmision,
  src,
}) => {
  return (
    <div className="models__model">
      <img
        className="models__img--model"
        src={src}
        alt="imagen de carro audi a1 blanco"
      ></img>
      <div className="models__features--model">
        <header className="models__header--features">
          <h2 className="models__h2--features">
            {`${brand}`} <b>{`$ ${price}`}</b>
          </h2>
          <div className="models__calification--header">
            <div className="models__icons--calification">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="models__p--header">por día</p>
          </div>
        </header>
        <div className="models__description--features">
          <div className="models__format--description">
            <FontAwesomeIcon icon={faCarSide} />
            <p className="models__p--description">{`${model}`}</p>
          </div>
          <div className="models__format--description">
            <p className="models__p--description">{`${doors}`}</p>
            <FontAwesomeIcon icon={faCarSide} />
          </div>
        </div>
        <div className="models__description--features">
          <div className="models__format--description">
            <FontAwesomeIcon icon={faCarSide} />
            <p className="models__p--description">{`${transmision}`}</p>
          </div>
          <div className="models__format--description">
            <p className="models__p--description">{`${fuel}`}</p>
            <FontAwesomeIcon icon={faCarSide} />
          </div>
        </div>
      </div>
      <button className="models__button--model">Reservar paseo</button>
    </div>
  );
};
