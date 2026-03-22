import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#visit" },
  { label: "Gallery", href: "#gallery" },
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-background/10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-background mb-3">Sayu Café</p>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs text-pretty">
              Start your day early, the Sayu way. Specialty coffee and matcha crafted for quiet mornings.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/60 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-background/40 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-background/40 mb-5">
              Hours
            </p>
            <ul className="space-y-2.5">
              {[
                { day: "Mon – Fri", time: "7:00 am – 6:00 pm" },
                { day: "Saturday", time: "8:00 am – 7:00 pm" },
                { day: "Sunday", time: "8:00 am – 5:00 pm" },
              ].map((h) => (
                <li key={h.day} className="flex justify-between gap-6 text-sm">
                  <span className="text-background/60">{h.day}</span>
                  <span className="text-background/90">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-background/60">
              12 Morning Lane, Shibuya
              <br />
              Tokyo, Japan
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Sayu Café. All rights reserved.</p>
          <p className="text-pretty">Made with care, for early risers.</p>
        </div>
      </div>
    </footer>
  )
}
