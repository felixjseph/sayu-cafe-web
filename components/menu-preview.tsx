import Link from "next/link"
import { ArrowRight } from "lucide-react"

// To update menu items, edit the MENU_CATEGORIES array below
const MENU_CATEGORIES = [
  {
    id: "coffee",
    name: "Coffee",
    emoji: "☕",
    items: [
      { name: "Pour Over", price: "$5.50", note: "Single origin" },
      { name: "Espresso", price: "$3.50", note: "Double shot" },
      { name: "Cortado", price: "$4.50", note: "Equal parts" },
      { name: "Flat White", price: "$5.00", note: "Oat / Whole" },
      { name: "Cold Brew", price: "$5.50", note: "18-hr steep" },
    ],
  },
  {
    id: "matcha",
    name: "Matcha",
    emoji: "🍵",
    items: [
      { name: "Matcha Latte", price: "$6.00", note: "Ceremonial grade" },
      { name: "Iced Matcha", price: "$6.00", note: "Oat milk" },
      { name: "Matcha Espresso", price: "$6.50", note: "Fusion" },
      { name: "Hojicha Latte", price: "$5.50", note: "Roasted" },
    ],
  },
  {
    id: "pastries",
    name: "Pastries",
    emoji: "🥐",
    items: [
      { name: "Butter Croissant", price: "$4.00", note: "Baked daily" },
      { name: "Almond Danish", price: "$4.50", note: "House made" },
      { name: "Sesame Bagel", price: "$3.50", note: "With cream cheese" },
      { name: "Morning Bun", price: "$4.00", note: "Orange zest" },
      { name: "Banana Bread", price: "$3.50", note: "Seasonal spice" },
    ],
  },
]

export function MenuPreview() {
  return (
    <section id="menu" className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
              What We Serve
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight">
              Simple. Honest. Delicious.
            </h2>
          </div>
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_CATEGORIES.map((category) => (
            <div key={category.id} className="bg-card rounded-2xl p-7 border border-border">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <span className="text-2xl" role="img" aria-label={category.name}>
                  {category.emoji}
                </span>
                <h3 className="font-serif text-xl text-card-foreground">{category.name}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
                    </div>
                    <span className="text-sm font-medium text-primary shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
