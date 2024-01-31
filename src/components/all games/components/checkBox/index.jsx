import { useState } from "react"
import "./checkBox.css"
export const CheckBox = ({ updateAdvancedTags, className }) => {
    const [checkBoxes, setCheckBoxes] = useState({
        genre: [
            {value: "mmorpg", label: "MMORPG", checked: false},
            {value: "shooter", label: "Shooter", checked: false},
            {value: "strategy", label: "Strategy", checked: false},
            {value: "moba", label: "Moba", checked: false},
            {value: "racing", label: "Racing", checked: false},
            {value: "sports", label: "Sports", checked: false},
            {value: "social", label: "Social", checked: false},
            {value: "sandbox", label: "Sandbox", checked: false},
            {value: "open-world", label: "Open-world", checked: false},
            {value: "survival", label: "Survival", checked: false},
        ],
        graphics: [
            {value: "3d", label: "3D Graphics", checked: false},
            {value: "2d", label: "2D Graphics", checked: false}
        ],
        combat: [
            {value: "pvp", label: "PVP", checked: false},
            {value: "pve", label: "PVE", checked: false}
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
    const checkBoxesChange = (group, index) => {  
        updateAdvancedTags((prevValue) => {
            const updatedValue = new Set([...prevValue]);
          
            const newValue = checkBoxes[group][index].value;
          
            if (updatedValue.has(newValue)) {
              updatedValue.delete(newValue);
            } else {
              updatedValue.add(newValue);
            }
            return [...updatedValue];
          });
        setCheckBoxes((prevCheckBoxes) => {
            const updatedCheckBoxes = {...prevCheckBoxes}
            updatedCheckBoxes[group][index].checked = !updatedCheckBoxes[group][index].checked
            return updatedCheckBoxes
        })
    }
    return(
        <div className={`${className}`}>
            <div className="checkBox-container">
                <div className="checkBox-container-div">
                    <h2>Genre</h2>
                    <div className="checkBox-container-div-form">
                        {checkBoxes.genre.map((check, index) => (
                            <div key={index} className="checkBox-container-div-item">
                                <input type="checkbox" name="checkbox" className="checkBox-input"
                                    id={check.value} 
                                    value={check.value} 
                                    checked={check.checked} 
                                    onChange={() => {checkBoxesChange("genre", index)}}>
                                </input>
                                <span className="checkBox-style"></span>
                                <label htmlFor={check.value} className="checkBox-label">{check.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkBox-container-div">
                    <h2>Graphics</h2>
                    <div className="checkBox-container-div-form">
                        {checkBoxes.graphics.map((check ,index) => (
                            <div key={index} className="checkBox-container-div-item">
                                <input type="checkbox" name="checkbox" className="checkBox-input"
                                    id={check.value} 
                                    value={check.value} 
                                    checked={check.checked} 
                                    onChange={() => {checkBoxesChange("graphics", index)}}>
                                </input>
                                <span className="checkBox-style"></span>
                                <label htmlFor={check.value} className="checkBox-label">{check.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkBox-container-div">
                    <h2>Combat</h2>
                    <div className="checkBox-container-div-form">
                        {checkBoxes.combat.map((check ,index) => (
                            <div key={index} className="checkBox-container-div-item">
                                <input type="checkbox" name="checkbox" className="checkBox-input"
                                    id={check.value} 
                                    value={check.value} 
                                    checked={check.checked} 
                                    onChange={() => {checkBoxesChange("combat", index)}}>
                                </input>
                                <span className="checkBox-style"></span>
                                <label htmlFor={check.value} className="checkBox-label">{check.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkBox-container-div">
                    <h2>Gameplay</h2>
                    <div className="checkBox-container-div-form">
                        {checkBoxes.setting.map((check ,index) => (
                            <div key={index} className="checkBox-container-div-item">
                                <input type="checkbox" name="checkbox" className="checkBox-input"
                                    id={check.value} 
                                    value={check.value} 
                                    checked={check.checked} 
                                    onChange={() => {checkBoxesChange("setting", index)}}>
                                </input>
                                <span className="checkBox-style"></span>
                                <label htmlFor={check.value} className="checkBox-label">{check.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkBox-container-div">
                    <h2>Tags</h2>
                    <div className="checkBox-container-div-form">
                        {checkBoxes.tags.map((check ,index) => (
                            <div key={index} className="checkBox-container-div-item" >
                                <input type="checkbox" name="checkbox" className="checkBox-input"
                                    id={check.value} 
                                    value={check.value} 
                                    checked={check.checked} 
                                    onChange={() => {checkBoxesChange("tags", index)}}>
                                </input>
                                <span className="checkBox-style"></span>
                                <label htmlFor={check.value} className="checkBox-label">{check.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}