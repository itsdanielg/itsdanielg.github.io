import React from 'react';
// import {NavLink} from 'react-router-dom';
import aboutMeImage from "../images/aboutme.jpg";
import portfolioImage from "../images/portfolio.jpg";
import hobbiesImage from "../images/hobbies.jpg";
import '../css/home.css';

function Home() {

    const openPage = (e) => {
        var id = e.target.id;
        if (id == "bioEvent") {
            var container = document.getElementById("biographyContainer");
            container.style.width = "100%";
            var returnButton = document.getElementById("returnBio");
            returnButton.style.width = "100%";
        }
        else if (id == "portfolioEvent") {
            var container = document.getElementById("portfolioContainer");
            container.style.height = "100%";
            var returnButton = document.getElementById("returnPortfolio");
            returnButton.style.height = "10%";
        }
        else if (id == "hobbiesEvent"){
            var container = document.getElementById("hobbiesContainer");
            container.style.width = "100%";
            var returnButton = document.getElementById("returnHobbies");
            returnButton.style.width = "100%";
        }
    }

    return (
        <div className="homeContainer">
            <div className="headerContainer">
                <h1>Daniel Garcia</h1>
                <h2>Aspiring Game Developer</h2>
            </div>
            <div className="imageContainer" id="imageBio">
                <img src={aboutMeImage} alt="Biography"></img>
                <div className="labelContainer">
                    <h1 className="label" id="bioEvent" onClick={openPage}>About Me</h1>
                </div>
            </div>
            <div className="imageContainer" id="imagePortfolio">
                <img src={portfolioImage} alt="Portfolio"></img>
                <div className="labelContainer">
                    <h1 className="label" id="portfolioEvent" onClick={openPage}>Portfolio</h1>
                </div>
            </div>
            <div className="imageContainer" id="imageHobbies">
                <img src={hobbiesImage} alt="Hobbies"></img>
                <div className="labelContainer">
                    <h1 className="label" id="hobbiesEvent" onClick={openPage}>Hobbies</h1>
                </div>
            </div>
        </div>
    );

}

export default Home;
