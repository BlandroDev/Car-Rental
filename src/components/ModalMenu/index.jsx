import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

export const ModalMenu = ({ open, setModal }) => {
  return (
    <div className={`modal ${open}`}>
      <div className="modal__iconClose">
        <FontAwesomeIcon icon={faXmark} onClick={() => setModal("")} />
      </div>
      <main className="modal__main">
        <ul className="modal__ul">
          <li className="modal__li">Inicio</li>
          <li className="modal__li">Acerda de</li>
          <li className="modal__li">Modelos</li>
          <li className="modal__li">Nosotros</li>
          <li className="modal__li">Testimonios</li>
          <li className="modal__li">Contactar</li>
        </ul>
      </main>
    </div>
  );
};

export function PortalMenu({ open, setModal }) {
  return ReactDOM.createPortal(
    <ModalMenu open={open} setModal={setModal} />,
    document.getElementById("modal")
  );
}
