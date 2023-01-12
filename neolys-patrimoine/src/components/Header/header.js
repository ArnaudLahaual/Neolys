// == Import
import './header.scss';
import Navbar from './Navbar/navbar';
import logo from '../../assets/logo/logo__white.jpg';

// == Composant
function Header() {
  return (
    <div className="header">
           
           <img
          className="header__logoNeolys"
          src={logo}
          alt="logoNeolys"
        />

        <Navbar />
      
    </div>
  );
}

// == Export
export default Header ;
