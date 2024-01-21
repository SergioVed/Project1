import "./menu.css"
import { useRef, useState } from "react"
import menu from "./img/menu.png"
import home from "./img/home.png"
import info from "./img/info.png"
import image from "./img/image.png"
import menuBlack from "./img/menuBlack.png"
import menuGrey from "./img/menuGrey.png"
import { Link } from "react-router-dom"
export const Menu = () => {
    const menuRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }
    const mouseOn = () => {
        setIsHovered(true)
    }
    const mouseLeft = () => {
        setIsHovered(false)
    }
    return(
        <div className="container-burger"
        onMouseEnter={mouseOn}
        onMouseLeave={mouseLeft}>
            <div className={`menu-container ${isOpen ? "responsive-menu" : ""}`} ref={menuRef}>
                <div className="menu-items">
                    <div className="menu-AllGames menu-item">
                        <img src={home} alt="" />
                        <Link to={"/"} className="menu-item-link">Home page</Link>
                    </div>
                    <div className="menu-AllGames menu-item">
                        <img src={menu} alt="" />
                        <Link to={"/AllGames"} className="menu-item-link">All games</Link>
                    </div>
                    <div className="menu-AboutUs menu-item">
                        <img src={info} alt=""/>
                        <Link to={"/AboutUs"} className="menu-item-link">About us</Link>
                    </div>
                    <div className="menu-ContactUs menu-item">
                        <img src={image} alt=""/>
                        <Link to={"/ContactUs"} className="menu-item-link">Contact us</Link>
                    </div>
                </div>
            </div>
            {!isHovered && (
                <button onClick={openMenu} className="menu-btn menu-open-btn">
                <img src={menuGrey} className="btn-img"/>
            </button>)}
            {isHovered && (
                <button onClick={closeMenu} className="menu-btn menu-close-btn">
                <img src={menuBlack} className="btn-img"/>
            </button>)}
        </div>
    )
}