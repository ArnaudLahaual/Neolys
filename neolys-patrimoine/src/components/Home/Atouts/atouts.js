import './atouts.scss';
import {GiCoffeeCup, GiSandsOfTime, GiHammerDrop} from 'react-icons/gi';
import {FaUserTie} from 'react-icons/fa';
import {VscChecklist} from 'react-icons/vsc';

function Atouts() {
  return (
    <div className="atouts" id='avantages'>

        <div className='avantages__div'>
            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                  <GiCoffeeCup size={50} />
                  </div>
                  Une relation privilégiée... </h1>
                  <div className='avantages__paragraphe'>
                    
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                  <div className='avantages__logo'>
                  <GiSandsOfTime size={50} />
                  </div>
                   ...Sur le long terme </h1>
                  <div className='avantages__paragraphe'>
              </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                  <VscChecklist size={50} />
                  </div>
                  Un conseil indépendant </h1>
                  <div className='avantages__paragraphe'>
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                <FaUserTie size={50} />
                </div>
                  Et personnalisé </h1>
                  <div className='avantages__paragraphe'>
      
                  </div>
            </div>

            <div className='avantages'>
                <h1 className='avantages__title'>
                <div className='avantages__logo'>
                <GiHammerDrop size={50} />
                </div>
                   Une profession encadrée </h1>
                  <div className='avantages__paragraphe'>
                  </div>
            </div>
        </div>
    </div>
  );
}

export default Atouts;