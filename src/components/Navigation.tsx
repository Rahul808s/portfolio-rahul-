import { Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { CyberpunkButton } from "./ui/cyberpunk-button"

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center">
              <span className="text-black font-blisey font-bold text-xl">R</span>
            </div>
          </div>
          
          {/* Social Icons - Center */}
          <div className="flex items-center space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          {/* Right Side - Let's Talk & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <CyberpunkButton variant="hero" size="sm">
              Let's Talk
            </CyberpunkButton>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}