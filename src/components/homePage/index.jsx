import "./homePage.css";
import 'animate.css';
import { Header } from "../header";

export const HomePage = () => {
  return (
    <body>
        <div className="container-homePage wrapper-homePage">
            <Header/>
            <div className="content-container">
                <h1 className="page-title animate__backInLeft animate__animated">FREE TO GAME</h1>
                <h4 className="page-subtitle animate__fadeIn animate__animated animate__delay-1s">FEEL FREE TO BE HERE, JUST FIND YOUR UNIVERSE OF GAMES!</h4>
            </div>
        </div>
    </body>
  );
};

export default HomePage;