import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const HERO_IMAGE_SRC = "/images/hero-bg.jpg"

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src={HERO_IMAGE_SRC}
        alt="Sayu Cafe warm morning interior"
        fill
        priority
        className="scale-105 object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.34),rgba(9,9,11,0.62))]" />
      {/* <div className="absolute left-1/2 top-[15%] h-52 w-52 -translate-x-1/2 rounded-full bg-accent/45 blur-3xl md:h-72 md:w-72" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/30 to-transparent" /> */}

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
            A calm, modern cafe experience shaped by early hours, thoughtful drinks, and a smoother
            digital journey from first scroll to first sip.
          </p>
        </div>

        <div className="reveal reveal-visible mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ transitionDelay: "140ms" }}>
          <Link
            href="#menu"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-[0.08em] text-primary-foreground shadow-[0_28px_40px_-24px_rgba(50,81,163,0.95)] hover:-translate-y-0.5 hover:bg-primary/92 sm:w-auto"
          >
            View Menu
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#custom-drink"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/28 bg-white/8 px-8 py-3.5 text-sm font-semibold tracking-[0.08em] text-white backdrop-blur-sm hover:bg-white/14 sm:w-auto"
          >
            Explore Drink Builder
          </Link>
        </div>

        {/* <div className="reveal reveal-visible mt-12 flex flex-wrap items-center justify-center gap-3 text-left" style={{ transitionDelay: "220ms" }}>
          {["Friendly Neighborhood Cafe", "Signature Blend", "Artisanal Pastries"].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div> */}
      </div>

      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55">
        <span className="text-xs font-medium uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/20">
          <div className="absolute inset-x-0 top-0 h-1/2 animate-[pulse_1.8s_ease-in-out_infinite] bg-accent" />
        </div>
      </div>
    </section>
  )
}
