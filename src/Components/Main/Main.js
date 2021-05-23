import React from 'react';
import './style.css';
import ProjectData from '../ProjectData/ProjectData';
import Headshot from './headshot2.jpg'

function Main() {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="p-5 caption home-pic text-center text-uppercase">
                    <br /><br /><br />
                    <h1 id="nametag" className="text-dark text-center">Jules Scheil</h1>
                    <img className="headshot resize" src={Headshot} alt="profilepic" />
                    <br />
                    <a id="sub-btn" className="btn btn-dark btn-lg" href="/Scheil-Juliana-Resume.pdf"
                        target="_blank">resume</a>
                    <br />
                    <br />
                    <h1> </h1>
                </div >
            </div>
            <div>
                <div className="container-fluid">
                    <div id="aboutme" className="p-5 m-5 bg-light text-dark text-center">
                        <h1 className="text-darK">ABOUT ME</h1>
                        <p id="about-p">
                            Senior Data Analyst turned Full Stack Web Dev
                            <br /><br />When I'm not in my office, you can find me running, exploring all Atlanta has to offer, or
                            at Home Depot (home reno)
                        </p>
                    </div>
                </div>
            </div>
            <ProjectData />
            <div>
            <div className="container-fluid">
            <div id="contactme" className="p-5 m-5 bg-light text-dark text-center">
                <h1 className="text-darK">CONTACT ME</h1>
                <form>
                    <div className="form-group mb-2">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Say Something!</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                            placeholder="Write anything here" rows="3"></textarea>
                    </div>
                    <a id="sub-btn" className="btn btn-dark" href="mailto: jules.m.scheil@gmail.com">Send</a>
                </form>
            </div>
        </div>
            </div>
        </div>
        )
}
export default Main;