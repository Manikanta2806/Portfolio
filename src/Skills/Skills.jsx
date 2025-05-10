import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaPython, FaJava, FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaReact
} from 'react-icons/fa';
import { SiTensorflow, SiMysql, SiMongodb, SiGitlab } from 'react-icons/si';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="text-center mb-5 text-white">Technical Skills</h2>
        <Row className="justify-content-center">

          {/* Python */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-python text-white text-center">
              <Card.Body>
                <FaPython size={50} />
                <h5 className="mt-3">Python</h5>
                <p>Python, Java, HTML, CSS, JavaScript</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Java */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-java text-white text-center">
              <Card.Body>
                <FaJava size={50} />
                <h5 className="mt-3">Java</h5>
                <p>Java, C++, HTML, CSS, JavaScript</p>
              </Card.Body>
            </Card>
          </Col>

          {/* React */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-react text-white text-center">
              <Card.Body>
                <FaReact size={50} />
                <h5 className="mt-3">React.js</h5>
                <p>React.js, Node.js, TensorFlow</p>
              </Card.Body>
            </Card>
          </Col>

          {/* TensorFlow */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-tensorflow text-white text-center">
              <Card.Body>
                <SiTensorflow size={50} />
                <h5 className="mt-3">TensorFlow</h5>
                <p>Machine Learning Frameworks</p>
              </Card.Body>
            </Card>
          </Col>

          {/* MySQL */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-mysql text-white text-center">
              <Card.Body>
                <SiMysql size={50} />
                <h5 className="mt-3">MySQL</h5>
                <p>MySQL, MongoDB</p>
              </Card.Body>
            </Card>
          </Col>

          {/* MongoDB */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-mongodb text-white text-center">
              <Card.Body>
                <SiMongodb size={50} />
                <h5 className="mt-3">MongoDB</h5>
                <p>MySQL, MongoDB</p>
              </Card.Body>
            </Card>
          </Col>

          {/* VS Code */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-tools text-white text-center">
              <Card.Body>
                <FaGitAlt size={50} />
                <h5 className="mt-3">VS Code</h5>
                <p>Dev Tools: Git, GitLab</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Git & GitLab */}
          <Col md={3} className="mb-4">
            <Card className="skill-card animate-fade skill-tools text-white text-center">
              <Card.Body>
                <FaGitAlt size={50} />
                <h5 className="mt-3">Git & GitLab</h5>
                <p>Git, GitLab</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Skills;
