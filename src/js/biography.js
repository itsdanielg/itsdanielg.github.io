import React from 'react';
import '../css/biography.css';

function Biography(props) {

    return (

        <div className="pageContainer" id="biographyContainer">
            
            <div className="return" id="returnBio" onClick={props.closePage}>
                
            </div>
            <div className="pageWrapper">

                
                <div className="divBack">
                    <h1 className="titleHeading">About Me</h1>
                </div>
                <div className="pageContent" id="bioContent">
                    <p className="preview">This page is under construction. Please come back later.</p>
                </div>

            </div>
            
        </div>

    );

}

export default Biography;
