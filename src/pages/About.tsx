// import {useEffect} from 'react';
import about from "../json/about.json";
import '../styles/About.css';

const bgImage = "/images/bg.jpg";
const sbuImage = "/images/sbu.jpg";
const seawolfImage = "/images/seawolf.png";

function About() {

    // useEffect(() => {
    //     let skillPercentages = document.getElementsByClassName("skill-percentage");
    //     for (let i = 0; i < skillPercentages.length; i++) {
    //         let skillPercentageWidth = descriptyionskills[i].percentage * 0.8;
    //         skillPercentages[i].style.width = `${skillPercentageWidth}%`;
    //     }
    // }, [])

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="title-heading">ABOUT ME</h1>
                <div className='title-underline'></div>
            </div>
            <div className="page-body">
                <p className="description">{about.introduction.heading}</p>
                <div className="background-image">
                    <img src={bgImage} alt="scenery"></img>
                </div>
                <p className="description">{about.introduction.description}</p>
                <div className="stony-brook-container">
                    <div className="sbu-image-wrapper">
                        <img className="sbu-image" src={sbuImage} alt="sbu"></img>
                        <div className="sbu-image-mask">
                            <img className="seawolf-image" src={seawolfImage} alt="sbu"></img>
                            <div className="sbu-image-description">
                                <h1>Stony Brook University</h1>
                                <p>{about.education.heading}</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-bars">
                        {/* {descriptyionskills.map((skill, index) => {
                            return (
                                <div key={index} className="skill">
                                    <div className="skill-name">
                                        {skill.name}
                                    </div>
                                    <div className="skill-percentage"></div>
                                    <label>{`${skill.percentage}%`}</label>
                                </div> 
                            )
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;
