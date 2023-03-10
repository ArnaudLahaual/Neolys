import './footer.scss';
import logo from '../../assets/logo/logo__black.png';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';

function Footer() {

  return (
    <div className="footer">
        {/* <ul className='footer__list'>
            <li className='footer__list__link' >Contact</li>
            <li className='footer__list__link'>Politique de confidentialité</li>
            <li className='footer__list__link'>Mentions légales</li>
        </ul> */}

          {/* <img
              className="footer__image"
              src={logo}
              alt="image"
            /> */}

        <div className='footer__contact'>
          <h1 className='footer__contact__title'>Contact</h1>
          <p className='footer__contact__num'> <BsFillTelephoneFill /> 01 01 01 01 01</p>

          <ul className='footer__contact__social'>
            <li className='footer__contact__social__item'><a href='https://www.instagram.com/neolyspatrimoine/'><AiFillInstagram size={20} /></a></li>
            <li className='footer__contact__social__item'><a href='https://www.facebook.com/profile.php?id=100088345197764'><BsFacebook  size={20}/></a></li>
            <li className='footer__contact__social__item'><a href='https://www.linkedin.com/company/neolys-patrimoine/about/'><BsLinkedin  size={20}/></a></li>
          </ul>
        </div>

    </div>
  );
}

export default Footer;