import Image from "next/image"

// To replace the about image, update this constant
const ABOUT_IMAGE_SRC = "/images/about.jpg"

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Image */}
        <div className="relative h-80 md:h-[560px] rounded-2xl overflow-hidden order-2 md:order-1">
          <Image
            src={ABOUT_IMAGE_SRC}
            alt="Barista crafting coffee at Sayu Café"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Accent card */}
          <div className="absolute bottom-6 right-6 bg-accent text-accent-foreground rounded-2xl px-6 py-4 max-w-[180px] shadow-md">
            <p className="font-serif text-3xl font-medium leading-none mb-1">5+</p>
            <p className="text-xs font-medium leading-snug">years of morning rituals</p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
            Sayu means <span className="text-primary">early.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              In Japanese, &ldquo;sayu&rdquo; (早湯) captures the quiet warmth of the very first moments —
              before the day gets loud. We built this café around that feeling.
            </p>
            <p>
              We believe the morning is sacred. It&rsquo;s the only time the world belongs entirely to you.
              Our drinks are made for people who choose to wake up before they have to — who find
              joy in the ritual of a first sip.
            </p>
            <p>
              Everything we serve is crafted slowly, sourced thoughtfully, and offered with genuine
              care. No corporate formulas. Just good people making good coffee in a place that feels
              like home.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex gap-10 border-t border-border pt-8">
            {[
              { value: "100%", label: "Ethically Sourced" },
              { value: "12+", label: "Drink Options" },
              { value: "Daily", label: "Fresh Pastries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
