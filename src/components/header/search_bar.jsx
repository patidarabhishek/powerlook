import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const SearchBar = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    { category: 'summer', url: '/api/summerCollectionapi.json' },
    { category: 'newarrival', url: '/api/newArrivalapi.json' },
    { category: 'shirt', url: '/api/shirtapi.json' },
    { category: 'tshirt', url: '/api/tshirtapi.json' },
    { category: 'jacket', url: '/api/jacketapi.json' },
    { category: 'bottoms', url: '/api/bottomWearapi.json' },
  ];

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const fetches = endpoints.map(({ category, url }) =>
          fetch(url).then(res => res.json().then(data => data.map(p => ({ ...p, category }))))
        );
        const results = await Promise.all(fetches);
        const mergedProducts = results.flat();
        setAllProducts(mergedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    const results = allProducts.filter(product =>
      product.name?.toLowerCase().includes(query)
    );
    setFiltered(results);
  }, [allProducts, query]);

  return (
    <Container style={{ marginTop: '120px', minHeight: '100vh' }}>
      <h4 className="mb-4">Search Results for "{query}"</h4>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <Row>
          {filtered.map(product => (
            <Col md={4} lg={3} className="mb-4" key={`${product.category}-${product.id}`}>
              <Card className="h-100">
                <Link to={`/product/${product.category}/${product.id}`}>
                  <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>₹{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchBar;
