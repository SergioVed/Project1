import "./cardComponent.css";
import "animate.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export const CardComponent = ({ games, cardClass }) => {
  return (
    // <div className={`${cardClass}`}>
    //   {games.map((game) => (
    //       <Link key={game.id} to={`/AllGames/Page/${game.id}`} className="card_container animate__animated animate__fadeIn">
    //         <img src={`${game.thumbnail}`} alt="" />
    //         <div className="card_content">
    //           <h1>{game.title}</h1>
    //           <h3>{game.genre}</h3>
    //         </div>
    //       </Link>
    //     ))}
    // </div>
    <div className={`${cardClass}`}>
      {games.map((game) => (
        <Card style={{ width: "23rem" }} bg="dark" text="white" className="card card_container animate__animated animate__fadeIn">
          <Card.Img variant="top" src={`${game.thumbnail}`} />
          <Card.Body className="card_content">
            <Card.Title className="card_content-h1">{game.title}</Card.Title>
            <Card.Text className="card_content-h3">{game.genre}</Card.Text>
            <button className="card-button"><Link to={`/AllGames/Page/${game.id}`} className="card-link">See game</Link></button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
