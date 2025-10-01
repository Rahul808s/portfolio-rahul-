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
            <span className="inline-block rounded-full bg-[#11ff58] border-[2px]  px-4 py-1 text-xl font-mono text-black">
              Hello There!
            </span>

           <h1 className="heading-cyberpunk text-[#11ff58] font-bold font-sinostone text-8xl md:text-10xl lg:text-7xl  space-y-2">
  <div>I'm Rahul Dhote</div>
  <div>Junior Developer</div>
  <div>Based in Indore</div>
</h1>




            
            <p className="text-muted-foreground text-lg max-w-md font-mono mx-auto lg:mx-0">
              Building the future one line of code at a time. Specializing in full-stack web
              applications with modern technologies.
            </p>

            <div className="flex gap-4 flex-wrap justify-center lg:justify-start rounded-full">
              <CyberpunkButton
                className="rounded-full hover:text-black"
                variant="outline" size="lg" dataText="VIEW MY WORK">
                VIEW MY WORK
              </CyberpunkButton>
              <CyberpunkButton
              className="rounded-full bg-[#11ff58]"
              variant="hero" size="lg" dataText="LET'S BUILD SOMETHING">
                LET'S BUILD SOMETHING
              </CyberpunkButton>
            </div>
          </div>

          {/* Right Div - Profile Image with Background Circle + Badge */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Neon Circle Background */}
              <div className="absolute -top-6 -right-6 w-96 h-96 rounded-full bg-neon-green/30 blur-2xl " />

              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Rahul Dhote"
                className="relative w-100 h-100 rounded-full object-cover grayscale   z-10"
              />

              {/* Hire Me Badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-10 flex items-center justify-center rounded-full border-none bg-[#11ff58] border-black text-black font-bold z-20 animate-spin-slow">
                HIRE ME
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
