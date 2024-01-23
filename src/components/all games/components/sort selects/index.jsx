import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sortSelect.css"
import 'animate.css';
export const SortSelect = ({ handlePlatformChange, handleGenreChange, handleTagChange }) => {

    const [platformOpt, setPlatformOpt] = useState([
        {value: "all", label: "All"},
        {value: "pc", label: "Pc"},
        {value: "browser", label: "Browser"}
    ])
    const [sortOpt, setSortOpt] = useState([
        {value: "popularity", label: "Popularity"},
        {value: "release-date", label: "Release-date"},
        {value: "alphabetical", label: "Alphabetical"},
        {value: "relevance", label: "Relevance"}
    ])
    const [genreOpt, setGenreOpt] = useState([
        {value: "mmorpg", label: "mmorpg"},
        {value: "shooter", label: "shooter"},
        {value: "strategy", label: "strategy"},
        {value: "moba", label: "moba"},
        {value: "racing", label: "racing"},
        {value: "sports", label: "sports"},
        {value: "social", label: "social"},
        {value: "sandbox", label: "sandbox"},
        {value: "open-world", label: "open-world"},
        {value: "survival", label: "survival"},
        {value: "pvp", label: "pvp"},
        {value: "pve", label: "pve"},
        {value: "pixel", label: "pixel"},
        {value: "voxel", label: "voxel"},
        {value: "zombie", label: "zombie"},
        {value: "turn-based", label: "turn-based"},
        {value: "first-person", label: "first-person"},
        {value: "third-Person", label: "third-Person"},
        {value: "top-down", label: "top-down"},
        {value: "tank", label: "tank"},
        {value: "space", label: "space"},
        {value: "sailing", label: "sailing"},
        {value: "side-scroller", label: "side-scroller"},
        {value: "superhero", label: "superhero"},
        {value: "permadeath", label: "permadeath"},
        {value: "card", label: "card"},
        {value: "battle-royale", label: "battle-royale"},
        {value: "mmo", label: "mmo"},
        {value: "mmofps", label: "mmofps"},
        {value: "mmotps", label: "mmotps"},
        {value: "3d", label: "3d"},
        {value: "2d", label: "2d"},
        {value: "anime", label: "anime"},
        {value: "fantasy", label: "fantasy"},
        {value: "sci-fi", label: "sci-fi"},
        {value: "fighting", label: "fighting"},
        {value: "action-rpg", label: "action-rpg"},
        {value: "action", label: "action"},
        {value: "military", label: "military"},
        {value: "martial-arts", label: "martial-arts"},
        {value: "flight", label: "flight"},
        {value: "low-spec", label: "low-spec"},
        {value: "tower-defense", label: "tower-defense"},
        {value: "horror", label: "horror"},
        {value: "mmorts", label: "mmorts"},
    ])
    return(
        <div className='sort-container'>
            <h2 className='sort-container-h2 animate__fadeIn animate__animated'>Platform: </h2>
             <Form.Select className='sort-container-item animate__zoomInLeft animate__animated' aria-label="Default select example" onChange={(event) => {handlePlatformChange(event.target.value)}}>
                {platformOpt.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </Form.Select>
            <h2 className='sort-container-h2 animate__fadeIn animate__animated animate__delay-1s'>Genre:</h2>
            <Form.Select className='sort-container-item animate__zoomInLeft animate__animated animate__delay-1s' aria-label="Default select example" onChange={(event) => {handleGenreChange(event.target.value)}}>
                    {genreOpt.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
            </Form.Select>
            <h2 className='sort-container-h2 animate__fadeIn animate__animated animate__delay-2s'>Sort-by:</h2>
            <Form.Select className='sort-container-item animate__zoomInLeft animate__animated animate__delay-2s' aria-label="Default select example" onChange={(event) => {handleTagChange(event.target.value)}}>
                    {sortOpt.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
            </Form.Select>
        </div>
    )
}