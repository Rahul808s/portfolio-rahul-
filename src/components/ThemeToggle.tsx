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
      className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-transparent hover:bg-transparent focus:bg-transparent"
    >
      {/* Sun (light mode) */}
      <Sun className="h-5 w-5 text-black dark:text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      {/* Moon (dark mode) */}
      <Moon className="absolute h-5 w-5 text-black dark:text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </CyberpunkButton>
  )
}
