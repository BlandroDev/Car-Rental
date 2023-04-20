import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export const Questions = () => {
  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);
  const [thirdQuestion, setThirdQuestion] = useState(false);
  return (
    <section className="questions">
      <div className="questions__content">
        <h4 className="questions__h4--content">Respondemos a tus dudas</h4>
        <h2 className="questions__h2--content">Preguntas frecuentes</h2>
        <p className="questions__p--content">
          Preguntas frecuentes sobre el proceso de reserva de alquiler de
          automóviles en nuestro sitio web: respuestas a inquietudes y consultas
          comunes.
        </p>
        <div className="questions__boxQuestions">
          <button
            className={`questions__button--boxQuestions ${
              firstQuestion && "active"
            }`}
            onClick={() => {
              setFirstQuestion(!firstQuestion);
              if (secondQuestion) setSecondQuestion(false);
              if (thirdQuestion) setThirdQuestion(false);
            }}
          >
            <p className="questions__p--button">
              1. ¿Qué tiene de especial comparar ofertas de alquiler de coches?
            </p>

            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div
            className={`questions__answers ${firstQuestion && "openAnswer"}`}
          >
            <p className="questions__p--boxQuestions">
              Comparar las ofertas de alquiler de autos es importante, ya que
              ayuda a encontrar la mejor oferta que se ajuste a su presupuesto y
              requisitos, lo que garantiza que obtenga el máximo valor por su
              dinero. Al comparar varias opciones, puede encontrar ofertas que
              ofrecen precios más bajos, servicios adicionales o mejores modelos
              de automóviles. Puede encontrar ofertas de alquiler de automóviles
              investigando en línea y comparando precios de diferentes compañías
              de alquiler.
            </p>
          </div>
          <button
            className={`questions__button--boxQuestions ${
              secondQuestion && "active"
            }`}
            onClick={() => {
              setSecondQuestion(!secondQuestion);
              if (firstQuestion) setFirstQuestion(false);
              if (thirdQuestion) setThirdQuestion(false);
            }}
          >
            <p className="questions__p--button">
              2. ¿Cómo encuentro las ofertas de alquiler de coches?
            </p>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div
            className={`questions__answers ${secondQuestion && "openAnswer"}`}
          >
            <p className="questions__p--boxQuestions">
              Puede encontrar ofertas de alquiler de automóviles investigando en
              línea y comparando precios de diferentes compañías de alquiler.
              Los sitios web como Expedia, Kayak y Travelocity le permiten
              comparar precios y ver las opciones de alquiler disponibles.
              También se recomienda suscribirse a boletines informativos por
              correo electrónico y seguir a las empresas de alquiler de coches
              en las redes sociales para estar informado de cualquier oferta o
              promoción especial.
            </p>
          </div>
          <button
            className={`questions__button--boxQuestions ${
              thirdQuestion && "active"
            }`}
            onClick={() => {
              setThirdQuestion(!thirdQuestion);
              if (firstQuestion) setFirstQuestion(false);
              if (secondQuestion) setSecondQuestion(false);
            }}
          >
            <p className="questions__p--button">
              3. ¿Cómo encuentro precios de alquiler de coches tan bajos?
            </p>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div
            className={`questions__answers ${thirdQuestion && "openAnswer"}`}
          >
            <p className="questions__p--boxQuestions">
              Reserve con anticipación: reservar su auto de alquiler con
              anticipación a menudo puede resultar en precios más bajos. Compara
              precios de varias empresas: utiliza sitios web como Kayak, Expedia
              o Travelocity para comparar precios de varias empresas de alquiler
              de coches. Busca códigos y cupones de descuento: busca códigos y
              cupones de descuento que puedas usar para bajar el precio del
              alquiler. El alquiler desde una ubicación fuera del aeropuerto a
              veces puede resultar en precios más bajos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
