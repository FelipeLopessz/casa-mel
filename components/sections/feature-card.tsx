import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description?: string
  className?: string
  variant?: "default" | "rosa" | "amarela"
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "default",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
          variant === "default" && "bg-primary/10 group-hover:bg-primary/20",
          variant === "rosa" && "bg-primary/10 group-hover:bg-primary/20",
          variant === "amarela" && "bg-yellow/30 group-hover:bg-yellow/50"
        )}
      >
        <Icon
          className={cn(
            "w-7 h-7 transition-transform duration-300 group-hover:scale-110",
            variant === "default" && "text-primary",
            variant === "rosa" && "text-primary",
            variant === "amarela" && "text-yellow-foreground"
          )}
        />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
