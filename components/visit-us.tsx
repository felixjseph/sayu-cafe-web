import { MapPin, Clock, Phone, Mail } from "lucide-react"

// Update location details here
const LOCATION = {
  address: "12 Morning Lane, Shibuya",
  city: "Tokyo, Japan 150-0002",
  phone: "+81 3-1234-5678",
  email: "hello@sayucafe.jp",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.676!2d139.6917!3d35.6894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjkiTiAxMznCsDQxJzMwLjEiRQ!5e0!3m2!1sen!2sjp!4v1",
}

const HOURS = [
  { days: "Monday – Friday", hours: "7:00 am – 6:00 pm" },
  { days: "Saturday", hours: "8:00 am – 7:00 pm" },
  { days: "Sunday", hours: "8:00 am – 5:00 pm" },
]

export function VisitUs() {
  return (
    <section id="visit" className="bg-background py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
            Find Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight">
            Come say good morning.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-72 lg:h-auto bg-muted relative">
            {/* Map placeholder — replace src with your real embed URL */}
            <div className="w-full h-full min-h-72 flex flex-col items-center justify-center bg-secondary gap-3">
              <MapPin size={36} className="text-primary" />
              <p className="text-sm font-medium text-foreground">{LOCATION.address}</p>
              <p className="text-xs text-muted-foreground">{LOCATION.city}</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs font-medium text-primary underline underline-offset-4"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-card border border-border rounded-2xl p-6 flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 h-fit">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {LOCATION.address}
                  <br />
                  {LOCATION.city}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-2xl p-6 flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 h-fit">
                <Clock size={18} />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-semibold text-card-foreground mb-3">Hours</h3>
                <ul className="space-y-2">
                  {HOURS.map((h) => (
                    <li key={h.days} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className="font-medium text-card-foreground">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card border border-border rounded-2xl p-6 flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 h-fit">
                <Phone size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground mb-1">Contact</h3>
                <p className="text-sm text-muted-foreground">
                  <a href={`tel:${LOCATION.phone}`} className="hover:text-primary transition-colors">
                    {LOCATION.phone}
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <a href={`mailto:${LOCATION.email}`} className="hover:text-primary transition-colors">
                    {LOCATION.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
