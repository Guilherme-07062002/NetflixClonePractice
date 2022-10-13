import React, { Component } from "react";

import Navbar from "../components/Navbar";

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores totam illum ab tempora earum officia, fugit doloribus exercitationem a pariatur! Earum distinctio temporibus voluptatum similique ex ipsum sunt nisi.</p>
                    <div>
                        <button>ASSISTIR</button>
                        <button>TODOS OS EPS.</button>
                    </div>
                </div>
            </div>
        )
    }
}