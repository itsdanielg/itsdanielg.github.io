import React, {useState, useEffect} from 'react';
import '../css/preloader.css';

function Preloader() {

    var timer;
    var progress = 10;

    // Loading transition ends on 5
    var transitionEndCounter = 0;

    const [progressState, setProgressState] = useState(() => {
        return "start";
    })

    const changeProgress = () => {
        progress++;
        var progressBar = document.getElementById("progressBarProgress");
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(timer);
            setProgressState("end");
        }
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        timer = setInterval(changeProgress, 25);
    }, []);

    useEffect(() => {
        if (progressState === "end") {
            var header = document.getElementById("preloaderHeader");
            var progressBar = document.getElementById("progressBarProgress").parentElement;
            var container = document.getElementById("preloaderContainer");
            header.className = "preloader-header-complete";
            progressBar.className = "preloader-bar-complete";
            container.className = "preloader-container-complete";
            container.ontransitionend = () => {
                transitionEndCounter++;
                if (transitionEndCounter === 5) {
                    console.log('Transition ended');
                    document.body.style.overflow = "auto";
                }
            };
        }
    }, [progressState]);

    return (
        <div className="preloader-container" id="preloaderContainer">
            <div className="preloader-header" id="preloaderHeader">
                <h1>Loading...</h1>
            </div>
            <div className="preloader-bar" >
                <div className="preloader-bar-progress" id="progressBarProgress"></div>
            </div>
        </div>
    );

}

export default Preloader;
