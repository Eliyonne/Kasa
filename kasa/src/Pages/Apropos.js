import React from "react";
import APROPOS from "../ressources/img/Apropos.png"
import FAQ from "../Composants/FAQ/FAQ";

export default function Apropos(){
    return (
        <div>
            <img src={APROPOS} alt="Un fond" className='Homeimg'/>
            <FAQ />
        </div>
    )
}