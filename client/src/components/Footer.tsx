export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-heading font-bold mb-4">Dr. Alain Khaled CHAABAN</h2>
            <p className="text-gray-300">Associate Professor of Computer Engineering</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#publications" className="text-gray-300 hover:text-white transition-colors">Publications</a></li>
                <li><a href="#certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a></li>
                <li><a href="/Alain Khaled CHAABAN.pdf" className="text-gray-300 hover:text-white transition-colors">Download CV</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="mailto:chaaban.khaled@gmail.com" className="text-gray-300 hover:text-white transition-colors">Email</a></li>
                <li><a href="https://scholar.google.com/citations?user=B1hDTjMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Google Scholar</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Dr. Alain Khaled CHAABAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
