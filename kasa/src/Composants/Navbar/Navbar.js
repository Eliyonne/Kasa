import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../ressources/img/LOGO.svg";
import "./Navbar.scss";


export default function Navbar(){
    return(
        <header>
            <div className="Navbar">
                <img src={LOGO} alt="" />
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/A-propos">A propos</Link>
                </nav>
            </div>
        </header>
    )
}