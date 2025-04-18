import { useEffect } from "react";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Publications from "@/components/sections/Publications";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Animate progress bars when page loads
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = (bar as HTMLElement).style.width;
      (bar as HTMLElement).style.width = '0';
      setTimeout(() => {
        (bar as HTMLElement).style.width = width;
      }, 300);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MobileNav />
      
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="w-full md:w-3/4 lg:w-4/5 py-8 md:py-12 md:px-8">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Publications />
          <Certifications />
          <Contact />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
