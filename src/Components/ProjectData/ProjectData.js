import React from 'react';
import './style.css';
import bitymi from './bitymi.PNG';

function ProjectData(props) {
    return (
        <div id="projects" className="container-fluid p-0">
            <div className="p-5 m-5 bg-light text-dark text-center text-uppercase">
                <h1 className="text-dark">Projects</h1>
                <h2 id="small-text">~ Click the picture for repo and "here" for deployed site ~</h2>
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
            {props.projects.map(project => {
                <div className="row p-3">
                <div className="border border-dark rounded">
                    <a href={project.link} target="_blank">
                        <img className="card-img-top" src={project.imageSRC} alt="Card image cap" />
                    </a>
                    <div className="card-body">
                        <p className="card-text">{project.projName} <br /> {project.description} </p> 
                            <a id="links" href="https://julesscheil.github.io/Project-1/"> here!</a>
                     </div>
                </div>
            </div>
            })}
                
                </div>
            </div>
        </div>
    )
}

export default ProjectData;