import { ArrowRight, CheckCircle2, ClipboardList, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { EXTERNAL_LINKS } from "@/lib/site"

const STEPS = [
  {
    icon: ClipboardList,
    title: "Explore the menu",
    description: "Choose what sounds good from the menu above or open the full menu before you decide.",
  },
  {
    icon: MessageCircle,
    title: "Send your request",
    description: "Message Sayu on Messenger with the drinks or food you want and any preferences.",
  },
  {
    icon: CheckCircle2,
    title: "Wait for confirmation",
    description: "The café will reply with availability, the total, and pickup details. A message alone does not confirm an order.",
  },
]

export function CustomDrink() {
  return (
    <section id="custom-drink" className="section-shell bg-background">
      <div className="section-frame">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">A Simpler Way to Order</span>
            <h2 className="section-title">Your next Sayu drink starts with a message.</h2>
          </div>
          <p className="section-copy max-w-xl">
            Pick from the menu and tell us what you have in mind. Sayu will confirm the details with you in Messenger.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="panel-card overflow-hidden p-8 md:p-10" delay={100}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="relative">
              <div className="mt-2 grid gap-4 md:grid-cols-3">
                {STEPS.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="soft-card p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_16px_28px_-18px_rgba(50,81,163,0.8)]">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="panel-card p-8 md:p-10" delay={180}>
            <span className="section-label">Make It Yours</span>
            <h3 className="mt-3 font-serif text-3xl text-foreground">Have a drink in mind?</h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Ask about milk, sweetness, or another preference when you message Sayu. The café can tell you what is possible today.
            </p>
            <a
              href={EXTERNAL_LINKS.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button action-primary mt-8 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Ask on Messenger
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
