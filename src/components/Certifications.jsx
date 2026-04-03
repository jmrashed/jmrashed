const Certifications = () => {
  const certifications = [
    {
      name: 'Building Database Applications in PHP',
      issuer: 'University of Michigan (Coursera)',
      year: '2016',
    },
    {
      name: 'Web Development & Coding Specialization',
      issuer: 'University of Michigan (Coursera)',
      year: '2017',
    },
    {
      name: 'Project Management',
      issuer: 'Rice University (Coursera)',
      year: '2017',
    },
  ];

  return (
    <section id="certifications" className="section bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-lg">Professional certifications and courses</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
            <p className="text-blue-600 mb-2">{cert.issuer}</p>
            <p className="text-gray-600 dark:text-gray-300">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;