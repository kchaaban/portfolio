import { useState } from "react";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <h1 className="font-heading font-bold">Dr. Alain Khaled CHAABAN</h1>
        </div>
        <button 
          onClick={toggleMenu}
          className="text-gray-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="container mx-auto px-4 py-2">
          <ul>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}
                className="block text-primary hover:text-primary/80"
              >
                About
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#experience"); }}
                className="block text-primary hover:text-primary/80"
              >
                Experience
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#education"); }}
                className="block text-primary hover:text-primary/80"
              >
                Education
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#skills"); }}
                className="block text-primary hover:text-primary/80"
              >
                Skills
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#publications" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#publications"); }}
                className="block text-primary hover:text-primary/80"
              >
                Publications
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#certifications" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#certifications"); }}
                className="block text-primary hover:text-primary/80"
              >
                Certifications
              </a>
            </li>
            <li className="py-2">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
                className="block text-primary hover:text-primary/80"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
