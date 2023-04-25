import React from "react";
import './cardItem.scss';
import {BsPlusCircleFill} from 'react-icons/bs';
import { NavLink } from "react-router-dom";

const CardItem = ({img, title,link}) => {
    return(
            <div className="cardItem">
                <img src={img} alt=""></img>
                    <div className="cardItem__infos">
                        <h3>{title}</h3>
                    </div>
                    <div className="cardItem__infos__more">
                        <NavLink to={link}><p className="cardItem__infos__more__text">En savoir plus <BsPlusCircleFill /> </p></NavLink>
                    </div>
                
            </div>
    )
}

export default CardItem;