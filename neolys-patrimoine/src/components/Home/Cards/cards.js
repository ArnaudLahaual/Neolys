import React from "react";
import CardItem from "./CardItem/cardItem";
import './cards.scss';
import assurance from '../../../assets/images/assurance-prevoyance.jpg';
import biens from '../../../assets/images/biensdivers.jpg';
// import epargne from '../../../assets/images/epargne.jpg';
import fiscalite from '../../../assets/images/fiscalite.jpg';
import investissement from '../../../assets/images/investissement.jpg';

const Cards = () => {
    return(
       <div className="cards">
            <CardItem img={assurance} title='assurance' link='/assurance' />
            <CardItem img={biens}  title='biens' link='/biens' />
            <CardItem img={assurance}  title='epargne' link='/epargne' />
            <CardItem img={fiscalite}  title='fiscalite' link='/fiscalite' />
            <CardItem img={investissement}  title='investissement' link='/investissement' />
       </div>
    )
}

export default Cards;