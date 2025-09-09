import { useState } from "react"
import { GraduationCap, Briefcase } from "lucide-react"

export const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const timeline = [
    {
      type: "experience",
      title: "Junior Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Developing and maintaining web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      icon: Briefcase,
    },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      company: "XYZ University",
      location: "Mumbai, India",
      period: "2019 - 2023",
      description:
        "Graduated with First Class Honours. Specialized in Software Engineering and Database Management Systems.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "DBMS"],
      icon: GraduationCap,
    },
    {
      type: "experience",
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Bangalore, India",
      period: "Summer 2022",
      description:
        "Built responsive web interfaces using React and implemented RESTful API integrations. Gained experience in agile development methodologies.",
      skills: ["React", "JavaScript", "CSS3", "REST APIs"],
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Full Stack Web Development",
      company: "Online Bootcamp",
      location: "Online",
      period: "2022",
      description:
        "Intensive 6-month program covering MERN stack, DevOps, and modern web development best practices.",
      skills: ["MERN Stack", "DevOps", "Git", "AWS"],
      icon: GraduationCap,
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="heading-cyberpunk font-blisey text-5xl md:text-6xl text-center mb-20 text-[#11ff58]">
          EXPERIENCE & EDUCATION
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-1 h-full bg-gradient-to-b from-neon-green opacity-80"></div>

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0
              const Icon = item.icon

              return (
                <div
                  key={index}
                  className="relative mb-24 group flex items-start"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`w-16 h-16 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-500 ${
                        hoveredIndex === index
                          ? "border-green-500 glow-neon-strong shadow-lg shadow-green-500/50 scale-110"
                          : "border-neon-green"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 transition-all duration-300 ${
                          hoveredIndex === index
                            ? "text-green-400"
                            : "text-[#11ff58]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Connector Line from Icon to Card */}
                  <div
                    className={`absolute top-9 w-24 h-1 bg-gradient-to-r from-neon-green to-green-500 ${
                      isLeft ? "right-1/2 mr-8" : "left-1/2 ml-8"
                    }`}
                  ></div>

                  {/* Timeline Card */}
                  <div
                    className={`relative w-full max-w-lg ${
                      isLeft
                        ? "mr-auto pr-28 text-right"
                        : "ml-auto pl-28 text-left"
                    }`}
                  >
                    <div
                      className={`bg-card/90 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500 ${
                        hoveredIndex === index
                          ? "glow-neon border-green-500 bg-gradient-to-br from-card/90 "
                          : "border-border hover:border-neon-green hover:bg-card/95"
                      }`}
                    >
                      {/* Period Badge */}
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-mono mb-6 ${
                          hoveredIndex === index
                            ? "border border-neon-green/50 glow-neon text-red-500"
                            : "text-red-500 border border-neon-green/30"
                        }`}
                      >
                        {item.period}
                      </div>

                      {/* Title */}
                      <h3 className="heading-cyberpunk text-2xl md:text-3xl mb-4 text-foreground group-hover:text-[#11ff58] transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skills List */}
                      <ul
                        className={`grid gap-3 text-base md:text-lg text-[#11ff58] ${
                          isLeft ? "justify-end" : "justify-start"
                        }`}
                      >
                        {item.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="flex items-center gap-3"
                          >
                            <span className="w-3 h-3 rounded-full bg-[#11ff58]"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* End Marker */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-10 h-10 bg-neon-green rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
