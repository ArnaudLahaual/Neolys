import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './services.scss';
// import required modules
import { Pagination, Navigation } from "swiper";
import {BiBuildings} from 'react-icons/bi';
import {BsCalculator} from 'react-icons/bs';
import {AiOutlineStock} from 'react-icons/ai';
import {GiReceiveMoney} from 'react-icons/gi';
import {MdFamilyRestroom} from 'react-icons/md';
import {GiFamilyTree} from 'react-icons/gi';

import 'animate.css';

function Services() {
    return (
      <div className="services" id='services'>
        <div className="services__grille">
          
          <div className='services__card'>
            
              <div className='services__card__entete'>

                {/* <BiBuildings id='icon'/> */}
                <h2 className='services__card__entete__title'>Investissements immobiliers</h2>
              </div>

              <div className='services__texte'>
                <p className='services__texte__p'>PINEL, LMNP, MALRAUX, DEFICIT FONCIER, SCPI</p>
              </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <BsCalculator id='icon'/> */}
              <h2 className='services__card__entete__title'>Réduction<br></br> d'impôts</h2>
            </div>

            <div className='services__texte'>
              <p>DISPOSITIF IMMOBILIER, GIRARDIN INDUSTRIEL, SCPI FISCAL</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <GiReceiveMoney id='icon'/> */}
              <h2 className='services__card__entete__title'>Investissements Financiers</h2>
            </div>

            <div className='services__texte'>
              <p>CTO PEA, OPCI, SICAV, CRYPTO MONNAIE</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <AiOutlineStock id='icon'/> */}
              <h2 className='services__card__entete__title'>Analyse<br></br> boursière</h2>
            </div>

            <div className='services__texte'>
              <p>BLABLABLABAL</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <MdFamilyRestroom id='icon'/> */}
              <h2 className='services__card__entete__title'>Préparation retraite</h2>
            </div>

            <div className='services__texte'>
              <p>PER</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <GiFamilyTree id='icon'/> */}
              <h2 className='services__card__entete__title'>Transmission du patrimoine</h2>
            </div>

            <div className='services__texte'>
              <p>ASSURANCE VIE</p>
            </div>
            </div>
          </div>

          {/* CAROUSEL */}
          
        
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='services__card'>
            <div className='services__card__entete'>
              {/* <BiBuildings id='icon'/> */}
              <h2 className='services__card__entete__title'>Investissements immobiliers</h2>
            </div>

            <div className='services__texte'>
              <p className='services__texte__p'>PINEL, LMNP, MALRAUX, DEFICIT FONCIER, SCPI</p>
            </div>

        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='services__card'>
            <div className='services__card__entete'>
              {/* <BsCalculator id='icon'/> */}
              <h2 className='services__card__entete__title'>Réduction<br></br> d'impôts</h2>
            </div>

            <div className='services__texte'>
              <p>DISPOSITIF IMMOBILIER, GIRARDIN INDUSTRIEL, SCPI FISCAL</p>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <GiReceiveMoney id='icon'/> */}
              <h2 className='services__card__entete__title'>Investissements Financiers</h2>
            </div>

            <div className='services__texte'>
              <p>CTO PEA, OPCI, SICAV, CRYPTO MONNAIE</p>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <AiOutlineStock id='icon'/> */}
              <h2 className='services__card__entete__title'>Analyse<br></br> boursière</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <MdFamilyRestroom id='icon'/> */}
              <h2 className='services__card__entete__title'>Préparation retraite</h2>
            </div>

            <div className='services__texte'>
              <p>PER</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
            
          <div className='services__card'>
            
            <div className='services__card__entete'>

              {/* <GiFamilyTree id='icon'/> */}
              <h2 className='services__card__entete__title'>Transmission du patrimoine</h2>
            </div>

            <div className='services__texte'>
              <p>ASSURANCE VIE</p>
            </div>

          </div>

        </SwiperSlide>
      </Swiper>

          

    </div>
    );
  }
  
  export default Services;