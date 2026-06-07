import Link from "next/link"
import { ArrowRight, ClipboardList } from "lucide-react"
import { Reveal } from "@/components/reveal"

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
          <Link
            href="#custom-drink"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary hover:gap-3"
          >
            Explore Custom Drinks <ArrowRight size={16} />
          </Link>
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

        <Reveal className="mt-12 flex justify-center" delay={260}>
          <Link
            href="https://drive.google.com/drive/folders/1FwD2sK_wSdAutekcSr5_9Ou630CZUJvj?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/12 bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_24px_42px_-28px_rgba(50,81,163,0.9)] hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_30px_52px_-30px_rgba(50,81,163,0.95)] sm:w-auto"
          >
            <ClipboardList size={17} />
            View Full Menu
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
