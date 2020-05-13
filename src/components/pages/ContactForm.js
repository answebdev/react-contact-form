import React from 'react';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1>Contact Form</h1>

      <header>
        <h2>Get in touch</h2>
      </header>
      <div className='content'>
        <p>
          <strong>Contact Us</strong> Feel free to contact us with any
          questions. Submit your name, email, and a short message, and we'll get
          back to you as soon as possible.
        </p>
        <form
          //   action='/success'
          name='react-contact-form'
          method='POST'
          data-netlify='true'
        >
          <div className='fields'>
            <div className='field half'>
              <input type='text' name='name' id='name' placeholder='Name' />
            </div>
            <div className='field half'>
              <input type='email' name='email' id='email' placeholder='Email' />
            </div>
            <div className='field'>
              <textarea
                name='message'
                id='message'
                placeholder='Message'
                rows='7'
              ></textarea>
            </div>
            {/* <div className='field'>
              <input
                type='file'
                name='myfile'
                id='myfile'
                placeholder='Upload File'
                rows='7'
              />
            </div> */}
            <div className='field'>
              <div data-netlify-recaptcha='true'></div>
            </div>
          </div>
          <ul className='actions'>
            <p>
              <input
                type='submit'
                value='Send Message'
                className='button primary'
              />
            </p>
          </ul>
        </form>
        <a href='/success'>Click Here</a>
      </div>
    </div>
  );
};

export default ContactForm;
