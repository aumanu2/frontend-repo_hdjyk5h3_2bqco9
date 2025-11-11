import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Measurements from './pages/Measurements'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50/40">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/measurements" element={<Measurements />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
