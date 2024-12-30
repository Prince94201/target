import React from "react";
import Featurebox from "./Featurebox";
import c from "../images/c.png";
import cpp from "../images/cpp.png";
import java from "../images/java.png";
import pydj from "../images/py-dj.png";
import pyds from "../images/py-ds.png";
import mern from "../images/mern.png";
import ds from "../images/DS.png";
import php from "../images/php.png";

function Feature(){
    return (
        <div id="features">
            <h1> YOU CAN LEARN</h1>
            <div className="a-container">
                <Featurebox image={c} title="C"/>
                <Featurebox image={cpp} title="C++"/>
                <Featurebox image={java} title="Java"/>
                <Featurebox image={ds} title="Data Structures"/>
            </div>
            <div className="a-container">
                <Featurebox image={pydj} title="Python with Django"/>
                <Featurebox image={pyds} title="Python with Data Science"/>
                <Featurebox image={mern} title="MERN"/>
                <Featurebox image={php} title="php"/>
            </div>
        </div>
    )
}

export default Feature;