import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SiteDemo from './Components/SiteDemo'
import Landing from './Components/Landing'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

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
        <Projects/>
      </section>
      <section id="Experience">
        <h1 className="sectionHeader">Experience</h1>
      </section>
      <section id="Gallery">
        <h1 className="sectionHeader">Gallery</h1>
      </section>
      <section id="About-Me">
        <h1 className="sectionHeader">About Me</h1>
      </section>
      <section id="Skills">
        <h1 className="sectionHeader">Skills</h1>
        <Skills />
      </section>
      <section id="Contact">
        <h1 className="sectionHeader">Contact</h1>
      </section>
      <DemoApp />
    </div >
  );
}

export default App;
