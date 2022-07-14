import {Link} from "react-router-dom";
import '../css/Home.css';

const homeImage = "/images/home.png";

function Home() {

    return (
        <div className="home-container">
            <div className="header-container">
                <div className="text-container">
                    <h3>Hey, what's up? 🙂</h3>
                    <br></br>
                    <h1>Daniel Jedryl Garcia</h1>
                    <h2>Software Engineer • Game Programmer</h2>
                </div>
                <div className="button-container">
                    <Link to="/about">
                        <button className="home-button" type="button">Interactive</button>
                    </Link>
                    <button className="home-button" type="button">Compact</button>
                </div>
            </div>
            <div className="home-image-container">
                <img src={homeImage} alt="home-portrait"></img>
            </div>
        </div>
    );

}

export default Home;
