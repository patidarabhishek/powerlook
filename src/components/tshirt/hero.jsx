import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TshirtCollection from './tshirtCollection';
import ColorFilter from '../colorFiler';

const Hero = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleColorChange = (colorName) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(colorName)
        ? prevSelected.filter((color) => color !== colorName)
        : [...prevSelected, colorName]
    );
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRanges((prevSelected) =>
      prevSelected.includes(range)
        ? prevSelected.filter((r) => r !== range)
        : [...prevSelected, range]
    );
  };

  const handleResetFilters = () => {
    setSelectedColors([]);
    setSelectedPriceRanges([]);
  };
  return (
    <Container fluid className="mt-5" style={{ paddingTop: '50px' }}>
      <Row>
        {/* Sidebar Filters */}
        <Col
          md={2}
          className="border-end pe-3 d-none d-md-block"
          style={{ maxHeight: '80vh', overflowY: 'auto', position: 'sticky', top: '80px' }}
        >          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="">Filters</h6>
            <span className="text-danger fw-bold" style={{ cursor: 'pointer', fontSize: '12px' }} onClick={handleResetFilters}>RESET</span>
          </div>
          <hr />

          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="" style={{ fontSize: '14px', fontWeight: '700', color: '#555454' }}>COLOR</span>
          </div>
          <Form>
            <ColorFilter selectedColors={selectedColors} onColorChange={handleColorChange} />
            <hr />
            <h6 className="fw-bold mt-3" style={{ fontSize: '14px', fontWeight: '700', color: '#555454' }}>PRICE</h6>
            {["₹0.00 - ₹499.99", "₹500.00 - ₹999.99", "₹1,000.00 - ₹1,499.99", "₹1,500.00 - ₹1,999.99"].map((range, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" id={`price-${idx}`} checked={selectedPriceRanges.includes(range)} onChange={() => handlePriceRangeChange(range)} />
                <label className="form-check-label" style={{ fontSize: '14px', fontWeight: '600', color: '#555454' }} htmlFor={`price-${idx}`}>{range}</label>
              </div>
            ))}
            <hr />
            <h6 className="fw-bold mt-3" style={{ fontSize: '14px', fontWeight: '700', color: '#555454' }}>SIZE</h6>
            {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "28", "30", "32", "34", "36", "38", "40", "42"].map((range, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" id={`price-${idx}`} />
                <label className="form-check-label" style={{ fontSize: '14px', fontWeight: '600', color: '#555454' }} htmlFor={`price-${idx}`}>{range}</label>
              </div>
            ))}
            <hr />
            <h6 className="fw-bold mt-3" style={{ fontSize: '14px', fontWeight: '700', color: '#555454' }}>SLEEVES</h6>
            {["Full Sleeve", "Half Sleeve", "Sleeveless"].map((range, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" id={`price-${idx}`} />
                <label className="form-check-label" style={{ fontSize: '14px', fontWeight: '600', color: '#555454' }} htmlFor={`price-${idx}`}>{range}</label>
              </div>
            ))}
          </Form>
        </Col>

        {/* Main Content */}
        <Col md={10}>
          <img
            src="https://media.powerlook.in/catalog/category/plain_t_shirt_1__2.jpg?aio=w-1920"
            alt="T-Shirt Banner"
            className="img-fluid w-100 mb-4"
            style={{ objectFit: 'cover', maxHeight: '500px' }}
          />
          <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
            <div>
              <p className="mb-1">
                <span className="text-dark" style={{ fontWeight: "500" }}> T-SHIRT</span>
              </p>
              {/* <span className="badge bg-light text-dark border border-dark">Black ✕</span> */}
            </div>
            <div className="d-flex align-items-center">
              <span className="text-muted ms-2" style={{ fontSize: "12px" }}>Sort by:  &nbsp;</span>
              <Form.Select style={{ width: '200px' }} onChange={handleSortChange}>
                <option>Select...</option>
                <option value="lowToHigh">Price Low to High</option>
                <option value="highToLow">Price High to Low</option>
              </Form.Select>
            </div>
          </div>

          {/* Products will be rendered below this */}
          <TshirtCollection selectedColors={selectedColors} selectedPriceRanges={selectedPriceRanges} sortOrder={sortOrder} />
        </Col>
      </Row>
    </Container>

  );
};

export default Hero;
