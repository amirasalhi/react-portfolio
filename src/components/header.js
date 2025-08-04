import React from 'react';

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav className="navbar" aria-label="Navigation principale">
        <div className="logo" aria-label="Logo Amira Salhi">AMIRA</div>
        <ul className="nav-links">
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={1000} 
              spy={true} 
              offset={-60}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              smooth={true} 
              duration={1000} 
              spy={true} 
              offset={-60}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={1000} 
              spy={true} 
              offset={-60}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={1000} 
              spy={true} 
              offset={-60}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
