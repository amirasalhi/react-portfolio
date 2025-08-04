import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Toast from './components/toast';
import { Element } from 'react-scroll';
import './App.css';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  useEffect(() => {
    const queue = [];
    let isAnimating = false;

    const animateNext = () => {
      if (queue.length === 0) {
        isAnimating = false;
        return;
      }
      isAnimating = true;
      const element = queue.shift();
      element.classList.add('visible');
      setTimeout(() => {
        animateNext();
      }, 400);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !queue.includes(entry.target)) {
          queue.push(entry.target);
          observer.unobserve(entry.target);
          if (!isAnimating) animateNext();
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

return (
  <>
    <Header />
    <Hero />

    <Element name="about">
      <section className="fade-in"><About /></section>
    </Element>

    <Element name="skills">
      <section className="fade-in"><Skills /></section>
    </Element>

    <Element name="projects">
      <section className="fade-in"><Projects /></section>
    </Element>

    <Element name="contact">
      <section className="fade-in">
        <Contact showToast={showToastMessage} />
      </section>
    </Element>

    <Footer />
    <Toast message={toastMessage} show={showToast} />
  </>
);
}

export default App;
