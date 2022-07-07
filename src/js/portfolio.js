import React, {useState, useEffect, useRef} from 'react';
import descriptions from "../json/descriptions.json";
import FilterTag from '../components/FilterTag';
import FilterProject from '../components/FilterProject';
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
                                <FilterProject key={index} project={project}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Portfolio;
