import { useState } from "react"
import { Copy, Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react"
import { CyberpunkButton } from "./ui/cyberpunk-button"
import { Barcode } from "./Barcode"

export const ContactSection = () => {
  const [copied, setCopied] = useState(false)
  const email = "rahuldhote79123@email.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/rahuldhote", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rahuldhote", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" }
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 text-center">
        <Barcode className="mx-auto mb-8 opacity-30" bars={30} />
        
        <h2 className="heading-cyberpunk text-4xl md:text-6xl mb-8 text-primary">
          LET'S CONNECT
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Email */}
          <div className="space-y-4">
            <button
              onClick={handleCopyEmail}
              className="group flex items-center justify-center gap-3 mx-auto text-2xl md:text-3xl font-bebas tracking-wider text-primary hover:text-white transition-colors"
            >
              <Mail className="w-8 h-8" />
              {email}
              <Copy className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            {copied && (
              <p className="text-primary text-sm font-mono animate-slide-up">
                Email copied to clipboard!
              </p>
            )}
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 border-2 border-neon-green bg-transparent flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:glow-neon group"
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-primary font-bebas text-xl tracking-wider mb-6">
              SEND A MESSAGE
            </h3>
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-muted text-white placeholder-muted-foreground px-4 py-3 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors font-mono"
            />
            
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-muted text-white placeholder-muted-foreground px-4 py-3 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors font-mono"
            />
            
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-transparent border border-muted text-white placeholder-muted-foreground px-4 py-3 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors font-mono resize-none"
            />
            
            <CyberpunkButton variant="hero" className="w-full">
              SEND MESSAGE
            </CyberpunkButton>
          </div>
        </div>
      </div>
    </section>
  )
}