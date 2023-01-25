import './slideshow.scss';
import React from 'react';
import {Slide} from 'react-slideshow-image';
import cyril from '../../../assets/images/cyril.png';
import boris from '../../../assets/images/boris.png';
import generali from '../../../assets/logo/generali.png';
import alpheys from '../../../assets/logo/alpheys.png';
import primonial from '../../../assets/logo/primonial.jpg';
import anacofi from '../../../assets/logo/anacofi.png';
import corumepargne from '../../../assets/logo/corumepargne.jpg';
import helenis from '../../../assets/logo/helenis.png';
import orias from '../../../assets/logo/orias.jpg';

const proprietes = {
    duration : 5000,
    transitionDuration :700,
    infinite: true,
    indicators: false,
    arrows : false,
 }

function SlideShow() {
  return (

        <div className='containerSlide' id='partenaires'>

            <div className='containerSlide__div'>
                <h1 className='containerSlide__title'>Nos Partenaires</h1>
            </div>
        
        <Slide {...proprietes}>
            <div className='each-slide'>
                <div className='images__partenaires'>
                    <img src={generali} alt='generalis'id='generali' />
                </div>
            </div>
            
            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={alpheys} alt='alpheys'id='alpheys' />
                </div>
            </div>

            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={primonial} alt='primonial'id='primonial' />
                </div>
            </div>
            
            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={anacofi} alt='anacofi'id='anacofi' />
                </div>
            </div>

            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={corumepargne} alt='corumepargne'id='corumepargne' />
                </div>
            </div>

            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={helenis} alt='helenis'id='helenis' />
                </div>
            </div>
            
            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={orias} alt='orias'id='orias' />
                </div>
            </div>


        </Slide>
        
        </div>
  );
}

export default SlideShow;