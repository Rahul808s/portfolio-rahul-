import { Github, Linkedin, Mail } from "lucide-react"

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@oliver.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}