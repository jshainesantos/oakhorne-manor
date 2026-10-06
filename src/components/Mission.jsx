import { HeartHandshake } from 'lucide-react'
import Reveal from './Reveal'
import { images } from '../data/site'

export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-24 px-6 py-24 sm:py-28">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-bark shadow-lift">
        <div className="grid lg:grid-cols-2">
          {/* image */}
          <div className="relative min-h-[340px] lg:min-h-full">
            <img
              src={images.careTea}
              alt="A caregiver brings tea to a resident in her sunlit room"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, transparent 55%, rgba(46,42,35,0.55) 100%)',
              }}
            />
          </div>

          {/* copy */}
          <div className="px-8 py-14 sm:px-12 lg:py-20">
            <span className="grid size-12 place-items-center rounded-full bg-clay/20 text-clay-soft">
              <HeartHandshake className="size-6" />
            </span>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-clay-soft/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-soft">
                Our Mission
              </span>
            </div>
            <h2 className="mt-5 font-display text-3xl leading-snug text-cream sm:text-4xl">
              Peace of mind for families, dignity for every resident.
            </h2>
            <p className="mt-6 leading-relaxed text-cream/75">
              Oakhorne Manor plays a critical role in caring for seniors and bringing peace
              of mind to families in need of care for loved ones. The long-term cost of
              non-acute residential care for the elderly is typically much lower than living
              in a nursing home full-time.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8">
              <div>
                <p className="font-display text-3xl text-clay-soft">Lower</p>
                <p className="mt-1 text-sm text-cream/60">cost than full-time nursing homes</p>
              </div>
              <div>
                <p className="font-display text-3xl text-clay-soft">Personal</p>
                <p className="mt-1 text-sm text-cream/60">attention with fewer residents</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
