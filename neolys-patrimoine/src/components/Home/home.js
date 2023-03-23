import './home.scss';
import bureau3 from '../../assets/images/bureau3.jpg';
import logo from '../../assets/logo/logo__black.png';

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
            <p className='presentation__text'> Cabinet<br></br>de conseils en gestion d'actifs et de patrimoine</p>
          </div>

{/*           
        <div className='presentation__second'>
          <p className='presentation__second__text'>"Investir est la solution qu'il vous faut"</p>
        </div> */}

      </div>
    </div>
  );
}

export default Home;