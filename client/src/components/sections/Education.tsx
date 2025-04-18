import TimelineItem from "../TimelineItem";
import { educationData } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mb-16 bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-800">Education</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <TimelineItem 
            key={index}
            title={item.degree}
            organization={item.institution}
            location={item.location}
            period={item.period}
            description={item.description}
            additionalInfo={item.title}
            icon="fas fa-graduation-cap"
            isLastItem={index === educationData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
