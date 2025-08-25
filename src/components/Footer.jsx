import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-dark">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h3>Samip Hospital</h3>
              <p>
                Your trusted healthcare provider, committed to excellence and patient care. 
                We provide comprehensive medical services with the highest standards of quality and compassion.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/profile">Patient Portal</Link>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col lg={4} md={12} sm={12}>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <span>+9779765425426</span>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>hospital1234@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-clock"></i>
                  <span>24/7 Emergency Care</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col md={12}>
            <div className="footer-bottom-content">
              <p>&copy; {currentYear} Samip Hospital. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
