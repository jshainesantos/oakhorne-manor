import { Phone, ArrowRight, ShieldCheck } from 'lucide-react'
import { contact, images } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden paper-grain">
      {/* soft warm backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(130% 90% at 85% -10%, #f6ead6 0%, #fbf6ee 45%, #fbf6ee 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-20 -z-10 size-[460px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(211,184,139,0.45), transparent 70%)' }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-36 md:pt-44 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="reveal is-visible flex items-center gap-3">
            <span className="h-px w-8 bg-clay/50" />
            <span className="eyebrow">Assisted Living · Board &amp; Care</span>
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.06] text-bark sm:text-6xl">
            A loving home where
            <span className="relative mx-2 inline-block italic text-clay">
              seniors
            </span>
            truly belong.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-bark-soft">
            Oakhorne Manor is a residential board &amp; care home for seniors who need a
            little help with daily life — and want a warm, social, and loving place to
            call home. Fewer residents, more heart, personal attention always.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream shadow-soft transition-all duration-200 hover:bg-clay-dark hover:shadow-lift"
            >
              Contact Us
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-bark/15 bg-cream/60 px-7 py-3.5 text-sm font-semibold text-bark transition-colors duration-200 hover:border-clay/40 hover:text-clay"
            >
              <Phone className="size-4" />
              {contact.phone}
            </a>
          </div>

          {/* trust stats */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-bark/10 pt-7">
            {[
              { k: '2', l: 'Welcoming homes' },
              { k: 'Fewer', l: 'residents, more attention' },
              { k: 'Daily', l: 'care & support' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl text-clay sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-bark-soft">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Imagery — dual polaroid motif */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* main framed photo */}
            <figure className="photo-frame rotate-[2deg] transition-transform duration-500 hover:rotate-0">
              <img
                src={images.heroCouple}
                alt="An older couple sharing a warm, tender moment at home"
                className="aspect-[4/5] w-full rounded-[3px] object-cover"
                width="520"
                height="650"
                fetchpriority="high"
              />
            </figure>

            {/* secondary smaller framed photo */}
            <figure className="photo-frame absolute -bottom-10 -left-6 w-40 -rotate-[6deg] transition-transform duration-500 hover:rotate-0 sm:w-52 lg:-left-12">
              <img
                src={images.hands}
                alt="Two pairs of hands held gently together"
                className="aspect-[5/4] w-full rounded-[3px] object-cover"
                width="220"
                height="176"
                loading="lazy"
              />
            </figure>

            {/* floating badge */}
            <div className="absolute -right-3 top-6 flex items-center gap-3 rounded-2xl bg-cream/95 px-4 py-3 shadow-lift backdrop-blur-sm sm:-right-6">
              <span className="grid size-10 place-items-center rounded-full bg-sage/15 text-sage-deep">
                <ShieldCheck className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-bark-soft">
                  Recognized
                </p>
                <p className="text-sm font-semibold text-bark">Residential Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
