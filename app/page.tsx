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
import { ExperienceVideos } from "@/components/sections/experience-videos"
import {
  Sparkles,
  Camera,
  Heart,
  Users,
  Star,
  PartyPopper,
  ArrowRight,
} from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"

// Mantive exatamente as imagens que já estavam no seu código
const galleryImages = [
  {
    src: "casa-rosa/rosa-spa-3.jpeg",
    alt: "Spa infantil Casa Rosa",
    label: "Casa Rosa",
  },
  {
    src: "casa-amarela/amarela-area-externa.jpeg",
    alt: "Área externa Casa Amarela",
    label: "Casa Amarela",
  },
  {
    src: "casa-rosa/rosa-balada-1.jpeg",
    alt: "Balada neon Casa Rosa",
    label: "Casa Rosa",
  },
  {
    src: "casa-amarela/amarela-brincadeiras-1.jpeg",
    alt: "Brincadeiras Casa Amarela",
    label: "Casa Amarela",
  },
  {
    src: "casa-rosa/Cortezia1.jpeg",
    alt: "Decoração Pequena Sereia Casa Rosa",
    label: "Casa Rosa",
  },
  {
    src: "casa-amarela/amarela-oficina-1.jpeg",
    alt: "Oficinas Casa Amarela",
    label: "Casa Amarela",
  },
]

