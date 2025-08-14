import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { CyberpunkButton } from "./ui/cyberpunk-button"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: "HOME", id: "hero" },
    { label: "SERVICES", id: "about" },
    { label: "PROJECTS", id: "projects" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "ABOUT ME", id: "about" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-neon font-bebas text-xl tracking-wider">
            RAHUL DHOTE
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-neon transition-colors font-mono text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side - Social + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@oliver.com" className="text-muted-foreground hover:text-neon transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <CyberpunkButton variant="hero" size="sm">
              LET'S TALK
            </CyberpunkButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-muted-foreground hover:text-neon transition-colors font-mono"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <CyberpunkButton variant="hero" className="w-full">
                  LET'S TALK
                </CyberpunkButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}