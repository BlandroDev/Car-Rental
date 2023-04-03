import logoSrc from "../../assets/logos/logo-home-1carental-min.png";

export const NavBar = () => {
  return(
    <nav className="navBar">
      <img src={logoSrc} alt="Logo de Renta de Autos" className="navBar__img"></img>
      <ul className="navBar__ul">
        <li className="navBar__li">Inicio</li>
        <li className="navBar__li">Acerda de</li>
        <li className="navBar__li">Modelos</li>
        <li className="navBar__li">Nosotros</li>
        <li className="navBar__li">Testimonios</li>
        <li className="navBar__li">Contactar</li>
      </ul>
      <div className="navBar__DivSesion">
        <button className="navBar__button">Iniciar Sesion</button>
        <button className="navBar__button">Registrarse</button>
      </div>
    </nav>
  )
};
