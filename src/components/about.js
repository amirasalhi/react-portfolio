import React from 'react';
import CV from '../Cv_AMIRA_FRONT_Portfolio_ReactJS.pdf';

const About = () => {
  return (
    <section id="about" className="fade-in" aria-label="À propos de Amira">
      <h2>À propos</h2>
      <p>
       Passionnée par le développement front-end, je conçois des interfaces web modernes, fluides et soignées. J’attache une grande importance à la clarté du design, à l’expérience utilisateur, ainsi qu’à la qualité du code.
Ma démarche : allier esthétique, performance et accessibilité, en respectant les bonnes pratiques du développement moderne (HTML5, CSS3, JavaScript, animations, UI/UX).
Ce portfolio reflète mon style, mes compétences et ma volonté constante de progresser à travers des projets concrets et engageants
      </p>
      <a href={CV} className="btn-cv" download target="_blank" rel="noreferrer">📄 Télécharger mon CV</a>
    </section>
  );
};

export default About;