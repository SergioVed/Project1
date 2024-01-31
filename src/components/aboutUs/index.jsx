import screenAllGames from "./img/screenAllGames.png"
import giveaway from "./img/giveaway.png"
import { Header } from "../header"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./aboutUs.css"
import 'animate.css';
import { Link } from "react-router-dom"
import { useEffect } from "react"
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
export const AboutUs = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return(
        <div className="AboutUs_wrapper AboutUs_container">
            <div className="AboutUs_container_first">
                <Header/>
                <h2 className="aboutUs_h2 animate__fadeInDown animate__animated">ABOUT US</h2>
                <div className="AboutUs_content">
                    <div className="AboutUs_content_text">
                        <p className="animate__fadeInLeft animate__animated">Your GAME store where EVERYTHING is FREE!</p>
                        <Link to="/AllGames" className="animate__fadeIn animate__animated animate__delay-1s"><button>Check games!</button></Link>
                    </div>
                    <img src={screenAllGames} className="animate__fadeInRight animate__animated" alt=""/>
                </div>
            </div>
            <div className="AboutUs_container_second">
            <h2 className="aboutUs_h2_addiitional" data-AOS='fade' data-aos-anchor-placement="bottom-bottom">Who we are</h2>
                <div className="additional_section">
                    <img src={giveaway} alt="" data-AOS='fade-right' data-aos-anchor-placement="center-bottom"/>
                    <ul className="additional_section_ul" data-AOS='fade-left' data-aos-anchor-placement="center-bottom">
                        <li>We are a small group of passionate gamers and tech enthusiasts. Our independent company, Digiwalls Media, is fully bootstrapped and our team currently works remotely from United States, Europe and even Asia.</li>
                        <li>We are as indie as it gets, but for more than 13 years we have worked and collaborated with incredible companies including Microsoft, Sony Interactive Entertainment, Nintendo, Square Enix, Paradox Interactive, Warner Bros Entertainment, Bandai Namco, Wargaming, Perfect World Entertainment, Nexon, Webzen, Gamigo and hundreds more.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}