import { ProjectCard } from "./ProjectCard"

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-COMMERCE PLATFORM",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TASK MANAGEMENT APP",
      description: "Collaborative task management tool with real-time updates, file sharing, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "Express", "Socket.io", "MySQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "DATA VISUALIZATION DASHBOARD",
      description: "Interactive dashboard for data analytics with charts, filters, and real-time data processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SOCIAL MEDIA API",
      description: "RESTful API for social media platform with authentication, posts, comments, and user management.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop&auto=format",
      technologies: ["Node.js", "Express", "JWT", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "WEATHER FORECAST APP",
      description: "Real-time weather application with location-based forecasts, alerts, and beautiful UI animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "OpenWeather API", "CSS3", "PWA"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "BLOG CMS",
      description: "Content management system for blogs with markdown support, SEO optimization, and admin panel.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&auto=format",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="heading-cyberpunk font-blisey text-4xl md:text-5xl text-center mb-12 text-[#11ff58]">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              {...project} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}