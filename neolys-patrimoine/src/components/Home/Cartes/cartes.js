import React from "react";
import CartesItem from "./CartesItem/cartesItem";
import './cartes.scss';
import { useSelector } from "react-redux";

//assets
import assurance from '../../../assets/images/assurance.jpg';
import investissement from '../../../assets/images/investissement.jpg';
import prevoyance from '../../../assets/images/biensdivers.jpg';


const Cartes = () => {

    const {isHovering} = useSelector((state) => state.neolys);
    console.log(isHovering);

    return(
       <div className="cartes">

            <CartesItem img={prevoyance} title ="IMMOBILIER" link="" />
            <CartesItem img={prevoyance} title ="FINANCIER" link="" />
            <CartesItem img={prevoyance} title ="ASSURANCE" link="/assurance" />
            <CartesItem img={prevoyance} title ="PREVOYANCE" link="/prevoyance" />
            


       </div>
    )
}

export default Cartes;