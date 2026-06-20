import "./GamesCard.css";

function GamesCard(props) {
  return (
    <div className="container_card">
      <div className="card_gender">
        {props.game.genres.map((genre) => genre.name).join("/")}
      </div>
      <img
        src={
          props.game.background_image ||
          "https://img.magnific.com/fotos-premium/uma-imagem-colorida-de-um-jogo-com-um-fundo-verde-e-azul_1031776-175285.jpg?semt=ais_hybrid&w=740&q=80"
        }
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
