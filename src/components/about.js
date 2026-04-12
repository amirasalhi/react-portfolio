import React from 'react';
import CV from '../Cv_AMIRA_FRONT_Portfolio_ReactJS.pdf';

const About = () => {
  return (
    <section id="about" className="fade-in" aria-label="À propos de Amira">
      <h2>À propos</h2>
      <p>
       Développeuse Front-End spécialisée en React.js, Next.js, TypeScript et JavaScript (ES6+). Expérience dans la création d'interfaces web responsives et accessibles avec Tailwind CSS, Shadcn UI et DaisyUI,
intégration d'APIs REST et optimisation des performances.
À l'aise avec les méthodologies Agile et Git, avec un focus sur la création d'applications performantes,
ergonomiques et optimisées pour le SEO.<br/>
Ce portfolio reflète mon style, mes compétences et ma volonté constante de progresser à travers des projets concrets et engageants.
      </p>
      <a href={CV} className="btn-cv" download target="_blank" rel="noreferrer">📄 Télécharger CV à jour</a>
    </section>
  );
};

export default About;