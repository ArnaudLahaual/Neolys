import './home.scss';
import logo from '../../assets/logo/logoofficiel.png';
import Team from './Team/team';
import Services from './Services/services';
import Atouts from './Atouts/atouts';
import SlideShow from './Slideshow/slideshow';
import Form from './Form/form';
import Cards from './Cards/cards';
import Cartes from './Cartes/cartes';

import {BsArrowUpCircleFill} from 'react-icons/bs';
import { icons } from 'react-icons';

function Home() {
  return (
    <div className="home" id='home'>
        <div className='presentation'>

          <div className='logo'>
            <img
                  className="presentation__image"
                  src={logo}
                  alt="image"
                />
          </div>

          

          <div className='presentation__texte'>
            <p className='presentation__text'> Cabinet de conseil <br></br>en investissement & gestion de patrimoine</p>
          </div>
      </div>

                  <Team />
                  <Cartes />
                  <SlideShow />
                  <Form />
      
      <div className='button__home'>
          <a href='#home'><BsArrowUpCircleFill size={40} color='black'/></a>
      </div>
                  
    </div>
  );
}

export default Home;