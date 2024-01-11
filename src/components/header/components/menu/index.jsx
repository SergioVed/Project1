import "./menu.css"
import { useRef, useState } from "react"
import menu from "./img/menu.png"
import info from "./img/info.png"
import image from "./img/image.png"
import menuBlack from "./img/menuBlack.png"
import menuGrey from "./img/menuGrey.png"
import { Link } from "react-router-dom"
import { AllGames } from "../../../all games"
export const Menu = () => {
    const menuRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }
    return(
        <div className="container">
            <div className="container_menu">
            <div className={`menu ${isOpen ? "responsive_menu" : ""}`} ref={menuRef}>
                <div className="menu_items">
                    <div className="menu_AllGames menu_item">
                        <img src={menu} alt="" />
                        <p><Link to={"/AllGames"} className="menu_item_link">All games</Link></p>
                    </div>
                    <div className="menu_AboutUs menu_item">
                        <img src={info} alt=""/>
                        <p>About us</p>
                    </div>
                    <div className="menu_ContactUs menu_item">
                        <img src={image} alt=""/>
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
            {!isOpen && (
                <button onClick={openMenu} className="menu_btn menu_open_btn">
                <img src={menuGrey} className="btn_img"/>
            </button>)}
            {isOpen && (
                <button onClick={closeMenu} className="menu_btn menu_close_btn">
                <img src={menuBlack} className="btn_img"/>
            </button>)}
            </div>

        </div>
    )
}