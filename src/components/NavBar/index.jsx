import logoSrc from "../../assets/logos/logo-car.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PortalMenu } from "../ModalMenu";
import { menu } from "../../data/menu";
import { Link } from "wouter";
export const NavBar = () => {
  const [modal, setModal] = useState("");
  return (
    <nav className="navBar">
      <Link href="/">
        <img
          src={logoSrc}
          alt="Logo de Renta de Autos"
          className="navBar__img"
        ></img>
      </Link>
      <ul className="navBar__ul">
        {menu.map((menu) => (
          <li className="navBar__li" key={menu.key}>
            <Link href={menu.link} className="navBar__a">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navBar__DivSesion">
        <button className="navBar__button">Iniciar Sesion</button>
        <button className="navBar__button--register">Registro</button>
      </div>
      <div className="navBar__icon">
        <FontAwesomeIcon icon={faBars} onClick={() => setModal("open")} />
        <PortalMenu open={modal} setModal={setModal} menuList={menu} />
      </div>
    </nav>
  );
};
