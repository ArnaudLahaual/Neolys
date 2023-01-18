import './slideshow.scss';
import React from 'react';
import {Slide} from 'react-slideshow-image';
import cyril from '../../../assets/images/cyril.png';
import boris from '../../../assets/images/boris.png';

const proprietes = {
    duration : 5000,
    transitionDuration :700,
    infinite: true,
    indicators: false,
    arrows : false,
 }

function SlideShow() {
  return (

        <div className='containerSlide'>

            <div className='containerSlide__div'>
                <h1 className='containerSlide__title'>Nos Partenaires</h1>
            </div>
        
        <Slide {...proprietes}>
            <div className='each-slide'>
                <div className='images__partenaires'>
                    <img src={cyril} alt='cyril'id='cyril' />
                </div>
            </div>
            
            <div className='each-slide'>
                <div className='images__partenaires' >
                    <img src={boris} alt='boris'id='boris' />
                </div>
            </div>
        </Slide>
        
        </div>
  );
}

export default SlideShow;