const features = [
  {
    icon: Sparkles,
    title: "Ambientes Exclusivos",
    description:
      "Espaços únicos e encantadores pensados para criar momentos mágicos.",
  },
  {
    icon: Star,
    title: "Experiências Temáticas",
    description:
      "Do spa à balada neon, das brincadeiras raiz às oficinas criativas.",
  },
  {
    icon: Heart,
    title: "Momentos Inesquecíveis",
    description:
      "Cada detalhe pensado para transformar sonhos em realidade.",
  },
  {
    icon: Camera,
    title: "Espaços para Fotos",
    description:
      "Cenários instagramáveis para registrar memórias preciosas.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Equipe dedicada para tornar cada festa única e especial.",
  },
  {
    icon: PartyPopper,
    title: "Festas com Encanto",
    description:
      "Experiências completas que encantam crianças e adultos.",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="bg-background">
        {/* HERO */}
        <section className="relative isolate min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="casa-rosa/Lugar.jpeg"
              alt="Fachada da Casa Mel Rosa"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-28">
            <div className="max-w-5xl mx-auto text-center text-white">
              <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                Festas infantis com experiências únicas
              </span>

              <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Duas casas, dois estilos e{" "}
                <span className="text-pink-300">memórias inesquecíveis</span>{" "}
                para celebrar a infância
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-xl">
                Conheça a Casa Rosa e a Casa Amarela e escolha o cenário ideal
                para viver uma festa especial, cheia de encanto, diversão e
                momentos que ficam para sempre.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="min-w-[210px] rounded-full bg-primary px-8 text-white hover:bg-primary/90"
                >
                  <Link href="/casa-rosa">Conhecer Casa Rosa</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="min-w-[210px] rounded-full bg-yellow px-8 text-yellow-foreground hover:bg-yellow/90"
                >
                  <Link href="/casa-amarela">Conhecer Casa Amarela</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[210px] rounded-full border-2 border-white bg-white/5 px-8 text-white hover:bg-white hover:text-foreground"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">
                    Casa Rosa
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Spa, limousine, ofurô, balada e brilho
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">
                    Casa Amarela
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Natureza, brincadeiras raiz e diversão ao ar livre
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">
                    Atendimento
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Informações rápidas e contato direto no WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
              <div className="h-3 w-1.5 animate-pulse rounded-full bg-white/80" />
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section className="px-4 py-20 md:py-24">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Uma proposta diferente para cada estilo de festa
                </span>

                <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  A Casa Mel Rosa reúne duas experiências encantadoras em um só lugar
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                  Na Casa Rosa, a proposta é um universo delicado, glamouroso e
                  cheio de momentos especiais. Na Casa Amarela, a experiência é
                  leve, divertida e conectada com a infância ao ar livre.
                </p>

                <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                  Assim, cada família pode escolher o ambiente que mais combina
                  com o estilo da comemoração e com a personalidade da criança.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/casa-rosa"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Ver Casa Rosa <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/casa-amarela"
                    className="inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-3 text-sm font-semibold text-yellow-foreground transition hover:bg-yellow/90"
                  >
                    Ver Casa Amarela <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="casa-rosa/rosa-spa-3.jpeg"
                      alt="Spa Casa Rosa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="relative mt-8 overflow-hidden rounded-3xl shadow-lg">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="casa-amarela/amarela-area-externa.jpeg"
                      alt="Área externa Casa Amarela"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARDS PRINCIPAIS */}
        <section className="bg-secondary/30 px-4 py-20 md:py-24">
          <div className="container mx-auto">
            <SectionTitle
              title="Escolha a casa ideal para a festa"
              subtitle="Cada espaço foi pensado para proporcionar uma experiência especial, bonita e inesquecível."
            />

            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
              <Link href="/casa-rosa" className="group">
                <div className="overflow-hidden rounded-[32px] border bg-card shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="casa-rosa/rosa-spa-5.jpeg"
                      alt="Casa Rosa"
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow">
                      Casa Rosa
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <h3 className="font-serif text-3xl font-bold text-foreground">
                      Casa Rosa: O Destino Perfeito para Festa de Aniversário!
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                      Um ambiente cor-de-rosa encantador, pensado para meninas e a família toda! A Casa Rosa é o cenário ideal para criar memórias inesquecíveis e celebrar a infância com muito estilo e diversão.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Ofurô
                      </span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Balada Neon
                      </span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Desfile no tapete vermelho
                      </span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Oficinas criativas e gincanas divertidas
                      </span>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Conhecer Casa Rosa
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/casa-amarela" className="group">
                <div className="overflow-hidden rounded-[32px] border bg-card shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="casa-amarela/amarela-area-externa3.jpeg"
                      alt="Casa Amarela"
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-700 shadow">
                      Casa Amarela
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <h3 className="font-serif text-3xl font-bold text-foreground">
                      Casa Amarela: A Magia das Festa de Infância!
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                      Festejamos a infância na Casa Amarela! Uma casa de brincar que lembra a casa da vovó, com árvores frutíferas, brincadeiras raiz e muita diversão ao ar livre!
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-yellow/20 px-3 py-1 text-sm font-medium text-amber-800">
                        Corrida do saco
                      </span>
                      <span className="rounded-full bg-yellow/20 px-3 py-1 text-sm font-medium text-amber-800">
                        Guerra de bexiga
                      </span>
                      <span className="rounded-full bg-yellow/20 px-3 py-1 text-sm font-medium text-amber-800">
                        Festa das cores
                      </span>
                      <span className="rounded-full bg-yellow/20 px-3 py-1 text-sm font-medium text-amber-800">
                        Muita Diversão
                      </span>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Conhecer Casa Amarela
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="px-4 py-20 md:py-24">
          <div className="container mx-auto">
            <SectionTitle
              title="Por que escolher a Casa Mel Rosa?"
              subtitle="Estrutura, carinho e experiências pensadas para fazer a festa acontecer do jeito certo."
            />

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* GALERIA */}
        <section className="bg-secondary/20 px-4 py-20 md:py-24">
          <div className="container mx-auto">
            <SectionTitle
              title="Momentos que fazem cada festa ser especial"
              subtitle="Um pouco do encanto, da alegria e da experiência que cada casa proporciona."
            />

            <div className="mx-auto mt-12 max-w-6xl">
              <GalleryGrid images={galleryImages} columns={3} showLabels />
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIAS REAIS */}
        <ExperienceVideos />

        {/* CTA */}
        <CTASection
          title="Quer descobrir qual casa combina mais com a sua festa?"
          subtitle="Explore cada espaço com calma e fale com a equipe para receber mais informações."
          buttons={[
            { label: "Ver Casa Rosa", href: "/casa-rosa" },
            { label: "Ver Casa Amarela", href: "/casa-amarela", variant: "outline" },
            {
              label: "Chamar no WhatsApp",
              href: WHATSAPP_LINK,
              variant: "secondary",
              external: true,
            },
          ]}
        />
      </main>

      <Footer />
    </>
  )
}