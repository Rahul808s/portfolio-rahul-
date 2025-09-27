import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"

export const ExperienceSection = () => {
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
        <h2 className="font-blisey text-4xl md:text-5xl text-center mb-16 text-foreground">
          EXPERIENCE & EDUCATION
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Simple timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px w-px h-full bg-border"></div>
            
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0
              const Icon = item.icon
              
              return (
                <div key={index} className="relative mb-12">
                  {/* Timeline node */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content card */}
                  <div className={`relative ${isLeft ? 'mr-auto pr-20' : 'ml-auto pl-20'} w-full max-w-md`}>
                    <div className={`bg-card border rounded-lg p-6 shadow-sm ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-3 ${
                        item.type === 'experience' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {item.type.toUpperCase()}
                      </div>
                      
                      <h3 className="font-blisey text-xl mb-2 text-foreground">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-primary font-medium">{item.company}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      
                      {/* Skills tags */}
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}