import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: 'fa-heartbeat',
      title: 'Cardiology',
      description: 'Advanced heart care with top specialists and cutting-edge technology.',
      color: '#dc3545'
    },
    {
      id: 2,
      icon: 'fa-user-md',
      title: 'General Check-ups',
      description: 'Routine check-ups to keep your health in check and detect early signs of illnesses.',
      color: '#28a745'
    },
    {
      id: 3,
      icon: 'fa-procedures',
      title: 'Emergency Care',
      description: '24/7 emergency services with expert medical teams ready for critical care.',
      color: '#ffc107'
    },
    {
      id: 4,
      icon: 'fa-stethoscope',
      title: 'Pediatrics',
      description: 'Specialized care for children with professional pediatricians and modern facilities.',
      color: '#17a2b8'
    },
    {
      id: 5,
      icon: 'fa-x-ray',
      title: 'Radiology',
      description: 'State-of-the-art radiology services for accurate diagnosis and effective treatment.',
      color: '#6f42c1'
    },
    {
      id: 6,
      icon: 'fa-ambulance',
      title: '24/7 Ambulance',
      description: 'Fast and efficient emergency response and patient transportation services.',
      color: '#fd7e14'
    }
  ];

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="services-page">
      <Container>
        <Row className="services-header">
          <Col md={12} className="text-center">
            <h1>Our Medical Services</h1>
            <p className="services-subtitle">
              We provide high-quality medical care with experienced professionals and modern facilities.
            </p>
          </Col>
        </Row>

        <Row className="services-grid">
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} sm={12} className="mb-4">
              <Card 
                className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(service.id)}
                onMouseLeave={handleCardLeave}
              >
                <Card.Body className="text-center">
                  <div 
                    className="service-icon"
                    style={{ 
                      backgroundColor: hoveredCard === service.id ? service.color : '#f8f9fa',
                      color: hoveredCard === service.id ? 'white' : service.color
                    }}
                  >
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                  <Button 
                    variant="outline-primary" 
                    className="service-btn"
                    style={{ 
                      borderColor: service.color,
                      color: service.color
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = service.color;
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = service.color;
                    }}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="cta-section">
          <Col md={12} className="text-center">
            <div className="cta-container">
              <h2>Need Medical Assistance?</h2>
              <p>Contact us today for professional healthcare services</p>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="cta-btn">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
