import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Technical Director',
      company: 'SDT LTD',
      duration: 'March 2025 – Present',
      contributions: [
        'Driving technical strategy aligned with business growth across SaaS and AI-powered product lines',
        'Architecting scalable, secure, enterprise-grade system infrastructure',
        'Leading high-performing engineering teams through mentorship and hands-on technical guidance',
        'Collaborating directly with clients and stakeholders to translate business needs into technical deliverables',
      ],
    },
    {
      role: 'Tech Lead Officer',
      company: 'Onest Tech LLC',
      duration: 'September 2022 – February 2025',
      contributions: [
        'Directed 36 engineers across concurrent projects, achieving a 98% client satisfaction rate',
        'Designed 4 complex software systems, reducing downtime by 35% and increasing scalability by 15%',
        'Improved application performance by 10% through architectural refactoring and code optimization',
        'Deployed CI/CD pipelines and Docker containerization, cutting deployment time by 10%',
        'Implemented Agile methodologies, increasing project delivery speed and team productivity',
        'Coached and upskilled 40+ developers, raising overall code quality and engineering standards',
      ],
    },
    {
      role: 'Project Manager',
      company: 'Onest Tech LLC',
      duration: 'February 2021 – August 2022',
      contributions: [
        'Managed 15+ concurrent projects with a 95% on-time delivery rate',
        'Maintained relationships with 100+ clients, consistently delivering high-satisfaction outcomes',
        'Reduced project delivery cycle by 20% through Agile/Scrum process improvements',
        'Allocated technical resources strategically to maximize project efficiency and ROI',
      ],
    },
    {
      role: 'Project Manager',
      company: 'Spondon IT',
      duration: 'November 2018 – January 2021',
      contributions: [
        'Defined project scope and deliverables using PHP, Node.js, and Python technology stacks',
        'Implemented infrastructure-as-code practices using AWS, Docker, and CI/CD pipelines',
        'Deployed monitoring solutions, improving system reliability by 25%',
        'Facilitated cross-functional collaboration between development and operations teams',
        'Supervised UI/UX improvements, increasing user satisfaction scores by 30%',
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">My career journey and key achievements</p>
      </div>
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className={`mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline dot */}
            <div className="md:w-1/2 flex justify-center md:justify-end pr-8 md:pr-12">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
            </div>
            
            {/* Content card */}
            <div className="md:w-1/2 px-4 md:px-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-blue-600 mr-3 text-xl" />
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                </div>
                <p className="text-blue-600 font-semibold text-lg mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.contributions.map((contrib, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;