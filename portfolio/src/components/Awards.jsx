const Awards = () => {
  const awards = [
    {
      name: 'Innovator of the Year',
      issuer: 'Onest Tech LLC',
      year: '2022',
    },
    {
      name: 'Employee of the Year',
      issuer: 'United Group',
      year: '2017',
    },
  ];

  return (
    <section id="awards" className="section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
        <p className="text-lg">Achievements and honors</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">{award.name}</h3>
            <p className="text-blue-600 mb-2">{award.issuer}</p>
            <p className="text-gray-600 dark:text-gray-300">{award.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;