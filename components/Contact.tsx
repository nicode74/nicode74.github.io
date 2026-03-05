const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-accent">03.</span> Get In Touch
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
          I&apos;m always open to new opportunities, collaborations, or just a friendly hello. 
          Feel free to reach out to me!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:contact@nicode.dev" 
            className="flex items-center gap-3 px-6 py-3 bg-card-bg border border-border rounded-xl hover:border-accent transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent group-hover:scale-110 transition-transform"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Email Me</span>
          </a>
          <a 
            href="https://github.com/nicode74" 
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 bg-card-bg border border-border rounded-xl hover:border-accent transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent group-hover:scale-110 transition-transform"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto p-1 bg-linear-to-r from-accent/20 to-transparent rounded-2xl">
          <div className="bg-background rounded-2xl p-10 border border-border">
            <h3 className="text-xl font-bold mb-2">Let&apos;s build something together</h3>
            <p className="text-gray-500 mb-8">What&apos;s next on your roadmap?</p>
            <a 
              href="mailto:contact@nicode.dev"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-background font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              Start a Conversation 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
