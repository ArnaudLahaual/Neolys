import './home.scss'
import decor from '../../assets/images/decor.png';

function Home() {
  return (
    <div className="home">

<div className='decor'>
              <img
              className="decor__home"
              src={decor}
              alt="decor__home"
            />
          </div>
    </div>
  );
}

export default Home;