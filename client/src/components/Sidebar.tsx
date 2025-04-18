import { Link } from "wouter";

export default function Sidebar() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <aside className="hidden md:block md:w-1/4 lg:w-1/5 bg-white shadow-md sidebar">
      <div className="p-6 flex flex-col h-full">
        <div className="text-center mb-8">
          <div className="h-28 w-28 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold text-4xl">
            A
          </div>
          <h1 className="font-heading font-bold text-xl">Dr. Alain Khaled CHAABAN</h1>
          <p className="text-gray-600 text-sm mt-1">Associate Professor</p>
        </div>
        
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-user-circle w-5 text-center"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#experience"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-briefcase w-5 text-center"></i>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#education"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-graduation-cap w-5 text-center"></i>
                <span>Education</span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#skills"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-cogs w-5 text-center"></i>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a 
                href="#publications" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#publications"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-book w-5 text-center"></i>
                <span>Publications</span>
              </a>
            </li>
            <li>
              <a 
                href="#certifications" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#certifications"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-certificate w-5 text-center"></i>
                <span>Certifications</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 font-medium"
              >
                <i className="fas fa-envelope w-5 text-center"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-4">
            <a href="mailto:chaaban.khaled@gmail.com" className="text-gray-600 hover:text-primary">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://scholar.google.com/citations?user=B1hDTjMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <i className="fas fa-graduation-cap text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <div className="mt-6 text-center">
            <Link href="/Alain Khaled CHAABAN.pdf" className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
