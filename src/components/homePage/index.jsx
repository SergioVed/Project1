import "./homePage.css";
import { Header } from "../header";

export const HomePage = () => {
  return (
    <body>
        <div className="container-homePage wrapper-homePage">
            <Header/>
            <div className="content-container">
                <h1 className="page-title">FREE TO GAME</h1>
                <h4 className="page-subtitle">FEEL FREE TO BE HERE, JUST FIND YOUR UNIVERSE OF GAMES!</h4>
            </div>
        </div>
    </body>
  );
};

export default HomePage;
