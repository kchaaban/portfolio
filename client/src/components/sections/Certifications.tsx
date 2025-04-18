import { certifications, awards } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="mb-16 bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-800">Certifications & Awards</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="md:flex md:space-x-8">
        {/* Certifications */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-lg font-heading font-semibold text-primary mb-4">Certifications</h3>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <i className="fas fa-certificate text-primary mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-medium text-gray-800">{cert.title}</h4>
                    <p className="text-gray-600 text-sm">{cert.issuer}, {cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Awards */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-heading font-semibold text-primary mb-4">Awards & Distinctions</h3>
          
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <i className={`${award.icon} text-yellow-500 mt-1 mr-3`}></i>
                  <div>
                    <h4 className="font-medium text-gray-800">{award.title}</h4>
                    <p className="text-gray-600 text-sm">{award.organization}, {award.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
