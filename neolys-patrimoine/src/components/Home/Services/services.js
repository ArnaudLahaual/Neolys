import './services.scss';
import {BsBriefcase} from 'react-icons/bs';
import {GiPayMoney} from 'react-icons/gi';
import {BiBuildingHouse} from 'react-icons/bi';
import {FaHandsHelping} from 'react-icons/fa';
import money from '../../../assets/images/money.jpg';
import bureau from '../../../assets/images/bureau.jpg';
import bourse from '../../../assets/images/bourse.jpg';
import immeuble from '../../../assets/images/immeuble.jpg';


function Services() {
    return (
      <div className="services" id='services'>
          <h1 className='services__title'>Nos services</h1>

          <div className='services__div'>

            <div className='services__image'>
                <img
                className="services__image__img"
                src={bureau}
                alt="bureau"
              />
              <p className='text-over'>Optimisation fiscale</p>
      
          </div>

          <div className='services__image'>
                <img
                className="services__image__img"
                src={money}
                alt="bureau"
              />
              <p className='text-over'>Placement financiers</p>
      
          </div>

          <div className='services__image'>
                <img
                className="services__image__img"
                src={immeuble}
                alt="bureau"
              />
              <p className='text-over'>Placement immobilier</p>
      
          </div>

          <div className='services__image'>
                <img
                className="services__image__img"
                src={bourse}
                alt="bureau"
              />
              <p className='text-over'>Conseils en investissements boursiers</p>
      
          </div>        
        </div>
    </div>
    );
  }
  
  export default Services;