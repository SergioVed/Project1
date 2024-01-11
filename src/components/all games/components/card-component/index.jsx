
import "./cardComponent.css";
import { Link } from "react-router-dom";
export const CardComponent = ({ games }) => {
  return (
    <div className="cards">
      {Array.isArray(games) && games.length > 0 ? (
        games.map((game) => (
          <Link key={game.id} to={`/AllGames/Page/${game.id}`} className="card_container">
            <img src={`${game.thumbnail}`} alt="" />
            <div className="card_content">
              <h1>{game.title}</h1>
              <h3>{game.genre}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>No games available</p>
      )}
    </div>
  );
};
