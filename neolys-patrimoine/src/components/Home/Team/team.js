import './team.scss';
import boris from '../../../assets/images/boris.png';
import cyril from '../../../assets/images/cyril.png';

function Team() {
  return (
    <div className="team">

        <h1 className="team__title">Pourquoi faire appel a nous ?</h1> 

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