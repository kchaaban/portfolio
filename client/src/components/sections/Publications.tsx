import { publications, publicationStats, featuredPublications } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="mb-16 bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-800">Publications</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="mb-6">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {publicationStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <span className="text-gray-700 mr-2">h-index: {publications.hIndex}</span>
          <a href={publications.scholarUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">
            View on Google Scholar
            <i className="fas fa-external-link-alt ml-1"></i>
          </a>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4">Featured Publications</h3>
        
        <div className="space-y-6">
          {featuredPublications.map((pub, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-4 py-1">
              <h4 className="font-medium text-gray-800">{pub.title}</h4>
              <p className="text-gray-600 text-sm">{pub.journal}, {pub.year}</p>
              <p className="text-gray-700 mt-1">{pub.abstract}</p>
              <div className="mt-2">
                {pub.keywords.map((keyword, keywordIndex) => (
                  <span key={keywordIndex} className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <a href={publications.allPublicationsUrl} className="inline-block px-4 py-2 border border-primary text-primary rounded-md hover:bg-gray-50 transition-colors">
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
}
