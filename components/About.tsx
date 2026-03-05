const About = () => {
  const skills = [
    "Next.js", "React", "Tailwind CSS", "TypeScript", 
    "Kotlin", "Android Development", "Supabase",
    "Networking (Cisco)", "Git/GitHub"
  ];

  return (
    <section id="about" className="py-20 bg-card-bg/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="text-accent">01.</span> About Me
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I am an Informatics student with a strong interest in software development, 
                web technologies, and networking.
              </p>
              <p>
                My journey in technology is driven by a passion for building practical systems 
                that solve real-world problems. I enjoy the process of continuous learning 
                and improving my technical skills to stay ahead in the fast-evolving digital landscape.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 font-mono">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-accent hover:border-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
