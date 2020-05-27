import React from 'react';
import '../css/hobbies.css';

function Hobbies(props) {

    return (

        <div className="pageContainer" id="hobbiesContainer">

            <div className="return" id="returnHobbies" onClick={props.closePage}>
                
            </div>
            <div className="pageWrapper">

                
                <div className="divBack">
                    <h1 className="titleHeading">Hobbies</h1>
                </div>
                <div className="pageContent" id="hobbiesContent">
                    <p className="preview">This page is under construction. Please come back later.</p>
                </div>

            </div>
            
        </div>
        
    );

}

export default Hobbies;
