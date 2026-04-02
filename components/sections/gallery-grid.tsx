"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface GalleryImage {
  src: string
  alt: string
  label?: string
  category?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  className?: string
  columns?: 2 | 3 | 4
  showLabels?: boolean
}

export function GalleryGrid({
  images,
  className,
  columns = 3,
  showLabels = false,
}: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div
        className={cn(
          "grid gap-4",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] image-hover"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Label */}
            {showLabels && image.label && (
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
                  {image.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors text-xl font-bold z-10"
            aria-label="Fechar"
          >
            ✕
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
