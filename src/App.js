import './App.css';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Navbar } from './components/Navbar/Navbar';
import Awards from './components/Awards/Awards';
import Career from './components/Career/Career';
import Books from './components/Books/Books';
import Religion from './components/Religion/Religion';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-3 my-app">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/awards" element={<Awards/>} />
            <Route path="/career" element={<Career/>} />
            <Route path="/books" element={<Books/>} />
            <Route path="/religion" element={<Religion/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
