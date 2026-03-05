const ContactPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-16 leading-relaxed">
            I&apos;m currently open to new opportunities, collaborations, 
            or just a friendly chat about tech!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <a 
              href="mailto:contact@nicode.dev" 
              className="group flex flex-col items-center justify-center p-12 bg-card-bg border border-border rounded-[2.5rem] hover:border-accent transition-all animate-fade-in"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-500">contact@nicode.dev</p>
            </a>
            
            <a 
              href="https://github.com/nicode74" 
              target="_blank"
              className="group flex flex-col items-center justify-center p-12 bg-card-bg border border-border rounded-[2.5rem] hover:border-accent transition-all animate-fade-in-delayed"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">GitHub</h3>
              <p className="text-gray-500">github.com/nicode74</p>
            </a>
          </div>

          <div className="p-1.5 bg-linear-to-r from-accent/30 to-border rounded-[3rem]">
            <div className="bg-background rounded-[2.8rem] py-16 px-10 border border-border">
              <h2 className="text-3xl font-bold mb-6">Let&apos;s build something meaningful</h2>
              <a 
                href="mailto:contact@nicode.dev"
                className="inline-flex items-center gap-3 px-12 py-5 bg-accent text-background font-bold rounded-full hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all text-lg"
              >
                Start a Conversation
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
