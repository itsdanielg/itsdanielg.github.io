import React from 'react';
import animationData from  '../json/loading.json';
import '../css/loader.css';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

function Loader(doneLoading) {

    const done = () => {
        var element = document.getElementById("loaderContainer");
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.01){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

    return (
        <div id="loaderContainer">
        </div>
    );

}

export default Loader;
