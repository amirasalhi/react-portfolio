import React from 'react';

function Skills() {
  return (
		<section id="skills" tabIndex="-1" className="fade-in" aria-label="Compétences techniques">
		  <h2>Compétences</h2>
		  <div className="skills-grid" role="list">
			<article className="skill" role="listitem" tabIndex="0" aria-label="seo">
			  <span className="skill-icon" aria-hidden="true"><img src="images/react.png"/></span>
			  <h3>React</h3>
			</article>
			<article className="skill" role="listitem" tabIndex="0" aria-label="JavaScript">
			  <span className="skill-icon" aria-hidden="true"><img src="images/js.png"/></span>
			  <h3>JavaScript</h3>

			</article>
			<article className="skill" role="listitem" tabIndex="0" aria-label="HTML5">
			  <span className="skill-icon" aria-hidden="true"><img src="images/html5.png"/></span>
			  <h3>HTML5</h3>

			</article>
			<article className="skill" role="listitem" tabIndex="0" aria-label="CSS3">
			  <span className="skill-icon" aria-hidden="true"><img src="images/css3.png"/></span>
			  <h3>CSS3</h3>

			</article>

		
			<article className="skill" role="listitem" tabIndex="0" aria-label="Git">
			  <span className="skill-icon" aria-hidden="true"><img src="images/github.png"/></span>
			  <h3>Git</h3>
			</article>

			<article className="skill" role="listitem" tabIndex="0" aria-label="figma">
			  <span className="skill-icon" aria-hidden="true"><img src="images/figma.png"/></span>
			  <h3>Figma</h3>

			</article>
				<article className="skill" role="listitem" tabIndex="0" aria-label="sass">
			  <span className="skill-icon" aria-hidden="true"><img src="images/sass.png"/></span>
			  <h3>SaSS</h3>

			</article>
					
			<article className="skill" role="listitem" tabIndex="0" aria-label="ps">
			  <span className="skill-icon" aria-hidden="true"><img src="images/ps.png"/></span>
			  <h3>PhotoShop</h3>
			</article>
		
		  </div>
		</section>
  );
}

export default Skills;
