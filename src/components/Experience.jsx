import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
const experiences = [
    {
      role: 'Technical Director',
      company: 'SDT LTD',
      duration: 'March 2025 - Present | Hybrid - Dhaka, Bangladesh',
      contributions: [
        'Driving technical strategy and aligning engineering with business growth goals',
        'Leading SaaS and AI-powered product development across multiple domains',
        'Designing scalable, secure system architectures for enterprise-grade platforms',
        'Guiding high-performing teams through mentorship and technical leadership',
        'Collaborating with clients and stakeholders to deliver impactful solutions'
      ],
    },
    {
      role: 'Tech Lead Officer',
      company: 'Onest Tech LLC',
      duration: 'September 2022 - February 2025 | Remote - Texas Dr, Sugar Land, Texas 77479, USA',
      contributions: [
        'Team Leadership: Successfully led 36 developers across multiple projects, achieving 98% client satisfaction rate',
        'Performance Optimization: Improved application performance by 10% through architectural improvements and code optimization',
        'System Architecture: Designed 4 complex software systems, reducing downtime by 35% and increasing scalability by 15%',
        'DevOps Implementation: Deployed CI/CD pipelines and Docker, reducing deployment time by 10% and post-deployment issues',
        'Process Improvement: Implemented Agile methodologies, improving project delivery time and team productivity',
        'Mentoring: Mentored 40+ developers, significantly improving code quality and technical skills across the team'
      ],
    },
    {
      role: 'Project Manager',
      company: 'Onest Tech LLC',
      duration: 'February 2021 - August 2022 | Hybrid - H-148,R-13/B, Banani, Bangladesh',
      contributions: [
        'Project Delivery: Managed 15+ concurrent projects with 95% on-time delivery rate',
        'Stakeholder Management: Maintained relationships with 100+ clients, ensuring project success and customer satisfaction',
        'Process Optimization: Implemented Agile/Scrum methodologies, reducing project delivery time by 20%',
        'Resource Management: Effectively allocated technical resources, maximizing project efficiency and ROI',
        'Risk Management: Proactively identified and mitigated project risks, maintaining on-budget delivery'
      ],
    },
    {
      role: 'Project Manager',
      company: 'Spondon IT',
      duration: 'Nov 2018 - Jan 2021 | Onsite - Panthapath, Dhaka, Bangladesh',
      contributions: [
        'Project Scope Management: Defined project objectives and deliverables using modern tech stack (PHP, Node.js, Python)',
        'Infrastructure Management: Implemented infrastructure-as-code practices using AWS, Docker, and CI/CD pipelines',
        'Performance Monitoring: Deployed robust monitoring solutions, improving system reliability by 25%',
        'Team Collaboration: Facilitated seamless collaboration between development and operations teams',
        'UI/UX Improvement: Supervised creation of user-friendly interfaces, increasing user satisfaction by 30%'
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Boishakhi Media Limited',
      duration: 'July 2017 - Oct 2018 | Dhaka, Bangladesh',
      contributions: [
        'Full-Stack Development: Led development using PHP (Laravel, CodeIgniter) and JavaScript frameworks',
        'Database Optimization: Managed and optimized MySQL and NoSQL databases for improved performance',
        'API Development: Designed and implemented RESTful APIs and GraphQL endpoints for seamless data communication',
        'UI/UX Design: Created visually appealing interfaces using modern CSS frameworks and design principles',
        'System Scaling: Architected scalable systems handling increased user loads through optimization strategies'
      ],
    },
    {
      role: 'Software Engineer',
      company: 'United Group',
      duration: 'January 2016 - June 2017 | Dhaka, Bangladesh',
      contributions: [
        'Recognition: Awarded "Employee of the Year 2017" for outstanding performance',
        'Full-Stack Development: Led end-to-end software development from database design to UI implementation',
        'API Integration: Developed and maintained RESTful APIs for front-end and back-end communication',
        'User Experience: Enhanced web application interactivity using JavaScript and jQuery'
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'IWFM, BUET',
      duration: 'January 2015 - December 2015 | Dhaka, Bangladesh',
      contributions: [
        'Learning & Growth: Gained hands-on experience in web development and database management',
        'WordPress Development: Customized themes and plugins for client requirements',
        'Documentation: Created comprehensive technical documentation for knowledge sharing'
      ],
    }
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