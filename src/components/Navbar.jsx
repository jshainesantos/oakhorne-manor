import { useEffect, useState } from 'react'
import { Phone, Menu, X, MapPin } from 'lucide-react'
import Logo from './Logo'
import { contact } from '../data/site'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Care', href: '#services' },
  { label: 'Our Home', href: '#mission' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact strip */}
      <div className="bg-bark text-cream/90">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-5 py-2 text-[0.72rem] sm:px-6 sm:text-xs md:justify-between">
          <p className="flex items-center gap-1.5 tracking-wide">
            <MapPin className="size-3.5 shrink-0 text-clay-soft" aria-hidden="true" />
            <span className="sm:hidden">Two welcoming homes · Harbor City &amp; Anaheim</span>
            <span className="hidden sm:inline">
              Two welcoming homes — Harbor City &amp; Anaheim, California
            </span>
          </p>
          <a
            href={contact.phoneHref}
            className="link-underline hidden items-center gap-2 font-medium tracking-wide md:flex"
          >
            <Phone className="size-3.5 text-clay-soft" aria-hidden="true" />
            Call or text us · {contact.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-cream/85 shadow-soft backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" aria-label="Oakhorne Manor — home">
            <Logo />
          </a>

          <div className="flex items-center gap-5 lg:gap-9">
            <div className="hidden items-center gap-6 md:flex lg:gap-9">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-sm font-medium text-bark/80 transition-colors hover:text-bark"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={contact.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-all duration-200 hover:bg-clay-dark hover:shadow-lift lg:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              Contact Us
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full border border-bark/15 text-bark md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-bark/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream px-6 pb-10 pt-6 shadow-lift transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full border border-bark/15 text-bark"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-bark/10 py-4 font-display text-xl text-bark transition-colors hover:text-clay"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={contact.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-clay px-5 py-3.5 text-sm font-semibold text-cream shadow-soft"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {contact.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
