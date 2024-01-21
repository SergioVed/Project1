import "./allGames.css"
import { useState, useEffect } from "react"
import { Header } from "../header"
import { CardComponent } from "./components/card-component"
import { SortSelect } from "./components/sort selects"
import Up from "./img/right.png"
export const AllGames = () => {
    const [games, setGames] = useState([])
    const [visGames, setVisGames] = useState([])
    const [visItems, setVisItems] = useState(30)
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("shooter");
    const [selectedTag, setSelectedTag] = useState("popularity");

    const [buttonTopVisual, setButtonTopVisual] = useState("")
    const [buttonTop, setButtonTop] = useState("")

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
        window.onscroll = function() {scrollToTop()};
        function scrollToTop () {
            if(document.documentElement.scrollTop > 1000) {
                setButtonTopVisual("allGames-buttonUp-vis")
                setButtonTop("")
            }else{
                setButtonTopVisual("")
                setButtonTop("allGames-buttonUp")
            }
          }
    })
    useEffect(() => {
        let fetchData = async() => {
            let responce = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${selectedPlatform}&category=${selectedGenre}&sort-by=${selectedTag}`, {
              headers: {
                'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            })
            let data = await responce.json()
            setGames(data)
        }
        fetchData()
    }, [selectedPlatform, selectedGenre, selectedTag, visItems])
    useEffect(() => {
        setVisGames(games.slice(0, visItems))
    }, [games, visItems])
    return(
        <div className="wrapper allGames_container">
            <Header/>
            <h1 className="allGames_container_h1">ALL GAMES</h1>
            <SortSelect
                handlePlatformChange={handlePlatformChange}
                handleGenreChange={handleGenreChange}
                handleTagChange={handleTagChange}
            />
            <div className="allGames_cards">
                <CardComponent games={visGames}/>
            </div>
            {visItems < games.length && (
                <h2 className="allGames_h2" onClick={() => {
                    setVisItems(visItems + 20)
                }}>MORE</h2>
            )}
            <button className={`${buttonTopVisual} ${buttonTop}`} onClick={() => (document.documentElement.scrollTop = 0)}><img src={Up} alt="" className="buttonTop-img"/></button>
        </div>
    )
}
