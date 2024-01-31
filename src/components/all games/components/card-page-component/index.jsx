import React, { useState, useEffect } from "react";
import Header from "C:/Users/Максим/OneDrive/Документи/HTML/Project1/src/components/header";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardPageComponent.css";
export const CardPageComponent = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let responce = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );
        let data = await responce.json();

        setGame(data);
      } catch (error) {
        console.error("Error fetching data");
        setError("Error fetching data");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="gamePage-container gamePage-wrapper">
        <Header />
        {game ? (
            <>
            <h1 className="gamePage-title">{game.title}</h1>
            <span className="gamePage-shortDescription">
            {game.short_description}
            </span>
            <div className="gamePage-content-wrapper">
            <Carousel slide={true} className="carousel">
                {game.screenshots.map((screenshot, index) => (
                <Carousel.Item key={index} interval={3000}>
                    <img
                    src={screenshot.image}
                    alt={`Screenshot ${index + 1}`}
                    className="carousel-img"
                    />
                </Carousel.Item>
                ))}
            </Carousel>
            <div className="gamePage-content">
                <div className="gamePage-section gamePage-info">
                <h2>INFORMATION ABOUT GAME :</h2>
                <div className="gamePage-details-list gamePage-list">
                    <div className="gamePage-list-div">
                    <p className="gamePage-list-h4">Genre:</p>
                    <p className="gamePage-list-p">{game.genre}</p>
                    </div>
                    <div className="gamePage-list-div">
                    <p className="gamePage-list-h4">Developer:</p>
                    <p className="gamePage-list-p">{game.developer}</p>
                    </div>
                    <div className="gamePage-list-div">
                    <p className="gamePage-list-h4">Publisher:</p>
                    <p className="gamePage-list-p">{game.publisher}</p>
                    </div>
                    <div className="gamePage-list-div-last">
                    <p className="gamePage-list-h4">Release date:</p>
                    <p className="gamePage-list-p">{game.release_date}</p>
                    </div>
                    <div className="gamePage-list-div-last">
                    <p className="gamePage-list-h4">Platform:</p>
                    <p className="gamePage-list-p">{game.platform}</p>
                    </div>
                </div>
                </div>
                {game.minimum_system_requirements && (
                <div className="gamePage-section gamePage-system-requirements">
                    <h2>MINIMUM SYSTEM REQUIREMENTS :</h2>
                    <div className="gamePage-requirements-list gamePage-list">
                    <div className="gamePage-list-div">
                        <p className="gamePage-list-h4">OS:</p>
                        <p className="gamePage-list-p">
                        {game.minimum_system_requirements.os}
                        </p>
                    </div>
                    <div className="gamePage-list-div">
                        <p className="gamePage-list-h4">Processor:</p>
                        <p className="gamePage-list-p">
                        {game.minimum_system_requirements.processor}
                        </p>
                    </div>
                    <div className="gamePage-list-div">
                        <p className="gamePage-list-h4">Memory:</p>
                        <p className="gamePage-list-p">
                        {game.minimum_system_requirements.memory}
                        </p>
                    </div>
                    <div className="gamePage-list-div-last">
                        <p className="gamePage-list-h4">Graphics:</p>
                        <p className="gamePage-list-p">
                        {game.minimum_system_requirements.graphics}
                        </p>
                    </div>
                    <div className="gamePage-list-div-last">
                        <p className="gamePage-list-h4">Storage:</p>
                        <p className="gamePage-list-p">
                        {game.minimum_system_requirements.storage}
                        </p>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </div>
            <div className="gamePage_link">
            <a href={game.game_url} target="_blank">
                Game profile
            </a>
            </div>
            </>
        ) : (error && <h2 className="gamePage-error-text">{error}</h2>)}
      </div>
    </div>
  );
};
