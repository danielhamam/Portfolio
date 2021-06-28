import './App.css';

// Components
import Navbar from './components/navbar/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
    </>
  );
}

export default App;
