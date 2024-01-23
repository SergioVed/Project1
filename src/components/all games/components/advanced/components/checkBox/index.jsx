import { useEffect, useState } from "react"
import "./checkBox.css"
export const CheckBox = ({ updateAdvancedTags }) => {
    const [choisedValues, setChoisedValues] = useState([])
    updateAdvancedTags = {choisedValues}
    const [checkBoxes, setCheckBoxes] = useState({
        platform: [
            { value: "all", label: "All", checked: false },
            { value: "pc", label: "Pc", checked: false },
            { value: "browser", label: "Browser", checked: false },
          ],
        genre: [
            {value: "mmorpg", label: "mmorpg", checked: false},
            {value: "shooter", label: "shooter", checked: false},
            {value: "strategy", label: "strategy", checked: false},
            {value: "moba", label: "moba", checked: false},
            {value: "racing", label: "racing", checked: false},
            {value: "sports", label: "sports", checked: false},
            {value: "social", label: "social", checked: false},
            {value: "sandbox", label: "sandbox", checked: false},
            {value: "open-world", label: "open-world", checked: false},
            {value: "survival", label: "survival", checked: false},
        ],
        graphics: [
            {value: "3d", label: "3D", checked: false},
            {value: "2d", label: "2D", checked: false}
        ],
        combat: [
            {value: "pvp", label: "PVP", checked: false},
            {value: "pve", label: "PVE", checked: false}
        ],
        gamePlay: [
            {value: "turn-based", label: "Turn-Based", checked: false},
            {value: "real-time", label: "Real-Time", checked: false}
        ],
        setting: [
            {value: "anime", label: "Anime", checked: false},
            {value: "fantasy", label: "Fantasy", checked: false},
            {value: "sci-fi", label: "Sci-Fi", checked: false},
            {value: "military", label: "Military", checked: false},
            {value: "horror", label: "Horror", checked: false},
        ],
        tags: [
            {value: "mmofps", label: "MMOFPS", checked: false},
            {value: "sandbox", label: "Sandbox", checked: false},
            {value: "survival", label: "Survival", checked: false},
            {value: "mmorts", label: "MMORTS", checked: false},
            {value: "pixel", label: "Pixel", checked: false},
            {value: "voxel", label: "Voxel", checked: false},
            {value: "mmotps", label: "MMOTPS", checked: false},
            {value: "zombie", label: "Zombie", checked: false},
            {value: "top-down", label: "Top-Down", checked: false},
            {value: "tank", label: "Tank", checked: false},
            {value: "space", label: "Space", checked: false},
            {value: "sailing", label: "Sailing", checked: false},
            {value: "superhero", label: "Superhero", checked: false},
            {value: "permadeath", label: "Permadeath", checked: false},
            {value: "action", label: "Action", checked: false},
            {value: "flight", label: "Flight", checked: false},
            {value: "low-spec", label: "Low-Spec", checked: false},
        ]
    })
    useEffect(() => {
        const selectedValues = [];
        for (const group in checkBoxes) {
            for (const checkbox of checkBoxes[group]) {
                if (checkbox.checked) {
                    selectedValues.push(checkbox.value);
                }
            }
        }
        setChoisedValues(selectedValues);
    }, [checkBoxes, updateAdvancedTags]);
    const checkBoxesChange = (group, index) => {
        setCheckBoxes((prevCheckBoxes) => {
            const updatedCheckBoxes = {...prevCheckBoxes}
            updatedCheckBoxes[group][index].checked = !updatedCheckBoxes[group][index].checked
            return updatedCheckBoxes
        })
    }
    return(
        <div className="checkBox-container">
            <div className="checkBox-container-div">
                {checkBoxes.platform.map((check, index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("platform", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
            <div className="checkBox-container-div">
                {checkBoxes.genre.map((check, index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("genre", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
            <div className="checkBox-container-div">
                {checkBoxes.graphics.map((check ,index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("graphics", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
            <div className="checkBox-container-div">
                {checkBoxes.combat.map((check ,index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("combat", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
            <div className="checkBox-container-div">
                {checkBoxes.gamePlay.map((check ,index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("gamePlay", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
            <div className="checkBox-container-div">
                {checkBoxes.setting.map((check ,index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("setting", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
            <div className="checkBox-container-div">
                {checkBoxes.tags.map((check ,index) => (
                    <div key={index}>
                        <input type="checkbox" id={check.value} value={check.value} checked={check.checked} onChange={() => {checkBoxesChange("tags", index)}}></input>
                        <label htmlFor={check.value}>{check.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}