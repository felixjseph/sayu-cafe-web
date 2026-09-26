"use client"

import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

type ScrollContextValue = {
  navigateTo: (hash: string) => void
  setScrollLocked: (locked: boolean) => void
}

const ScrollContext = createContext<ScrollContextValue | null>(null)

export function useSiteScroll() {
  const context = useContext(ScrollContext)
  if (!context) throw new Error("useSiteScroll must be used within SmoothScrollProvider")
  return context
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const lockRef = useRef({ locked: false, previousOverflow: "", previousPadding: "" })

  const setScrollLocked = useCallback((locked: boolean) => {
    if (lockRef.current.locked === locked) return

    if (locked) {
      lockRef.current.previousOverflow = document.documentElement.style.overflow
      lockRef.current.previousPadding = document.body.style.paddingRight
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
      document.documentElement.style.overflow = "hidden"
      lenisRef.current?.stop()
    } else {
      document.documentElement.style.overflow = lockRef.current.previousOverflow
      document.body.style.paddingRight = lockRef.current.previousPadding
      lenisRef.current?.start()
    }
    lockRef.current.locked = locked
  }, [])

  const navigateTo = useCallback((hash: string) => {
    const target = document.getElementById(hash.slice(1))
    if (!target) return

    if (window.location.hash !== hash) window.history.pushState(null, "", hash)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (lenisRef.current) {
      lenisRef.current.scrollTo(hash === "#home" ? 0 : target, {
        immediate: reducedMotion,
      })
    } else {
      target.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" })
    }
  }, [])

  useEffect(() => {
    const scrollLock = lockRef.current
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.13,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    })
    lenisRef.current = lenis

    const onPopState = () => {
      if (window.location.hash) {
        const target = document.getElementById(window.location.hash.slice(1))
        if (target) lenis.scrollTo(window.location.hash === "#home" ? 0 : target, { immediate: true })
      }
    }

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href^='#']")
      const hash = anchor?.getAttribute("href")
      if (!hash || !document.getElementById(hash.slice(1))) return
      event.preventDefault()
      navigateTo(hash)
    }

    window.addEventListener("popstate", onPopState)
    document.addEventListener("click", onAnchorClick)
    return () => {
      window.removeEventListener("popstate", onPopState)
      document.removeEventListener("click", onAnchorClick)
      if (scrollLock.locked) {
        document.documentElement.style.overflow = scrollLock.previousOverflow
        document.body.style.paddingRight = scrollLock.previousPadding
      }
      lenis.destroy()
      lenisRef.current = null
    }
  }, [navigateTo])

  return <ScrollContext.Provider value={{ navigateTo, setScrollLocked }}>{children}</ScrollContext.Provider>
}
