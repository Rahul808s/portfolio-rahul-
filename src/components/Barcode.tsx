import { cn } from "@/lib/utils"

interface BarcodeProps {
  className?: string
  bars?: number
}

export const Barcode = ({ className, bars = 20 }: BarcodeProps) => {
  return (
    <div className={cn("barcode", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <div key={i} />
      ))}
    </div>
  )
}