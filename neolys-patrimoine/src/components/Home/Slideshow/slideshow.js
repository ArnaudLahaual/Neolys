import './slideshow.scss';
import React from 'react';
import {Slide} from 'react-slideshow-image';
import anacofi from '../../../assets/logo/anacofi.png';
import orias from '../../../assets/logo/orias.jpg';
import gouv from '../../../assets/logo/gouv.png';


function SlideShow() {
  return (

    <div className='slideshow'>
        <h1 className='slideshow__title'>Nos Agréments</h1>

        <div className='slideshow__logos'>
            <div className='slideshow_logos__logo'>
            <img id='img'
                src={anacofi}
                alt="anacofi"
              />
            </div>

            <div className='slideshow_logos__logo'>
            <img id='img'
                src={orias}
                alt="orias"
              />
            </div>

            <div className='slideshow_logos__logo'>
            <img id='img'
                src={gouv}
                alt="gouv"
              />
            </div>
        </div>
        
    </div>

  );
}

export default SlideShow;