import React, {useState} from "react";
import logo from '../images/logo.png';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Feature from "./Learnings";
import Home from "./Home";
import Achievers from "./Achievers";
import About from "./About";
import Contact from "./Contact";

function Navbar(){

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground)
    return (
        <BrowserRouter forceRefresh = {true}>
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to="http://localhost:3000/" className="logo">
                <img src={logo} alt="TheTarget"/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
           
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/learnings">Learnings</Link></li>
                <li><Link to="/Achievers">Achievers</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route exact path="/" element = {<Home/>}></Route>
            <Route path="/learnings" element = {<Feature/>}></Route>
            <Route path="/Achievers" element = {<Achievers/>}></Route>
            <Route path="/About" element = {<About/>}></Route>
            <Route path="/Contact" element = {<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Navbar;