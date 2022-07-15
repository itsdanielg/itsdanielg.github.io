// import {useState, useRef} from 'react';
import '../styles/Preloader.css';

function Preloader() {

    // const [progressState, setProgressState] = useState(() => {
    //     return "start";
    // })

    // const timer = useRef();
    // const progress = useRef(10);

    // // Loading transition ends on 5
    // const transitionEndTime = useRef(0);

    // const changeProgress = () => {
    //     progress.current++;
    //     var progressBar = document.getElementById("progressBarProgress");
    //     progressBar.style.width = `${progress.current}%`;
    //     if (progress.current >= 100) {
    //         clearInterval(timer.current);
    //         setProgressState("end");
    //     }
    // }

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     timer.current = setInterval(changeProgress, 25);
    // }, []);

    // useEffect(() => {
    //     if (progressState === "end") {
    //         var header = document.getElementById("preloaderHeader");
    //         var progressBar = document.getElementById("progressBarProgress").parentElement;
    //         var container = document.getElementById("preloaderContainer");
    //         header.className = "preloader-header-complete";
    //         progressBar.className = "preloader-bar-complete";
    //         container.className = "preloader-container-complete";
    //         container.ontransitionend = () => {
    //             transitionEndTime.current++;
    //             if (transitionEndTime.current === 5) {
    //                 console.log('Transition ended');
    //                 document.body.style.overflow = "auto";
    //             }
    //         };
    //     }
    // }, [progressState]);

    return (
        <div className="preloader-container" id="preloaderContainer">
            <div className="preloader-hexagon">
                <div className="preloader-hexagon-shape">
                </div>
            </div>
            {/* <div className="preloader-header" id="preloaderHeader">
                <h1>Loading...</h1>
            </div>
            <div className="preloader-bar" >
                <div className="preloader-bar-progress" id="progressBarProgress"></div>
            </div> */}
        </div>
    );

}

export default Preloader;
