// ContactForm.jsx
import React, { useRef } from 'react';

const ContactForm = ({ showToast }) => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    showToast('Envoi en cours...');

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/amirasalhi1@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        showToast('Message envoyé avec succès !');
        formRef.current.reset();
      } else {
        showToast('Erreur lors de l’envoi.');
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      showToast('Erreur réseau.');
    }
  };

  return (
    <div className="contact-form">
      <form className="contact-form" id="contact-form" ref={formRef} onSubmit={handleSubmit} >
        <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://formsubmit.co/amirasalhi1@gmail.com" /> 

        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>

    
    </div>
  );
};

export default ContactForm;
