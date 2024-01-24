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
        openAdvancedApiFetch()
    }
    const closeMenu = () => {
        setIsOpen(false)
        closeAdvancedApiFetch()
    }
    const [games, setGames] = useState([])
    const [visibleGames, setVisibleGames] = useState([])
    const [visibleItems, setVisibleItems] = useState(30)

    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("mmorpg");
    const [selectedTag, setSelectedTag] = useState("popularity");
    const [checkboxTag, setCheckboxTag] = useState([]);

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
    function closeAdvancedApiFetch() {
        let fetchData = async () => {
            let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${selectedGenre}&platform=${selectedPlatform}&sort-by=${selectedTag}`;
            let responce = await fetch(url,
                {
                    headers: {
                        "X-RapidAPI-Key":
                          "4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69",
                        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                    },
                }
            );
            let data = await responce.json();
            setGames(data);
        }
        fetchData();
    }
    function openAdvancedApiFetch () {
        let fetchData = async () => {
            let url
            if (isOpen) {
            url = checkboxTag.length === 0 ? `https://free-to-play-games-database.p.rapidapi.com/api/games` : `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${checkboxTag.join(".")}`;
            }
            let responce = await fetch(url,
                {
                    headers: {
                        "X-RapidAPI-Key":
                          "4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69",
                        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                    },
                }
            );
            let data = await responce.json();
            setGames(data);
        }   
        fetchData();
    }
    useEffect(() => {
        if (isOpen) {
            openAdvancedApiFetch()
        } else {
            closeAdvancedApiFetch()
        }
      }, [selectedPlatform, selectedGenre, selectedTag, visibleItems, checkboxTag]);
    useEffect(() => {
        setVisibleGames(games.slice(0, visibleItems))
    }, [games, visibleItems])
    console.log(games)
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
                {games.length === 0 ? <h2>No game found</h2> : <CardComponent games={visibleGames}/>}
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
