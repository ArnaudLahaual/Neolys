import './team.scss';
import borisbg from '../../../assets/images/borisofficiel.png';
import cyrilbg from '../../../assets/images/cyrilofficiel.png';



function Team() {
  return (
    <div className="team" id='team'>

        {/* <p className='team__text'>Fort d’une expérience d’une dizaine d’année dans le milieu bancaire, nous souhaitons aujourd’hui nous orientez vers un conseil indépendant et de qualité au détriment de la quantité des grands groupes nationaux</p> */}
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
              <p className='team__picture__name__text'>Conseiller en gestion de patrimoine <br></br>Co-fondateur</p> 
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
              <p className='team__picture__name__text'>Conseiller en gestion de patrimoine <br></br>Co-fondateur</p>
            </div>

          </div>

        </div> 
      </div>
  );
}

export default Team;