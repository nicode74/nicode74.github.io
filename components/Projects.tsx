const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Church Website System",
      description: "A modern website system for church information and content management, featuring dynamic updates and user-friendly interface.",
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      github: "https://github.com/nicode74",
      link: "#"
    },
    {
      id: 2,
      title: "Android Application",
      description: "A mobile application developed during the Bangkit Android learning program, focusing on performance and material design.",
      tech: ["Kotlin", "Android Development", "Firebase"],
      github: "https://github.com/nicode74",
      link: "#"
    },
    {
      id: 3,
      title: "Networking Labs",
      description: "Collection of networking experiments and configurations including DHCP, ACLs, and Wireless Networking setups.",
      tech: ["Cisco Packet Tracer", "Networking", "ACL"],
      github: "https://github.com/nicode74",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-accent">02.</span> Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-card-bg border border-border rounded-2xl p-6 hover:border-accent/50 transition-all hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-background rounded-xl border border-border group-hover:border-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-accent transition-colors" aria-label="GitHub Repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.link} className="text-gray-400 hover:text-accent transition-colors" aria-label="Live Demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase font-bold tracking-widest text-accent/70 px-2 py-1 bg-accent/5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
