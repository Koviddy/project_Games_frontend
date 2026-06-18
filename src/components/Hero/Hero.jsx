import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Hero.css";

function Hero(props) {
  console.log(props);

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="hero">
      <Header />
      <div className="container_text">
        <h1 className="text_main">What game are you looking for?</h1>
        <p className="text_subtitles">
          Find out the best games of all times, here and now.
        </p>
        <div className="input_container">
          <input
            type="text"
            placeholder="Search your game"
            className="input_text"
            value={props.searchText}
            onChange={(event) => {
              console.log(event);
              props.setSearchText(event.target.value);
            }}
          />
          <button
            className="input_button"
            onClick={() => {
              if (location.pathname === "/") {
                navigate("/games");
              } else {
                props.searchGames();
              }
            }}
          >
            Procurar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
