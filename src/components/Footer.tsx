import { Barcode } from "./Barcode"

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm font-mono">
            © 2025 Rahul Dhote – Built with MERN Stack
          </p>
          
          <Barcode className="opacity-30" bars={10} />
        </div>
      </div>
    </footer>
  )
}