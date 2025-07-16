import React from 'react';


const Header = () => {
  return (
    <header>
      <nav className="navbar" aria-label="Navigation principale">
        <div className="logo" aria-label="Logo Amira Salhi">AMIRA</div>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;