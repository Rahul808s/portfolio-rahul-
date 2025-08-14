export const ExperienceSection = () => {
  const timeline = [
    {
      type: "experience",
      title: "Junior Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Developing and maintaining web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      company: "XYZ University",
      period: "2019 - 2023",
      description: "Graduated with First Class Honours. Specialized in Software Engineering and Database Management Systems."
    },
    {
      type: "experience",
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      period: "Summer 2022",
      description: "Built responsive web interfaces using React and implemented RESTful API integrations. Gained experience in agile development methodologies."
    },
    {
      type: "education",
      title: "Full Stack Web Development",
      company: "Online Bootcamp",
      period: "2022",
      description: "Intensive 6-month program covering MERN stack, DevOps, and modern web development best practices."
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="heading-cyberpunk text-4xl md:text-5xl text-center mb-16 text-neon">
          EXPERIENCE & EDUCATION
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-neon-green opacity-50"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    {index % 2 === 0 && (
                      <div className="space-y-2">
                        <h3 className="heading-cyberpunk text-xl text-foreground">{item.title}</h3>
                        <p className="text-neon font-bebas tracking-wider">{item.company}</p>
                        <p className="text-neon text-sm font-mono">{item.period}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-green border-4 border-background rounded-full z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 1 ? 'pl-8' : 'pr-8'}`}>
                    {index % 2 === 1 && (
                      <div className="space-y-2">
                        <h3 className="heading-cyberpunk text-xl text-foreground">{item.title}</h3>
                        <p className="text-neon font-bebas tracking-wider">{item.company}</p>
                        <p className="text-neon text-sm font-mono">{item.period}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}