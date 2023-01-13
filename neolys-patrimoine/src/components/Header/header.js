// == Import
import './header.scss';
import Navbar from './Navbar/navbar';
import NavbarMobile from './NavbarMobile/navbarmobile';
import logo from '../../assets/logo/logo__white.jpg';

import { FiMenu } from 'react-icons/fi';
import { toggleBurger, closeBurger } from '../../actions/neolys';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

// == Composant
function Header() {

  // const dispatch = useDispatch();
  // const { pathname } = useLocation();

  

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
