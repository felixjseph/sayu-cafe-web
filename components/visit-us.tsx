import { MapPin, Clock, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"

const LOCATION = {
  address: "South Poblacion San Fernando, Cebu 6018",
  city: "Cebu, Philippines 6018",
  phone: "+63 9432 469 897",
  email: "sayucafe.cebu@gmail.com",
}

const HOURS = [
  { days: "Monday - Sunday", hours: "9:00 am - 10:00 pm" }
]

export function VisitUs() {
  return (
    <section id="visit" className="section-shell bg-secondary/60">
      <div className="section-frame">
        <Reveal className="mb-14">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Come say good morning.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal delay={60}>
            <div className="panel-card flex min-h-72 flex-col items-center justify-center gap-3 overflow-hidden p-10 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,81,163,0.14),transparent_45%)]" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_22px_40px_-24px_rgba(50,81,163,0.95)]">
                <MapPin size={26} />
              </div>
              <p className="relative text-lg font-semibold text-foreground">{LOCATION.address}</p>
              <p className="relative text-sm text-muted-foreground">{LOCATION.city}</p>
              <a
                href="https://maps.app.goo.gl/pyGvRWvxKDpN7kMT6"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-3 rounded-full border border-primary/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={120}>
              <div className="panel-card flex gap-4 p-6">
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

            <Reveal delay={180}>
              <div className="panel-card flex gap-4 p-6">
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

            <Reveal delay={240}>
              <div className="panel-card flex gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-card-foreground">Contact</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <a href={`tel:${LOCATION.phone}`} className="hover:text-primary">
                      {LOCATION.phone}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <a href={`mailto:${LOCATION.email}`} className="hover:text-primary">
                      {LOCATION.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
