import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaComments, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ContactUs = () => {
  return (
    <Container className="text-center" style={{ marginTop: '150px', paddingBottom: '80px' }}>
      <h2 className="mb-5">Contact Us</h2>
      <Row className="g-4" style={{ marginTop: '80px' }}>
        {/* Call Now */}
        <Col md={4}>
          <FaPhoneAlt size={32} className="mb-3" />
          <h5 className="">Call Now</h5>
          <hr style={{ width: '40px', borderTop: '3px solid red', margin: '8px auto',opacity: '0.7' }} />
          <NavLink to="tel:+919696333000"><p className="text-danger fw-semibold mb-2">+91 969-6333-000</p></NavLink>
          <p className="text-muted">Mon - Sat : 10:30 am - 06:00 pm</p>
        </Col>

        {/* Chat Now */}
        <Col md={4}>
          <FaComments size={32} className="mb-3" />
          <h5 className="">Chat Now</h5>
          <hr style={{ width: '40px', borderTop: '3px solid red', margin: '8px auto',opacity: '0.7' }} />
          <NavLink to="https://api.whatsapp.com/send/?phone=918828102133&text=Hey%2C+Let%E2%80%99s+chat+about+Powerlook.&type=phone_number&app_absent=0" target="_blank"><p className="text-danger fw-semibold mb-2">Chat with us.</p></NavLink>
          <p className="text-muted">Mon - Sat : 10:30 am - 06:00 pm</p>
        </Col>

        {/* Drop an Email */}
        <Col md={4}>
          <FaEnvelope size={32} className="mb-3" />
          <h5 className="">Drop an Email</h5>
          <hr style={{ width: '40px', borderTop: '3px solid red', margin: '8px auto',opacity: '0.7' }} />
          <NavLink to="mailto:support@powerlook.in"><p className="text-danger fw-semibold mb-2">support@powerlook.in</p></NavLink>
          <p className="text-muted">We will try to revert you ASAP.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
