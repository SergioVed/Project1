import screenAllGames from "./img/screenAllGames.png"
import giveaway from "./img/giveaway.png"
import { Header } from "../header"
import "./aboutUs.css"
import { Link } from "react-router-dom"
export const AboutUs = () => {
    return(
        <div className="AboutUs_wrapper AboutUs_container">
            <div className="AboutUs_container_first">
                <Header/>
                <h2 className="aboutUs_h2">ABOUT US</h2>
                <div className="AboutUs_content">
                    <div className="AboutUs_content_text">
                        <p>Your GAME store where EVERYTHING is FREE!</p>
                        <Link to="/AllGames"><button>Check games!</button></Link>
                    </div>
                    <img src={screenAllGames} alt="" />
                </div>
            </div>
            <div className="AboutUs_container_second">
                <h2 className="aboutUs_h2_addiitional">Who we are</h2>
                <div className="additional_section">
                    <img src={giveaway} alt="" />
                    <ul className="additional_section_ul">
                        <li>We are a small group of passionate gamers and tech enthusiasts. Our independent company, Digiwalls Media, is fully bootstrapped and our team currently works remotely from United States, Europe and even Asia.</li>
                        <li>We are as indie as it gets, but for more than 13 years we have worked and collaborated with incredible companies including Microsoft, Sony Interactive Entertainment, Nintendo, Square Enix, Paradox Interactive, Warner Bros Entertainment, Bandai Namco, Wargaming, Perfect World Entertainment, Nexon, Webzen, Gamigo and hundreds more.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}