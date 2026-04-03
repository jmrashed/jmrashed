const Projects = () => {
  const projects = [
    {
      title: 'HRM – Human Resource Management System',
      description: 'Scalable HR platform supporting 1,000+ employees with real-time event streaming and distributed architecture.',
      tech: ['Microservices', 'Node.js', 'Go', 'Python', 'Kafka', 'Docker', 'ELK Stack', 'Redis'],
      image: 'https://via.placeholder.com/400x250?text=HRM+System',
      github: '#',
      demo: '#',
    },
    {
      title: 'LMS – Learning Management System',
      description: 'Educational platform serving 5,000+ students with course management and progress tracking.',
      tech: ['Laravel', 'jQuery', 'Bootstrap', 'RESTful APIs'],
      image: 'https://via.placeholder.com/400x250?text=LMS+Platform',
      github: '#',
      demo: '#',
    },
    {
      title: 'Multi-Vendor E-Commerce Platform',
      description: 'Marketplace supporting 500+ vendors and 10,000+ products with real-time inventory and order management.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Laravel', 'MySQL'],
      image: 'https://via.placeholder.com/400x250?text=E-Commerce',
      github: '#',
      demo: '#',
    },
    {
      title: 'Enterprise SaaS Platform',
      description: 'Complex software system with improved performance and scalability.',
      tech: ['React', 'Node.js', 'AWS', 'Docker'],
      image: 'https://via.placeholder.com/400x250?text=SaaS+Platform',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg">Showcase of key projects I've worked on</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-500 rounded-md mb-4 flex items-center justify-center overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover rounded-md" 
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-green-500'); }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
              <a href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;