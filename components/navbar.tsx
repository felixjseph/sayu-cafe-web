"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#visit" },
  { label: "Gallery", href: "#gallery" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="#"
          className={`font-serif text-xl md:text-2xl tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Sayu Café
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#visit"
            className="text-sm font-medium px-5 py-2 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#visit"
              className="mt-2 text-center text-sm font-medium px-5 py-3 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
