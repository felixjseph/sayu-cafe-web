import Image from "next/image"
import { Reveal } from "@/components/reveal"

const FEATURED_DRINKS = [
  {
    id: 1,
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked smooth, paired with oat milk and a touch of honey.",
    image: "/images/drink-matcha.jpg",
    tag: "House Favourite",
  },
  {
    id: 2,
    name: "Signature Pour Over",
    description: "Single-origin beans, slow-poured to highlight bright, clean notes with a silky finish.",
    image: "/images/drink-coffee.jpg",
    tag: "Classic",
  },
  {
    id: 3,
    name: "Iced Hojicha",
    description: "Roasted Japanese green tea over ice, lightly sweetened with a splash of cream.",
    image: "/images/drink-seasonal.jpg",
    tag: "Seasonal",
  },
  {
    id: 4,
    name: "Cortado",
    description: "Equal parts espresso and warm milk - bold, balanced, and perfectly small.",
    image: "/images/drink-cortado.jpg",
    tag: "Espresso",
  },
]

export function FeaturedDrinks() {
  return (
    <section id="drinks" className="section-shell bg-secondary/70">
      <div className="section-frame">
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label">Our Drinks</span>
            <h2 className="section-title">Crafted for slow mornings</h2>
          </div>
          <p className="section-copy max-w-sm">
            Every cup is made with intention. No shortcuts, no rush - just good drinks made right.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_DRINKS.map((drink, index) => (
            <Reveal key={drink.id} delay={index * 90}>
              <div className="group panel-card overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-65" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                    {drink.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl text-card-foreground">{drink.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{drink.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
