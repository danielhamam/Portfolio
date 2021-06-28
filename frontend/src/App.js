import './App.css';

// Components
import Navbar from './components/navbar/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
    </>
  );
}

export default App;
