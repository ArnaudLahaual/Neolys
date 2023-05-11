import React from "react";
import CartesItem from "./CartesItem/cartesItem";
import './cartes.scss';
import { useSelector } from "react-redux";

//assets
import assurance from '../../../assets/images/assurance.jpg';
import investissement from '../../../assets/images/investissement.jpg';


const Cartes = () => {

    const {isHovering} = useSelector((state) => state.neolys);
    console.log(isHovering);

    return(
       <div className="cartes">

            <CartesItem title ="IMMOBILIER" link="" />
            <CartesItem title ="FINANCIER" link="" img={investissement} />
            <CartesItem title ="ASSURANCE" link="/assurance" />
            <CartesItem title ="PREVOYANCE" link="/prevoyance" />
            


       </div>
    )
}

export default Cartes;