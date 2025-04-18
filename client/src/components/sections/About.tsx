export default function About() {
  return (
    <section id="about" className="mb-16 bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-heading font-bold text-gray-800">About Me</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3 w-5 text-center"></i>
                <span>3344 Uqbah handalyah street, Jeddah, Saudi Arabia</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-primary mt-1 mr-3 w-5 text-center"></i>
                <span>(966) 54-0946629</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3 w-5 text-center"></i>
                <a href="mailto:chaaban.khaled@gmail.com" className="hover:text-primary">chaaban.khaled@gmail.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-birthday-cake text-primary mt-1 mr-3 w-5 text-center"></i>
                <span>March 1978</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-passport text-primary mt-1 mr-3 w-5 text-center"></i>
                <span>Citizenship: French</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Associate professor with more than 18 years of expertise in conducting research activities, developing academic
            curricula, and participating to academic/industrial projects in the field of computer engineering and computer
            science. My expertise lies in the design, development and optimization of real-time and embedded software for a
            variety of computer systems applications, including robotics transportation systems.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I have a deep understanding of industry standards and best practices, ensuring that projects meet the highest levels of quality and safety. As a
            passionate advocate for continuous learning and improvement, I have mentored several graduate Ph.D. and M.Sc.
            students, participated in the ABET program accreditation, curriculum development as well as quality assessment,
            and contributed to the broader community through publications and conference presentations.
          </p>
          
          <div className="mt-8">
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Core Competencies</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Expertise in designing, developing, and evaluating educational programs</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Mentorship of graduate and Ph.D. research projects</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Reviewer and program committee member of IEEE/ACM journals</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Instructional leadership and creative learning strategies</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Leadership and Project management</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Quality assurance procedures and accreditation processes</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Professional written and verbal communication skills</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
