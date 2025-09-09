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
        {/* Section Heading */}
        <h2 className="heading-cyberpunk font-blisey text-5xl md:text-6xl text-center mb-16 text-[#11ff58]">
          TECHNICAL SKILLS
        </h2>
        
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={category} className="relative">
              {/* Barcode between categories */}
              {index > 0 && (
                <Barcode className="mx-auto mb-10 opacity-30" bars={25} />
              )}
              
              {/* Category Title */}
              <h3 className="text-[#11ff58] font-blisey text-3xl tracking-wider mb-8 text-center">
                {category}
              </h3>
              
              {/* Skill Pills */}
              <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill) => (
                  <SkillPill 
                    key={skill.name} 
                    className="flex items-center gap-3 px-6 py-3 text-xl font-semibold"
                  >
                    <span className="text-2xl">{skill.icon}</span>
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
