import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Main>
        </Main>
        <About />
        <Projects/>
      </Wrapper>
    </div>
  );
}

export default App;
