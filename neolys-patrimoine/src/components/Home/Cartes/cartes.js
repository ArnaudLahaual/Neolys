import React from "react";
import CartesItem from "./CartesItem/cartesItem";
import './cartes.scss';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cartes = () => {

    const {isHovering} = useSelector((state) => state.neolys);
    console.log(isHovering);

    return(
       <div className="cartes">

            <CartesItem title ="IMMOBILIER" link="" />
            <CartesItem title ="FINANCIER" link="" />
            <CartesItem title ="ASSURANCE" link="/assurance" />
            <CartesItem title ="PREVOYANCE" link="" />
            


       </div>
    )
}

export default Cartes;