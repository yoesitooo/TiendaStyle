import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Accessories from './pages/Accessories';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white selection:bg-gold/30 selection:text-gold">
        <ScrollToTop />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hombres" element={<Men />} />
            <Route path="/mujeres" element={<Women />} />
            <Route path="/accesorios" element={<Accessories />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
