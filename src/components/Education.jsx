const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Stamford University Bangladesh',
      duration: 'April 2012 – April 2016',
      details: 'CGPA: 3.73 / 4.0',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-lg">My academic background</p>
      </div>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
            <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.duration}</p>
            <p className="text-sm">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;