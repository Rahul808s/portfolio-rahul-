import { SkillPill } from "./SkillPill"
import { Barcode } from "./Barcode"

export const SkillsSection = () => {
  const skillCategories = {
    "LANGUAGES": [
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" }
    ],
    "FRAMEWORKS": [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Express", icon: "🚀" },
      { name: "Node.js", icon: "💚" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Bootstrap", icon: "📱" }
    ],
    "TOOLS": [
      { name: "Git", icon: "🔧" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎯" },
      { name: "Docker", icon: "🐳" },
      { name: "Webpack", icon: "📦" }
    ],
    "CLOUD": [
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Netlify", icon: "🌐" },
      { name: "MongoDB Atlas", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
      { name: "Heroku", icon: "🟣" }
    ]
  }

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="heading-cyberpunk font-blisey text-4xl md:text-5xl text-center mb-16 text-neon">
          TECHNICAL SKILLS
        </h2>
        
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={category} className="relative">
              {/* Barcode between categories */}
              {index > 0 && (
                <Barcode className="mx-auto mb-8 opacity-30" bars={25} />
              )}
              
              <h3 className="text-neon font-blisey text-2xl tracking-wider mb-6 text-center">
                {category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <SkillPill key={skill.name} className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </SkillPill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}