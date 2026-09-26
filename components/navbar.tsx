"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useSiteScroll } from "@/components/smooth-scroll-provider"
import { EXTERNAL_LINKS, NAV_LINKS } from "@/lib/site"

const MOBILE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#visit" },
] as const

export function Navbar() {
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const { navigateTo, setScrollLocked } = useSiteScroll()
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
    setScrollLocked(isOpen)
    if (!isOpen) return

    const focusTimer = window.setTimeout(() => {
      headerRef.current?.querySelector<HTMLAnchorElement>("#mobile-navigation a")?.focus()
    }, 50)

    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
      if (event.key !== "Tab") return

      const focusables = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("[data-mobile-focus]") ?? [])
      const first = focusables[0]
      const last = focusables.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("keydown", onKeyDown)
      setScrollLocked(false)
    }
  }, [isOpen, setScrollLocked])

  const navigateFromMenu = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault()
    if (isOpen) menuButtonRef.current?.focus()
    setIsOpen(false)
    setScrollLocked(false)
    window.requestAnimationFrame(() => navigateTo(hash))
  }

  const isLightHeader = scrolled && !isOpen
  const headerState = isLightHeader
    ? "border-primary/10 bg-white/80 shadow-[0_24px_50px_-38px_rgba(9,9,11,0.5)] backdrop-blur-xl"
    : "bg-transparent"
  const textState = isLightHeader ? "text-foreground" : "text-white"
  const logoSrc = isLightHeader ? "/images/logos/sayu-blue.png" : "/images/logos/sayu-white.png"

  return (
    <header ref={headerRef} data-scrolled={isLightHeader} data-menu-open={isOpen} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerState}`}>
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent via-primary to-primary"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="nav-header-inner relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#home"
          data-mobile-focus
          className="relative flex min-h-11 items-center rounded-full px-2 py-1"
          aria-label="Return to Sayu Café home"
          onClick={(event) => navigateFromMenu(event, "#home")}
        >
          <Image
            src={logoSrc}
            alt=""
            width={220}
            height={80}
            priority
            className="h-7 w-24 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] sm:h-8 sm:w-40 md:h-8 md:w-48"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {NAV_LINKS.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <a href={link.href} className={`nav-link flex min-h-11 items-center px-4 py-2 ${textState}`}>
                {link.label}
              </a>
              {index < NAV_LINKS.length - 1 && (
                <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${isLightHeader ? "bg-primary/35" : "bg-white/35"}`} />
              )}
            </div>
          ))}
          <a
            href={EXTERNAL_LINKS.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button action-primary ml-5 rounded-full px-5 text-sm font-medium tracking-[0.04em]"
          >
            Pre-order on Messenger
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          data-mobile-focus
          className={`mobile-menu-toggle flex h-12 w-12 items-center justify-center rounded-full border lg:hidden ${
            isOpen ? "border-white/25 bg-white/12 text-white" : isLightHeader
              ? "border-primary/12 bg-white/90 text-foreground shadow-[0_16px_40px_-28px_rgba(9,9,11,0.55)]"
              : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
          }`}
          onClick={() => {
            if (isOpen) {
              setIsOpen(false)
              menuButtonRef.current?.focus()
            } else setIsOpen(true)
          }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div className="mobile-overlay lg:hidden" data-open={isOpen} aria-hidden={!isOpen} inert={!isOpen}>
        <div className="mobile-overlay-inner">
          <nav id="mobile-navigation" aria-label="Mobile primary" className="mobile-nav flex flex-col items-center justify-center">
            {MOBILE_LINKS.map((link, index) => (
              <a
                key={link.href}
                data-mobile-focus
                href={link.href}
                className="mobile-nav-link flex min-h-11 items-center justify-center text-center font-serif text-white"
                style={{ animationDelay: `${index * 45}ms` }}
                onClick={(event) => navigateFromMenu(event, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              data-mobile-focus
              href={EXTERNAL_LINKS.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button mobile-nav-cta mt-6 rounded-full border border-accent bg-accent px-7 text-center text-sm font-semibold text-blue-950"
              onClick={() => {
                setIsOpen(false)
                menuButtonRef.current?.focus()
              }}
            >
              Pre-order on Messenger
            </a>
          </nav>
          <p className="mobile-nav-footer text-center text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/55">
            Sayu Café <span aria-hidden="true" className="mx-2 text-accent">·</span> San Fernando, Cebu
          </p>
        </div>
      </div>
    </header>
  )
}
