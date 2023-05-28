import { NavBar } from "src/components/NavBar";
import { Model } from "./components/Model";
import { SecondBanner } from "src/components/SecondBanner";
import { Footer } from "src/components/Footer";
import { cars } from "src/data/cars";
import { Helmet } from "react-helmet";
export const Models = () => {
  return (
    <section className="models">
      <Helmet>
        <title>Car Rental | Modelos</title>
      </Helmet>
      <NavBar className="navBar__image" title={"Modelos"} subtitle={"Modelos"}/>
      <div className="models__content">
        <div className="models__boxModels">
          {cars.map((models) => (
            <Model
              brand={models.marca}
              model={models.modelo}
              fuel={models.combustible}
              transmision={models.transmision}
              doors={models.puertas}
              key={models.modelo}
              price={models.costo}
              src={models.src_2}
            />
          ))}
        </div>
      </div>
      <SecondBanner />
      <Footer />
    </section>
  );
};
