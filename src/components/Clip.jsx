import React from "react";

import './Clip.css'

export default props =>
    <div className="clipsTab">
        <div 
        className= {`img  
        ${props.img == 'img1' ? 'img1' : ''}
        ${props.img == 'img2' ? 'img2' : ''}`}>
        </div>
        <div className="imgDesc">
            <p>{props.text}</p>
        </div>
    </div>