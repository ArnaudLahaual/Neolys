// == Import
import './navbar.scss';

// == Composant
function Navbar() {
  return (
    <div className="navbar">
      <ul className='navbar__menu'>
          <li className='navbar__links'>Accueil</li>
          <li className='navbar__links'>Qui sommes nous</li>
          <li className='navbar__links'>Nos services</li>
          <li className='navbar__links'>Nos agréments</li>
          <li className='navbar__links'>Contacts</li>
      </ul>
    </div>
  );
}

// == Export
export default Navbar;
