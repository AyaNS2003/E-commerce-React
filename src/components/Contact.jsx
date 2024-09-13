import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    let formErrors = {};
    let isValid = true;

    if (!name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }
    if (!email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }
    if (!subject) {
      formErrors.subject = 'Subject is required';
      isValid = false;
    }
    if (!message) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSuccessMessage('Thank you for contacting us! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="contact">
        <div className="contact-form">
        <h2 className="my-4">Contact Us</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form className="form-elements" onSubmit={handleSubmit}>
            <div className="col mb-3">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="col mb-3">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            
            <div className="col mb-3">
                <label htmlFor="subject">Subject:</label>
                <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                />
                {errors.subject && <div className="text-danger">{errors.subject}</div>}
            </div>

            <div className="col mb-3">
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                ></textarea>
                {errors.message && <div className="text-danger">{errors.message}</div>}
            
            </div>
            <button type="submit" className="submit-btn">Send</button>
        </form>
        </div>
      
      <div className="contact-img">
        <img src="./assets/Contact.gif"/>
      </div>
    </div>
  );
};

export default ContactForm;
