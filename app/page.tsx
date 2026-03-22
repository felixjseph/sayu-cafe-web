import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedDrinks } from "@/components/featured-drinks"
import { About } from "@/components/about"
import { MenuPreview } from "@/components/menu-preview"
import { VisitUs } from "@/components/visit-us"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <About />
      <MenuPreview />
      <VisitUs />
      <Gallery />
      <Footer />
    </main>
  )
}
