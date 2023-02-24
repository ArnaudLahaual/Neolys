import './home.scss';
import decor from '../../assets/images/decor.png';
import place from '../../assets/logo/place.jpg';
import bureau from '../../assets/images/fond_bureau.jpg';
import bureau2 from '../../assets/images/fond_bureau2.jpg';
import chaise from '../../assets/images/chaise.jpg';

function Home() {
  return (
    <div className="home">

        {/* <div className='decor__text'>
            <p>Exigez le meilleur pour vos investissements</p>
        </div>
        
        <div className='decor'>
              <img
              className="decor__home"
              src={place}
              alt="decor__home"
            />
        </div> */}

        <div className='presentation'>
          <p className='presentation__text'>Votre cabinet <br></br> Neolys Patrimoine</p>
        <img
              className="presentation__image"
              src={chaise}
              alt="image"
            />
        </div>

        
    </div>
  );
}

export default Home;