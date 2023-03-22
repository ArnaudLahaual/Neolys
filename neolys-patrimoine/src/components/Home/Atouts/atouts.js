import './atouts.scss';
import {GiCoffeeCup, GiSandsOfTime, GiHammerDrop} from 'react-icons/gi';
import {FaUserTie} from 'react-icons/fa';
import {VscChecklist} from 'react-icons/vsc';
import fondbureau from '../../../assets/images/fond_bureau.jpg';

function Atouts() {
  return (
    <div className="atouts" id='avantages'>

        {/* <img
              className="presentation__image"
              src={fondbureau}
              alt="image"
            /> */}
          {/* <p className="team__title">Pourquoi faire appel à un CGP ?</p> */}

        <div className='avantages__div'>
            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                  <GiCoffeeCup size={50} />
                  </div>
                  Une relation privilégiée... </h1>
                  <div className='avantages__paragraphe'>
                    
                      {/* <p className='avantages__text'>La relation entre son CGP et son client repose sur une confiance mutuelle qui s'inscrit dans la durée</p> */}
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                  <div className='avantages__logo'>
                  <GiSandsOfTime size={50} />
                  </div>
                   ...Sur le long terme </h1>
                  <div className='avantages__paragraphe'>
                      {/* <p className='avantages__text'>Les conseils du CPG préparent aux changements de situation de ses clients ( carrière professionnelle, vie familiale ) les obligeant à modifier leur stratégie financière.</p> */}
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                  <VscChecklist size={50} />
                  </div>
                  Un conseil indépendant </h1>
                  <div className='avantages__paragraphe'>
                    
                      {/* <p className='avantages__text'>L'indépendance du CGP lui permet d'évaluer tous les produits disponibles sur le marché et de proposer celui qui correspond le mieux aux besoin de ses clients.</p> */}
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                <FaUserTie size={50} />
                </div>
                  Et personnalisé </h1>
                  <div className='avantages__paragraphe'>
                  
                      {/* <p className='avantages__text'>Le CPG l'ensemble des éléments patrimoniaux de ses clients et établit un diagnostic complet afin de définir une stratégie d'optimisation patrimoniale sur mesure.</p> */}
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                <GiHammerDrop size={50} />
                </div>
                   Une profession encadrée </h1>
                  <div className='avantages__paragraphe'>
                  
                      {/* <p className='avantages__text'>La profession est réglementée et fait l'objet d'une régulation par des autorités de contrôle : AMF et ACPR.</p> */}
                  </div>
            </div>
        </div>
    </div>
  );
}

export default Atouts;