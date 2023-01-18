// == Import
import './header.scss';
import logo from '../../assets/logo/logo__white.jpg';

import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux';
import { toggleBurger,closeBurger } from '../../actions/neolys';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
              <li><a href='/'  className='navbar__links'>Accueil</a></li>
              <li><a href='#team'  className='navbar__links'>Qui-sommes-nous</a></li>
              <li><a href='#services'  className='navbar__links'>Nos services</a></li>
              <li><a href='#agrements'  className='navbar__links'>Nos agréments</a></li>
              <li><a href='#contacts'  className='navbar__links'>Contacts</a></li>
          </ul>

          {/* Mobile */}

          { isBurgerOpen &&
          
          <ul className='navbar__mobile'>
              <li className='navbar__links__mobile'>Accueil</li>
              <li className='navbar__links__mobile'>Qui-sommes-nous ?</li>
              <li className='navbar__links__mobile'>Nos services</li>
              <li className='navbar__links__mobile'>Nos agréments</li>
              <li className='navbar__links__mobile'>Contacts</li>
          </ul> }
          
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
