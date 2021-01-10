import React, {useState, useEffect} from 'react';
// import {motion} from 'framer-motion';
import descriptions from "../json/descriptions.json";
import '../css/portfolio.css';

// const profMcKenna = "https://www3.cs.stonybrook.edu/~richard/";

function Portfolio() {

    var [filters, setFilters] = useState(() => {
        return [];
    });

    var filterOpen = true;

    var openFilter = (e) => {
        filterOpen = !filterOpen;
        if (window.matchMedia("only screen and (max-width: 600px)")) {
            var div = e.currentTarget;
            var filterNav = document.getElementById("filterNavID");
            if (!filterOpen) {
                div.innerHTML = "Tap to view filters...";
                filterNav.style.display = "none";
            }
            else {
                div.innerHTML = "Tap to hide filters...";
                filterNav.style.display = "flex";
            }
        }
    }

    var addFilter = (innerHTML) => {
        setFilters(prevFilters => [...prevFilters, (innerHTML)]);
    }

    var removeFilter = (innerHTML) => {
        var newFilters = filters.filter((filter) => filter !== innerHTML);
        setFilters(newFilters);
    }

    var filterNav = (e) => {
        var div = e.currentTarget;
        if (div.className === "filter-nav-tag-selected") {
            div.className = "filter-nav-tag";
            removeFilter(div.innerHTML);
        }
        else {
            div.className = "filter-nav-tag-selected";
            addFilter(div.innerHTML);
        }
    }

    var filterProject = (tags) => {
        if (tags.length === 0) return false;
        for (var filter of filters) {
            if (!tags.includes(filter)) {
                return true;
            }
        }
        return false;
    }

    var descriptionOnClick = (e) => {
        if (e.target.nodeName !== "H2") return;
        var div = e.currentTarget;
        var description = div.children[1];
        if (description.className === "project-description-open") {
            description.className = "project-description";
        }
        else {
            description.className = "project-description-open";
        }
    }

    var addProject = (index) => {
        var project = descriptions.portfolio[index];
        var tags = project.tags;
        if (filterProject(tags)) return;
        var heading = project.heading;
        var description = project.description;
        var image = project.image;
        var preview = project.preview;
        var github = project.github;
        var demo = project.demo;
        var section = 
            <div className="project-container">
                <div className="project-image" >
                    <img src={image} alt={heading}></img>
                    <div className="project-image-hover">
                        <video autoPlay="autoplay">
                            <source src={preview} type="video/avi"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="project-info" onClick={descriptionOnClick}>
                    <h2>{heading}</h2>
                    <div className="project-description">
                        <p>{description}</p>
                        <div className="links-container">
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <div className="link-div">
                                    <h3>View Github</h3>
                                </div>
                            </a>
                            <a href={demo} target="_blank" rel="noopener noreferrer">
                                <div className="link-div">
                                    <h3>View Demo</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>;
        return section;
    }

    useEffect(() => {
        filterOpen = false;
    }, []);

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="title-heading">PORTFOLIO</h1>
                <div className='title-underline'></div>
            </div>
            <div className="page-body">
            <div className="filter-nav-dropdown" onClick={openFilter}>Tap to view filters...</div>
                <div className="filter-nav" id="filterNavID">
                    <div className="filter-nav-row">
                        <div className="filter-nav-tag" onClick={filterNav}>Java</div>
                        <div className="filter-nav-tag" onClick={filterNav}>Python</div>
                        <div className="filter-nav-tag" onClick={filterNav}>C#</div>
                        <div className="filter-nav-tag" onClick={filterNav}>C</div>
                        <div className="filter-nav-tag" onClick={filterNav}>C++</div>
                        <div className="filter-nav-tag" onClick={filterNav}>JavaScript</div>
                        <div className="filter-nav-tag" onClick={filterNav}>HTML / CSS</div>
                    </div>
                    <div className="filter-nav-row">
                        <div className="filter-nav-tag" onClick={filterNav}>React</div>
                        <div className="filter-nav-tag" onClick={filterNav}>Node.js</div>
                        <div className="filter-nav-tag" onClick={filterNav}>Unity</div>
                        <div className="filter-nav-tag" onClick={filterNav}>Blender</div>
                        <div className="filter-nav-tag" onClick={filterNav}>Phaser</div>
                    </div>
                    <div className="filter-nav-row">
                        <div className="filter-nav-tag" onClick={filterNav}>Personal</div>
                        <div className="filter-nav-tag" onClick={filterNav}>University</div>
                    </div>
                </div>
                <div className="page-content-flex">
                    <div className="page-content-title">
                        <h1>Filter projects by language / framework / etc...</h1>
                    </div>
                    <div className="page-content-projects">
                        {addProject(0)}
                        {addProject(1)}
                        {addProject(2)}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Portfolio;
