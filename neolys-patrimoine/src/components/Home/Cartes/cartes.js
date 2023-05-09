import React from "react";
import CartesItem from "./CartesItem/cartesItem";
import './cartes.scss';
import background from '../../../assets/images/fondtower.png';


const Cartes = () => {
    return(
       <div className="cartes">

            <CartesItem />
            <CartesItem />
            <CartesItem />
       </div>
    )
}

export default Cartes;