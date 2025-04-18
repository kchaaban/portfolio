interface ProgressBarProps {
  skill: string;
  percentage: number;
}

export default function ProgressBar({ skill, percentage }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full progress-bar" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
