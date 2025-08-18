import { useState } from "react"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"

export const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const timeline = [
    {
      type: "experience",
      title: "Junior Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: "Developing and maintaining web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      icon: Briefcase
    },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      company: "XYZ University",
      location: "Mumbai, India",
      period: "2019 - 2023",
      description: "Graduated with First Class Honours. Specialized in Software Engineering and Database Management Systems.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "DBMS"],
      icon: GraduationCap
    },
    {
      type: "experience",
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Bangalore, India",
      period: "Summer 2022",
      description: "Built responsive web interfaces using React and implemented RESTful API integrations. Gained experience in agile development methodologies.",
      skills: ["React", "JavaScript", "CSS3", "REST APIs"],
      icon: Briefcase
    },
    {
      type: "education",
      title: "Full Stack Web Development",
      company: "Online Bootcamp",
      location: "Online",
      period: "2022",
      description: "Intensive 6-month program covering MERN stack, DevOps, and modern web development best practices.",
      skills: ["MERN Stack", "DevOps", "Git", "AWS"],
      icon: GraduationCap
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="heading-cyberpunk text-4xl md:text-5xl text-center mb-16 text-neon animate-neon-pulse">
          EXPERIENCE & EDUCATION
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Zigzag timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-neon-green via-neon-dim to-neon-green opacity-60 animate-pulse"></div>
            
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0
              const Icon = item.icon
              
              return (
                <div 
                  key={index} 
                  className="relative mb-16 group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Connecting line to timeline */}
                  <div className={`absolute top-8 w-16 h-0.5 bg-neon-green transition-all duration-500 ${
                    isLeft 
                      ? 'right-1/2 mr-8 group-hover:bg-gradient-to-r group-hover:from-neon-green group-hover:to-transparent' 
                      : 'left-1/2 ml-8 group-hover:bg-gradient-to-l group-hover:from-neon-green group-hover:to-transparent'
                  } ${hoveredIndex === index ? 'glow-neon' : ''}`}></div>
                  
                  {/* Timeline dot with icon */}
                  <div className={`absolute left-1/2 top-6 transform -translate-x-1/2 w-12 h-12 bg-background border-2 border-neon-green rounded-full z-20 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:border-4 ${
                    hoveredIndex === index ? 'glow-neon-strong animate-neon-pulse' : ''
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      item.type === 'experience' ? 'text-neon-green' : 'text-neon-green'
                    }`} />
                  </div>
                  
                  {/* Content card */}
                  <div className={`relative ${isLeft ? 'mr-auto pr-24' : 'ml-auto pl-24'} w-full max-w-md`}>
                    <div className={`relative bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-500 hover:border-neon-green hover:bg-card/90 group-hover:transform group-hover:scale-105 ${
                      hoveredIndex === index ? 'glow-neon border-neon-green' : ''
                    } ${isLeft ? 'text-right' : 'text-left'}`}>
                      {/* Type badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono mb-3 ${
                        item.type === 'experience' 
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' 
                          : 'bg-neon-dim/20 text-neon-dim border border-neon-dim/30'
                      }`}>
                        {item.type.toUpperCase()}
                      </div>
                      
                      <h3 className="heading-cyberpunk text-xl mb-2 text-foreground group-hover:text-neon transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-neon font-bebas tracking-wider text-lg">{item.company}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Skills tags */}
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded border border-border hover:border-neon-green transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Decorative corner */}
                      <div className={`absolute top-2 w-3 h-3 border-t-2 border-neon-green transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      } ${isLeft ? 'right-2 border-r-2' : 'left-2 border-l-2'}`}></div>
                    </div>
                  </div>
                </div>
              )
            })}
            
            {/* Timeline end marker */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}