import "./homePage.css";
import { Header } from "../header";

export const HomePage = () => {
  return (
    <body>
        <div className="wraper container">
            <Header/>
            <div className="content_container">
                <h1 className="page_title">FREE TO GAME</h1>
                <h4 className="page_subtitle">FEEL FREE TO BE HERE, JUST FIND YOUR UNIVERSE OF GAMES!</h4>
            </div>
        </div>
    </body>
  );
};

export default HomePage;
