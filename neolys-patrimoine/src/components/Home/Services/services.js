import './services.scss';
import {BsBriefcase} from 'react-icons/bs';

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
      </div>
    );
  }
  
  export default Services;