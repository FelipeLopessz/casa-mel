import Link from "next/link"
import { Heart, MapPin, Phone, Instagram, Facebook } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"
const TELEFONE = "(11) 4335-5284"
const INSTAGRAM_ROSA = "https://instagram.com/casamelrosapink"
const INSTAGRAM_AMARELA = "https://instagram.com/casamelrosa"
const FACEBOOK = "https://facebook.com/casamelrosa"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Casa Rosa", href: "/casa-rosa" },
  { name: "Casa Amarela", href: "/casa-amarela" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary/30" />
              <span className="font-serif text-2xl font-bold">Casa Mel Rosa</span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md">
              Duas experiências únicas para transformar aniversários em memórias inesquecíveis. 
              Conheça a Casa Rosa e a Casa Amarela e escolha o cenário perfeito para a festa do seu filho.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href={INSTAGRAM_ROSA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram Casa Rosa"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <strong className="text-white">Casa Rosa:</strong><br />
                  Av. Pres. Joao Cafe Filho, 1770<br />
                  Assuncao - Sao Bernardo do Campo
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <strong className="text-white">Casa Amarela:</strong><br />
                  Rua Joao Pessoa, 676<br />
                  Centro - Sao Bernardo do Campo
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:1143355284"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {TELEFONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  WhatsApp: (11) 2355-3684
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Casa Mel Rosa. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-sm">
              Feito com <Heart className="w-4 h-4 inline text-primary fill-primary" /> para festas inesquecíveis
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
