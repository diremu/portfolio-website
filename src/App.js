import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/Home/Home';
import Introduction from './Introduction/Introduction';

// Install react-router-dom

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;