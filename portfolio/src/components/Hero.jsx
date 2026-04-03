const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-600">Rashed Zaman</span></h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">Technical Director & Tech Lead</p>
        <p className="text-lg mb-8 max-w-2xl">
          With 10+ years of experience in architecting scalable enterprise systems, leading distributed teams, and driving digital transformation through innovative technologies.
        </p>
        <div className="space-x-4">
          <button onClick={() => scrollToSection('contact')} className="btn">Contact Me</button>
          <button onClick={() => scrollToSection('projects')} className="btn bg-gray-600 hover:bg-gray-700">View Projects</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg overflow-hidden">
          <img 
            src="https://via.placeholder.com/256x256?text=Profile+Photo" 
            alt="Rashed Zaman" 
            className="w-full h-full object-cover rounded-full" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;