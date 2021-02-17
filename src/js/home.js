import React from 'react';
// import {motion} from 'framer-motion';
// import {Link} from "react-router-dom";=
import '../css/home.css';

const homeImage = "/images/home.png";

function Home() {

    var demoClick = () => {
        console.log("opening demo");
    }

    return (
        <div className="home-container">
            <div className="header-container">
                <div className="text-container">
                    <h1>Daniel Jedryl Garcia</h1>
                    <h2>Software Engineer • Game Programmer</h2>
                </div>
                <div className="button-container">
                    <button className="home-button" type="button">Learn More</button>
                    <button className="home-button" type="button" onClick={demoClick}>View Demo</button>
                </div>
            </div>
            <div className="home-image-container">
                <img src={homeImage} alt="home-image"></img>
            </div>
        </div>
    );

}

export default Home;
