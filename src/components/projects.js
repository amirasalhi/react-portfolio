import React from 'react';

function Projects() {
  return (
  
		  <section id="projects" tabIndex="-1" className="fade-in" aria-label="Projets réalisés">
		  <h2>Projets</h2>
		  <div className="projects-grid" role="list">
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Quiz">
			  <h3>Quiz Concours Informatique</h3>
			  <p>En React js : quiz interactif avec 100 questions techniques aléatoires pour préparer le concours des techniciens en informatique.
Interface fluide avec correction instantanée, démontrant mes compétences en développement front-end et déploiement. </p>
			  <a className="btn-secondary" href="https://amirasalhi.github.io/react-portfolio/">Voir plus</a>
			</article>
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Portfolio">
			  <h3>Mon Portfolio</h3>
			  <p>En React js : Un site portfolio responsive réalisé avec React, présentant mes projets, compétences et expériences. L’interface met en avant une navigation fluide, des animations, et une section dynamique pour les projets. </p>
			  <a className="btn-secondary" href="https://amirasalhi.github.io/react-portfolio/">Voir plus</a>
			</article>
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Meteo">
			  <h3>Site de Meteo</h3>
			  <p>En React js : Une application météo simple et responsive permettant d'afficher les conditions climatiques en temps réel pour n’importe quelle ville dans le monde.</p>
			  <a className="btn-secondary" href="/react-portfolio/weather/">Voir plus</a>
			</article>
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Confessions">
			  <h3>Site de confessions</h3>
			  <p>Création d’un site responsive pour un particulier, avec animations CSS et optimisation SEO.</p>
			  <a className="btn-secondary" href=" http://www.radar60.com">Voir plus </a>
			</article>
		

		  </div>
		</section>
    );
}

export default Projects;
