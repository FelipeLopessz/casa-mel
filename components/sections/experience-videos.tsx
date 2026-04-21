"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, Quote, Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_LINK =
  "https://wa.me/551123553684?text=Olá,%20vim%20pelo%20site%20da%20Casa%20Mel%20Rosa%20e%20quero%20mais%20informações"

type VideoTheme = "rosa" | "amarela" | "depoimento"

type ExperienceVideo = {
  id: number
  title: string
  description: string
  src: string
  tag: string
  theme: VideoTheme
}

const THEME_STYLES: Record<
  VideoTheme,
  {
    modalShell: string
    modalPanel: string
    accentBadge: string
    accentText: string
    accentSoft: string
    infoCard: string
    ctaButton: string
    quoteText: string
    starWrap: string
    starIcon: string
    outline: string
    cardActive: string
    cardIdle: string
    cardHover: string
    cardRing: string
    cardOverlay: string
    cardGlow: string
  }
> = {
  rosa: {
    modalShell: "bg-[#1A0F17]/80",
    modalPanel: "bg-gradient-to-b from-[#341625] via-[#2A1220] to-[#180C14]",
    accentBadge: "border-[#F3C3D6]/25 bg-[#F7D8E4]/10 text-[#FFD9E8]",
    accentText: "text-[#FFD9E8]",
    accentSoft: "bg-[#F8D8E6] text-[#BA4F87]",
    infoCard: "border-white/10 bg-white/5",
    ctaButton: "bg-white text-[#BA4F87] hover:bg-white/90",
    quoteText: "text-[#FFD7E7]",
    starWrap: "bg-[#F8D8E6]",
    starIcon: "text-[#BA4F87]",
    outline: "border-white/15",
    cardActive: "border-[#E8B4CC] bg-white shadow-[0_28px_70px_rgba(195,104,149,0.24)]",
    cardIdle: "border-[#F0D6E2]/80 bg-white/88 shadow-[0_14px_35px_rgba(195,104,149,0.10)]",
    cardHover: "hover:shadow-[0_22px_52px_rgba(195,104,149,0.18)]",
    cardRing: "ring-1 ring-[#F4D3E1]/60",
    cardOverlay: "from-[#26111D]/85 via-[#5A2143]/28 to-[#FFFFFF10]",
    cardGlow: "bg-[radial-gradient(circle_at_center,rgba(255,214,233,0.20),transparent_58%)]",
  },
  amarela: {
    modalShell: "bg-[#1E1608]/80",
    modalPanel: "bg-gradient-to-b from-[#3A2910] via-[#2D1F0C] to-[#181106]",
    accentBadge: "border-[#F1D48A]/25 bg-[#F7E3A7]/10 text-[#FFE8A6]",
    accentText: "text-[#FFE8A6]",
    accentSoft: "bg-[#F6E2A0] text-[#9E6A07]",
    infoCard: "border-white/10 bg-white/5",
    ctaButton: "bg-white text-[#9E6A07] hover:bg-white/90",
    quoteText: "text-[#FFE3A1]",
    starWrap: "bg-[#F6E2A0]",
    starIcon: "text-[#9E6A07]",
    outline: "border-white/15",
    cardActive: "border-[#EED68D] bg-white shadow-[0_28px_70px_rgba(222,179,66,0.24)]",
    cardIdle: "border-[#F4E6B9]/90 bg-white/88 shadow-[0_14px_35px_rgba(222,179,66,0.10)]",
    cardHover: "hover:shadow-[0_22px_52px_rgba(222,179,66,0.18)]",
    cardRing: "ring-1 ring-[#F6E8B8]/70",
    cardOverlay: "from-[#221707]/85 via-[#6E5112]/26 to-[#FFFFFF10]",
    cardGlow: "bg-[radial-gradient(circle_at_center,rgba(255,231,160,0.22),transparent_58%)]",
  },
  depoimento: {
    modalShell: "bg-[#101419]/80",
    modalPanel: "bg-gradient-to-b from-[#1C2430] via-[#161D27] to-[#0E1319]",
    accentBadge: "border-[#CFE0F6]/25 bg-[#DDEAF8]/10 text-[#E7F2FF]",
    accentText: "text-[#DDEEFF]",
    accentSoft: "bg-[#DDEAF8] text-[#456A91]",
    infoCard: "border-white/10 bg-white/5",
    ctaButton: "bg-white text-[#456A91] hover:bg-white/90",
    quoteText: "text-[#D8EAFF]",
    starWrap: "bg-[#DDEAF8]",
    starIcon: "text-[#456A91]",
    outline: "border-white/15",
    cardActive: "border-[#C7D9EC] bg-white shadow-[0_28px_70px_rgba(120,156,204,0.22)]",
    cardIdle: "border-[#DDE8F4]/90 bg-white/88 shadow-[0_14px_35px_rgba(120,156,204,0.10)]",
    cardHover: "hover:shadow-[0_22px_52px_rgba(120,156,204,0.16)]",
    cardRing: "ring-1 ring-[#D9E7F5]/70",
    cardOverlay: "from-[#131920]/85 via-[#304257]/24 to-[#FFFFFF10]",
    cardGlow: "bg-[radial-gradient(circle_at_center,rgba(220,235,255,0.22),transparent_58%)]",
  },
}

