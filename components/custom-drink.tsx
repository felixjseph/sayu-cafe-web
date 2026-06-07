import { Sparkles, SlidersHorizontal, CupSoda, BrainCircuit } from "lucide-react"
import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    icon: CupSoda,
    title: "Choose your base",
    description: "Start with coffee, matcha, hojicha, or a seasonal signature.",
  },
  {
    icon: SlidersHorizontal,
    title: "Adjust the details",
    description: "Pick sweetness, milk, temperature, and texture to match your mood.",
  },
  {
    icon: BrainCircuit,
    title: "Get smart suggestions",
    description: "Later, AI can recommend balanced combinations from your available ingredients.",
  },
]

const INGREDIENTS = [
  "Espresso",
  "Matcha",
  "Hojicha",
  "Oat Milk",
  "Whole Milk",
  "Honey",
  "Vanilla",
  "Brown Sugar",
]

export function CustomDrink() {
  return (
    <section id="custom-drink" className="section-shell bg-background">
      <div className="section-frame">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">What&apos;s Coming</span>
            <h2 className="section-title">
              A simple way to craft your own drink, one ingredient at a time.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            This is a strong next feature for Sayu Cafe. We can keep the interface minimal while letting
            guests build from real cafe ingredients and available stock.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="panel-card overflow-hidden p-8 md:p-10" delay={100}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles size={14} />
                Future interactive builder
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {STEPS.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className="group soft-card p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/24 hover:bg-white hover:shadow-[0_26px_62px_-42px_rgba(50,81,163,0.75)]"
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_16px_28px_-18px_rgba(50,81,163,0.8)] transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[0_20px_36px_-18px_rgba(255,196,23,0.8)]">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors duration-500 group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/70">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="panel-card p-8 md:p-10" delay={180}>
            <div className="mb-6">
              <span className="section-label">Available Building Blocks</span>
              <h3 className="mt-3 font-serif text-3xl text-foreground">Grounded in the real menu</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {INGREDIENTS.map((ingredient, index) => (
                <span
                  key={ingredient}
                  className="ingredient-pill transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-primary/28 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_18px_36px_-26px_rgba(50,81,163,0.85)]"
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
                  {ingredient}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We can turn this into a polished builder next: ingredient logic, pricing, availability,
              and AI-assisted flavor suggestions.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
