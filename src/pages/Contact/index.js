import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const formData = {
        name: "",
        email: "",
        message: ""
      }

      const [ formDetails, setFormDetails ] = useState(formData);
      const { name, email, message } = formDetails;
      const [ errorMessage, setErrorMessage ] = useState('');
    
      function handleChange(e) {
        console.log(e.target.value);
        if(e.target.name === 'email') {
          if(!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } 
          const isValid = validateEmail(e.target.value);
          if(!isValid) {
            setErrorMessage('Please enter a valid email address.');
          } else {
            setErrorMessage('');
          } 
        } else {
          if(!e.target.value.length) {
            setErrorMessage(`${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)} is required.`);
            document.querySelector('.error-text').style.color = 'red';
          } else {
            setErrorMessage('');
          }
        }
    
        if(!errorMessage) {
          setFormDetails({...formDetails, [e.target.name]: e.target.value});
        }
      }
  
  return (
    <section className="contact-section">
      <h2 className="title-2">Contact Me</h2>
      <form id="contact-form"  className="search" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="form-input"  type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label  htmlFor="message">Message:</label>
          <textarea className="form-input"  name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;