import React from 'react';
import './style.css';

function ProjectData() {
    return (
        <div id="projects" className="container-fluid p-0">
            <div className="p-5 m-5 bg-light text-dark text-center text-uppercase">
                <h1 className="text-dark">Projects</h1>
                <h2 id="small-text">~ Click the picture for repo and "here" for deployed site ~</h2>
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
                    <div className="row p-3">
                        <div className="border border-dark rounded">
                            <a href="https://github.com/julesscheil/Project-1" target="_blank">
                                <img className="card-img-top" src="assets/images/bitymi.PNG" alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text">Bake it 'Til You Make It <br /> This holiday, find new recipes to treat your loved ones </p> 
                                    <a id="links" href="https://julesscheil.github.io/Project-1/"> here!</a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectData;