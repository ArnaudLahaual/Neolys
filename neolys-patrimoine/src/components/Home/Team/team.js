import './team.scss';
import borisbg from '../../../assets/images/boris.png';
import cyrilbg from '../../../assets/images/cyril.png';



function Team() {
  return (
    <div className="team" id='team'>

        <p className="team__title">Vos conseillers</p> 
        <div className='team__admins'>

          <div className='team__card'>
            <div className="team__picture">
              <img id='img'
                  src={borisbg}
                  alt="boris"
                />
           </div>

          <div className='team__picture__text'>
              <h1 className='team__picture__name'>BORIS COCHEFERT</h1>
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
            </div>

          </div>

        </div> 
      </div>
  );
}

export default Team;