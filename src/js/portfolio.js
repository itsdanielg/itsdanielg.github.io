import React, {useState, useEffect, useRef} from 'react';
// import {motion} from 'framer-motion';
import descriptions from "../json/descriptions.json";
import '../css/portfolio.css';

// const profMcKenna = "https://www3.cs.stonybrook.edu/~richard/";

function Portfolio() {

    var [filters, setFilters] = useState(() => {
        return [];
    });

    var [projects, setProjects] = useState(() => {
        return descriptions.portfolio;
    });

    const filterOpen = useRef(false);

    var openFilter = (e) => {
        filterOpen.current = !filterOpen.current;
        if (window.matchMedia("only screen and (max-width: 600px)")) {
            var div = e.currentTarget;
            var filterNav = document.getElementById("filterNavID");
            if (!filterOpen.current) {
                div.innerHTML = "Tap to view filters...";
                filterNav.style.display = "none";
            }
            else {
                div.innerHTML = "Tap to hide filters...";
                filterNav.style.display = "flex";
            }
        }
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

    var addFilter = (innerHTML) => {
        setFilters(prevFilters => [...prevFilters, (innerHTML)]);
    }

    var removeFilter = (innerHTML) => {
        var newFilters = filters.filter((filter) => filter !== innerHTML);
        setFilters(newFilters);
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

    useEffect(() => {
        // Filter Projects
        if (filters.length === 0) {
            setProjects(descriptions.portfolio);
        }
        else {
            const projectsCopy = [];
            for (var project of descriptions.portfolio) {
                let projectTags = project.tags;
                if (filters.every(filter => projectTags.includes(filter))) {
                    projectsCopy.push(project);
                }
            }
            setProjects(projectsCopy);
        }
    }, [filters])

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
                        {projects.map((project, index) => {
                            return (
                                <div key={index} className="project-container">
                                    <div className="project-image" >
                                        <img src={project.image} alt={project.heading}></img>
                                        {/* <div className="project-image-hover">
                                            <video autoPlay="autoplay">
                                                <source src={preview} type="video/avi"/>
                                                Your browser does not support the video tag.
                                            </video>
                                        </div> */}
                                    </div>
                                    <div className="project-info" onClick={descriptionOnClick}>
                                        <h2>{project.heading}</h2>
                                        <div className="project-description">
                                            <p>{project.description}</p>
                                            <div className="links-container">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <div className="link-div">
                                                        <h3>View Github</h3>
                                                    </div>
                                                </a>
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <div className="link-div">
                                                        <h3>View Demo</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Portfolio;