const videos: ExperienceVideo[] = [
  {
    id: 1,
    title: "Momentos reais de uma festa especial",
    description:
      "Um olhar verdadeiro sobre a alegria, o carinho e a experiência vivida pelas famílias na Casa Mel Rosa.",
    src: "/videos/video1.mp4",
    tag: "Casa Amarela",
    theme: "amarela",
  },
  {
    id: 2,
    title: "Encanto em cada detalhe",
    description:
      "Registros que mostram o clima acolhedor, a diversão e a beleza de celebrar aqui.",
    src: "/videos/video2.mp4",
    tag: "Depoimento",
    theme: "depoimento",
  },
  {
    id: 3,
    title: "Alegria que fica na memória",
    description:
      "Vídeos reais que transmitem a energia da festa e os momentos que fazem tudo valer a pena.",
    src: "/videos/video3.mp4",
    tag: "Depoimento",
    theme: "depoimento",
  },
  {
    id: 4,
    title: "Famílias vivendo um dia inesquecível",
    description:
      "Mais do que um espaço bonito: uma experiência completa, cheia de emoção, afeto e diversão.",
    src: "/videos/video4.mp4",
    tag: "Casa Rosa",
    theme: "rosa",
  },
  {
    id: 5,
    title: "Uma experiência que fala por si",
    description:
      "Veja momentos reais e sinta a atmosfera leve, delicada e especial da Casa Mel Rosa.",
    src: "/videos/video5.mp4",
    tag: "Casa Rosa",
    theme: "rosa",
  },
  {
    id: 6,
    title: "Cada festa vira uma lembrança linda",
    description:
      "Crianças felizes, famílias encantadas e um ambiente pensado para viver memórias especiais.",
    src: "/videos/video6.mp4",
    tag: "Depoimento",
    theme: "depoimento",
  },
  {
    id: 7,
    title: "Um carinho que aparece em cada cena",
    description:
      "Uma seleção de registros reais mostrando a essência da experiência vivida em nossas casas.",
    src: "/videos/video7.mp4",
    tag: "Casa Amarela",
    theme: "amarela",
  },
]

