import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

// Required for static site generation in app router
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-accent mb-12 transition-colors group animate-fade-in"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Projects
          </Link>

          <header className="mb-16 animate-fade-in delay-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                  {t}
                </span>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2 space-y-12 animate-slide-left delay-200">
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full"></span>
                  Overview
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-500/80">
                    <span className="w-1 h-6 bg-red-500/80 rounded-full"></span>
                    Problem
                  </h2>
                  <p className="text-gray-400">
                    {project.problem}
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-500/80">
                    <span className="w-1 h-6 bg-green-500/80 rounded-full"></span>
                    Solution
                  </h2>
                  <p className="text-gray-400">
                    {project.solution}
                  </p>
                </section>
              </div>
            </div>

            <aside className="space-y-8 animate-slide-right delay-200">
              <div className="bg-card-bg border border-border rounded-3xl p-8 sticky top-32">
                <h3 className="font-bold mb-6">Links</h3>
                <div className="space-y-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="flex items-center justify-center gap-3 w-full py-4 bg-foreground text-background font-bold rounded-2xl hover:opacity-90 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Source Code
                  </a>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="flex items-center justify-center gap-3 w-full py-4 bg-accent text-background font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
