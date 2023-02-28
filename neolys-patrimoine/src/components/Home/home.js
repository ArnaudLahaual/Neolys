import './home.scss';
import bureau3 from '../../assets/images/bureau3.jpg';
import logo from '../../assets/logo/logo__black.png';

function Home() {
  return (
    <div className="home">

        <div className='presentation'>

          <p className='presentation__text'>Votre cabinet <br></br> Neolys Patrimoine</p>
        <img
              className="presentation__image"
              src={bureau3}
              alt="image"
            />
        </div>

        
    </div>
  );
}

export default Home;