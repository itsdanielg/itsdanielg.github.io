import React from 'react';
// import {motion} from 'framer-motion';
import descriptions from "../json/descriptions.json";
import '../css/biography.css';

const introHeading = descriptions.biography.introduction.heading;
const introDesc = descriptions.biography.introduction.description;
const educationHeading = descriptions.biography.education.heading;

const bgImage = "/images/bg.jpg";
const sbuImage = "/images/sbu.jpg";
const seawolfImage = "/images/seawolf.png";

function Biography() {

    var addSkill = (skillName, skillPercentage) => {
        var width = skillPercentage * 0.8;
        var percentage = width.toString() + "%";
        var skill = 
            <div className="skill">
                <div className="skillName">
                    {skillName}
                </div>
                <div className="skillPercentage" style={{width: percentage}}></div>
                <label>{skillPercentage + "%"}</label>
            </div>;
        return skill;
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="title-heading">ABOUT ME</h1>
                <div className='title-underline'></div>
            </div>
            <div className="page-body">
                <p className="description">{introHeading}</p>
                <div className="background-image">
                    <img src={bgImage} alt="scenery"></img>
                </div>
                <p className="description">{introDesc}</p>
                <div className="stony-brook-container">
                    <div className="sbu-image-wrapper">
                        <img className="sbu-image" src={sbuImage} alt="sbu"></img>
                        <div className="sbu-image-mask">
                            <img className="seawolf-image" src={seawolfImage} alt="sbu"></img>
                            <div className="sbu-image-description">
                                <h1>Stony Brook University</h1>
                                <p>{educationHeading}</p>
                            </div>
                        </div>
                    </div>
                    <div className="skillbars">
                        {addSkill("Java", 80)}
                        {addSkill("Python", 70)}
                        {addSkill("C", 55)}
                        {addSkill("C++", 40)}
                        {addSkill("C#", 70)}
                        {addSkill("JavaScript", 70)}
                        {addSkill("HTML / CSS", 65)}
                        {addSkill("Unity3D", 60)}
                        {addSkill("Blender", 50)}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Biography;
