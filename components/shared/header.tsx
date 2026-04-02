"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Casa Rosa", href: "/casa-rosa" },
  { name: "Casa Amarela", href: "/casa-amarela" },
]

const WHATSAPP_LINK = "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Heart 
                className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  scrolled ? "text-primary fill-primary/20" : "text-white fill-white/20"
                )} 
              />
              <Heart 
                className={cn(
                  "w-8 h-8 absolute inset-0 transition-all duration-300 group-hover:scale-110",
                  scrolled ? "text-primary fill-primary/40" : "text-white fill-white/40"
                )} 
              />
            </div>
            <div className="flex flex-col">
              <span 
                className={cn(
                  "font-serif text-xl font-bold tracking-tight transition-colors duration-300",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                Casa Mel Rosa
              </span>
              <span 
                className={cn(
                  "text-[10px] tracking-widest uppercase transition-colors duration-300",
                  scrolled ? "text-muted-foreground" : "text-white/80"
                )}
              >
                Festas Infantis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-primary relative group",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl mt-2"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
