import React, { useState } from "react";
import './cartesItem.scss';
// import { NavLink } from "react-router-dom";

const CartesItem = ({title, text}) => {

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
                    <p>En savoir plus</p>
                </div>
            ) : (

                <>
                <div className="carte__title">
                        <h1>{title}</h1>
                </div>
                </>

            )}
            </div>
    );
  }

export default CartesItem;