import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const blogs = [
  {
    id: 1,
    date: 'January 21, 2025',
    tag: 'Product Spotlight',
    title: 'Grind, Grow, Glow: The Three Stages of Life Fulfillment for Men',
    description:
      'Men don\'t need much. But there are irreplaceable factors they must get right to feel "fulfilled" in their life.',
    fullContent:
      'This article explores how discipline, purpose, and self-worth contribute to men\'s growth. It outlines strategies for modern men to find meaning and confidence in their daily lives.',
    readTime: '8 Mins',
    image: 'https://media.powerlook.in/mageplaza/blog/post/2/8/2880_700_5.jpg?aio=w-384',
  },
  {
    id: 2,
    date: 'January 02, 2025',
    tag: 'Fashion Trends',
    title: 'The Power of Monochrome: Why All-Black Outfits Are Taking Over 2025',
    description:
      'Monochrome magic is ruling 2025, and black’s the king. From sleek fits to bold textures...',
    fullContent:
      'Black offers simplicity, power, and elegance. The article discusses its growing popularity and how to style all-black looks effectively.',
    readTime: '4 Mins',
    image: 'https://media.powerlook.in/mageplaza/blog/post/2/8/2880_700_4.jpg?aio=w-384',
  },
  {
    id: 3,
    date: 'December 26, 2024',
    tag: 'Wardrobe',
    title: 'Bollywood Icons and Their Impact on Men’s Casual Fashion',
    description:
      'From Ranveer’s bold fits to Hrithik’s athleisure game, Bollywood isn’t just on-screen—it’s in your wardrobe.',
    fullContent:
      'Bollywood celebrities influence Indian fashion deeply. This article examines their role in shaping the latest casual wear trends for men.',
    readTime: '5 Mins',
    image: 'https://media.powerlook.in/mageplaza/blog/post/2/8/2880_700_3.jpg?aio=w-384',
  },
];

const BlogPage = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <Container className="py-5" style={{marginTop:'80px'}}>
      <h2 className="mb-4 fw-bold">Latest Blog Posts</h2>
      <Row className="g-4">
        {blogs.map((blog) => {
          const isExpanded = blog.id === expandedCardId;
          return (
            <Col md={4} key={blog.id}>
              <Card className={`shadow-sm h-100`}>
                <Card.Img variant="top" src={blog.image} />
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-muted">{blog.date}</small>
                    <Badge bg="light" text="dark" style={{ fontSize: '0.7rem' }}>
                      {blog.tag}
                    </Badge>
                  </div>
                  <Card.Title style={{ fontSize: '1.1rem' }}>{blog.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {blog.description}
                    {isExpanded && (
                      <>
                        <br />
                        <span className="d-block mt-2">{blog.fullContent}</span>
                      </>
                    )}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center bg-white border-0">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => toggleExpand(blog.id)}
                  >
                    {isExpanded ? 'View Less' : 'Read More'}
                  </Button>
                  <small className="text-muted">{blog.readTime}</small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BlogPage;
