import React from "react";

function Home(){
    return(
        <div id="main">
            <div className="header-heading">
                <h2>STEP UP YOUR<br/><span>CODING SKILLS</span> WITH US</h2><hr style={{width:"45px",height:"3px",background:"black",}} />
                <div className="header-btns">
                    <a href="http://localhost:3000/contact" className="header-btn">JOIN US</a>
                </div>
                <p className="details">Build Your Concepts and Career in Coding World Under A Good Guidance</p>
                <hr style={{width:"45px",height:"3px",background:"black",}} />
            </div>
        </div>
    )
}

export default Home;