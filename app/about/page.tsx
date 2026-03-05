import { projects } from "@/data/projects";

const About = () => {
  const skills = [
    "Next.js", "React", "Tailwind CSS", "TypeScript", 
    "Kotlin", "Android Development", "Supabase",
    "Networking (Cisco)", "Git/GitHub"
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">
            About <span className="text-accent">Me</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-card-bg border border-border rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm font-mono">01</span>
                  Introduction
                </h2>
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                  <p>
                    I am an Informatics student with a strong interest in software development, 
                    web technologies, and networking. I enjoy building practical systems 
                    and continuously improving my technical skills.
                  </p>
                  <p>
                    My background spans across web modernization and mobile development, 
                    always striving for clean code and exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="bg-card-bg border border-border rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm font-mono">02</span>
                  Learning Journey
                </h2>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <div className="border-l-2 border-accent/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7.5px] top-1"></div>
                    <h3 className="text-white font-bold">Bangkit Academy</h3>
                    <p className="text-sm text-accent mb-2">Android Development Path</p>
                    <p>Deepened my expertise in native Android development using Kotlin and modern libraries.</p>
                  </div>
                  <div className="border-l-2 border-accent/20 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-accent/50 rounded-full -left-[7.5px] top-1"></div>
                    <h3 className="text-white font-bold">Informatics Studies</h3>
                    <p className="text-sm text-accent mb-2">Ongoing</p>
                    <p>Building a strong foundation in computer science, algorithms, and networking.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card-bg border border-border rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm font-mono">03</span>
                  Skills & Tools
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-transparent border border-accent/20 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4 text-accent">Goals</h2>
                <p className="text-gray-400 leading-relaxed">
                  My aim is to become a versatile full-stack engineer who can bridge the gap 
                  between complex backend systems and intuitive frontend interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
