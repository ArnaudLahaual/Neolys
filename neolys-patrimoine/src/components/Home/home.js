import './home.scss';
import bureau3 from '../../assets/images/bureau3.jpg';
import logo from '../../assets/logo/logoofficiel.png';

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
    </div>
  );
}

export default Home;