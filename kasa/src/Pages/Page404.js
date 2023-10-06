import React from "react";
import "../Styles/404.scss";
import { Link } from "react-router-dom";


export default function Page404(){
    return (
        <div className="Body__404">
            <p className="Title__404">404</p>
            <p className="Corp__404">Oups! La page que vous demandez n'existe pas.</p>
            <span><Link to="/" className="Return__404">Retourner sur la page d'acceuil</Link></span>
        </div>
    )
}