import React, { useState } from "react";
import './cartesItem.scss';
import { NavLink } from "react-router-dom";

const CartesItem = ({title, link}) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    }
  
    const handleMouseOut = () => {
      setIsHovering(false);
    }
  
    return (
      <div className="carte"
    
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {isHovering ? (
                <div className="carte__more">
                 <NavLink to={link}> <p className="carte__more__text">En savoir plus</p></NavLink>  
                </div>
            ) : (

                <>
                <div className="carte__title">
                        <h1 className="carte__title__title">{title}</h1>
                </div>
                </>

            )}
            </div>
    );
  }

export default CartesItem;