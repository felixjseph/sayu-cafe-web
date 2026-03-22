import Image from "next/image"
import { Instagram } from "lucide-react"

// To update gallery images, edit the GALLERY_IMAGES array below
const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Morning coffee by the window at Sayu Café" },
  { src: "/images/gallery-2.jpg", alt: "Close-up latte art at Sayu Café" },
  { src: "/images/gallery-3.jpg", alt: "Fresh pastries at Sayu Café" },
  { src: "/images/gallery-4.jpg", alt: "Sayu Café interior" },
  { src: "/images/gallery-5.jpg", alt: "Morning flat lay with coffee and journal" },
  { src: "/images/gallery-6.jpg", alt: "Barista at Sayu Café" },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
              Our World
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight">
              Mornings at Sayu
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
          >
            <Instagram size={16} />
            @sayucafe
          </a>
        </div>

        {/* Instagram-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "col-span-2 md:col-span-1 row-span-2 h-64 md:h-auto" : "h-44 md:h-52"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border bg-card text-card-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram size={16} />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
