import './team.scss';
import boris from '../../../assets/images/boris.png';
import cyril from '../../../assets/images/cyril.png';
import {GiCoffeeCup, GiSandsOfTime, GiHammerDrop} from 'react-icons/gi';
import {FaUserTie} from 'react-icons/fa';
import {VscChecklist} from 'react-icons/vsc';
import lawyer from '../../../assets/images/lawyer.png';
import hammer from '../../../assets/images/hammer.png';

function Team() {
  return (
    <div className="team" id='team'>

        <p className="team__title">Pourquoi faire appel a nous ?</p> 

        <div className='team__admins'>

          <div className='team__boris'>
            <img
                className="team__picture"
                src={boris}
                alt="team__boris"
              />
          </div>

          <div className='team__cyril'>
            <img
                className="team__picture"
                src={cyril}
                alt="team__cyril"
              />
          </div>

        </div> 
        
          <p className="team__title">Pourquoi faire appel à un CGP ?</p>


            <div className='avantages'>
                <h1 className='avantages__title'><GiCoffeeCup size={20} />Une relation privilégiée... </h1>
                  <div className='avantages__paragraphe'>
                    
                      <p className='avantages__text'>La relation entre son CGP et son client repose sur une confiance mutuelle qui s'inscrit dans la durée</p>
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'><GiSandsOfTime size={20} /> ...Sur le long terme </h1>
                  <div className='avantages__paragraphe'>
                    
                      <p className='avantages__text'>Les conseils du CPG préparent aux changements de situation de ses clients ( carrière professionnelle, vie familiale ) les obligeant à modifier leur stratégie financière.</p>
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'><VscChecklist size={20} />Un conseil indépendant </h1>
                  <div className='avantages__paragraphe'>
                    
                      <p className='avantages__text'>L'indépendance du CGP lui permet d'évaluer tous les produits disponibles sur le marché et de proposer celui qui correspond le mieux aux besoin de ses clients.</p>
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <FaUserTie size={20} />
                  Et personnalisé </h1>
                  <div className='avantages__paragraphe'>
                  
                      <p className='avantages__text'>Le CPG l'ensemble des éléments patrimoniaux de ses clients et établit un diagnostic complet afin de définir une stratégie d'optimisation patrimoniale sur mesure.</p>
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <GiHammerDrop size={20} />
                   Une profession encadrée </h1>
                  <div className='avantages__paragraphe'>
                  
                      <p className='avantages__text'>La profession est réglementée et fait l'objet d'une régulation par des autorités de contrôle : AMF et ACPR.</p>
                  </div>
            </div>
    </div>
  );
}

export default Team;