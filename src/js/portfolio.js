import React from 'react';
import organImage from "../images/organ.jpg";
import speedBotImage from "../images/speedbot.jpg";
import ttoacImage from "../images/ttoac.png";
import '../css/portfolio.css';

const gitHubOrgan = "https://github.com/itsdanielg/Virtual-Organ-Project/releases/";
const projectOrgan = process.env.PUBLIC_URL + "portfolio/Boardwalk_Hall_Auditorium_Organ/";
const gitHubSpeedBot = "https://github.com/itsdanielg/CSE-381-Group-Project/releases";
const projectSpeedBot = process.env.PUBLIC_URL + "portfolio/SpeedBot/";
const gitHubTTOAC = "https://github.com/itsdanielg/CSE-380-Group-Project";
const projectTTOAC = "http://the-tail-of-a-city.firebaseapp.com/";
const profMcKenna = "https://www3.cs.stonybrook.edu/~richard/";

function Portfolio(props) {

    return (

        <div className="pageContainer" id="portfolioContainer">
            
            <div className="return" id="returnPortfolio" onClick={props.closePage}>
                
            </div>
            <div className="pageWrapper">
                
                <div className="divBack">
                    <h1 className="titleHeading">Portfolio</h1>
                </div>
                <div className="pageContent" id="portfolioContent">
                    <div className="contentTitle">
                        <h1>University</h1>
                    </div>
                    <div className="portfolioContentSection">
                        <div className="sectionInfo">
                            <h2>Boardwalk Hall Auditorium Organ</h2>
                            <p>
                                A 3D-Simulator of a pipe organ based on the real life instrument found in the Boardwalk Hall Auditorium located in Atlantic City, NJ. This was created using Unity as a research project under Professor <a href={profMcKenna} target="_blank">
                                Richard McKenna</a> in Stony Brook University during the Spring 2020 semester. The organ consists of 7 rows of playable keys that can only be played on certain sections at a time. An option to play one song can also be accessed as a mini-game.
                            </p>
                        </div>
                        <div className="sectionImage" >
                            <img src={organImage} alt="Boardwalk Hall Auditorium Organ"></img>
                            <div className="imageHoverDiv">
                                <a href={gitHubOrgan} target="_blank">
                                    <div className="linkDiv">
                                        <h2>Play as .exe</h2>
                                    </div>
                                </a>
                                <a href={projectOrgan} target="_blank">
                                    <div className="linkDiv">
                                        <h2>Play as WebGL</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioContentSection">
                        <div className="sectionInfo">
                            <h2>SpeedBot</h2>
                            <p>
                                A 3D-Platform game created as the final group project for the Advanced Game Programming course in Stony Brook University during the Fall 2019 semester. This game was created using Unity and Blender, and can be played as an executable or through WebGL online. The objective of the game is to reach the endpoint of each level as fast as possible as you play a robot that is trying to escape a dystopian city ruled by a corrupt leader.
                            </p>
                        </div>
                        <div className="sectionImage" >
                            <img src={speedBotImage} alt="SpeedBot"></img>
                            <div className="imageHoverDiv">
                                <a href={gitHubSpeedBot} target="_blank">
                                    <div className="linkDiv">
                                        <h2>Play as .exe</h2>
                                    </div>
                                </a>
                                <a href={projectSpeedBot} target="_blank">
                                    <div className="linkDiv">
                                        <h2>Play as WebGL</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioContentSection">
                        <div className="sectionInfo">
                            <h2>The Tail of a City</h2>
                            <p>
                                A 2D-Adventure game created as the final group project for the Beginner Game Programming course in Stony Brook University during the Spring 2019 semester. This game was created using Phaser, a 2D game framework that utilizes JavaScript and WebGL, and can be played online. The objective of the game is to complete certain quests in each level as a playable dog, where quests are dependent on your in-game reputation and experience.
                            </p>
                        </div>
                        <div className="sectionImage">
                            <img src={ttoacImage} alt="The Tail of a City"></img>
                            <div className="imageHoverDiv">
                                <a href={gitHubTTOAC} target="_blank">
                                    <div className="linkDiv">
                                        <h2>View Source</h2>
                                    </div>
                                </a>
                                <a href={projectTTOAC} target="_blank">
                                    <div className="linkDiv">
                                        <h2>Play as WebGL</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        
    );

}

export default Portfolio;
