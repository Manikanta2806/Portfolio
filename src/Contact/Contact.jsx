import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Spinner, Alert, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'; // Optional for further customization

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: null, message: '' });

    emailjs
      .sendForm(
        'service_kwd9zna',
        'template_n3lex8c',
        e.target,
        '6lqfA5JB-t4Th-dYA'
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ success: true, message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setLoading(false);
          setStatus({ success: false, message: 'Failed to send. Please try again later.' });
        }
      );
  };

  return (
    <section id="contact" className="mt-5">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">📫 Contact Me</h2>
        <p className="text-center text-muted mb-5">
          I'd love to hear from you. Feel free to reach out using the form below.
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
              <Card.Body className="p-4 p-md-5">
                {status.message && (
                  <Alert variant={status.success ? 'success' : 'danger'}>
                    {status.message}
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <input type="hidden" name="to_email" value="youremail@example.com" />
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-secondary">Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-pill px-4 py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-secondary">Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-pill px-4 py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-secondary">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="rounded-4 px-4 py-3"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      className="rounded-pill fw-bold"
                    >
                      {loading ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Interactive Bottom Bar */}
        <Row className="justify-content-center mt-5">
          <Col xs="auto" className="text-center">
            <h5 className="fw-semibold text-dark mb-3">🌐 Connect With Me</h5>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <img
                  src="data:image/png;base64,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" // Replace with actual image URL or base64 icon
                  alt="GitHub"
                  className="icon"
                  width="45"
                  height="45"
                  style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/karimi-manikanta-016277302/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s" // Replace with actual image URL or base64 icon
                  alt="LinkedIn"
                  className="icon"
                  width="45"
                  height="45"
                  style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
              </a>

              {/* Twitter */}
              <a
                href="https://www.codechef.com/users/manikanta2806"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcv_WJfqB-tC3ZFADRoUMMMTtOA6ZzyAA6g&s" // Replace with actual image URL or base64 icon
                  alt="CODECHEF"
                  className="icon"
                  width="45"
                  height="45"
                  style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
