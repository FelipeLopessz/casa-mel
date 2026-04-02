import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAButton {
  label: string
  href: string
  variant?: "default" | "outline" | "secondary"
  external?: boolean
}

interface CTASectionProps {
  title: string
  subtitle?: string
  buttons: CTAButton[]
  variant?: "default" | "rosa" | "amarela"
  className?: string
}

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"

export function CTASection({
  title,
  subtitle,
  buttons,
  variant = "default",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "py-20 px-4",
        variant === "default" && "bg-primary",
        variant === "rosa" && "bg-primary",
        variant === "amarela" && "bg-yellow",
        className
      )}
    >
      <div className="container mx-auto text-center">
        <h2
          className={cn(
            "font-serif text-3xl md:text-4xl font-bold mb-4 text-balance",
            variant === "default" && "text-primary-foreground",
            variant === "rosa" && "text-primary-foreground",
            variant === "amarela" && "text-yellow-foreground"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "text-lg mb-8 max-w-2xl mx-auto text-pretty",
              variant === "default" && "text-primary-foreground/80",
              variant === "rosa" && "text-primary-foreground/80",
              variant === "amarela" && "text-yellow-foreground/80"
            )}
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => {
            const isWhatsApp = button.href.includes("whatsapp") || button.href.includes("wa.me")
            const href = isWhatsApp ? WHATSAPP_LINK : button.href
            
            const buttonClasses = cn(
              "rounded-full px-8 py-6 text-base font-medium transition-all",
              button.variant === "outline" && variant !== "amarela" && "border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent",
              button.variant === "outline" && variant === "amarela" && "border-2 border-yellow-foreground text-yellow-foreground hover:bg-yellow-foreground hover:text-white bg-transparent",
              button.variant === "secondary" && "bg-white/20 text-white hover:bg-white/30",
              !button.variant && variant !== "amarela" && "bg-white text-primary hover:bg-white/90",
              !button.variant && variant === "amarela" && "bg-yellow-foreground text-white hover:bg-yellow-foreground/90"
            )

            if (button.external || isWhatsApp) {
              return (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  className={buttonClasses}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {button.label}
                  </a>
                </Button>
              )
            }

            return (
              <Button
                key={index}
                asChild
                variant="ghost"
                className={buttonClasses}
              >
                <Link href={href}>{button.label}</Link>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
