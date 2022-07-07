import React, {useState, useEffect, useRef} from 'react';
import descriptions from "../json/descriptions.json";
import FilterTag from '../components/FilterTag';
import '../css/portfolio.css';

function Portfolio() {

    const [filters, setFilters] = useState(() => {
        return [];
    });

    const [projects, setProjects] = useState(() => {
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
                        <FilterTag name="Java" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="Python" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="C#" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="JavaScript" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="HTML/CSS" filters={filters} setFilters={setFilters}/>
                    </div>
                    <div className="filter-nav-row">
                        <FilterTag name="React" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="Node.js" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="Unity" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="Blender" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="Phaser" filters={filters} setFilters={setFilters}/>
                    </div>
                    <div className="filter-nav-row">
                        <FilterTag name="Personal" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="University" filters={filters} setFilters={setFilters}/>
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
