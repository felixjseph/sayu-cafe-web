import Image from "next/image"
import Link from "next/link"
import type { SVGProps } from "react"
import { Instagram, Facebook } from "lucide-react"

function TikTokIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.14V9.4a6.15 6.15 0 0 0-.88-.06A6.44 6.44 0 0 0 5 20.05a6.44 6.44 0 0 0 10.99-4.56V8.45a8.06 8.06 0 0 0 4.59 1.43V6.77a4.8 4.8 0 0 1-.99-.08Z" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#visit" },
  { label: "Gallery", href: "#gallery" },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/sayucafe", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/sayucafe.cebu/", label: "Instagram" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@sayucafe.cebu", label: "TikTok" },
]

export function Footer() {
  return (
    <footer className="bg-blue-900 text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-3 md:gap-16">
          <div>
            <Image
              src="/images/logos/sayu-white.png"
              alt="Sayu Cafe logo"
              width={220}
              height={80}
              className="h-16 w-25 object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/68">
              Start your day early, the Sayu way. Specialty coffee and matcha crafted for quiet mornings.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/15 p-2.5 text-white/60 hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/72 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">Hours</p>
            <ul className="space-y-2.5">
              {[
                { day: "Mon - Sun", time: "9:00 am - 10:00 pm" }
              ].map((h) => (
                <li key={h.day} className="flex justify-between gap-6 text-sm">
                  <span className="text-white/60">{h.day}</span>
                  <span className="text-white/90">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">
              South Poblacion San Fernando
              <br />
              Cebu 6018
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/42 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Sayu Cafe. All rights reserved.</p>
          <p>Made with care, for early risers.</p>
        </div>
      </div>
    </footer>
  )
}
