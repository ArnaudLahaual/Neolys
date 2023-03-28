import './footer.scss';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';

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
            <li className='footer__contact__mentions__links__link'>Mentions légales</li>
            <li className='footer__contact__mentions__links__link'>Politique de confidentialité</li>
            <li className='footer__contact__mentions__links__link'>CGU</li>
            <li className='footer__contact__mentions__links__link'>Neolys Patrimoine<br></br>18 Rue des Perrières<br></br>34170 Castelnau-le-lez</li>
          </ul>
        </div>
    </div>
  );
}

export default Footer;