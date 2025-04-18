interface TimelineItemProps {
  title: string;
  organization: string;
  location: string;
  period: string;
  responsibilities?: string[];
  description?: string;
  additionalInfo?: string;
  icon: string;
  isLastItem?: boolean;
}

export default function TimelineItem({
  title,
  organization,
  location,
  period,
  responsibilities,
  description,
  additionalInfo,
  icon,
  isLastItem = false
}: TimelineItemProps) {
  return (
    <div className={`timeline-item pl-10 ${isLastItem ? '' : 'pb-8'}`}>
      <div className="timeline-badge absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <i className={`${icon} text-white`}></i>
      </div>
      <div>
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-semibold text-gray-800">{title}</h3>
          <span className="inline-block bg-primary/10 text-primary-800 rounded-full px-3 py-1 text-sm font-semibold mt-1 md:mt-0">
            {period}
          </span>
        </div>
        <div className="text-primary font-medium mb-3">{organization}, {location}</div>
        
        {responsibilities && (
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {description && (
          <p className="text-gray-700 mb-2">{description}</p>
        )}
        
        {additionalInfo && (
          <p className="text-gray-700 italic">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
}
