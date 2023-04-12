import './footer.scss';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import {GrLocation} from 'react-icons/gr';
import {BiInfoCircle} from 'react-icons/bi';

function Footer() {
  
  return (

    <div className="footer">

        <div className='footer__contact'>
          <h1 className='footer__contact__title'>Retrouvez nous sur nos réseaux sociaux</h1>
          <p className='footer__contact__num'></p>

          <ul className='footer__contact__social'>
            <li className='footer__contact__social__item'><a href='https://www.facebook.com/profile.php?id=100088345197764' target="_blank"><BsFacebook  size={30}/></a></li>
            <li className='footer__contact__social__item'><a href='https://www.instagram.com/neolyspatrimoine/' target="_blank"><GrInstagram size={30} /></a></li>
            <li className='footer__contact__social__item'><a href='https://www.linkedin.com/company/neolys-patrimoine/about/' target="_blank"><BsLinkedin  size={30}/></a></li>
          </ul>
        </div>


        <div className='footer__contact__mentions'>
          <ul className='footer__contact__mentions__links'>

      <div className='about'>
              <h1 className='about__title'> <BiInfoCircle />A propos</h1>

              <div className='about__links'>
              <NavLink to="/" end className='footer__contact__mentions__links__link'> Accueil</NavLink>
              <NavLink to="/mentions" end className='footer__contact__mentions__links__link'> Mentions légales</NavLink>
              <NavLink to="/cgu" end className='footer__contact__mentions__links__link'> Conditions générales d'utilisation</NavLink>
              <NavLink to="/confident" end className='footer__contact__mentions__links__link'> Politique de confidentialité</NavLink>
              </div>
      </div>

      <div className='adress'>
              <h1 className='adress__title'> <GrLocation />Adresse</h1>

            <li className='footer__contact__mentions__links'>Neolys Patrimoine<br></br>18 Rue des Perrières<br></br>34170 Castelnau-le-lez
            </li>
    
      </div>
          </ul>
        </div>


    </div>
  );
}

export default Footer;