function VideoModal({
  video,
  onClose,
}: {
  video: ExperienceVideo | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!video) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [video, onClose])

  if (!video) return null

  const theme = THEME_STYLES[video.theme]

  return (
    <div
      className={cn(
        "fixed inset-0 z-[110] flex items-center justify-center p-4 backdrop-blur-md",
        theme.modalShell
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-5xl overflow-hidden rounded-[30px] border shadow-[0_30px_80px_rgba(0,0,0,0.45)]",
          theme.outline
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-black">
            <video
              src={video.src}
              controls
              autoPlay
              playsInline
              className="h-full max-h-[78vh] w-full bg-black object-contain"
            />
          </div>

          <div className={cn("flex flex-col justify-between p-6 md:p-8", theme.modalPanel)}>
            <div>
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                  theme.accentBadge
                )}
              >
                {video.tag}
              </span>

              <h3 className="mt-5 font-serif text-3xl font-bold leading-tight text-white">
                {video.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-white/78">
                {video.description}
              </p>

              <div className={cn("mt-6 flex items-center gap-2", theme.quoteText)}>
                <Quote className="h-4 w-4" />
                <p className="text-sm text-white/70">
                  Experiências reais que reforçam a confiança de quem está conhecendo o espaço.
                </p>
              </div>
            </div>

            <div className={cn("mt-8 rounded-[24px] border p-5", theme.infoCard)}>
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 flex h-10 w-10 items-center justify-center rounded-full",
                    theme.starWrap,
                    theme.starIcon
                  )}
                >
                  <Star className="h-5 w-5 fill-current" />
                </div>

                <div>
                  <p className="font-semibold text-white">Gostou do que viu?</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Fale com a equipe e descubra qual casa combina mais com a sua festa.
                  </p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-4 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition",
                      theme.ctaButton
                    )}
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export function ExperienceVideos() {
   const [activeIndex, setActiveIndex] = useState(0)
   const [selectedVideo, setSelectedVideo] = useState<ExperienceVideo | null>(null)
   const [isPaused, setIsPaused] = useState(false)
   const trackRef = useRef<HTMLDivElement>(null)

  const activeVideo = useMemo(() => videos[activeIndex], [activeIndex])

  const goTo = (index: number) => {
    if (index < 0) {
      setActiveIndex(videos.length - 1)
      return
    }

    if (index >= videos.length) {
      setActiveIndex(0)
      return
    }

    setActiveIndex(index)
  }

  const next = () => goTo(activeIndex + 1)
  const prev = () => goTo(activeIndex - 1)

  useEffect(() => {
    const container = trackRef.current
    if (!container) return

    const activeCard = container.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
    if (!activeCard) return

    const left =
      activeCard.offsetLeft - container.clientWidth / 2 + activeCard.clientWidth / 2

    container.scrollTo({
      left,
      behavior: "smooth",
    })
  }, [activeIndex])

  useEffect(() => {
  if (isPaused || selectedVideo) return

  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % videos.length)
  }, 1000) //

  return () => clearInterval(interval)
}, [isPaused, selectedVideo])


  return (
    <>
     <section
        className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF8FB_0%,#FDF5F8_45%,#FCF7F9_100%)] px-4 py-20 md:py-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[-80px] bottom-10 h-72 w-72 rounded-full bg-[#F5D76E]/20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Experiências Reais
            </span>

            <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Veja momentos reais que fazem da Casa Mel Rosa uma lembrança inesquecível
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Mais do que um espaço bonito, cada festa aqui é vivida com carinho, alegria e muitos detalhes especiais. Veja alguns registros reais e sinta a experiência.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={prev}
                aria-label="Vídeo anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white/80 text-foreground shadow-sm transition hover:border-primary/30 hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próximo vídeo"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white/80 text-foreground shadow-sm transition hover:border-primary/30 hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              {videos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para vídeo ${index + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-primary/25 hover:bg-primary/40"
                  )}
                />
              ))}
            </div>
          </div>

          <div
            ref={trackRef}
            className="mt-10 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {videos.map((video, index) => {
            const isActive = index === activeIndex
            const theme = THEME_STYLES[video.theme]

              return (
                <button
                  key={video.id}
                  type="button"
                  data-index={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsPaused(true)
                    setSelectedVideo(video)
                    }}
                  className={cn(
                "group relative shrink-0 overflow-hidden rounded-[30px] border text-left transition-all duration-500",
                "w-[85%] sm:w-[380px] lg:w-[420px]",
                "hover:-translate-y-1.5",
                theme.cardRing,
                isActive ? theme.cardActive : theme.cardIdle,
                !isActive && theme.cardHover
                )}
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <video
                      src={video.src}
                      muted
                      playsInline
                      preload="metadata"
                      className={cn(
                        "h-full w-full object-cover transition duration-700",
                        isActive ? "scale-[1.02]" : "group-hover:scale-[1.05]"
                      )}
                    />

                    <div className={cn("absolute inset-0 bg-gradient-to-t", theme.cardOverlay)} />
                    <div className={cn("absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100", theme.cardGlow)} />

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center rounded-full border border-white/25 bg-white/18 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        {video.tag}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-500",
                          isActive
                            ? "scale-110 bg-white/25"
                            : "group-hover:scale-110 group-hover:bg-white/30"
                        )}
                      >
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div
                        className={cn(
                          "mb-3 h-px bg-white/75 transition-all duration-500",
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                      <h3 className="font-serif text-2xl font-bold leading-tight text-white">
                        {video.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/85">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-primary/10 bg-white/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Quote className="h-5 w-5" />
                </div>

                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Destaque da vez
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {activeVideo.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {activeVideo.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedVideo(activeVideo)}
                      className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                    >
                      Assistir agora
                    </button>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:bg-primary/5"
                    >
                      Falar com a equipe
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#F0D9B7] bg-[linear-gradient(180deg,#FFF6DE_0%,#FFF9EC_100%)] p-6 shadow-[0_12px_40px_rgba(232,184,80,0.10)] md:p-8">
              <span className="inline-flex rounded-full bg-[#F5D76E]/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
                Prova social
              </span>

              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                Cada vídeo reforça a confiança de quem está escolhendo o lugar ideal
              </h3>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Ver momentos reais ajuda a sentir a atmosfera do espaço, perceber o carinho em cada detalhe e imaginar como a festa também pode ser vivida pela sua família.
              </p>

              <div className="mt-6 flex items-center gap-2 text-amber-800">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-2 text-sm font-medium text-foreground">
                  Encanto, carinho e experiência real
                </span>
              </div>

              <Button
                asChild
                className="mt-8 rounded-full bg-foreground px-6 text-white hover:bg-foreground/90"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Quero saber mais
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        video={selectedVideo}
        onClose={() => {
            setSelectedVideo(null)
            setIsPaused(false)
        }}
        />
    </>
  )
}