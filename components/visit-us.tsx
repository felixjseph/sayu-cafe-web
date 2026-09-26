import { MapPin, Clock, Facebook, Navigation } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { EXTERNAL_LINKS, HOURS, LOCATION } from "@/lib/site"

export function VisitUs() {
  return (
    <section id="visit" className="section-shell bg-secondary/60">
      <div className="section-frame">
        <Reveal className="mb-14">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Come say good morning.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <Reveal className="h-full" delay={60}>
            <div className="map-panel panel-card flex h-full min-w-0 flex-col overflow-hidden">
              <div className="min-h-80 flex-1 overflow-hidden sm:min-h-[360px]">
                <iframe
                  src={LOCATION.mapEmbedUrl}
                  title="Google Map showing the Sayu Café listing in San Fernando, Cebu"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full min-h-80 w-full border-0 sm:min-h-[360px]"
                />
              </div>
              <p className="px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                Map not loading? <a href={LOCATION.mapUrl} target="_blank" rel="noopener noreferrer" className="action-link compact-link font-semibold underline underline-offset-4">Open the Sayu Café pin in Google Maps</a>.
              </p>
            </div>
          </Reveal>

          <div className="flex min-w-0 flex-col gap-4">
            <Reveal className="flex-1" delay={120}>
              <div className="panel-card flex h-full gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-card-foreground">Location</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {LOCATION.address}
                    <br />
                    {LOCATION.city}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex-1" delay={180}>
              <div className="panel-card flex h-full gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Clock size={18} />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-card-foreground">Hours</h3>
                  <ul className="mt-3 space-y-2">
                    {HOURS.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4 text-sm">
                        <span className="text-muted-foreground">{h.days}</span>
                        <span className="font-semibold text-card-foreground">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex-1" delay={240}>
              <div className="panel-card flex h-full gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Facebook size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-card-foreground">Contact</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <a href={EXTERNAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="action-link compact-link font-medium">
                      Sayu Café on Facebook
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground break-words">
                    <a href={`mailto:${LOCATION.email}`} className="action-link compact-link">
                      {LOCATION.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <a
                href={LOCATION.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-primary w-full rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <Navigation size={17} aria-hidden="true" />
                Get Directions to Sayu Café
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
