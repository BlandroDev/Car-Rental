import { useState } from "react";
import { Features } from "./components/Features";
import { useGetCar } from "src/hooks/useGetCar";
import { Loader } from "../Loader";
import { ImgCar } from "./components/ImgCar";

export const Fleet = () => {
  const [modelo, setModelo] = useState("A1");
  const { dataCar } = useGetCar({ modelo });
  return (
    <section className="fleet">
      <h3 className="fleet__h3">Modelos de vehículos</h3>
      <h1 className="fleet__h1">Nuestra flota de alquiler</h1>
      <p className="fleet__p">
        Elija entre una variedad de nuestros increíbles vehículos para alquilar
        para su próxima aventura o viaje de negocios
      </p>
      <section className="fleet__section">
        <div className="fleet__models--section">
          <button
            className={`fleet__button--models ${
              modelo == "A1" ? "active" : ""
            }`}
            onClick={() => setModelo("A1")}
          >
            Audi A1 S-Line
          </button>
          <button
            className={`fleet__button--models ${
              modelo == "Golf 6" ? "active" : ""
            }`}
            onClick={() => setModelo("Golf 6")}
          >
            Volkswagen Golf 6
          </button>
          <button
            className={`fleet__button--models ${
              modelo == "Camry" ? "active" : ""
            }`}
            onClick={() => setModelo("Camry")}
          >
            Toyota Camry
          </button>
          <button
            className={`fleet__button--models ${modelo == 320 ? "active" : ""}`}
            onClick={() => setModelo(320)}
          >
            BMW 320 Modern Line
          </button>
          <button
            className={`fleet__button--models ${
              modelo == "Benz GLK" ? "active" : ""
            }`}
            onClick={() => setModelo("Benz GLK")}
          >
            Mercedes-Benz GLK
          </button>
          <button
            className={`fleet__button--models ${
              modelo == "Passat cc" ? "active" : ""
            }`}
            onClick={() => setModelo("Passat cc")}
          >
            VW Passat CC
          </button>
        </div>
        <div className="fleet__div--img">
          {dataCar[0] ? <ImgCar src={dataCar[0].src} /> : <Loader />}
        </div>
        <div className="fleet__features--section">
          <Features data={dataCar[0] || false} />
        </div>
      </section>
    </section>
  );
};
