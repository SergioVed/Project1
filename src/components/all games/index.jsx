import "./allGames.css"
import 'animate.css';
import { useState, useEffect } from "react"
import { Header } from "../header"
import { CheckBox } from "./components/advanced/components/checkBox";
import { CardComponent } from "./components/card-component"
import { SortSelect } from "./components/sort selects"
import Up from "./img/arrow-up.png"
export const AllGames = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }
    const [games, setGames] = useState([])
    const [visibleGames, setVisibleGames] = useState([])
    const [visibleItems, setVisibleItems] = useState(30)

    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("shooter");
    const [selectedTag, setSelectedTag] = useState("popularity");
    const [checkboxTag, setCheckboxTag] = useState([])

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
            if (isOpen) {
            let responce = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${checkboxTag}`, {
              headers: {
                'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }})  
              let data = await responce.json()
              setGames(data)
            } else {
                let responce = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${selectedGenre}&platform=${selectedPlatform}&sort-by=${selectedTag}`, {
                    headers: {
                      'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
                      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                  })  
                  let data = await responce.json()
                  setGames(data)
            }
        }
        fetchData()
    }, [selectedPlatform, selectedGenre, selectedTag, visibleItems, checkboxTag])
    useEffect(() => {
        setVisibleGames(games.slice(0, visibleItems))
    }, [games, visibleItems])
    return(
        <div className="wrapper allGames_container">
            <Header/>
            <h1 className="allGames_container_h1 animate__fadeInDown animate__animated">ALL GAMES</h1>
            {!isOpen && (
                <button onClick={openMenu}>Advanced</button>
            )}
            {isOpen && (
                <button onClick={closeMenu}>Close Advanced</button>
            )}
            {isOpen ? (
                <CheckBox updateAdvancedTags={setCheckboxTag}/>
            ) : (
                <SortSelect
                    handlePlatformChange={handlePlatformChange}
                    handleGenreChange={handleGenreChange}
                    handleTagChange={handleTagChange}
                />
            )}
            <div className="allGames_cards">
                <CardComponent games={visibleGames}/>
            </div>
            {visibleItems < games.length && (
                <h2 className="allGames_h2" onClick={() => {
                    setVisibleItems(visibleItems + 20)
                }}>MORE</h2>
            )}
            <button className={`${buttonTopVisual} ${buttonTop}`} onClick={() => (document.documentElement.scrollTop = 0)}><img src={Up} alt="" className="buttonTop-img animate__fadeIn animate__animated"/></button>
        </div>
    )
}
