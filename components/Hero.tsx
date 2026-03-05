"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in">
          Hello, I am
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Nicolas Tegar Nurhadi Putra
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-8 max-w-2xl mx-auto">
          Informatics Student | <span className="text-accent">Software Developer</span>
        </h3>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto italic">
          &quot;I build systems, apps, and digital experiences.&quot;
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#projects"
            className="px-8 py-3 bg-accent text-background font-bold rounded-full hover:bg-accent-muted transition-all flex items-center justify-center gap-2 group"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
