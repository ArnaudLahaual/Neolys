import './team.scss';
import boris from '../../../assets/images/boris.png';
import cyril from '../../../assets/images/cyril.png';
import borispres from '../../../assets/images/boris__pres.png';
import cyrilpres from '../../../assets/images/cyril__pres.png';


function Team() {
  return (
    <div className="team" id='team'>

        <p className="team__title">Vos conseillers</p> 

        <div className='team__admins'>

          <div className='team__boris'>
            <img
                className="team__picture"
                src={borispres}
                alt="team__boris"
              />
          </div>

          <div className='team__cyril'>
            <img
                className="team__picture"
                src={cyrilpres}
                alt="team__cyril"
              />
          </div>

        </div> 
      </div>
  );
}

export default Team;