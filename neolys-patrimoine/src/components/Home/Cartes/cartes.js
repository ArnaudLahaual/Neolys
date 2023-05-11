import React from "react";
import CartesItem from "./CartesItem/cartesItem";
import './cartes.scss';
import { useSelector } from "react-redux";

//assets
import prevoyance from '../../../assets/images/biensdivers.jpg';


const Cartes = () => {

    const {isHovering} = useSelector((state) => state.neolys);
    console.log(isHovering);

    return(
       <div className="cartes " id="services">

            <CartesItem img={prevoyance} title ="IMMOBILIER" link="" />
            <CartesItem img={prevoyance} title ="FINANCIER" link="" />
            <CartesItem img={prevoyance} title ="ASSURANCE" link="/assurance" />
            <CartesItem img={prevoyance} title ="PREVOYANCE" link="/prevoyance" />
            


       </div>
    )
}

export default Cartes;