import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.scss";

// import required modules
import { Pagination } from "swiper";
import {BiBuildings} from 'react-icons/bi';
import {BsCalculator} from 'react-icons/bs';
import {AiOutlineStock} from 'react-icons/ai';
import {GiReceiveMoney} from 'react-icons/gi';
import {MdFamilyRestroom} from 'react-icons/md';
import {GiFamilyTree} from 'react-icons/gi';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='services__card'>
            <div className='services__card__entete'>
              <BiBuildings id='icon'/>
              <h2 className='services__card__entete__title'>Investissements immobiliers</h2>
            </div>

            <div className='services__texte'>
              <p className='services__texte__p'>Vous souhaitez investir dans l'immobilier ? Contactez nous</p>
            </div>

        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='services__card'>
            <div className='services__card__entete'>
              <BsCalculator id='icon'/>
              <h2 className='services__card__entete__title'>Réduction d'impôts</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='services__card'>
            
            <div className='services__card__entete'>

              <GiReceiveMoney id='icon'/>
              <h2 className='services__card__entete__title'>Investissements Financiers</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='services__card'>
            
            <div className='services__card__entete'>

              <AiOutlineStock id='icon'/>
              <h2 className='services__card__entete__title'>Analyse boursière</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='services__card'>
            
            <div className='services__card__entete'>

              <MdFamilyRestroom id='icon'/>
              <h2 className='services__card__entete__title'>Préparation retraite</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
            
          <div className='services__card'>
            
            <div className='services__card__entete'>

              <GiFamilyTree id='icon'/>
              <h2 className='services__card__entete__title'>Transmission du patrimoine</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
