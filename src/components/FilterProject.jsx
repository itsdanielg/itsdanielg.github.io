import React, {useState, useEffect, useRef} from 'react';
import '../css/FilterProject.css';

function FilterProject(props) {

    const [isOpen, setIsOpen] = useState(() => {
        return false;
    })

    const ref = useRef(null);

    useEffect(() => {
        let description = ref.current;
        if (isOpen) description.className = "project-description-open";
        else description.className = "project-description";
    }, [isOpen])

    return (
        <div className="project-container">
            <div className="project-image" >
                <img src={props.project.image} alt={props.project.heading}></img>
                {/* <div className="project-image-hover">
                    <video autoPlay="autoplay">
                        <source src={preview} type="video/avi"/>
                        Your browser does not support the video tag.
                    </video>
                </div> */}
            </div>
            <div className="project-info" onClick={() => setIsOpen(!isOpen)}>
                <h2>{props.project.heading}</h2>
                <div ref={ref} className={"project-description"}>
                    <p>{props.project.description}</p>
                    <div className="links-container">
                        <a href={props.project.github} target="_blank" rel="noopener noreferrer">
                            <div className="link-div">
                                <h3>View Github</h3>
                            </div>
                        </a>
                        <a href={props.project.demo} target="_blank" rel="noopener noreferrer">
                            <div className="link-div">
                                <h3>View Demo</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FilterProject;