import React from 'react';

function Projects() {
  return (
  
		  <section id="projects" tabIndex="-1" className="fade-in" aria-label="Projets réalisés">
		  <h2>Projets</h2>
		  <div className="projects-grid" role="list">
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Portfolio">
			  <h3>Site de confessions</h3>
			  <p>Création d’un site responsive pour un particulier, avec animations CSS et optimisation SEO.</p>
			  <a className="btn-secondary" href=" http://www.radar60.com">Voir plus </a>
			</article>
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Blog">
			  <h3>Site de Meteo</h3>
			  <p>Une application météo simple et responsive permettant d'afficher les conditions climatiques en temps réel pour n’importe quelle ville dans le monde.</p>
			  <a className="btn-secondary" href="../weather/index.html">Voir plus</a>
			</article>
			<article className="project-card" role="listitem" tabIndex="0" aria-label="Projet Blog">
			  <h3>Mon Portfolio</h3>
			  <p>Site vitrine responsive développé en HTML5, CSS3 et JavaScript.Design moderne et animations douces. Ce site vous montre justement ce que je sais faire ! </p>
			  <a className="btn-secondary" href="https://amirasalhi.github.io/portfolio/">Voir plus</a>
			</article>
		  </div>
		</section>
    );
}

export default Projects;
