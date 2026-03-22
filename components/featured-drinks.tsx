import Image from "next/image"

// To add/update drinks, edit the FEATURED_DRINKS array below
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
    description: "Equal parts espresso and warm milk — bold, balanced, and perfectly small.",
    image: "/images/drink-cortado.jpg",
    tag: "Espresso",
  },
]

export function FeaturedDrinks() {
  return (
    <section id="drinks" className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
              Our Drinks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight">
              Crafted for slow mornings
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs text-pretty">
            Every cup is made with intention. No shortcuts, no rush — just good drinks made right.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_DRINKS.map((drink) => (
            <div
              key={drink.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                  {drink.tag}
                </span>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-serif text-lg text-card-foreground mb-2">{drink.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
