import { ArrowRight, ClipboardList } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { EXTERNAL_LINKS } from "@/lib/site"

const MENU_CATEGORIES = [
  {
    id: "coffee",
    name: "Coffee",
    emoji: "☕",
    items: [
      { name: "Espresso", price: "₱70", note: "Double shot" },
      { name: "Pour Over", price: "₱150", note: "Single origin" },
      { name: "Cortado", price: "₱110", note: "Equal parts" },
      { name: "Flat White", price: "₱120", note: "Oat / Whole" },
      { name: "Cafe Latte", price: "₱120", note: "18-hr steep" },
    ],
  },
  {
    id: "matcha",
    name: "Matcha",
    emoji: "🍵",
    items: [
      { name: "Matcha Latte", price: "₱150", note: "Ceremonial grade" },
      { name: "Iced Matcha", price: "₱150", note: "Oat milk" },
      { name: "Matcha Espresso", price: "₱185", note: "Fusion" },
      { name: "Hojicha Latte", price: "₱165", note: "Roasted" },
    ],
  },
  {
    id: "pastries",
    name: "Pastries",
    emoji: "🥐",
    items: [
      { name: "Butter Croissant", price: "₱90", note: "Baked daily" },
      { name: "Double Choco Chip Cookie", price: "₱90", note: "House made" },
      { name: "Burnt Basque Cheesecake", price: "₱150", note: "House made" },
      { name: "Red Velvet Cheesecake", price: "₱175", note: "House made" },
      { name: "Brookies", price: "₱85", note: "Fusion" },
    ],
  },
]

export function MenuPreview() {
  return (
    <section id="menu" className="section-shell bg-background">
      <div className="section-frame">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-label">What We Serve</span>
            <h2 className="section-title">Simple. Honest. Delicious.</h2>
          </div>
          <a
            href={EXTERNAL_LINKS.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link group text-sm font-semibold uppercase tracking-[0.14em]"
          >
            <span className="relative">
              Pre-order on Messenger
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </span>
            <ArrowRight size={16} aria-hidden="true" className="action-arrow" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {MENU_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 90}>
              <div className="panel-card p-7">
                <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-4">
                  <span className="text-2xl" role="img" aria-label={category.name}>
                    {category.emoji}
                  </span>
                  <h3 className="font-serif text-2xl text-card-foreground">{category.name}</h3>
                </div>

                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">{item.name}</p>
                        <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                          {item.note}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-primary">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
          Send your request on Messenger. Sayu will confirm prices, availability, and pickup details before your order is placed.
        </p>

        <Reveal className="mt-12 flex justify-center" delay={260}>
          <a
            href={EXTERNAL_LINKS.menu}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button action-primary w-full rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] sm:w-auto"
          >
            <ClipboardList size={17} />
            View Full Menu
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
