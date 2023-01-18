import './services.scss';
import {BsBriefcase} from 'react-icons/bs';
import {GiPayMoney} from 'react-icons/gi';
import {BiBuildingHouse} from 'react-icons/bi';
import {FaHandsHelping} from 'react-icons/fa';

function Services() {
    return (
      <div className="services">
          <h1 className='services__title'>Nos services</h1>

          <div className='services__div'>
            <div className='services__entete'>
                <h1 className='services__titre'>Optimisation fiscale</h1>
                 <BsBriefcase size={30}/>
            </div>
                <p className='services__text'>Allez vous toujours payer plus d'impôts ? 
                Quels sont les conséquences sur votre budget ?
                Comment utiliser l'impôt au service du developement de votre patrimoine ?
                Autant de questions auxquelles nous pouvons réfléchir ensemble au regard de votre situation globale.</p>
          </div>

          <div className='services__div'>
            <div className='services__entete'>
                <h1 className='services__titre'>Placements financiers</h1>
                 <GiPayMoney size={30}/>
            </div>
                <p className='services__text'>Et si nous donnions du sens à vos placements ? Si nous faisions rimer rendement, sécurité avec durabilité et solidarité ? Les solutions financières que je peux vous présenter sont porteuses d'emploi et sont décorrélées des marchés financiers.</p>
          </div>

          <div className='services__div'>
            <div className='services__entete'>
                <h1 className='services__titre'>Placements immobiliers</h1>
                 <BiBuildingHouse size={30}/>
            </div>
                <p className='services__text'>Êtes vous plutôt Loi Pinel, Déficit Foncier ou loi Malraux ? Et si au final le statut LMNP vous convenait le mieux ? Derrrière ces mots il y a des mécanismes puissants vous permettant de constituer un patrimoine immobilier solide.</p>
          </div>

          <div className='services__div'>
            <div className='services__entete'>
                <h1 className='services__titre'>Conseils en investissements boursiers</h1>
                 <FaHandsHelping size={40}/>
            </div>
                <p className='services__text'>blablablablablabablablablablablablablabla</p>
          </div>
      </div>
    );
  }
  
  export default Services;