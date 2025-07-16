import React from 'react';
import ParticlesHero from './ParticlesHero';

function Hero() {
  return (
    <section className="hero relative overflow-hidden">
      <ParticlesHero />
      <div className="hero-content relative z-10 text-center">
        <h1>
          AMIRA <span>Ingénieur FRONT END</span>
        </h1>
        <p>Code propre, design soigné, motivation sans limite.</p>
        <button
          className="btn-primary"
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Contacter Amira"
        >
          Me contacter
        </button>
      </div>
    </section>
  );
}

export default Hero;
