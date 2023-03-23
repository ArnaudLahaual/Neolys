// == Import
import './header.scss';
import logo from '../../assets/logo/logo__white.jpg';

import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux';
import { toggleBurger,closeBurger } from '../../actions/neolys';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';

import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';

// == Composant
function Header() {
const dispatch = useDispatch();
const { pathname } = useLocation();

useEffect(() => {
  dispatch(closeBurger());
}, [pathname]);

const {isBurgerOpen} = useSelector((state)=>state.neolys);

function handleClick() {
  dispatch(toggleBurger());
}

  return (
    <div className="header">
          {/* logo */}
           <div className='logo'>
              <img
              className="header__logoNeolys"
              src={logo}
              alt="logoNeolys"
            />
          </div>
          
    <div className="navbar">

          {/* menu */}
          <ul className='navbar__menu'>
              <li><a href='#app'  className='navbar__links'>Home</a></li>
              <li><a href='#services'  className='navbar__links'>Nos services</a></li>
              <li><a href='#team'  className='navbar__links'>L'équipe</a></li>
              <li><a href='#agrements'  className='navbar__links'>Nos agréments</a></li>
              <li><a href='#contacts'  className='navbar__links'>Contacts</a></li>
          </ul>

          {/* Mobile */}

          { isBurgerOpen &&
          
          <ul className='navbar__mobile'>
              <li onClick={handleClick}><a href='#app' className='navbar__links__mobile'>Home</a></li>
              <li onClick={handleClick}><a href='#services'  className='navbar__links__mobile'>Nos services</a></li>
              <li onClick={handleClick}><a href='#team' className='navbar__links__mobile'>Team</a></li>
              <li onClick={handleClick}><a href='#agrements'  className='navbar__links__mobile'>Nos agréments</a></li>
              <li onClick={handleClick}><a href='#contacts'  className='navbar__links__mobile'>Contacts</a></li>

              <div className='navbar__mobile__social'>
                <li onClick={handleClick}><a href='https://www.linkedin.com/company/neolys-patrimoine/about/' target="_blank"  className='navbar__links__mobile'><BsLinkedin size={20} /></a></li>
                <li onClick={handleClick}><a href='https://www.facebook.com/profile.php?id=100088345197764' target="_blank"  className='navbar__links__mobile'><BsFacebook size={20} /></a></li>
                <li onClick={handleClick}><a href='https://www.instagram.com/neolyspatrimoine/' target="_blank"  className='navbar__links__mobile'><AiFillInstagram size={20} /></a></li>
              </div>
          </ul>
           }

    </div>
    
        {/* burger */}

        <div className='icon-burger' 
          onClick={handleClick}>
            { isBurgerOpen ? <FaTimes size={20} /> : <FiMenu size={20} />  }
            
        </div>

        

    </div>
  );
}

// == Export
export default Header ;
