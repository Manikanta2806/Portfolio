import { Container, Row, Col, Card } from 'react-bootstrap';
import nptelLogo from '../assets/nptel.png';
import pythonSpokenLogo from '../assets/python-spoken-tutorial.jfif';
import dsaLogo from '../assets/smartinterviews.jfif';
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: 'DBMS NPTEL Certificate',
      logo: nptelLogo,
      borderColor: '#4285F4',
      backgroundColor: '#1a237e', // deep indigo
      fontColor: '#BBDEFB',       // light blue text
    },
    {
      title: 'Python Spoken Tutorial',
      logo: pythonSpokenLogo,
      borderColor: '#3776AB',
      backgroundColor: '#0d47a1', // rich blue
      fontColor: '#E3F2FD',       // lighter blue text
    },
    {
      title: 'DSA Training (SmartInterviews)',
      logo: dsaLogo,
      borderColor: '#6f42c1',
      backgroundColor: '#311b92', // deep purple
      fontColor: '#D1C4E9',       // lavender text
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <Container>
        <h2 className="section-heading">Certifications</h2>
        <Row className="justify-content-center g-4">
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="certification-card"
                style={{
                  borderTop: `4px solid ${cert.borderColor}`,
                  backgroundColor: cert.backgroundColor,
                  color: cert.fontColor,
                }}
              >
                <div className="logo-container">
                  <Card.Img
                    variant="top"
                    src={cert.logo}
                    alt={cert.title}
                    className="certification-logo"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="certification-title"
                    style={{ color: cert.fontColor }}
                  >
                    {cert.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;
