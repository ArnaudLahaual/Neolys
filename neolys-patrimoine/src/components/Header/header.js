// == Import
import './header.scss';
import Navbar from './Navbar/navbar';
import NavbarMobile from './NavbarMobile/navbarmobile';
import logo from '../../assets/logo/logo__white.jpg';

import { FiMenu } from 'react-icons/fi';

// == Composant
function Header() {
  return (
    <div className="header">
           <div className='logo'>
              <img
              className="header__logoNeolys"
              src={logo}
              alt="logoNeolys"
            />
          </div>
          
        <Navbar />
        <NavbarMobile />
        <div className='icone-burger'><FiMenu size={40} /></div>
    </div>
  );
}

// == Export
export default Header ;
