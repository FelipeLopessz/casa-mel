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
  TreePine, 
  Palette, 
  Droplets, 
  PartyPopper,
  Heart,
  Home,
  Sun,
  Sparkles,
  Users
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casa Amarela | Casa Mel Rosa - Festas Infantis",
  description: "Uma casa de brincar cheia de natureza, brincadeiras raiz, oficinas e diversão ao ar livre para festas infantis inesquecíveis.",
}

const WHATSAPP_LINK = "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações%20sobre%20a%20Casa%20Amarela"

// Features da Casa Amarela
const features = [
  { icon: PartyPopper, title: "Corrida do saco" },
  { icon: Droplets, title: "Guerra de bexiga" },
  { icon: Palette, title: "Festa das cores" },
  { icon: TreePine, title: "Brincadeiras ao ar livre" },
  { icon: Sparkles, title: "Oficinas criativas" },
  { icon: Home, title: "Espaços fechados para apoio" },
  { icon: Users, title: "Momentos em família" },
]

// Experiências
const experiences = [
  {
    id: "brincadeiras",
    icon: PartyPopper,
    title: "Brincadeiras Raiz",
    description: "Corrida do saco, cabo de guerra, esconde-esconde e muito mais! Brincadeiras que marcaram gerações e continuam encantando as crianças.",
    image: "/casa-amarela/amarela-brincadeiras-1.jpeg",
  },
  {
    id: "cores",
    icon: Palette,
    title: "Festa das Cores",
    description: "Uma explosão de alegria e diversão! As crianças se divertem com tintas, pós coloridos e muita criatividade em um ambiente preparado para a bagunça.",
    image: "/casa-amarela/amarela-brincadeiras-7.jpeg",
  },
  {
    id: "bexiga",
    icon: Droplets,
    title: "Guerra de Bexiga",
    description: "Muita água, risadas e diversão! A brincadeira perfeita para os dias de calor e para criar memórias inesquecíveis com os amigos.",
    image: "/casa-amarela/amarela-brincadeiras-4.jpeg",
  },
  {
    id: "oficinas",
    icon: Sparkles,
    title: "Oficinas Criativas",
    description: "Slime, cupcakes, pintura e muito mais! Oficinas dinâmicas que estimulam a criatividade e garantem momentos especiais.",
    image: "/casa-amarela/amarela-oficina-1.jpeg",
  },
  {
    id: "espacos",
    icon: TreePine,
    title: "Área ao Ar Livre",
    description: "Um quintal incrível com árvores frutíferas, cabana de madeira, escorregador, trampolim e muito espaço para as crianças brincarem livremente.",
    image: "/casa-amarela/amarela-area-externa3.jpeg",
  },
]

// Galeria por categoria
const galleryCategories = [
  {
    title: "Área Externa",
    images: [
      { src: "/casa-amarela/amarela-area-externa.jpeg", alt: "Fachada Casa Amarela" },
      { src: "/casa-amarela/amarela-area-externa2.jpeg", alt: "Mesa de festa ao ar livre" },
      { src: "/casa-amarela/amarela-area-externa3.jpeg", alt: "Quintal com cabana" },
      { src: "/casa-amarela/amarela-area-externa4.jpeg", alt: "Área de piquenique" },
    ],
  },
  {
    title: "Brincadeiras",
    images: [
      { src: "/casa-amarela/amarela-brincadeiras-1.jpeg", alt: "Crianças brincando no quintal" },
      { src: "/casa-amarela/amarela-brincadeiras-2.jpeg", alt: "Crianças na cabana" },
      { src: "/casa-amarela/amarela-brincadeiras-3.jpeg", alt: "Brincadeira com fitas" },
      { src: "/casa-amarela/amarela-brincadeiras-4.jpeg", alt: "Diversão ao ar livre" },
      { src: "/casa-amarela/amarela-brincadeiras-5.jpeg", alt: "Crianças no balanço" },
      { src: "/casa-amarela/amarela-brincadeiras-6.jpeg", alt: "Grupo de crianças brincando" },
      { src: "/casa-amarela/amarela-brincadeiras-7.jpeg", alt: "Festa das cores" },
    ],
  },
  {
    title: "Oficinas",
    images: [
      { src: "/casa-amarela/amarela-oficina-1.jpeg", alt: "Oficina de slime" },
      { src: "/casa-amarela/amarela-oficina-3.jpeg", alt: "Oficina de cupcakes" },
      { src: "/casa-amarela/amarela-oficina-4.jpeg", alt: "Mesa de oficina" },
    ],
  },
  {
    title: "Espaços",
    images: [
      { src: "/casa-amarela/amarela-espaco-1.jpeg", alt: "Sala de spa" },
      { src: "/casa-amarela/amarela-espaco-2.jpeg", alt: "Sala de oficinas" },
      { src: "/casa-amarela/amarela-espaco-3.jpeg", alt: "Piscina de bolinhas" },
      { src: "/casa-amarela/amarela-espaco-4.jpeg", alt: "Detalhes do espaço" },
    ],
  },
  {
    title: "Decoração",
    images: [
      { src: "/casa-amarela/decoração.jpeg", alt: "Decoração Hello Kitty" },
    ],
  },
]

export default function CasaAmarelaPage() {
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
              src="/casa-amarela/amarela-area-externa.jpeg"
              alt="Casa Amarela - Fachada"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-600/50 via-amber-500/30 to-amber-600/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white py-32">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Natureza & Diversão
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                Casa Amarela: A Magia das Festas de Infância!
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 text-pretty">
                Festejamos a infância na Casa Amarela! Uma casa de brincar que lembra a casa da vovó, com árvores frutíferas, brincadeiras raiz e muita diversão ao ar livre!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-white/90 rounded-full px-8 py-6 text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-700 rounded-full px-8 py-6 text-base bg-transparent"
                >
                  <a href="#galeria">Ver Galeria</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-yellow-light">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-sm border border-yellow/30"
                >
                  <feature.icon className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto text-center">
            <Sun className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Com áreas fechadas, como sala de oficina e spa, é uma festa completa para criar memórias inesquecíveis!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A Casa Amarela oferece o melhor da infância: brincadeiras ao ar livre, contato com a natureza e muita diversão. Um espaço acolhedor onde as crianças podem ser crianças de verdade.
            </p>
          </div>
        </section>

        {/* Experiências */}
        <section className="py-24 px-4 bg-yellow-light/50">
          <div className="container mx-auto">
            <SectionTitle
              title="Experiências na Casa Amarela"
              subtitle="Descubra toda a diversão que preparamos"
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
                      <div className="w-12 h-12 rounded-xl bg-yellow/50 flex items-center justify-center">
                        <exp.icon className="w-6 h-6 text-amber-600" />
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
              title="Momentos da Casa Amarela"
              subtitle="Confira a alegria e diversão em cada cantinho"
            />

            <div className="space-y-16 max-w-6xl mx-auto">
              {galleryCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-amber-500 rounded-full" />
                    {category.title}
                  </h3>
                  <GalleryGrid images={category.images} columns={category.images.length <= 2 ? 2 : 3} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <CTASection
          title="Quer conhecer melhor a Casa Amarela?"
          subtitle="Entre em contato e reserve a data da festa mais divertida do ano!"
          variant="amarela"
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
