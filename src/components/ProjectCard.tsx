import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { CyberpunkButton } from "./ui/cyberpunk-button"
import { SkillPill } from "./SkillPill"
import { Barcode } from "./Barcode"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

export const ProjectCard = ({ title, description, image, technologies, demoUrl, githubUrl }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative bg-card border border-muted p-6 transition-all duration-300 hover:border-neon-green hover:glow-neon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Barcode in corner */}
      <Barcode className="absolute top-2 right-2 opacity-50" bars={8} />
      
      {/* Project Image */}
      <div className="relative mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover grayscale transition-all duration-300"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-neon-green/20 flex items-center justify-center">
            <span className="text-[#11ff58]-green font-bebas text-xl">VIEW PROJECT</span>
          </div>
        )}
      </div>
      
      {/* Project Info */}
      <h3 className="heading-cyberpunk text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="text-xs px-2 py-1 bg-neon-green/10 text-[#11ff58]-green border border-neon-green/30 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        <CyberpunkButton variant="outline" size="sm" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </a>
        </CyberpunkButton>
        <CyberpunkButton variant="ghost" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </a>
        </CyberpunkButton>
      </div>
    </div>
  )
}