import { FaReact, FaNodeJs, FaLaravel, FaPython, FaDatabase, FaAws } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaDatabase />, name: 'MySQL' },
    { icon: <FaAws />, name: 'AWS' },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Results-driven Technical Director and Tech Lead with 10+ years of experience architecting scalable enterprise systems and leading high-performing distributed teams. Proven track record managing $2M+ budgets, leading teams of 40+ developers, and delivering 35% performance improvements across mission-critical platforms.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-center hover:scale-110 transition-transform duration-300">
            <div className="text-4xl text-blue-600 mb-2">{skill.icon}</div>
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;