"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

      setScrolled(currentY > 32)
      setScrollProgress(maxScroll > 0 ? currentY / maxScroll : 0)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  const headerState = scrolled
    ? "border-primary/10 bg-white/80 shadow-[0_24px_50px_-38px_rgba(9,9,11,0.5)] backdrop-blur-xl"
    : "bg-transparent"

  const textState = scrolled ? "text-foreground" : "text-white"
  const logoSrc = scrolled ? "/images/logos/sayu-blue.png" : "/images/logos/sayu-white.png"

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerState}`}>
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent via-primary to-primary"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 md:h-22 md:px-10">
        <Link
          href="#"
          className="group relative flex items-center rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          aria-label="Sayu Cafe home"
        >
          <Image
            src={logoSrc}
            alt="Sayu Cafe logo"
            width={220}
            height={80}
            priority
            className="h-16 w-4 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:scale-[1.02] md:h-8 md:w-48"
          />
        </Link>

        <nav className="hidden items-center md:flex">
          {NAV_LINKS.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link href={link.href} className={`nav-link px-4 py-2 ${textState}`}>
                {link.label}
              </Link>
              {index < NAV_LINKS.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${scrolled ? "bg-primary/35" : "bg-white/35"}`}
                />
              )}
            </div>
          ))}
          <Link
            href="#custom-drink"
            className="ml-5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium tracking-[0.08em] text-primary-foreground shadow-[0_20px_35px_-24px_rgba(50,81,163,0.95)] hover:-translate-y-0.5 hover:bg-primary/92"
          >
            Build Your Drink
          </Link>
        </nav>

        <button
          className={`rounded-full border px-3 py-3 md:hidden ${
            scrolled
              ? "border-primary/12 bg-white/90 text-foreground shadow-[0_16px_40px_-28px_rgba(9,9,11,0.55)]"
              : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
          }`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-primary/10 bg-white/92 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#custom-drink"
              className="mt-2 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Build Your Drink
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
