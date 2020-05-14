import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Button } from 'react-bootstrap';

export class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Contact</title>
          </Helmet>
          <h1>Contact Form</h1>

          <div className='content'>
            <p>
              Feel free to contact us with any questions. Submit your name,
              email, and a short message, and we'll get back to you as soon as
              possible.{' '}
              <a id='click' href='/success'>
                Click Here
              </a>
            </p>
            <Form
              action='/success'
              name='react-contact-form'
              method='POST'
              data-netlify='true'
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Name' />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='email@example.com' />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows='5' />
              </Form.Group>
              <div className='field'>
                <div data-netlify-recaptcha='true'></div>
              </div>
              <Button
                className='actions'
                variant='primary'
                type='submit'
                value='Send Message'
                id='submit-btn'
              >
                Send Message
              </Button>
            </Form>
            <br />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;
