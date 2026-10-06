import { MapPin, ArrowUpRight, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { locations, contact } from '../data/site'

export default function Locations() {
  return (
    <section id="locations" className="scroll-mt-20 bg-linen px-6 py-24 paper-grain sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay/50" />
            <span className="eyebrow">Our Homes</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-bark sm:text-[2.75rem]">
            Two welcoming homes in Southern California.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bark-soft">
            Both of our homes sit in residential neighborhoods — a cozy, homelike place for
            seniors to feel cared for. Reach out anytime to learn more.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal
              key={loc.city}
              delay={i * 120}
              className="group relative overflow-hidden rounded-3xl border border-bark/5 bg-cream p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle, rgba(176,106,59,0.22), transparent 70%)' }}
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-clay/10 text-clay">
                    <MapPin className="size-6" />
                  </span>
                  <div>
                    <p className="eyebrow text-[0.65rem]">Location {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-display text-2xl text-bark">{loc.city}</h3>
                  </div>
                </div>
              </div>

              <address className="mt-7 not-italic leading-relaxed text-bark-soft">
                <p className="text-lg font-medium text-bark">{loc.street}</p>
                <p>{loc.region}</p>
                <p>{loc.country}</p>
              </address>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-bark/10 pt-6">
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-clay transition-colors hover:text-clay-dark"
                >
                  Get Directions
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-bark-soft transition-colors hover:text-bark"
                >
                  <Phone className="size-4" />
                  {contact.phone}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
