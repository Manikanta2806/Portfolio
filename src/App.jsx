import Navbar from './Navbar/Navbar'
import About from './About/About'
import Skills from './Skills/Skills'
import Internships from './Internships/Interships'
import Projects from './Projects/Projects'
import Certifications from './Certiications/Certifications'
import Contact from './Contact/Contact'
import './App.css';
function App() {
    return (
      <div>
        <Navbar />
        <div className="container my-5">
          <About />
          <hr className="bg-light" />
          <Skills />
          <hr className="bg-light" />
          <Internships />
          <hr className="bg-light" />
          <Projects />
          <hr className="bg-light" />
          <Certifications />
          <hr className="bg-light" />
          <Contact />
        </div>
      </div>
    )
  }
  
  export default App
