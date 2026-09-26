import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { EXTERNAL_LINKS } from "@/lib/site"

const HERO_IMAGE_SRC = "/images/hero-bg.jpg"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src={HERO_IMAGE_SRC}
        alt="Sayu Cafe warm morning interior"
        fill
        priority
        className="hero-background object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.34),rgba(9,9,11,0.62))]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-8 pt-8 text-center md:px-10 md:pt-10">
        <div className="mx-auto max-w-3xl reveal reveal-visible">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/82 backdrop-blur-sm">
            Specialty Coffee and Matcha
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[0.96] text-white text-balance sm:text-6xl md:text-8xl">
            Quiet mornings,
            <span className="block text-accent">beautifully brewed.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
            Explore the menu, then message Sayu with your request. The café will confirm availability,
            your total, and pickup details with you.
          </p>
        </div>

        <div className="reveal reveal-visible mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ transitionDelay: "140ms" }}>
          <a
            href="#menu"
            className="action-button action-primary w-full rounded-full px-8 py-3.5 text-sm font-semibold tracking-[0.08em] sm:w-auto"
          >
            View Menu
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href={EXTERNAL_LINKS.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button action-glass w-full rounded-full px-8 py-3.5 text-sm font-semibold tracking-[0.08em] backdrop-blur-sm sm:w-auto"
          >
            Pre-order on Messenger
          </a>
        </div>

      </div>

      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55">
        <span className="text-xs font-medium uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/20">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-accent" />
        </div>
      </div>
    </section>
  )
}
