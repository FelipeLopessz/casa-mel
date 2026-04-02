import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { SectionTitle } from "@/components/sections/section-title"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Car, 
  Music, 
  Camera, 
  Heart, 
  Palette,
  Crown,
  Bath,
  Moon
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casa Rosa | Casa Mel Rosa - Festas Infantis",
  description: "Um ambiente cor-de-rosa encantador com spa, limousine, balada neon, ofurô e momentos inesquecíveis para meninas e toda a família.",
}

const WHATSAPP_LINK = "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações%20sobre%20a%20Casa%20Rosa"

// Features da Casa Rosa
const features = [
  { icon: Bath, title: "Spa exclusivo" },
  { icon: Car, title: "Limousine para chegar com estilo" },
  { icon: Sparkles, title: "Ofurô para badalar" },
  { icon: Music, title: "Hora da Balada Neon" },
  { icon: Crown, title: "Desfile no tapete vermelho" },
  { icon: Palette, title: "Oficinas criativas e gincanas" },
  { icon: Camera, title: "Espaço instagramável para fotos" },
]

// Experiências
const experiences = [
  {
    id: "spa",
    icon: Bath,
    title: "SPA",
    description: "Em nosso SPA você pode contar com diferentes pacotes do jeitinho que sua filha quiser, temos esmaltação de unhas, SkinCare com pepinos, make infantil, ofurô, escalda pés e muito mais.",
    image: "/casa-rosa/Casamelrosa6.jpeg",
  },
  {
    id: "balada",
    icon: Music,
    title: "Hora da Balada",
    description: "Um momento descontraído pra dançar muito com as amigas, o repertório de músicas é selecionado previamente pela aniversariante.",
    image: "/casa-rosa/rosa-balada-4.jpeg",
  },
  {
    id: "limousine",
    icon: Car,
    title: "Passeio de Limousine",
    description: "Um lindo passeio te aguarda, antes da festa a Limousine busca toda a galera no ponto determinado por você, o passeio tem duração de 1 hora pela cidade e tem opção de retorno com a limousine.",
    image: "/casa-rosa/rosa-limousine-2.jpeg",
  },
  {
    id: "pijama",
    icon: Moon,
    title: "Festa do Pijama",
    description: "Já pensou não se preocupar com nada?! Tudo em um só lugar, cabanas, monitores para passar a madrugada, mesa decorada e muito mais.",
    image: "/casa-rosa/rosa-pijama-1.jpeg",
  },
  {
    id: "oficinas",
    icon: Palette,
    title: "Momento de Oficinas",
    description: "Oficinas dinâmicas e divertidas, temos uma seleção especial para você escolher.",
    image: "/casa-rosa/rosa-oficina-2.jpeg",
  },
]

// Galeria por categoria
const galleryCategories = [
  {
    title: "SPA",
    images: [
      { src: "/casa-rosa/rosa-spa-3.jpeg", alt: "Spa infantil - tratamento com pepinos" },
      { src: "/casa-rosa/rosa-spa-2.jpeg", alt: "Spa infantil - relaxamento" },
      { src: "/casa-rosa/rosa-spa-4.jpeg", alt: "Spa infantil - maquiagem" },
      { src: "/casa-rosa/rosa-spa-5.jpeg", alt: "Spa infantil - grupo" },
      { src: "/casa-rosa/rosa-spa-6-.jpeg", alt: "Spa infantil - brinde" },
    ],
  },
  {
    title: "Balada",
    images: [
      { src: "/casa-rosa/rosa-balada-1.jpeg", alt: "Balada neon - grupo com robes" },
      { src: "/casa-rosa/rosa-balada-2.jpeg", alt: "Balada neon - camisetas personalizadas" },
      { src: "/casa-rosa/rosa-balada-3.jpeg", alt: "Balada neon - dançando" },
      { src: "/casa-rosa/rosa-balada-4.jpeg", alt: "Balada neon - iluminação rosa" },
      { src: "/casa-rosa/rosa-balada-5.jpeg", alt: "Balada neon - iluminação colorida" },
      { src: "/casa-rosa/Casamelrosa8.jpeg", alt: "Balada neon - festa" },
    ],
  },
  {
    title: "Limousine",
    images: [
      { src: "/casa-rosa/rosa-limousine-1.jpeg", alt: "Limousine branca" },
      { src: "/casa-rosa/rosa-limousine-2.jpeg", alt: "Limousine rosa" },
    ],
  },
  {
    title: "Festa do Pijama",
    images: [
      { src: "/casa-rosa/rosa-pijama-1.jpeg", alt: "Cabanas coloridas" },
      { src: "/casa-rosa/rosa-pijama-2.jpeg", alt: "Mesa de lanches" },
    ],
  },
  {
    title: "Oficinas",
    images: [
      { src: "/casa-rosa/rosa-oficina-1.jpeg", alt: "Oficina de slime" },
      { src: "/casa-rosa/rosa-oficina-2.jpeg", alt: "Área de oficinas" },
      { src: "/casa-rosa/rosa-oficina-3.jpeg", alt: "Grupo na área externa" },
    ],
  },
  {
    title: "Decoração",
    images: [
      { src: "/casa-rosa/Cortezia1.jpeg", alt: "Decoração Pequena Sereia" },
      { src: "/casa-rosa/Cortezia2.jpeg", alt: "Decoração K-pop" },
    ],
  },
]

export default function CasaRosaPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/casa-rosa/Lugar.jpeg"
              alt="Casa Rosa - Fachada"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white py-32">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Glamour & Brilho
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                Casa Rosa: O Destino Perfeito para Festa de Aniversário!
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 text-pretty">
                Um ambiente cor-de-rosa encantador, pensado para meninas e a família toda!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-base bg-transparent"
                >
                  <a href="#galeria">Ver Galeria</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-sm border border-primary/10"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6 fill-primary/20" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Torne o aniversário da sua filha um momento mágico na Casa Rosa!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A Casa Rosa é um espaço pensado para proporcionar experiências inesquecíveis. Desde o spa até a balada neon, cada detalhe foi planejado para criar memórias que durarão para sempre.
            </p>
          </div>
        </section>

        {/* Experiências */}
        <section className="py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <SectionTitle
              title="Experiências Exclusivas"
              subtitle="Descubra tudo o que a Casa Rosa pode oferecer"
            />

            <div className="space-y-16 max-w-6xl mx-auto">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl image-hover">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="py-24 px-4 bg-background scroll-mt-20">
          <div className="container mx-auto">
            <SectionTitle
              title="Momentos da Casa Rosa"
              subtitle="Veja a magia acontecendo em cada experiência"
            />

            <div className="space-y-16 max-w-6xl mx-auto">
              {galleryCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full" />
                    {category.title}
                  </h3>
                  <GalleryGrid images={category.images} columns={3} />
                </div>
              ))}
            </div>

            {/* Observação sobre decoração */}
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Sobre as decorações:</strong> Algumas decorações são cortesias e outras podem ser contratadas à parte. Consulte os detalhes no atendimento.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  As imagens apresentadas são exemplos de decorações já realizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <CTASection
          title="Quer viver essa experiência na Casa Rosa?"
          subtitle="Entre em contato e transforme o aniversário em um momento inesquecível!"
          variant="rosa"
          buttons={[
            { label: "Falar no WhatsApp", href: WHATSAPP_LINK, external: true },
            { label: "Voltar para Home", href: "/", variant: "outline" },
          ]}
        />
      </main>

      <Footer />
    </>
  )
}
