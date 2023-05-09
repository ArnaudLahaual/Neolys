import React from "react";
import './cartesItem.scss';
// import { NavLink } from "react-router-dom";

const CartesItem = () => {
    return(
            <div className="cartes">
                <div className="cartes__carte">
                    <div className="cartes__title">
                        <h1>Titre</h1>
                    </div>
                    <div className="cartes__text">
                        <p>Texte</p>
                    </div>
                    <div className="cartes__more">
                        <p>En savoir plus</p>
                    </div>
                </div>
            </div>
    )
}

export default CartesItem;