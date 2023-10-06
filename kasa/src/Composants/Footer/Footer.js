import React from "react";
import "../Footer/Footer.scss";
import LOGOfooter from "../../ressources/img/LOGOfooter.png";

export default function Footer(){
    return(
        <footer>
            <div className="footer__container">
                <img src={LOGOfooter} alt="Logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}