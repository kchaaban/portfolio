import TimelineItem from "../TimelineItem";
import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mb-16 bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-800">Work Experience</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <TimelineItem 
            key={index}
            title={item.title}
            organization={item.organization}
            location={item.location}
            period={item.period}
            responsibilities={item.responsibilities}
            icon="fas fa-briefcase"
            isLastItem={index === experienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
