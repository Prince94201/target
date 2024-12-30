import React from "react";
import aboutimage from "../images/about.png"

function About(){
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt=""/>
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT DIRECTOR</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default About;