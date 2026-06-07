import Image from "next/image"
import { ArrowRight, Instagram } from "lucide-react"
import { Reveal } from "@/components/reveal"

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Morning coffee by the window at Sayu Cafe" },
  { src: "/images/gallery-2.jpg", alt: "Close-up latte art at Sayu Cafe" },
  { src: "/images/gallery-3.jpg", alt: "Fresh pastries at Sayu Cafe" },
  { src: "/images/gallery-4.jpg", alt: "Sayu Cafe interior" },
  { src: "/images/gallery-5.jpg", alt: "Morning flat lay with coffee and journal" },
  { src: "/images/gallery-6.jpg", alt: "Barista at Sayu Cafe" },
]

export function Gallery() {
  return (
    <section id="gallery" className="section-shell bg-background">
      <div className="section-frame">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="section-label">Our World</span>
            <h2 className="section-title">Mornings at Sayu</h2>
          </div>
          <a
            href="https://www.instagram.com/sayucafe.cebu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary hover:opacity-72"
          >
            <Instagram size={16} />
            @sayucafe
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <Reveal key={img.src} delay={index * 70}>
              <div
                className={`group relative cursor-pointer overflow-hidden rounded-[1.5rem] ${
                  index === 0 ? "col-span-2 h-64 md:col-span-1 md:row-span-2 md:h-full" : "h-44 md:h-52"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.02),rgba(9,9,11,0.34))] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-white/20 bg-white/10 p-3 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Instagram size={20} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={360}>
          <a
            href="https://www.instagram.com/sayucafe.cebu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/12 bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary shadow-[0_22px_48px_-34px_rgba(9,9,11,0.36)] hover:-translate-y-0.5 hover:border-primary/24 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_28px_54px_-34px_rgba(50,81,163,0.82)] sm:w-auto"
          >
            <Instagram size={17} />
            Follow Us on Instagram
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
