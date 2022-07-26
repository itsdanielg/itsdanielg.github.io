import {useState, useEffect, useRef} from 'react';
import FilterTag from '../components/FilterTag';
import FilterProject from '../components/FilterProject'; 
import skills from "../json/skills.json";
import allProjects from "../json/projects.json";
import '../styles/Portfolio.css';
import '../styles/mobile/Portfolio.css';

function Portfolio() {

    const [filters, setFilters] = useState(() => {
        return [];
    });

    const [projects, setProjects] = useState(() => {
        return allProjects;
    });

    // ????
    const filterOpen = useRef(false);
 
    // MOBILE ONLY
    const openFilter = (e: any) => {
        filterOpen.current = !filterOpen.current;
        if (window.matchMedia("only screen and (max-width: 600px)")) {
            let div: any = e.currentTarget;
            let filterNav: any = document.getElementById("filterNavID");
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
        if (filters.length === 0) setProjects(allProjects);
        else {
            let projectsCopy = [];
            for (let project of allProjects) {
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
                        {skills.Languages.map((language, index) => {
                            return (
                                <FilterTag key={language+index} name={language} filters={filters} setFilters={setFilters}/>
                            )
                        })}
                    </div>
                    <div className="filter-nav-row">
                        {skills.Libraries.map((library, index) => {
                            return (
                                <FilterTag key={library+index} name={library} filters={filters} setFilters={setFilters}/>
                            )
                        })}
                    </div>
                    <div className="filter-nav-row">
                        <FilterTag name="Personal" filters={filters} setFilters={setFilters}/>
                        <FilterTag name="University" filters={filters} setFilters={setFilters}/>
                    </div>
                </div>
                <div className="page-content-flex">
                    <div className="page-content-title">
                        <h1>Filter projects by language / framework / library / etc...</h1>
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
