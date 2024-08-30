import React, { useState } from 'react';
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from 'emailjs-com';
import contacts from "../assets/img1.png";

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs.send(serviceID, templateID, inputValue, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setInputValue({ email: '', message: '' });
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
      }, (err) => {
        console.log('FAILED...', err);
        setShowErrorMessage(true);
        setTimeout(() => setShowErrorMessage(false), 2000);
      });
  };

  return (
    <Container fluid className="contact">
      <div className='card' style={{ color: '#009688' }}>
        <div className="img-box">
          <img src={contacts} alt="Contact" />
        </div>
        <div className="content">
          <h2>Hire Me</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                name='email' 
                value={inputValue.email} 
                onChange={handleInput} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name='message' 
                value={inputValue.message} 
                onChange={handleInput} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='button'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      {showSuccessMessage && (
        <Alert variant="success">Message sent successfully!</Alert>
      )}
      {showErrorMessage && (
        <Alert variant="danger">Failed to send the message. Please try again later.</Alert>
      )}
    </Container>
  );
};

export default Contact;
