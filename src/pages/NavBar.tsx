import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {

    const [navOpen, setNavOpen] = useState(() => {
        return true;
    });

    const openNav = () => {
        setNavOpen(!navOpen);
        if (navOpen) {
            document.getElementById("navbar-button-id").className = "navbar-button-selected";
        }
        else {
            document.getElementById("navbar-button-id").className = "navbar-button";
        }
        var wrapper = document.getElementById("navbar-wrapper-id");
        if (navOpen) {
            wrapper.style.opacity = "1";
            wrapper.style.pointerEvents = "auto";
            document.body.style.overflow = "hidden";
        }
        else {
            wrapper.style.opacity = "0";
            wrapper.style.pointerEvents = "none";
            document.body.style.overflow = "auto";
        }
    }

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);;
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleResize = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    return (
        <div className="navbar-container" >
            <div className="navbar-button" id="navbar-button-id" onClick={openNav}>
                <div className="navbar-hexagon"></div>
                <div className="navbar-burger"></div>
            </div>
            <div className="navbar-wrapper" id="navbar-wrapper-id">
                <Link to="/" onClick={openNav}>
                    <div className="link-container">
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link to="/about" onClick={openNav}>
                    <div className="link-container">
                        <h1>About</h1>
                    </div>
                </Link>
                <Link to="/portfolio" onClick={openNav}>
                    <div className="link-container">
                        <h1>Portfolio</h1>
                    </div>
                </Link>
                <Link to="/contact" onClick={openNav}>
                    <div className="link-container">
                        <h1>Contact</h1>
                    </div>
                </Link>
            </div>
        </div>
    );

}

export default NavBar;
