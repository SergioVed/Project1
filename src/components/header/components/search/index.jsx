import { useEffect, useState, useRef } from "react"
import search from "./img/search.png"
import "./search.css"
import { Link } from "react-router-dom"
export const Search = () => {
  const [inputVal, setInputVal] = useState("")
  const [games, setGames] = useState([])
  const divRef = useRef()
    useEffect(() => {
        let fetchData = async() => {
            let responce = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
              headers: {
                'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            })
            let data = await responce.json()
            setGames(data)
          }
          fetchData()
    }, [])
    const filterGames = games.filter((game) => {
        if (inputVal === "") {
          return
        } else {
          return game.title.toLowerCase().includes(inputVal.toLowerCase());
        }
    });
    return(
        <div className="search-container">
            <img src={search} alt=""/>
            <input className={`search-input ${inputVal === "" ? "" : "search-input-after"}`} placeholder="Search" value={inputVal} onChange={(event) => {setInputVal(event.target.value)}}></input>
            <div className={`search-results ${inputVal === "" ? "search-results-invisible" : ""}`} ref={divRef}>
              {filterGames.length === 0 ? <p className="search-results-noGame">No game found</p> : 
              <div>
                {filterGames.map((game) => (
                <Link to={`/AllGames/Page/${game.id}`} className="link"><p className="filteredGames-p">{game.title}</p></Link>
                ))}
              </div>
              }
            </div>
        </div>
    )
}