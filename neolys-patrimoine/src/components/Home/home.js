import './home.scss';
import decor from '../../assets/images/decor.png';
import place from '../../assets/logo/place.jpg';

function Home() {
  return (
    <div className="home">

        <div className='decor__text'>
            {/* <p>Exigez le meilleur pour vos investissements</p> */}
        </div>
        
        <div className='decor'>
              <img
              className="decor__home"
              src={place}
              alt="decor__home"
            />
        </div>

        
    </div>
  );
}

export default Home;