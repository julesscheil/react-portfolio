import React from 'react';
import './style.css';
import BakeIt from './bitymi.PNG';
import EmployeeTrack from './employeeTracker.png';
import Notes from './notetaker.png';
import Budget from './budget.png';
import Dungeons from './dungeons.png';
import ReadMe from './readme.png';

function ProjectData() {
    return (
        <div id="projects" className="container-fluid p-0">
            <div className="p-5 m-5 bg-light text-dark text-center text-uppercase">
                <h1 className="text-dark">Projects</h1>
                <h2 id="small-text">~ Click the picture for repo and "here" for deployed site ~</h2>
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
                    <div className="row p-3">
                    <div className="col-6">
                        <div className="border border-dark rounded">
                            <a href="https://github.com/julesscheil/Project-1" target="_blank">
                                <img className="card-img-top" src={BakeIt} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text">Bake it 'Til You Make It <br /> This holiday, find new recipes to treat your loved ones </p> 
                                    <a id="links" href="https://julesscheil.github.io/Project-1/"> here!</a>
                             </div>
                             </div>
                        </div>
                        <div className="col-6">
                            <div className="border border-dark rounded">
                                <a href="https://github.com/julesscheil/Employee-Tracker" target="_blank">
                                    <img className="card-img-top" src={EmployeeTrack} alt="Card image cap" />
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Update, Delete, and Add new employees in your database all using Node.js and MySQL </p><a id="links"
                                        href="https://github.com/julesscheil/Employee-Tracker"> here!</a>
                                </div>

                            </div>
                        </div>
                    <div className="col-6">
                            <div className="border border-dark rounded">
                                <a href="https://github.com/julesscheil/Note-Taker" target="_blank">
                                    <img className="card-img-top" src={Notes} alt="Card image cap" />
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Tired of handwriting all of your notes? Type them out with ease with this user-friendly application</p><a id="links"
                                        href="https://damp-stream-96903.herokuapp.com/"> here!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border border-dark rounded">
                                <a href="https://github.com/julesscheil/Dynamic-ReadMe-Maker" target="_blank">
                                    <img className="card-img-top" src={ReadMe} alt="Card image cap" />
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Create a ReadMe with ease using this dynamic Node.js application</p><a id="links"
                                        href="https://drive.google.com/file/d/1RuaoM4FSPsYBTFVJtKvyvoOMmBmt823N/view"> here!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border border-dark rounded">
                                <a href="https://github.com/VHarris113/dungeon-maintenance" target="_blank">
                                    <img className="card-img-top" src={Dungeons} alt="Card image cap" />
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Table-top game character generator, log in to see your individual characters</p><a id="links"
                                        href="tranquil-castle-20966.herokuapp.com/"> here!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border border-dark rounded">
                                <a href="https://github.com/julesscheil/Online-Offline-Budget-Tracker" target="_blank">
                                    <img className="card-img-top" src={Budget} alt="Card image cap" />
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Keep track of you budget and spending on & offline</p><a id="links"
                                        href="https://serene-ridge-30725.herokuapp.com/"> here!</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
            </div>
        </div>
    )
}

export default ProjectData;