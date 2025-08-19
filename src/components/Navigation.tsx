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
            <div className="w-10 h-10 rounded-full bg-[#11ff58] flex items-center justify-center">
              <span className="text-black font-blisey font-bold text-xl">R</span>
            </div>
            <h1 className="uppercase font-blisey">ahul</h1>
          </div>
          
          {/* Social Icons - Center */}
          <div className="flex items-center space-x-6">
            <a href="https://github.com/Rahul808s" className="text-[#11ff58] hover:text-neon transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rahul-dhote-9b50b3261/" className="text-[#11ff58] hover:text-neon transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          {/* Right Side - Let's Talk & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <CyberpunkButton
            className="bg-[#11ff58] rounded-full"
            variant="hero" size="sm">
              Let's Talk
            </CyberpunkButton>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}