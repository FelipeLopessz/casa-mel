import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground max-w-2xl text-pretty",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
