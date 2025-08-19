import { SkillPill } from "./SkillPill"
import { Barcode } from "./Barcode"
import workingImage from "@/assets/working-laptop.jpg"

export const AboutSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", 
    "MongoDB", "MySQL", "Git", "AWS", "Docker", "Next.js", "Tailwind CSS"
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="heading-cyberpunk font-blisey text-4xl md:text-5xl text-[#11ff58]">
              WHO AM I
            </h2>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-foreground text-lg leading-relaxed font-mono">
                I'm a passionate MERN stack developer with 2+ years of experience building 
                modern web applications. I love creating efficient, scalable solutions that 
                solve real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed font-mono">
                Currently working as a Junior Developer, I've contributed to various projects 
                ranging from e-commerce platforms to data visualization dashboards. My goal is 
                to continuously learn and push the boundaries of what's possible with code.
              </p>
            </div>
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-[#11ff58] font-blisey text-xl tracking-wider">SKILLS</h3>
              <div className="flex flex-wrap gap-3  ">
                {skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <Barcode className="absolute -top-4 -right-4 opacity-30" bars={12} />
            <div className="relative">
              <img 
                src={workingImage} 
                alt="Rahul working at laptop" 
                className="w-full h-96 object-cover grayscale border-2 border-neon-green/50"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/10 via-transparent to-transparent"></div>
              {/* Tape effect */}
              <div className="absolute top-4 left-4 w-16 h-8 bg-neon-green/20 border border-neon-green/40 rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}