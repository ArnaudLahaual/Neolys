import React from "react";
import CartesItem from "./CartesItem/cartesItem";
import './cartes.scss';
import { useSelector } from "react-redux";

const Cartes = () => {

    const {isHovering} = useSelector((state) => state.neolys);
    console.log(isHovering);

    return(
       <div className="cartes">

            <CartesItem title ="IMMOBILIER" />
            <CartesItem title ="FINANCIER" />
            <CartesItem title ="ASSURANCE" />
            <CartesItem title ="PREVOYANCE" />


       </div>
    )
}

export default Cartes;