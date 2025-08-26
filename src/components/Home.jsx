import React, { useState } from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      image: '/images/image.png',
      alt: 'Hospital Front'
    },
    {
      id: 2,
      image: '/images/team.webp',
      alt: 'Medical Team'
    }
  ];

  const serviceCards = [
    {
      id: 1,
      image: '/images/service.avif',
      title: 'International Patient Services',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonText: 'Learn More'
    },
    {
      id: 2,
      image: '/images/technology.jpg',
      title: 'Technology and Innovation',
      description: 'Our hospital aims to meet the standards of NABH (National Accreditation Board for Hospitals & Healthcare Providers).',
      buttonText: 'Learn More'
    },
    {
      id: 3,
      image: '/images/healthcamp.webp',
      title: 'CSR',
      description: 'GIH has organized and participated in more than 40 different health camps all over Nepal.',
      buttonText: 'Learn More'
    }
  ];

  const specialities = [
    { id: 1, icon: 'fa-user-doctor', title: 'Prominent Doctors' },
    { id: 2, icon: 'fa-helicopter', title: 'Heli Rescue' },
    { id: 3, icon: 'fa-bed', title: 'State-of-art Equipment' },
    { id: 4, icon: 'fa-shield-halved', title: 'Dependable Infrastructure' },
    { id: 5, icon: 'fa-phone-volume', title: 'Call Center Management' },
    { id: 6, icon: 'fa-headphones', title: 'Excellent Customer Service' }
  ];

  return (
    <div className="home">
      <div className="carousel-section">
        <Carousel 
          activeIndex={currentSlide}
          onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
          className="carousel-custom"
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 carousel-img"
                src={item.image}
                alt={item.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="cards-section">
        <Row className="justify-content-center">
          {serviceCards.map((card) => (
            <Col key={card.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src={card.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {card.description}
                  </Card.Text>
                  <button className="btn btn-primary mt-auto">
                    {card.buttonText}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="blob1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D1E8FF" d="M54.8,-40.9C69.3,-25.6,78.1,-2.9,73.6,16.8C69.1,36.5,51.4,53.3,29.9,64.7C8.3,76.1,-17.1,82.2,-34.1,73.1C-51.1,64.1,-59.7,39.8,-64.4,15.8C-69,-8.3,-69.7,-32.2,-58.3,-46.9C-46.9,-61.6,-23.5,-67,-1.6,-65.7C20.2,-64.4,40.3,-56.3,54.8,-40.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="blob2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D1E8FF" d="M54.8,-40.9C69.3,-25.6,78.1,-2.9,73.6,16.8C69.1,36.5,51.4,53.3,29.9,64.7C8.3,76.1,-17.1,82.2,-34.1,73.1C-51.1,64.1,-59.7,39.8,-64.4,15.8C-69,-8.3,-69.7,-32.2,-58.3,-46.9C-46.9,-61.6,-23.5,-67,-1.6,-65.7C20.2,-64.4,40.3,-56.3,54.8,-40.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <Container className="about-section mx-3">
        <Row className="align-items-center">
          <Col lg={8} md={12}>
            <div className="about-content">
              <h1>About Us</h1>
              <p>
                Samip International Hospital, Kathmandu is a multi-specialty hospital that offers preventive and curative healthcare services. 
                It was established with a motive "Care to Cure" in February 2010. It began as an idea of a patient-oriented, socially responsible center, 
                making superior quality healthcare services convenient and accessible for the community it serves. It aims to meet all healthcare needs 
                of the nation through unparalleled patient care and wellness programs.
              </p>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="about-image">
              <img src="/images/doctor.jpg" alt="About Us" />
            </div>
          </Col>
        </Row>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="waves">
        <path fill="#D1E8FF" fillOpacity="1" d="M0,128L24,133.3C48,139,96,149,144,165.3C192,181,240,203,288,224C336,245,384,267,432,250.7C480,235,528,181,576,138.7C624,96,672,64,720,42.7C768,21,816,11,864,48C912,85,960,171,1008,197.3C1056,224,1104,192,1152,186.7C1200,181,1248,203,1296,202.7C1344,203,1392,181,1416,170.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
      </svg>

      <div className="speciality-section">
        <Container>
          <Row className="justify-content-center">
            {specialities.map((speciality) => (
              <Col key={speciality.id} lg={4} md={6} sm={12} className="mb-4">
                <div className="speciality-card">
                  <i className={`fa-solid ${speciality.icon}`}></i>
                  <h5>{speciality.title}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
