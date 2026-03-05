import Link from "next/link";
import { projects } from "@/data/projects";
import Hero from "@/components/Hero";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const skills = ["Next.js", "React", "TypeScript", "Kotlin", "Supabase"];

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      {/* Highlights Section */}
      <section className="py-24 bg-card-bg/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 animate-slide-left">
              <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
                Highlights
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
                Bridging ideas and implementations.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I specialize in building end-to-end digital solutions that focus on performance 
                and polished user experiences. My approach combines technical rigor with 
                minimalist design philosophy.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
              >
                Read full profile
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 animate-slide-right">
              {skills.map((skill) => (
                <div key={skill} className="px-6 py-8 bg-background border border-border rounded-2xl flex flex-col justify-between group hover:border-accent transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <span className="text-white font-bold">{skill}</span>
                </div>
              ))}
              <div className="px-6 py-8 bg-accent/5 border border-accent/20 rounded-2xl flex items-center justify-center">
                <span className="text-accent text-sm font-bold uppercase tracking-widest">More...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                Featured <span className="text-accent">Projects</span>
              </h2>
              <p className="text-gray-500 max-w-md">
                A selection of systems I&apos;ve built that showcase my current technical focus.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="hidden md:flex px-8 py-3 border border-border rounded-full hover:bg-white/5 transition-all text-sm font-bold"
            >
              All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className={`group relative h-[400px] overflow-hidden rounded-[2.5rem] border border-border animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/60 to-background z-10"></div>
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transition-transform group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] uppercase font-bold tracking-widest text-accent/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex md:hidden justify-center">
            <Link 
              href="/projects" 
              className="px-10 py-4 bg-card-bg border border-border rounded-full font-bold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 px-6 animate-fade-in">
        <div className="container mx-auto max-w-5xl bg-accent p-12 md:p-20 rounded-[3.5rem] text-background text-center flex flex-col items-center shadow-[0_40px_100px_-20px_rgba(6,182,212,0.3)]">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9] animate-fade-in-delayed">
            READY TO START A NEW PROJECT?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-long">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-background text-foreground font-black rounded-full hover:scale-105 transition-transform uppercase tracking-tighter"
            >
              Let&apos;s talk
            </Link>
            <a 
              href="https://github.com/nicode74" 
              className="px-10 py-5 bg-background/20 text-background border-2 border-background/30 font-black rounded-full hover:bg-background hover:text-foreground transition-all uppercase tracking-tighter"
            >
              GitHub profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}