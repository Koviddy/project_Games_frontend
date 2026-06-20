import "./Footer.css";
import FacebookLogo from "../../images/facebook_icon.png";
import GitLogo from "../../images/github-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        © 2026, desenvolvido por Gustavo Ramos
      </div>
      <nav className="footer_nav">
        <a href="/" target="_blank" className="footer_nav__link">
          Home
        </a>
        <a
          href="https://tripleten.com/"
          target="_blank"
          className="footer_nav__link"
        >
          Tripleten
        </a>
        <a href="https://github.com/Koviddy" target="_blank">
          <img src={GitLogo} alt="git logo" className="github_logo" />
        </a>
        <a href="#" target="_blank">
          <img
            src={FacebookLogo}
            alt="facebook logo"
            className="facebook_logo"
          />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
