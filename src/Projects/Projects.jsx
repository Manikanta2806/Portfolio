import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import codeforcesImg from '../assets/codeforces.png';
import appleDiseaseImg from '../assets/apple-disease.webp';
import fitnessClubImg from '../assets/fitness-club.jpg';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Codeforces Rank Prediction',
      description: 'ML model to predict Codeforces ranks using user performance metrics. Deployed using Flask.',
      img: codeforcesImg,
      demoLink: 'https://rankprediction.vercel.app/',
      sourceLink: 'https://github.com/Manikanta2806/rankprediction',
      theme: 'codeforces',
    },
    {
      title: 'Apple Disease Prediction',
      description: 'CNN model to classify apple diseases using TensorFlow, Keras, and OpenCV.',
      img: appleDiseaseImg,
      demoLink: 'https://apple-disease-prediction.com',
      sourceLink: 'https://colab.research.google.com/drive/1VQGs2kRXen51cWdEpHOANhKeY_O6TBf2?usp=sharing',
      theme: 'apple',
    },
    {
      title: 'Fitness-Club Management',
      description: 'Full-stack system using React, Node.js, and MongoDB for fitness tracking and plan management.',
      img: fitnessClubImg,
      demoLink: 'https://fitness-system-three.vercel.app/',
      sourceLink: 'https://github.com/Manikanta2806/FitnessSystem',
      theme: 'fitness',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center mb-5 text-white">Projects</h2>
        <Row className="justify-content-center g-4">
          {projects.map((project, idx) => (
            <Col key={idx} md={4} sm={6}>
              <Card className={`project-card border-0 ${project.theme}`}>
                <Card.Img variant="top" src={project.img} className="project-img" />
                <Card.Body className="d-flex flex-column text-white text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="light"
                      size="sm"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outline-light"
                      size="sm"
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
