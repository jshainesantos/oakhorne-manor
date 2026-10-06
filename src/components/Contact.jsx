import { Phone, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { contact, images } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* copy + locations + image */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay/50" />
            <span className="eyebrow">Get in Touch</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-bark sm:text-[2.75rem]">
            Let's find the right home for your loved one.
          </h2>

          <figure className="mt-8 hidden overflow-hidden rounded-2xl shadow-soft sm:block">
            <img
              src={images.activities}
              alt="Residents enjoying tea and conversation together"
              className="h-44 w-full object-cover"
              loading="lazy"
            />
          </figure>
        </Reveal>

        {/* call / text panel */}
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl bg-bark p-8 text-cream shadow-lift sm:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-60 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(176,106,59,0.5), transparent 70%)' }}
            />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-soft">
                Call or Text
              </span>
              <h3 className="mt-4 font-display text-3xl leading-snug sm:text-4xl">
                We'd love to hear from you.
              </h3>

              <a href={contact.phoneHref} className="group mt-9 block">
                <span className="text-sm font-medium text-cream/60">
                  Call or text us anytime
                </span>
                <span className="mt-1.5 block font-display text-4xl text-cream transition-colors group-hover:text-clay-soft sm:text-5xl">
                  {contact.phone}
                </span>
              </a>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.phoneHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-cream shadow-soft transition-all duration-200 hover:bg-clay-dark hover:shadow-lift"
                >
                  <Phone className="size-4" /> Call now
                </a>
                <a
                  href={contact.smsHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:border-cream/60 hover:bg-cream/5"
                >
                  <MessageCircle className="size-4" /> Text us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
