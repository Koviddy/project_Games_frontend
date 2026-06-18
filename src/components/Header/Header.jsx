import Logo from "../../images/icon_website.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Main from "../Main/Main";
import Games from "../Games/Games";

function Header() {
  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <header className="header">
      <div className="icon_container">
        <img src={Logo} alt="website icon" className="icon_website" />
      </div>
      <nav className="menu">
        <NavLink to="/" className={customClassName}>
          Home
        </NavLink>
        <NavLink to="/games" className={customClassName}>
          Games
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
