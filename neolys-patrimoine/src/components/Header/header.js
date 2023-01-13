// == Import
import './header.scss';
import Navbar from './Navbar/navbar';
import NavbarMobile from './NavbarMobile/navbarmobile';
import logo from '../../assets/logo/logo__white.jpg';

import { FiMenu } from 'react-icons/fi';
import {useSelector,useDispatch} from 'react-redux';
import { toggleBurger,closeBurger } from '../../actions/neolys';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';

// == Composant
function Header() {
const dispatch = useDispatch();
const { pathname } = useLocation();

useEffect(() => {
  dispatch(closeBurger());
}, [pathname]);

const {isBurgerOpen} = useSelector((state)=>state);
console.log(isBurgerOpen);

function handleClick() {
  dispatch((toggleBurger));
}

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
        <div className='icone-burger' onClick={handleClick}><FiMenu size={40} /></div>

        {/* { isBurgerOpen && <NavbarMobile /> } */}

    </div>
  );
}

// == Export
export default Header ;
