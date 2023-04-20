import playStore from "src/assets/svg/playStore.svg";
import appStore from "src/assets/svg/appStore.svg";

export const Download = () => {
  return (
    <section className="download">
      <div className="download__content">
        <h2 className="download__h2--content">
          Descarga nuestra aplicación para sacarle el máximo partido
        </h2>
        <p className="download__p--content">
          Tirado tímido denota diez damas aunque pregunte sierra. O pensando en
          pedir música para eventos. Incómodo por lo que la intención es
          defectuosa al estar convencida. Llevó meses de ingreso propio y te
          casas.
        </p>
        <div className="download__buttons--content">
          <img
            className="download__img--content"
            src={playStore}
            alt="Botton con imagen de Play Store"
          ></img>
          <img
            className="download__img--content"
            src={appStore}
            alt="Botton con imagen de App Store"
          ></img>
        </div>
      </div>
    </section>
  );
};
