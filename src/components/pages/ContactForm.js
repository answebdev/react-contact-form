import React from 'react';

const ContactForm = () => {
  return (
    <div>
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
          name='react-contact-form'
          action='/ThankYou'
          method='POST'
          data-netlify='true'
        >
          <div className='fields'>
            <div class='field half'>
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
            <li>
              <input
                type='submit'
                value='Send Message'
                class='button primary'
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
