import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import WishlistIcon from '../add_to_wishlist/wishlist_icon';

const BottomWearCollection = ({ selectedColors = [], selectedPriceRanges = [], sortOrder = '' }) => {
  const [BottomWear, setBottomWear] = useState([]);
  const firstLoad = useRef(true);

  useEffect(() => {
    const fetchBottomWear = async () => {
      try {
        const response = await fetch('/api/bottomWearapi.json');
        const data = await response.json();
        setBottomWear(data);
      } catch (error) {
        console.error('Failed to load shirts:', error);
      }
    };

    fetchBottomWear();
  }, []);

  const parsePriceRange = (range) => {
    const [min, max] = range.replace(/[₹,]/g, '').split(' - ').map(Number);
    return { min, max };
  };
  
  const filteredProducts = BottomWear.filter((product) => {
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);
  
    const matchesPrice =
      !selectedPriceRanges.length ||
      selectedPriceRanges.some(range => {
        const { min, max } = parsePriceRange(range);
        return product.price >= min && product.price <= max;
      });
  
    return matchesColor && matchesPrice;
  });

  const sortedProducts = [...filteredProducts];
  if (sortOrder === 'lowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    if (BottomWear.length > 0 && sortedProducts.length === 0) {
      toast.dismiss();
      toast.warning('No products found matching your filters.');
    }
  }, [sortedProducts, BottomWear]);
  
  return (
    <Container fluid className="mt-4">
      <Row>
          {sortedProducts.length === 0 ? (
          <div className="text-center w-100 py-5">
            <h5 className="text-muted">No products found.</h5>
          </div>
        ) : (
        sortedProducts.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={4} lg={3} className="mb-4">
            <div className="position-relative">
            <WishlistIcon product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              category: 'bottoms',
            }} />
            <Link
              to={`/product/bottoms/${product.id}`} // ✅ add link with category + id
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card className="h-100 border-0 product-card">
                <div className="position-relative">
                  <Card.Img variant="top" src={product.image} alt={product.name} className="product-img" />
                 
                </div>
                <Card.Body className="px-2 py-3">
                  <Card.Title className="fs-6 fw-semibold mb-1">{product.name}</Card.Title>
                  <Card.Text className="text-dark fw-bold">₹{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
            </div>
          </Col>
        )))}
      </Row>
    </Container>
  );
};

export default BottomWearCollection;
