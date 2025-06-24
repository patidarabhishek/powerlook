import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const benefits = [
  {
    id: 1,
    city_name: 'Andheri West',
    address: `Kamal Apartment, 3, near Oriental Bank,\nLokhandwala Complex, Andheri West,\nMumbai, 400053, India\n\nContact Details:\nPhone: +91 90045 06236\n\nBusiness Hours:\n11:00 AM to 10:00 PM (open 7 days a week)`,
  },
  {
    id: 2,
    city_name: 'Bandra West',
    address: `Shop No 3A & 3B, Ground Floor,\nMira Bella Building, 512 Linking Road,\nBandra West, Mumbai, 400050, India\n\nContact Details:\nPhone: +91 82912 26282\n\nBusiness Hours:\n11:00 AM to 10:00 PM (open 7 days a week)`,
  },
  {
    id: 3,
    city_name: 'Bangalore',
    address: `Shop No 67, next to Police Station,\nCommercial Street, Bangalore, 560001, India\n\nContact Details:\nPhone: +91 77380 83047\n\nBusiness Hours:\n11:00 AM to 10:00 PM (open 7 days a week)`,
  },
  {
    id: 4,
    city_name: 'Borivali West',
    address: `Shop no. 001, A wing, Shubhjivan Arcade,\nOpp. Moksh Plaza, S.V. Road,\nBorivali West, Mumbai, 400092, India\n\nContact Details:\nPhone: 070458 41105\n\nBusiness Hours:\n11:00 AM to 10:00 PM (open 7 days a week)`,
  },
  {
    id: 5,
    city_name: 'East Avenue, Vadodara',
    address: `G-1, 73 East Avenue,\nNr Bhailal Amin Marg, Sarabhai Campus,\nGenda Circle, Vadodara, 390017, India\n\nContact Details:\nPhone: +91 84528 46641\n\nBusiness Hours:\n11:00 AM to 10:00 PM (open 7 days a week)`,
  },
  {
    id: 6,
    city_name: 'Ghatkopar',
    address: `F17, First Floor, R City Mall,\nL.B.S. Marg, Ghatkopar West,\nMumbai, 400086, India\n\nContact Details:\nPhone: +91 91364 46947\n\nBusiness Hours:\n11:00 AM to 10:00 PM (open 7 days a week)`,
  },
];


const StoreLocator = () => {
  return (
    <Container className="" style={{ marginTop: '120px', paddingBottom: '80px' }}>
      <h2 className="text-uppercase mb-1 text-center">STORE LOCATOR</h2>
      <hr className="mx-auto"
        style={{
          width: '40px',
          height: '3px',
          backgroundColor: 'red',
          border: 'none',
          marginTop: '14px',
          marginBottom: '16px',
          opacity: '1'
        }}
      />
      <img src="https://www.powerlook.in/images/store_locations.jpg?aio=w-1200" alt="" className='mt-4' />
      <Row className="g-1" style={{ marginTop: '80px' }}>
        {benefits.map((item) => (
          <Col md={4} sm={6} xs={12} key={item.id} style={{ marginBottom: '80px' }}>
            <h5 className="fw-medium ">{item.city_name}</h5>
            <hr
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: 'red',
                border: 'none',
                marginTop: '4px',
                marginBottom: '16px',
                opacity: '1'
              }}
            />
            <p className="text-left" style={{ whiteSpace: 'pre-line' }}>{item.address}</p>
            <button className="btn btn-danger mt-2">View Details</button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StoreLocator;
