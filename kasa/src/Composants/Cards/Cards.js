import React from 'react';
import "../Cards/Cards.scss";
import { Link } from "react-router-dom";
// import Logement from "../Logement/Logement.js"

function Cards() {
    const logements = require("../../ressources/logements.json");
    console.log(logements);
    return (
        <div className='Card__container'>
            {
            logements.map((logement) => {
                    console.log(logement);
                    return(
                        <div className='Cards'>
                            <Link to='/fiche-logement/{id}'>
                                <img className='Card__image' src={logement.cover} alt="" />
                                <p className='Vignette'>{logement.title}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cards;