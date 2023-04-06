import React from "react";

const data = [
    {
        id: 1,
        icon: <i className="fa-solid fa-square-share-nodes"></i>,
        text: `No: 58 A, East Madison Street, Baltimore, MD, USA 4508`
    },
    {
        id: 2,
        icon: <i className="fa-solid fa-square-share-nodes"></i>,
        text: `(+00) - 00-12-345-6789`
    },
    {
        id: 3,
        icon: <i className="fa-solid fa-square-share-nodes"></i>,
        text: `info@benz.com`
    }
]

export default function Contact(){
    return(
        <div className="contact">
            <h3>Get in touch with us</h3>
            <div className="address">
                {data.map(item => {
                    return(
                        <div className="map">
                            {item.icon}
                            <h4>{item.text}</h4>
                        </div>
                    );
                })}
            </div>
            <div className="mso">
                <ul className="socials">
                    <li><a href="#"><i className="fa-solid fa-square-share-nodes"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-square-share-nodes"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-square-share-nodes"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-square-share-nodes"></i></a></li>
                </ul>
            </div>
        </div>
    );
}