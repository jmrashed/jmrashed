const Skills = () => {
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Laravel', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MySQL', level: 85 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 90 },
    { name: 'CI/CD', level: 80 },
    { name: 'Kubernetes', level: 65 },
    { name: 'Jenkins', level: 70 },
    { name: 'Linux', level: 85 },
  ];

  const pmSkills = [
    { name: 'Agile', level: 95 },
    { name: 'Scrum', level: 90 },
    { name: 'Kanban', level: 85 },
    { name: 'Jira', level: 90 },
    { name: 'Trello', level: 80 },
    { name: 'Asana', level: 75 },
    { name: 'Project Planning', level: 95 },
    { name: 'Risk Management', level: 85 },
    { name: 'Team Leadership', level: 90 },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        <p className="text-lg">Technical and Project Management expertise</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Project Management Skills</h3>
          {pmSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;