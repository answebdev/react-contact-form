import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>React Playground | Contact</title>
          </Helmet>
          <Container>
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <h3>Contact Form</h3>
                <hr />
                <div className='content'>
                  <p>
                    Feel free to contact us with any questions. Submit your
                    name, email, and a short message, and we'll get back to you
                    as soon as possible.
                  </p>
                  <Form
                    action='/success'
                    name='react-playground-contact-form'
                    method='POST'
                    data-netlify='true'
                  >
                    <input
                      type='hidden'
                      name='form-name'
                      value='react-playground-contact-form'
                      data-netlify="true"
                    />
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type='name'
                        name='name'
                        placeholder='Name'
                      />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type='email'
                        name='email'
                        placeholder='email@example.com'
                      />
                      <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlTextarea1'>
                      <Form.Label>Message</Form.Label>
                      <Form.Control as='textarea' name='message' rows='5' />
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
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;
