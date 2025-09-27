import { cn } from "@/lib/utils"

interface SkillPillProps {
  children: React.ReactNode
  className?: string
}

export const SkillPill = ({ children, className }: SkillPillProps) => {
  return (
    <span 
      className={cn(
        "inline-block px-3 py-1 border border-neon-green bg-transparent text-[#11ff58]-green text-sm font-mono uppercase tracking-wide transition-all duration-300 hover:bg-neon-green hover:text-black cursor-default",
        className
      )}
      style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
    >
      {children}
    </span>
  )
}