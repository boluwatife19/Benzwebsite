import React from "react";

export default function Navbar(){
    
    
    return(
        <nav  className = "nab">
            <a className="logo" href="#home">
                <img src={process.env.PUBLIC_URL+'/images/belo.jpg'} alt= "BENZ LOGO"/>
            </a>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#pages">pages</a></li>
                <li><a href="#gallery">gallery</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#shop">shop</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <div className="lines">
                <span className="hea   "></span>
                <span ></span>
            </div>
        </nav>
    );
}