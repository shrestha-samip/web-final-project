import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  const aboutContent = {
    title: "About Samip Hospital",
    subtitle: "Your Trusted Healthcare Partner",
    description: `Samip International Hospital, Kathmandu is a multi-specialty hospital that offers preventive and curative healthcare services. 
    It was established with a motive "Care to Cure" in February 2010. It began as an idea of a patient-oriented, socially responsible center, 
    making superior quality healthcare services convenient and accessible for the community it serves.`,
    
    mission: "Our mission is to provide exceptional healthcare services with compassion, innovation, and excellence.",
    vision: "To be the leading healthcare provider in Nepal, recognized for outstanding patient care and medical excellence.",
    
    stats: [
      { number: "5000+", label: "Patients Served" },
      { number: "50+", label: "Expert Doctors" },
      { number: "24/7", label: "Emergency Care" },
      { number: "100+", label: "Medical Staff" }
    ],
    
    values: [
      {
        icon: "fa-heart",
        title: "Compassion",
        description: "We treat every patient with care, empathy, and respect."
      },
      {
        icon: "fa-star",
        title: "Excellence",
        description: "We strive for the highest standards in medical care and service."
      },
      {
        icon: "fa-users",
        title: "Teamwork",
        description: "Our medical team works together to provide the best care."
      },
      {
        icon: "fa-lightbulb",
        title: "Innovation",
        description: "We embrace new technologies and medical advancements."
      }
    ]
  };

  return (
    <div className="about-page">
      <Container>
        {/* Hero Section */}
        <Row className="about-hero">
          <Col md={12} className="text-center">
            <h1 className="about-title">{aboutContent.title}</h1>
            <p className="about-subtitle">{aboutContent.subtitle}</p>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="about-content">
          <Col lg={8} md={12}>
            <div className="about-description">
              <h2>Our Story</h2>
              <p>{aboutContent.description}</p>
              
              <div className="mission-vision">
                <div className="mission">
                  <h3><i className="fa-solid fa-bullseye"></i> Our Mission</h3>
                  <p>{aboutContent.mission}</p>
                </div>
                
                <div className="vision">
                  <h3><i className="fa-solid fa-eye"></i> Our Vision</h3>
                  <p>{aboutContent.vision}</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={12}>
            <div className="about-image">
              <img src="/images/hospitalfront.webp" alt="Samip Hospital" />
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-section">
          {aboutContent.stats.map((stat, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <div className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Values Section */}
        <Row className="values-section">
          <Col md={12} className="text-center">
            <h2>Our Core Values</h2>
            <p className="values-subtitle">The principles that guide our healthcare services</p>
          </Col>
        </Row>
        
        <Row className="values-grid">
          {aboutContent.values.map((value, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className={`fa-solid ${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Additional Info */}
        <Row className="additional-info">
          <Col md={12}>
            <div className="info-card">
              <h3>Why Choose Samip Hospital?</h3>
              <Row>
                <Col md={6}>
                  <ul className="features-list">
                    <li><i className="fa-solid fa-check"></i> State-of-the-art medical equipment</li>
                    <li><i className="fa-solid fa-check"></i> Experienced medical professionals</li>
                    <li><i className="fa-solid fa-check"></i> 24/7 emergency services</li>
                    <li><i className="fa-solid fa-check"></i> Patient-centered care approach</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="features-list">
                    <li><i className="fa-solid fa-check"></i> Affordable healthcare services</li>
                    <li><i className="fa-solid fa-check"></i> Modern facilities and infrastructure</li>
                    <li><i className="fa-solid fa-check"></i> Comprehensive medical specialties</li>
                    <li><i className="fa-solid fa-check"></i> International quality standards</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
