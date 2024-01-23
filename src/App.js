import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [selectValue, setSelectValue] = useState("alphabetical")
  const [selectValue1, setSelectValue1] = useState("pc")
  const [games, setGames] = useState([])
  useEffect(() => {
    let data = async(url) => {
    let responce = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': '4315a56593msh57fafa17a112819p155efbjsn46ef0b5e1a69',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
    let data = await responce.json()
    console.log(data)
    setGames(data)
  }
  data(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${selectValue1}&sort-by=${selectValue}`)}, [selectValue, selectValue1])
  return (
    <div className="App">
      <div>
        <select onChange={(event) => setSelectValue(event.target.value)}>
          <option value={"alphabetical"}>Alphabetical</option>
          <option value={"popularity"}>Popularity</option>
          <option value={"release-date"}>Release-date</option>
        </select>
        <select onChange={(event) => setSelectValue1(event.target.value)}>
          <option value={"pc"}>pc</option>
          <option value={"browser"}>browser</option>
        </select>
        {games && games.map((game) => (
          <div>{game && <div>{game.title}: {game.platform}</div>}</div>
        ))}
      </div>
    </div>
  );
}

export default App;