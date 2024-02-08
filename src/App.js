import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/Home/Home';
import About from '../src/About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Introduction from './Introduction/Introduction';

// Install react-router-dom

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="home" element={<Home />} />
      <Route  path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;