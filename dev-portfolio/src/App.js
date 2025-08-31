import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SiteDemo from './Components/SiteDemo'
import Landing from './Components/Landing'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import { FaBluesky } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

function DemoApp() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="Home">
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=device-dpi" />
        <div className="appHome">
          <div className="demoBounds">
            <SiteDemo />
          </div>
          <div className="landingBounds">
            <Landing />
          </div>
        </div>
      </section>
      <section id="Projects">
        <h1 className="sectionHeader">Projects</h1>
        <Projects />
      </section>
      <section id="Experience">
        <h1 className="sectionHeader">Experience</h1>
        <Experience />
      </section>
      <section id="About-Me">
        <AboutMe />
      </section>
      <section id="Contact">
        <div className="contactWrapper">
          <a href="mailto:ewanburnettsk@outlook.com">
              <LuMail className='icon'/>
            <h2>
               Email: EwanBurnettSK@Outlook.com</h2>
          </a>
          <a href="https://www.linkedin.com/in/ewanburnettsk/" target='_blank'>
              <FaLinkedin className='icon'/> 
            <h2>
              Linkedin: @EwanBurnettSK</h2>
          </a>
          <a href="https://github.com/EwanBurnett" target="_blank">
              <FaGithub className='icon' /> 
            <h2>
              Github: EwanBurnett</h2>
          </a>
          <a href="https://bsky.app/profile/ewanburnett.bsky.social" target='_blank'>
              <FaBluesky className="icon"/>
            <h2>
               Bluesky: @ewanburnett.bsky.social</h2>
          </a>
        </div>
      </section>
      <section id="Skills">
        <h1 className="sectionHeader">Skills</h1>
        <Skills />
      </section>
      <section id="Gallery">
        <h1 className="sectionHeader">Gallery</h1>
      </section>
      <footer>
        <p>
          Copyright <a href="#">Ewan Burnett ©</a> 2025
        </p>
        <a href="mailto:ewanburnettsk@outlook.com">EwanBurnettSK@Outlook.com</a>
      </footer>
    </div >
  );
}

export default App;
