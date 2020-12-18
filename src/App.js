import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scene from './components/Scene';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Scene/>
        <Main/>
        <About />
        <Projects/>
        <Contact/>
      </Wrapper>
    </div>
  );
}

export default App;
