import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, Nav, Container, Row, Col, Card, Image,
} from 'react-bootstrap';
import '../App.css';

function App({ darkMode }) {
  // Using var as preferred
  var currentYear = new Date().getFullYear();

  const bgSection = darkMode ? 'bg-secondary text-white' : 'bg-light';

  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Enterprise &amp; Projects (Pty) Ltd</Navbar.Brand>
          <Image src="./Logo.jpg" alt="Logo" width={100} className="me-2" />
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#chef">Chef</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">website</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{/* ABOUT */}
<section id="about" className="py-5 bg-light">
        
      </section>
      <section id="about" className="py-5 bg-light">
        
      </section>

      
      {/* ABOUT */}
      <section id="about" className="py-5 bg-light">
        <Container>
          
          <Row className="align-items-center">
            <Col md={8}>
              <p><strong>Company:</strong> Enterprise &amp; Projects (Pty) Ltd</p>
              <p><strong>Email:</strong> <a href="mailto:info@mcgeba.co.za" className="text-decoration-none text-">info@mcgeba.co.za</a></p>
              <p><strong>Location:</strong> 1135 Section Lefatlheng, Hammanskraal, Pretoria, Gauteng</p>
              <p><strong>Director:</strong> Ditebogo Zulu  contact: 0601027505 </p>
              <p><strong>Professional Chef:</strong> Arabang Dipitsi</p>
            </Col>
            <Col md={4} className="text-md-end text-center">
              <Image src="./Logo.jpg" alt="Company logo" fluid rounded className="shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* HERO */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '85vh', paddingTop: '70px', backgroundColor: '#fafafa' }}
      >
        <Container>
          <Card className="flex-row shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-center text-center text-md-start">
              <h1 className="display-5 fw-bold">We serve our services with pride</h1>
              <p className="lead">Culinary • Cleaning • Skills Development</p>
              <a href="#services" className="btn btn-light btn-bright mt-3 align-self-md-start">
                ↓ Learn More
              </a>
            </Card.Body>
            
          </Card>
        </Container>
      </section>

     
      {/* CHEF */}
      <section id="chef" className={`py-5 ${darkMode ? 'bg-secondary text-white' : ''}`}>
  <Container>
    <h2 className="text-center mb-5">Cooking with Love</h2>
    <Row className="align-items-center">
      <Col md={4} className="mb-4 mb-md-0">
        <div style={{ height: '250px', overflow: 'hidden' }}>
          <Image
            src="./chef2.jpg"
            alt="Chef Arabang Dipitsi"
            fluid
            rounded
            className="shadow"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      </Col>
      <Col md={8}>
        <h3 className="mb-3">Chef Arabang Dipitsi</h3>
        <p className="fs-5">
          Chef Arabang Dipitsi believes every dish carries a story. From selecting the freshest local
          ingredients to perfect plating, he pours passion and love into every step so you can taste
          joy in every bite.
        </p>
      </Col>
    </Row>
  </Container>
</section>


      {/* FOOD */}
      <section id="services" className={`py-5 ${bgSection}`}>
        <Container>
          <h2 className="text-center mb-5">FOOD</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food1.png" style={{ height: '250px', objectFit: 'cover' }} />
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food2.jpg" style={{ height: '250px', objectFit: 'cover' }} />
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food3.jpg" style={{ height: '250px', objectFit: 'cover' }} />
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food4.jpg" style={{ height: '250px', objectFit: 'cover' }} />
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food6.jpg" style={{ height: '250px', objectFit: 'cover' }} />
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food7.jpg" style={{ height: '250px', objectFit: 'cover' }} />
              </Card>
            </Col>

             {/* SERVICES */}
      <section id="services" className={`py-5 ${bgSection}`}>
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src="./food4.jpg" style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Culinary Services</Card.Title>
                  <Card.Text>
                    Restaurant-quality catering &amp; private‑chef menus tailored to your event.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img
                  variant="top"
                  src="/cleaning.jpg"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Cleaning Services</Card.Title>
                  <Card.Text>
                    Residential, office &amp; event cleaning by trained, trustworthy staff.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Skills Development</Card.Title>
                  <Card.Text>
                    Hands‑on hospitality and hygiene training empowering community members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

            


          </Row>
        </Container>
      </section>




      {/* FOOTER */}
      <footer id="contact" className="text-center py-4 bg-dark text-white">
        <Container>
          <p className="mb-1">&copy; {currentYear} Koketso Legoabe</p>
          website Developmented by Koketso Legoabe
          <p>Email: koke23897@gmail.com. | Phone: +27 676278758</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
