"use client"

import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const WHATSAPP_LINK = "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }
    
    // Show after a small delay for smooth entrance
    const timer = setTimeout(() => setVisible(true), 1000)
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group",
        visible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Button content */}
      <div className="relative flex items-center gap-3 px-5 py-3.5">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-medium hidden sm:block pr-1">
          Fale Conosco
        </span>
      </div>
    </a>
  )
}
