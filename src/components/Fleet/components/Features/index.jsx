export const Features = ({ data }) => {
  return (
    <>
      <div className="fleet__div--features">
        <p className="fleet__p--features w-100">
          <b>{`$ ${data.costo ? data.costo : ""}`} &nbsp;</b>/ alquiler por dia
        </p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">Marca</p>
        <p className="fleet__p--features">{`${data.marca || ""}`}</p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">Modelo </p>
        <p className="fleet__p--features">{`${data.modelo || ""}`}</p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">Año </p>
        <p className="fleet__p--features">{`${data.año || ""}`}</p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">Puertas </p>
        <p className="fleet__p--features">{`${data.puertas || ""}`}</p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">A.C </p>{" "}
        <p className="fleet__p--features">{`${data.aire || ""}`}</p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">Transmision</p>{" "}
        <p className="fleet__p--features">{`${data.transmision || ""}`}</p>
      </div>
      <div className="fleet__div--features">
        <p className="fleet__p--features borderRight">Combustible</p>{" "}
        <p className="fleet__p--features">{`${data.combustible || ""}`}</p>
      </div>
      <button className="fleet__button--features">RESERVAR AHORA</button>
    </>
  );
};
