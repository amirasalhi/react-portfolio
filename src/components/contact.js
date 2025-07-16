// src/pages/contact.js (ou contact.jsx)
import React from "react";
import ContactForm from "../components/ContactForm";

const Contact  = ({ showToast }) => {
  return (
    <section id="contact" className="p-8">
       <h2>Let's discuss</h2>
		<div className="contact_grid">
        <div className="contact-info">
        
          <p><img className="icon_contact" src="images/mail.png"/> <span>amirasalhi1@gmail.com</span></p>
          <p><img className="icon_contact" src="images/phone.png"/> <span>+212 6 07 89 61 72</span></p>
          <p><img className="icon_contact" src="images/localisation.png"/><span> Maroc</span></p>
        </div>
	     <ContactForm showToast={showToast}/>
		</div>
    </section>
  );
};

export default Contact;
