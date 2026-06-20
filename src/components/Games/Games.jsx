import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import GamesCard from "../GamesCard/GamesCard";
import "./Games.css";
import { useCallback, useEffect, useState } from "react";

function Games(props) {
  const [games, setGames] = useState([]);

  const searchText = props.searchText;
  const setSearchText = props.setSearchText;

  const searchGames = useCallback(() => {
    fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&search=${searchText}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setGames(res.results);
      });
  });

  useEffect(() => {
    searchGames();
  }, []);

  return (
    <div>
      <Hero
        searchText={searchText}
        setSearchText={setSearchText}
        searchGames={searchGames}
      />
      <div className="container_games">
        {games.map((game) => (
          <GamesCard game={game} key={game.slug} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Games;
