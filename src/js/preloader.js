import React from 'react';
import '../css/preloader.css';

function Preloader(doneLoading) {

    return (
        <div className="preloaderContainer">
            <div className="preloaderHeader">
                <h1>LOADING</h1>
            </div>
            <div className="preloaderBar">
                <div className="preloaderBarProgress"></div>
            </div>
        </div>
    );

}

export default Preloader;
