import ProgressBar from "../ProgressBar";
import { programmingSkills, osSkills, skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mb-16 bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-800">Technical Skills</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Programming Skills */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-primary mb-4">Programming</h3>
          <div className="space-y-4">
            {programmingSkills.map((skill, index) => (
              <ProgressBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </div>
        
        {/* Operating Systems Skills */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-primary mb-4">Operating Systems</h3>
          <div className="space-y-4">
            {osSkills.map((skill, index) => (
              <ProgressBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </div>
        
        {/* Other Skill Categories */}
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">{category.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
