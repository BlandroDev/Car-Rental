import logoSrc from "../../assets/logos/logo-car.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PortalMenu } from "../ModalMenu";
import { menu } from "../../data/menu";
export const NavBar = () => {
  const [modal, setModal] = useState("");
  return (
    <nav className="navBar">
      <img
        src={logoSrc}
        alt="Logo de Renta de Autos"
        className="navBar__img"
      ></img>
      <ul className="navBar__ul">
        {menu.map((menu) => (
          <li className="navBar__li" key={menu.key}>
            {menu.title}
          </li>
        ))}
      </ul>
      <div className="navBar__DivSesion">
        <button className="navBar__button">Iniciar Sesion</button>
        <button className="navBar__button--register">Registrarse</button>
      </div>
      <div className="navBar__icon">
        <FontAwesomeIcon icon={faBars} onClick={() => setModal("open")} />
        <PortalMenu open={modal} setModal={setModal} menuList={menu} />
      </div>
    </nav>
  );
};
