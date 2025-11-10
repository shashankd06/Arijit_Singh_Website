import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Discography from './pages/Discography';
import Lyrics from './pages/Lyrics';
import Concerts from './pages/Concerts';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Merchandise from './pages/Merchandise';
import Contact from './pages/Contact';
import Awards from './pages/Awards';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/lyrics" element={<Lyrics />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

