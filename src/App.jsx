import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Results from './components/Results.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'

function App() {
  

  return (
    <div className='min-h-screen'>
      <Navbar/>
      <main>
        <Hero/>
        <Services />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}

export default App
