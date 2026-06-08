import Header from "../Header/Header";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="container_text">
        <h1 className="text_main">What artist you're looking for?</h1>
        <p className="text_subtitles">
          Find out the best musicians of all time, here and now.
        </p>
        <div className="input_container">
          <input
            type="text"
            placeholder="Who you're looking for?"
            className="input_text"
          />
          <button className="input_button">Procurar</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
