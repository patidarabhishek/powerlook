import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const benefits = [
  {
    id: 1,
    image: 'https://www.powerlook.in/images/community/main-banner.jpg?aio=w-640',
    text: 'Bring your creativity to life & co-create products with us',
  },
  {
    id: 2,
    image: 'https://www.powerlook.in/images/community/banner2.jpg?aio=w-640',
    text: 'Be a part of exclusive events',
  },
  {
    id: 3,
    image: 'https://www.powerlook.in/images/community/discount-coupon.jpg?aio=w-640',
    text: 'Get customised coupon codes',
  },
  {
    id: 4,
    image: 'https://www.powerlook.in/images/community/shoppingBag.jpg?aio=w-640',
    text: 'Bag a commission on each sale you make',
  },
  {
    id: 5,
    image: 'https://www.powerlook.in/images/community/event.jpg?aio=w-640',
    text: 'Represent the brand',
  },
  {
    id: 6,
    image: 'https://www.powerlook.in/images/community/camera.jpg?aio=w-640',
    text: 'Foster learning and growth',
  },
];

const AffiliateProgram = () => {
  return (
    <Container className="text-center " style={{marginTop:'120px',paddingBottom:'80px'}}>
      <h5 className="text-uppercase text-muted fw-bold">Why Being a</h5>
      <h2 className="text-uppercase fw-bold mb-1">Powerpreneur</h2>
      <h6 className="text-uppercase text-muted mb-5">Is Worth It?</h6>

      <Row className="g-1 p-5">
        {benefits.map((item) => (
          <Col md={4} sm={6} xs={12} key={item.id}>
            <img src={item.image} alt="benefit" className="mb-3" width="180" height="150" />
            <p className="fw-medium">{item.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AffiliateProgram;
