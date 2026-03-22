import Image from "next/image"
import Link from "next/link"

// To replace the hero image, update this constant
const HERO_IMAGE_SRC = "/images/hero-bg.jpg"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={HERO_IMAGE_SRC}
        alt="Sayu Café warm morning interior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow label */}
        <span className="inline-block mb-6 text-xs font-medium tracking-[0.2em] uppercase text-white/70 border border-white/30 rounded-full px-4 py-1.5">
          Specialty Coffee &amp; Matcha
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-tight text-balance mb-6">
          Start your day early,{" "}
          <span className="text-accent">the Sayu way.</span>
        </h1>

        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
          Every morning is a ritual. We craft drinks that slow you down, warm you up,
          and remind you that the best moments happen before the world wakes up.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#menu"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            View Menu
          </Link>
          <Link
            href="#visit"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full border border-white/60 text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            Visit Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}
