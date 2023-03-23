import './footer.scss';
import logo from '../../assets/logo/logo__black.png';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';

function Footer() {

  return (
    <div className="footer">

        <div className='footer__contact'>
          <h1 className='footer__contact__title'>Contact</h1>
          <p className='footer__contact__num'> <BsFillTelephoneFill /> 01 01 01 01 01</p>

          <ul className='footer__contact__social'>
            <li className='footer__contact__social__item'><a href='https://www.instagram.com/neolyspatrimoine/' target="_blank"><AiFillInstagram size={20} /></a></li>
            <li className='footer__contact__social__item'><a href='https://www.facebook.com/profile.php?id=100088345197764' target="_blank"><BsFacebook  size={20}/></a></li>
            <li className='footer__contact__social__item'><a href='https://www.linkedin.com/company/neolys-patrimoine/about/' target="_blank"><BsLinkedin  size={20}/></a></li>
          </ul>
        </div>

    </div>
  );
}

export default Footer;