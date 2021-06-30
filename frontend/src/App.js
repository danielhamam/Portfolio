import './App.css';

// Components
import Navbar from './components/navbar/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </>
  );
}

export default App;
