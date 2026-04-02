import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { SectionTitle } from "@/components/sections/section-title"
import { FeatureCard } from "@/components/sections/feature-card"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Camera, 
  Heart, 
  Users, 
  Star, 
  PartyPopper,
  ArrowRight
} from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"

// Imagens de destaque da galeria home (mistura das duas casas com labels)
const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rosa-spa-3-R33fBxEmqVPYemMurrimFzDuY7OEOT.jpeg",
    alt: "Spa infantil Casa Rosa",
    label: "Casa Rosa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amarela-area-externa-2442RCsmtoyYcFIQLEDC4osYpz58WB.jpeg",
    alt: "Área externa Casa Amarela",
    label: "Casa Amarela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rosa-balada-1-w5562NM4CSVKoiDg8TE3J5wou7dLnr.jpeg",
    alt: "Balada neon Casa Rosa",
    label: "Casa Rosa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amarela-brincadeiras-1-AAyhBURmFsmqPZfjPbrejfNIunO5NL.jpeg",
    alt: "Brincadeiras Casa Amarela",
    label: "Casa Amarela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cortezia1-rGTCxln9zwLf8wc45HVNURK9KK5Dll.jpeg",
    alt: "Decoração Pequena Sereia Casa Rosa",
    label: "Casa Rosa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amarela-oficina-1-05uHgvZCqVVR6eCXvpF9i4faoOwpEp.jpeg",
    alt: "Oficinas Casa Amarela",
    label: "Casa Amarela",
  },
]

const features = [
  {
    icon: Sparkles,
    title: "Ambientes Exclusivos",
    description: "Espaços únicos e encantadores pensados para criar momentos mágicos.",
  },
  {
    icon: Star,
    title: "Experiências Temáticas",
    description: "Do spa à balada neon, das brincadeiras raiz às oficinas criativas.",
  },
  {
    icon: Heart,
    title: "Momentos Inesquecíveis",
    description: "Cada detalhe pensado para transformar sonhos em realidade.",
  },
  {
    icon: Camera,
    title: "Espaços para Fotos",
    description: "Cenários instagramáveis para registrar memórias preciosas.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para tornar cada festa única e especial.",
  },
  {
    icon: PartyPopper,
    title: "Festas com Encanto",
    description: "Experiências completas que encantam crianças e adultos.",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lugar-0iy49FJ8Wc8Jo1eNh0YZT3PuX3cFgy.jpeg"
              alt="Casa Mel Rosa"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white py-32">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Festas Infantis Inesquecíveis
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                Duas experiências únicas para transformar aniversários em{" "}
                <span className="text-primary">memórias inesquecíveis</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 text-pretty">
                Conheça a Casa Rosa e a Casa Amarela e escolha o cenário perfeito para a festa do seu filho.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base"
                >
                  <Link href="/casa-rosa">Conhecer Casa Rosa</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow hover:bg-yellow/90 text-yellow-foreground rounded-full px-8 py-6 text-base"
                >
                  <Link href="/casa-amarela">Conhecer Casa Amarela</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-full px-8 py-6 text-base bg-transparent"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Escolha sua experiência */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <SectionTitle
              title="Escolha sua experiência"
              subtitle="Dois mundos encantadores esperando para fazer parte da festa do seu filho"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card Casa Rosa */}
              <Link href="/casa-rosa" className="group">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rosa-spa-5-kEAxGbptUrMCKttvkC3lhhTh1dL4e7.jpeg"
                    alt="Casa Rosa"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-4">
                      Glamour & Brilho
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">Casa Rosa</h3>
                    <p className="text-white/90 mb-6 text-pretty">
                      Uma experiência encantadora com spa, limousine, balada neon, ofurô e momentos inesquecíveis.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                      Conhecer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card Casa Amarela */}
              <Link href="/casa-amarela" className="group">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amarela-area-externa3-AkfJBv65uM6mPTDWiCKLvSTH1AQgdw.jpeg"
                    alt="Casa Amarela"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 via-amber-500/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-4">
                      Natureza & Diversão
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">Casa Amarela</h3>
                    <p className="text-white/90 mb-6 text-pretty">
                      Uma casa de brincar cheia de natureza, brincadeiras raiz, oficinas e diversão ao ar livre.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                      Conhecer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <SectionTitle
              title="Por que escolher a Casa Mel Rosa?"
              subtitle="Experiências únicas pensadas para criar os melhores momentos"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Galeria Destaque */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <SectionTitle
              title="Momentos Especiais"
              subtitle="Veja um pouco do que preparamos em cada uma das nossas casas"
            />

            <div className="max-w-6xl mx-auto">
              <GalleryGrid images={galleryImages} columns={3} showLabels />
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <CTASection
          title="Quer conhecer melhor cada espaço?"
          subtitle="Explore cada unidade e descubra qual combina mais com a festa que você imaginou."
          buttons={[
            { label: "Ver Casa Rosa", href: "/casa-rosa" },
            { label: "Ver Casa Amarela", href: "/casa-amarela", variant: "outline" },
            { label: "Chamar no WhatsApp", href: WHATSAPP_LINK, variant: "secondary", external: true },
          ]}
        />
      </main>

      <Footer />
    </>
  )
}
