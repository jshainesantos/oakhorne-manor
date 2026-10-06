import { Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { contact, locations } from '../data/site'

const nav = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Care', href: '#services' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bark px-6 pb-10 pt-16 text-cream/80">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.4fr]">
          {/* brand */}
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-relaxed text-cream/60">
              A residential board &amp; care home where seniors are cared for like family —
              warm, intimate, and full of heart.
            </p>
          </div>

          {/* nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-underline text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Call or Text
            </h3>
            <a
              href={contact.phoneHref}
              className="mt-5 flex items-center gap-3 font-display text-2xl text-cream transition-colors hover:text-clay-soft"
            >
              <Phone className="size-5 text-clay-soft" />
              {contact.phone}
            </a>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {locations.map((l) => (
                <a
                  key={l.city}
                  href={l.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-sm text-cream/70"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-clay-soft" />
                  <span>
                    <span className="font-semibold text-cream/90 group-hover:text-cream">
                      {l.city}
                    </span>
                    <br />
                    {l.street}
                    <ArrowUpRight className="ml-0.5 inline size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-7 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Oakhorne Manor. All rights reserved.</p>
          <p>Recognized Residential Care Facility for the Elderly · Harbor City &amp; Anaheim, CA</p>
        </div>
      </div>
    </footer>
  )
}
