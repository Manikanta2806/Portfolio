import { Container, Row, Col, Card } from 'react-bootstrap';
import googleLogo from '../assets/google-logo.jpg';
import awsLogo from '../assets/aws logo.png';
import './Internships.css';

function Internships() {
  const internships = [
    {
      title: 'Google Generative AI Virtual Intern',
      company: 'Google',
      logo: googleLogo,
      duration: 'Jul 2024 – Sep 2024',
      description:
        'Assisted senior data engineers in analyzing large datasets and optimizing data pipelines using Google Cloud Platform (GCP), SQL, and Python.',
      className: 'google',
    },
    {
      title: 'AWS Data Engineering Virtual Intern',
      company: 'Amazon Web Services',
      logo: awsLogo,
      duration: 'Apr 2024 – Jun 2024',
      description:
        'Designed and developed scalable data pipelines using AWS services, SQL, and Python. Optimized storage and retrieval processes for efficient handling of large datasets.',
      className: 'aws',
    },
  ];

  return (
    <section id="internships" className="internships-section">
      <Container>
        <h2 className="text-center mb-5 text-white">Internships</h2>
        <Row className="justify-content-center g-5">
          {internships.map((intern, index) => (
            <Col md={5} key={index} className="d-flex">
              <Card className={`internship-card ${intern.className} text-center w-100`}>
                <div className="logo-container">
                  <Card.Img variant="top" src={intern.logo} className="intern-logo" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{intern.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-light">{intern.duration}</Card.Subtitle>
                  <Card.Text className="flex-grow-1">{intern.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Internships;
