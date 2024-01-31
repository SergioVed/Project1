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
            <div className={`menu-container`} ref={menuRef}>
                <div className="menu-items">
                    <div className="menu-AllGames menu-item">
                        <Link to={"/"} className="menu-item-link"><img src={home} alt="" />
                            <p>Home page</p>
                        </Link>
                    </div>
                    <div className="menu-AllGames menu-item">
                        <Link to={"/AllGames"} className="menu-item-link"><img src={menu} alt="" />
                            <p>All games</p>
                        </Link>
                    </div>
                    <div className="menu-AboutUs menu-item">
                        <Link to={"/AboutUs"} className="menu-item-link">
                            <img src={info} alt=""/>
                            <p>About us</p>
                        </Link>
                    </div>
                    <div className="menu-ContactUs menu-item">
                        <Link to={"/ContactUs"} className="menu-item-link"><img src={image} alt=""/>
                            <p>Contact us</p>
                        </Link>
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