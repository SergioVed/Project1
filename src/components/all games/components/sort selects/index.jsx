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