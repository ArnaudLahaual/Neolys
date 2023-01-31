import './team.scss';
import boris from '../../../assets/images/boris.png';
import cyril from '../../../assets/images/cyril.png';


function Team() {
  return (
    <div className="team" id='team'>

        <p className="team__title">Vos conseillers</p> 

        <div className='team__admins'>

          <div className='team__boris'>
            <img
                className="team__picture"
                src={boris}
                alt="team__boris"
              />
          </div>

          <div className='team__cyril'>
            <img
                className="team__picture"
                src={cyril}
                alt="team__cyril"
              />
          </div>

        </div> 
      </div>
  );
}

export default Team;