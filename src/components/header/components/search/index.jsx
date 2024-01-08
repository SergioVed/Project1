import { useEffect, useState, useRef } from "react"
import search from "./img/search.png"
import "./search.css"
export const Search = () => {
  const [inputVal, setInputVal] = useState("")
  const [games, setGames] = useState([])
  const divRef = useRef()
  console.log(divRef)
    useEffect(() => {
        let data = async(url) => {
            let responce = await fetch(url, {
              headers: {
                'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            })
            let data = await responce.json()
            setGames(data)
          }
        console.log(data("https://free-to-play-games-database.p.rapidapi.com/api/games"))
    }, [])
    console.log(inputVal)
    const filterGames = games.filter((game) => {
        if (inputVal === "") {
          return
        } else {
          return game.title.toLowerCase().includes(inputVal.toLowerCase());
        }
    });
    return(
        <div className="search">
            <img src={search} alt=""/>
            <input className={`search_input ${inputVal === "" ? "" : "search_input_after"}`} placeholder="Search" value={inputVal} onChange={(event) => {setInputVal(event.target.value)}}></input>
            <div className={`search_results ${inputVal === "" ? "search_results_invisible" : ""}`} ref={divRef}>
              {filterGames.map((game) => (
                <p>{game.title}</p>
              ))}
            </div>
        </div>
    )
}