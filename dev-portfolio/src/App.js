import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SiteDemo from './Components/SiteDemo'
import Landing from './Components/Landing'

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
      <div className="appHome">
        <div className="demoBounds">
          <SiteDemo />
        </div>
        <div className="landingBounds">
          <Landing />
        </div>
      </div>
      <DemoApp />
    </div>
  );
}

export default App;
