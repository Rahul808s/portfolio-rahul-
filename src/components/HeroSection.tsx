import { CyberpunkButton } from "./ui/cyberpunk-button"
import { Barcode } from "./Barcode"
import { ThemeToggle } from "./ThemeToggle"
import { Navigation } from "./Navigation"
import profileImage from "@/assets/rahul-profile.jpg"

export const HeroSection = () => {
  return (
    <>
      <Navigation />
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines pt-16">
        <ThemeToggle />
        
        {/* Background elements */}
        <Barcode className="absolute top-10 right-24 opacity-30 animate-float" bars={15} />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-slide-up">
          <h1 className="heading-cyberpunk  text-6xl md:text-8xl font-fsmile lg:text-9xl leading-none text-foreground">
            RAHUL<br />DHOTE
          </h1>
          
          <h2 className="text-gradient-neon text-2xl md:text-3xl font-bebas tracking-wider animate-neon-pulse">
            MERN STACK DEVELOPER
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-md font-mono">
            Building the future one line of code at a time. Specializing in full-stack web applications with modern technologies.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <CyberpunkButton 
              variant="outline" 
              size="lg"
              dataText="VIEW MY WORK"
            >
              VIEW MY WORK
            </CyberpunkButton>
            <CyberpunkButton 
              variant="hero" 
              size="lg"
              dataText="LET'S BUILD SOMETHING"
            >
              LET'S BUILD SOMETHING
            </CyberpunkButton>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Rahul Dhote" 
              className="w-80 h-80  object-cover grayscale border-4 border-neon-green glow-neon-strong animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neon-green/20"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}