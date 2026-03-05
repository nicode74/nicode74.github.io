import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card-bg border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-accent">
            NiCODE
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="https://github.com/nicode74" className="hover:text-accent transition-colors" target="_blank">GitHub</Link>
            <Link href="mailto:contact@nicode.dev" className="hover:text-accent transition-colors">Email</Link>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} NiCODE. Built with Next.js & Tailwind.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
