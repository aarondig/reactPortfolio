import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Landing from './components/Mainhead';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
        <Landing />
      </Wrapper>
    </div>
  );
}

export default App;
