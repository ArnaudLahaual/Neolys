import './team.scss';
import borisbg from '../../../assets/images/boristetedendive.png';
import cyrilbg from '../../../assets/images/cyriltetedendive.png';



function Team() {
  return (
    <div className="team" id='team'>

        <div className='team__admins'>

        <p className="team__title">Vos conseillers</p> 

          <div className='team__card'>
            <div className="team__picture">
            <img id='img'
                src={borisbg}
                alt="boris"
              />
           </div>

          <div className='team__picture__text'>
              <h1 className='team__picture__name'>BORIS COCHEFERT</h1>
              <p className='team__picture__statut'>PRESIDENT</p>
          </div>

          </div>

          <div className='team__card'>
            <div className="team__picture">
              <img id='img'
                  src={cyrilbg}
                  alt="cyril"
                />
            </div>

            <div className='team__picture__text'>
              <h1 className='team__picture__name'>CYRIL REYNAUD</h1>
              <p className='team__picture__statut'>DIRECTEUR GENERAL</p>
            </div>

          </div>

        </div> 
      </div>
  );
}

export default Team;