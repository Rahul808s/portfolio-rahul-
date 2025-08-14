import { SkillPill } from "./SkillPill"
import { Barcode } from "./Barcode"

export const SkillsSection = () => {
  const skillCategories = {
    "LANGUAGES": ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
    "FRAMEWORKS": ["React", "Next.js", "Express", "Node.js", "Tailwind CSS", "Bootstrap"],
    "TOOLS": ["Git", "VS Code", "Postman", "Figma", "Docker", "Webpack"],
    "CLOUD": ["AWS", "Vercel", "Netlify", "MongoDB Atlas", "Firebase", "Heroku"]
  }

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="heading-cyberpunk text-4xl md:text-5xl text-center mb-16 text-neon">
          TECHNICAL SKILLS
        </h2>
        
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={category} className="relative">
              {/* Barcode between categories */}
              {index > 0 && (
                <Barcode className="mx-auto mb-8 opacity-30" bars={25} />
              )}
              
              <h3 className="text-neon font-bebas text-2xl tracking-wider mb-6 text-center">
                {category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}