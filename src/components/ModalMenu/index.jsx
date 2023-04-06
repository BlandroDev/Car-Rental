import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

export const ModalMenu = ({ open, setModal, menuList }) => {
  return (
    <div className={`modal ${open}`}>
      <div className="modal__iconClose">
        <FontAwesomeIcon icon={faXmark} onClick={() => setModal("")} />
      </div>
      <main className="modal__main">
        <ul className="modal__ul">
          {menuList.map((menu) => (
            <li className="modal__li" key={menu.key}>
              {menu.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export function PortalMenu({ open, setModal, menuList }) {
  return ReactDOM.createPortal(
    <ModalMenu open={open} setModal={setModal} menuList={menuList} />,
    document.getElementById("modal")
  );
}
