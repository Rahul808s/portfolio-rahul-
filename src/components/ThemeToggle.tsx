import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { CyberpunkButton } from "./ui/cyberpunk-button"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <CyberpunkButton
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 w-12 h-12"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </CyberpunkButton>
  )
}