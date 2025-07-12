import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

const Hero = () => {
  return (
    <div className="home-hero text-white d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">Welcome to ProdManage</h1>
            <p className="lead">
              Effortlessly manage your products with our all-in-one tool.
              Create, view, edit, and delete products – fast, simple, and 
              reliable.
            </p>
            <Link to="/products">
              <Button variant="light" size="lg" className="mt-3">
                Explore Products
              </Button>
            </Link>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div style={{ background: '#f4f7fe', border: '1.5px solid #e0e7ef', borderRadius: '1.5rem', padding: '1.2rem 1.5rem', maxWidth: 260, boxShadow: '0 2px 12px rgba(80,80,180,0.07)' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1533/1533926.png"
                alt="Product illustration"
                className="img-fluid mt-2 mt-md-0"
                style={{ maxHeight: 180, width: '100%', objectFit: 'contain' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; 
