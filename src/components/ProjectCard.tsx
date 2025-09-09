import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { CyberpunkButton } from "./ui/cyberpunk-button"
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
      className="group relative flex flex-col items-center justify-between bg-card border border-muted rounded-full p-12 w-[600px] h-[600px] text-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Barcode in corner */}
      <Barcode className="absolute top-6 right-6 opacity-50" bars={8} />

      {/* Project Image */}
      <div className="relative w-52 h-52 mb-8 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-full  object-cover  transition-all duration-300 "
        />
      </div>

      {/* Project Info */}
      <h3 className="heading-cyberpunk text-3xl mb-3">{title}</h3>
      <p className="text-muted-foreground text-base mb-6 px-6 line-clamp-4">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 max-w-[85%]">
        {technologies.slice(0, 8).map((tech) => (
          <span
            key={tech}
            className="text-sm px-4 py-1.5  text-[#11ff58] border border-neon-green/30 font-mono rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <CyberpunkButton variant="outline" size="lg" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-full ">
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        </CyberpunkButton>
        <CyberpunkButton variant="ghost" size="lg" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </CyberpunkButton>
      </div>
    </div>
  )
}
