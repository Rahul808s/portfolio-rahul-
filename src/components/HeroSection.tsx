import { CyberpunkButton } from "./ui/cyberpunk-button"
import { Barcode } from "./Barcode"
import { Navigation } from "./Navigation"
import profileImage from "@/assets/rahul-profile.jpg"

export const HeroSection = () => {
  return (
    <>
      <Navigation />
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden scanlines pt-16"
      >
        {/* Background elements */}
        <Barcode className="absolute top-10 right-24 opacity-30 animate-float" bars={15} />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Div - Text Content */}
          <div className="space-y-6 animate-slide-up text-center lg:text-left">
            <span className="inline-block rounded-full bg-primary border-2 border-primary px-4 py-1 text-sm font-mono text-black">
              Hello There!
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm <span className="text-primary">Rahul Dhote</span>, Product Designer based in USA.
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
              I'm an experienced Product Designer with 18+ years in the field, collaborating with various companies and startups.
            </p>

            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <CyberpunkButton
                className="rounded-full"
                variant="outline" size="lg" dataText="VIEW MY WORK">
                VIEW MY WORK
              </CyberpunkButton>
              <CyberpunkButton
                className="rounded-full"
                variant="hero" size="lg" dataText="DOWNLOAD CV">
                DOWNLOAD CV
              </CyberpunkButton>
            </div>
          </div>

          {/* Right Div - Profile Image with Background Circle + Floating Badges */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Abstract Circle Background */}
              <div className="absolute -top-6 -right-6 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Rahul Dhote - Product Designer"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover z-10"
              />

              {/* Floating Badge - UI/UX Designer */}
              <div className="absolute top-10 -left-10 px-4 py-2 rounded-full bg-primary text-black text-sm font-semibold shadow-lg z-20 animate-float">
                UI/UX Designer
              </div>

              {/* Floating Badge - Product Designer */}
              <div className="absolute top-32 -right-12 px-4 py-2 rounded-full bg-background border-2 border-primary text-primary text-sm font-semibold shadow-lg z-20 animate-float" style={{ animationDelay: '1s' }}>
                Product Designer
              </div>

              {/* Circular Hire Me Badge */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 flex items-center justify-center rounded-full bg-primary text-black font-bold text-xs z-20 animate-spin-slow">
                <span className="text-center">HIRE ME • HIRE ME • </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
