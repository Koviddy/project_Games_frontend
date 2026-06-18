import Games from "../Games/Games";
import App from "../App/App";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ProfileImage from "../../images/profile_image.png";
import "./Main.css";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <div className="Main">
      <Hero searchText={props.searchText} setSearchText={props.setSearchText} />
      <div className="container_about">
        <div className="image_about">
          <img
            src={ProfileImage}
            alt="profile image"
            className="image_about__profile"
          />
        </div>
        <div className="text_about">
          <h2 className="text_about__name">Gustavo Ramos</h2>
          <p className="text_about__caption">
            Apaixonado por inovação, tecnologia e criação de produtos físicos.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
