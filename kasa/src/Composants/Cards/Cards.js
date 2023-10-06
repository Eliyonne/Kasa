import React from 'react';
import "../Cards/Cards.js"

function Cards() {
    const logements = require("../../ressources/logements.json");
    console.log(logements);
    return (
        <div className='Card__container'>
            {
            logements.map((logement) => {
                    console.log(logement);
                    return(
                        <logement title={logement.title} cover={logement.cover}/>
                    )
                })
            }
        </div>
    );
}

export default Cards;