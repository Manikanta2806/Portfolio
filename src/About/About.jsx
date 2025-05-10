import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import 'animate.css';
import myPhoto from '../assets/my photo.jpg'; // Check image path
import './About.css';

function About() {
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.classList.add('animate__animated', 'animate__fadeInUp');
    }
  }, []);

  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(to bottom right, #e0f7fa, #b2ebf2, #81d4fa)',
        scrollMarginTop: '100px',
        minHeight: '100vh',
      }}
    >
      <Container>
        <h2 className="text-center mb-5 animate__animated animate__fadeInDown section-title">
          👨‍💻 About Me
        </h2>
        <Row className="align-items-center justify-content-center gx-5 gy-5">
          {/* Profile Image */}
          <Col md={5} className="text-center animate__animated animate__zoomIn">
            <div className="profile-wrapper p-3 rounded-circle mx-auto">
              <Image
                src={myPhoto}
                alt="Karimi Manikanta"
                roundedCircle
                fluid
                className="shadow profile-image"
              />
            </div>
            <h4 className="mt-4 fw-bold name-text">Karimi Manikanta</h4>
            <p className="text-muted">Multidisciplinary Engineer & Aspiring Data Scientist</p>
          </Col>

          {/* Bio Card */}
          <Col md={7} className="animate__animated animate__fadeInRight">
            <Card
              className="bio-card shadow-lg border-0"
              style={{
                borderRadius: '20px',
                padding: '25px',
                background: 'linear-gradient(to right, #ffffff, #e1f5fe)',
              }}
            >
              <Card.Body>
                <Card.Text className="fs-5" style={{ lineHeight: '1.8', color: '#37474f' }}>
                  <p>
                    Hello! I'm <span className="text-info fw-bold">Karimi Manikanta</span> — an enthusiastic engineer passionate about <span className="text-success fw-bold">Data Science</span> and emerging technologies. 🌟
                  </p>
                  <p>
                    I’m skilled in <span className="text-warning fw-semibold">C++</span>, <span className="text-warning fw-semibold">Python</span>, and <span className="text-warning fw-semibold">Java</span>, always ready to solve problems with elegant solutions.
                  </p>
                  <p>
                    I've developed impactful projects using <span className="text-primary fw-bold">TensorFlow</span>, <span className="text-primary fw-bold">React.js</span>, <span className="text-primary fw-semibold">Express</span>, and <span className="text-primary fw-semibold">MongoDB</span>.
                  </p>
                  <p className="fst-italic text-muted text-center mt-4">
                    “Driven by curiosity, strengthened by code, and inspired by innovation.”
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
