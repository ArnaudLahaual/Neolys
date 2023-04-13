import './team.scss';
import borisbg from '../../../assets/images/borisofficiel.png';
import cyrilbg from '../../../assets/images/cyrilofficiel.png';
import { NavLink } from 'react-router-dom';




function Team() {
  return (
    <div className="team" id='team'>

        <div className='team__admins'>

          <div className='team__admins__title'>
            <p className='team__admins__title__text'>"Bienvenue chez Neolys Patrimoine notre cabinet de conseil en investissement et gestion de patrimoine. <br></br><br></br>Nous sommes une équipe de professionnels passionnés par le domaine de l'investissement et de la gestion de patrimoine.<br></br><br></br> Nous avons pour mission d'aider nos clients à atteindre leurs objectifs financiers à long terme en leur fournissant des conseils personnalisés et adaptés à leur situation spécifique."</p>
          </div>
          
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