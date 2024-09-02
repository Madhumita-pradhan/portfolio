import './App.css';
import './style.css'
import About from './components/Pages/About';
import Welcome from './components/Pages/Welcome';
import Contact from './components/Pages/Contact';
import Footer from './components/footer/Footer';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import Resume from './components/Pages/Resume';
import Header from './components/header/Header';
import Educational from './components/Pages/Educational';
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Header />
      {/* <Welcome/> */}
      <Routes>
        <Route path='/portfolio' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/educational" element={<Educational />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;