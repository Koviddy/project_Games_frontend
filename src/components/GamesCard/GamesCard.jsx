import "./GamesCard.css";

function GamesCard(props) {
  return (
    <div className="container_card">
      <div className="card_gender">
        {props.game.genres.map((genre) => genre.name).join("/")}
      </div>
      <img
        src={props.game.background_image}
        alt="card image"
        className="card_img"
      />
      <div className="container_card__info">
        <h2 className="card_title">{props.game.name}</h2>
        <p className="card_text">Released:{props.game.released}</p>
      </div>
    </div>
  );
}

export default GamesCard;
