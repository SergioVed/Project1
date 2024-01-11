import "./allGames.css"
import { useState, useEffect } from "react"
import { Header } from "../header"
import { CardComponent } from "./components/card-component"
import { SortSelect } from "./components/sort selects"
export const AllGames = () => {
    const [games, setGames] = useState([])
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("shooter");
    const [selectedTag, setSelectedTag] = useState("release-date");
  const handlePlatformChange = (value) => {
      setSelectedPlatform(value);
  };
  const handleGenreChange = (value) => {
      setSelectedGenre(value);
  };
  const handleTagChange = (value) => {
      setSelectedTag(value);
  };
    useEffect(() => {
        let fetchData = async(url) => {
            let responce = await fetch(url, {
              headers: {
                'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            })
            let data = await responce.json()
            setGames(data)
          }
        console.log(games)
        fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${selectedPlatform}&category=${selectedGenre}&sort-by=${selectedTag}`)
    }, [selectedPlatform, selectedGenre, selectedTag])
    return(
        <div className="wrapper allGames_container">
            <Header/>
            <h1>ALL GAMES</h1>
            <SortSelect
                handlePlatformChange={handlePlatformChange}
                handleGenreChange={handleGenreChange}
                handleTagChange={handleTagChange}
            />
            <div className="allGames_cards">
                <CardComponent games={games}/>
            </div>
        </div>
    )
}