import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CardPageComponent = () => {
    const [game, setGame] = useState();
    const {id} = useParams()
    useEffect(() => {
        let fetchData = async() => {
            let responce = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?id=${id}`, {
              headers: {
                'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            })
            let data = await responce.json()
            setGame(data[id])
          }
        fetchData()
    }, [id])
    return(
        <div>
            {game ? (
                <div key={id} className="">
                <h1>{game.title}</h1>
                <div>
                    <img src={`${game.thumbnail}`} alt="" />
                    <div>
                        <p>{game.genre}</p>
                        <p>{game.platform}</p>
                        <p>{game.developer}</p>
                        <p>{game.publisher}</p>
                        <p>{game.release_date}</p>
                    </div>
                </div>
        </div>
        ) : (
            <></>
        )
        }
        </div>
    )
}