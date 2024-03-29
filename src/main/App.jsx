import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Clip from "../components/Clip";

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="descricao">
                    <div className="generos">
                        <span>DRAMA</span>
                        <span>AÇÃO</span>
                        <span>ROUBO</span>
                    </div>
                    <h1>La casa de Papel</h1>
                    <p>2019 | Diretor: | 3 Temporadas</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores totam illum ab tempora earum officia, fugit doloribus exercitationem a pariatur! Earum distinctio temporibus voluptatum similique ex ipsum sunt nisi.</p>
                    <div className="buttons">
                        <button id="btnWatch">ASSISTIR</button>
                        <button id="watchEps">TODOS OS EPS.</button>
                    </div>
                </div>
                <h3 id="titleClips">CLIPES POPULARES DA TEMPORADA</h3>
                <div className="clips">
                    <Clip img = "img1" text = "Episódio 1"/>
                    <Clip img = "img2" text = "Episódio 2"/>
                    <Clip img = "img3" text = "Episódio 3"/>
                    <Clip img = "img4" text = "Episódio 4"/>
                </div>
            </div>
        )
    }
}