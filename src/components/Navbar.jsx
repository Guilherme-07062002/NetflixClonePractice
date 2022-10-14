import React from "react";

import './Navbar.css'

export default props =>
    <div className="navBar">
        <div className="title"><h1 id="netflix">Netflix </h1><p>|</p><p>Quinta, 13-10 2022</p></div>
        <div className="options">
            <h3>Home</h3>
            <h3>Filmes</h3>
            <h3>Séries</h3>
            <h3>Minha Lista</h3>
        </div>
    </div>