import Image from "next/image"
import { Reveal } from "@/components/reveal"

const ABOUT_IMAGE_SRC = "/images/about.jpg"

export function About() {
  return (
    <section id="about" className="section-shell bg-background">
      <div className="section-frame grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal className="order-2 md:order-1" delay={80}>
          <div className="relative h-80 overflow-hidden rounded-[2rem] md:h-[560px]">
            <Image
              src={ABOUT_IMAGE_SRC}
              alt="Barista crafting coffee at Sayu Cafe"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 max-w-[190px] rounded-[1.5rem] bg-accent px-6 py-4 text-accent-foreground shadow-[0_20px_40px_-28px_rgba(255,196,23,0.95)]">
              <p className="font-serif text-3xl font-medium leading-none">1+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]">years of morning rituals</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            Sayu means <span className="text-primary">early.</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              In Japanese, &ldquo;sayu&rdquo; captures the quiet warmth of the first moments before the day gets loud.
              We built this cafe around that feeling.
            </p>
            <p>
              We believe the morning is sacred. It is the one part of the day that still feels fully yours,
              so our drinks are made for people who value ritual, calm, and a beautiful first sip.
            </p>
            <p>
              Everything we serve is crafted slowly, sourced thoughtfully, and offered with genuine care.
              No corporate formulas. Just good people making good coffee in a place that feels like home.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-primary/10 pt-8">
            {[
              { value: "100%", label: "Ethically sourced" },
              { value: "12+", label: "Drink options" },
              { value: "Daily", label: "Fresh pastries" },
            ].map((stat, index) => (
              <div key={stat.label} className="soft-card p-4" style={{ transitionDelay: `${index * 80}ms` }}>
                <p className="font-serif text-2xl text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
