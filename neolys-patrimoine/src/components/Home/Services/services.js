import './services.scss';
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

          <h1 className='services__title'>Nos services</h1>

          <div className='services__card'>
            
              <div className='services__card__entete'>

                <BiBuildings id='icon'/>
                <h2 className='services__card__entete__title'>Investissements immobiliers</h2>
              </div>

              <div className='services__texte'>
                <p className='services__texte__p'>Vous souhaitez investir dans l'immobilier ? Contactez nous</p>
              </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              <BsCalculator id='icon'/>
              <h2 className='services__card__entete__title'>Réduction d'impôts</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              <GiReceiveMoney id='icon'/>
              <h2 className='services__card__entete__title'>Investissements Financiers</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              <AiOutlineStock id='icon'/>
              <h2 className='services__card__entete__title'>Analyse bourisère</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              <MdFamilyRestroom id='icon'/>
              <h2 className='services__card__entete__title'>Préparation retraite</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>

          <div className='services__card'>
            
            <div className='services__card__entete'>

              <GiFamilyTree id='icon'/>
              <h2 className='services__card__entete__title'>Transmission du patrimoine</h2>
            </div>

            <div className='services__texte'>
              <p>blabla</p>
            </div>

          </div>

          
          

    </div>
    );
  }
  
  export default Services;