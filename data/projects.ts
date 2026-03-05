export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Church Website System",
    slug: "church-website",
    description: "A modern website system for church information and content management.",
    longDescription: "A comprehensive web solution designed to help churches manage their digital presence, share sermon recordings, and keep the congregation informed about events.",
    problem: "Many small to medium-sized churches struggle with outdated websites that are difficult to update and lack modern features like mobile responsiveness or integrated media players.",
    solution: "I built a responsive Next.js application with a Supabase backend, allowing for easy content management and a premium user experience for both visitors and administrators.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    github: "https://github.com/nicode74",
    link: "https://example.com"
  },
  {
    id: "2",
    title: "Android Application",
    slug: "android-app",
    description: "Mobile application developed during the Bangkit Android learning program.",
    longDescription: "A feature-rich Android application built with modern development practices, focusing on performance, accessibility, and high-quality UI/UX.",
    problem: "Creating a seamless mobile experience requires deep knowledge of both the Android ecosystem and user behavior patterns.",
    solution: "Developed using Kotlin and Jetpack Compose, this app demonstrates effective use of architectural patterns like MVVM and integration with cloud services.",
    tech: ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    github: "https://github.com/nicode74"
  },
  {
    id: "3",
    title: "Networking Labs",
    slug: "networking-labs",
    description: "Collection of networking experiments and configurations using Cisco Packet Tracer.",
    longDescription: "A series of documented networking projects showcasing advanced configurations for enterprise-level network infrastructures.",
    problem: "Complex network environments require robust security and efficient resource allocation to prevent unauthorized access and performance bottlenecks.",
    solution: "Implemented various network protocols and security measures including DHCP for automated IP management and ACLs for granular access control.",
    tech: ["Cisco Packet Tracer", "Networking", "ACL", "DHCP"],
    github: "https://github.com/nicode74"
  }
];
