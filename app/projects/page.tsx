import Link from "next/link";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter animate-fade-in">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl animate-fade-in delay-200">
            A showcase of my work in software development, including web applications, 
            mobile apps, and networking configurations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className="group bg-card-bg border border-border rounded-3xl p-8 hover:border-accent/40 transition-all hover:-translate-y-2 flex flex-col h-full animate-scale-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-background rounded-2xl border border-border group-hover:border-accent flex items-center justify-center text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <div className="text-gray-500 group-hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase font-bold tracking-widest text-accent/70 px-3 py-1 bg-accent/5 rounded-full border border-accent/10">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
