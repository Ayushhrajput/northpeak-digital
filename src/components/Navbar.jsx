import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      
      offset>50? setScrolled(true): setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  const timeSlots = [
    { day: 'Mon, Jul 27', time: '09:00 AM' },
    { day: 'Mon, Jul 27', time: '10:30 AM' },
    { day: 'Tue, Jul 28', time: '01:00 PM' },
    { day: 'Wed, Jul 29', time: '02:30 PM' },
    { day: 'Thu, Jul 30', time: '04:00 PM' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled? "bg-black/10 border-b  border-b-black/10 backdrop-blur-2xl shadow-sm shadow-white/20": ""}`}>
        <div className="flex items-center justify-between">
          
          <a
            href="#"
            className="flex items-center gap-2 group p-1"
            aria-label="NorthPeak Digital Home"
          >
            <div className="w-9 h-9 rounded-2xl corner-shape bg-black/90 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              NorthPeak<span className="text-slate-900">.</span>
            </span>
          </a>

          
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-black/90 transition-colors rounded-md px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-black/90 hover:bg-black/70 active:scale-95 rounded-2xl corner-shape transition-all "
            >
              Book a Call
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-xl text-slate-600 hover:text-slate-900 ${scrolled? "hover:bg-white/60": "hover:bg-black/10"}  corner-shape`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${scrolled? "bg-black/10 border-black/10 border-b  backdrop-blur-2xl": "bg-black/10"}   ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } rounded-b-2xl corner-shape`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-black/90 hover:bg-white/60 corner-shape"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 px-5 py-3 text-base font-semibold text-white bg-black/90  rounded-2xl corner-shape active:scale-95 transition-all"
          >
            Book a Call
          </a>
        </div>
        
      </div>
      
    </header>
  );
}