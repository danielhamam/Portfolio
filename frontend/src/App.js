

// Components
import Navbar from './components/navbar/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// External styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Css styles
import './css/App.css';
import './css/Navigation.css'
import './css/Home.css';
import './css/About.css'
import './css/Portfolio.css'
import './css/Contact.css';
import './css/Footer.css';
import './css/Skills.css';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
