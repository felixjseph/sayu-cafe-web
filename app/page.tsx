import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedDrinks } from "@/components/featured-drinks"
import { About } from "@/components/about"
import { MenuPreview } from "@/components/menu-preview"
import { VisitUs } from "@/components/visit-us"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { CustomDrink } from "@/components/custom-drink"
import { EXTERNAL_LINKS, LOCATION } from "@/lib/site"

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Sayu Café",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Fernando",
    addressRegion: "Cebu",
    postalCode: "6018",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LOCATION.latitude,
    longitude: LOCATION.longitude,
  },
  hasMap: LOCATION.mapUrl,
  sameAs: [EXTERNAL_LINKS.facebook],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>
        <Hero />
        <FeaturedDrinks />
        <About />
        <MenuPreview />
        <CustomDrink />
        <VisitUs />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
