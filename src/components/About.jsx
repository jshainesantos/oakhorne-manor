import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { images } from '../data/site'

const points = [
  'For seniors who need help with daily activities and needs',
  'A social, loving, and engaging environment every day',
  'Equipped and staffed to provide daily care',
  'A home in a residential neighborhood',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* image stack */}
        <Reveal className="relative order-last lg:order-first">
          <figure className="photo-frame -rotate-[2deg] transition-transform duration-500 hover:rotate-0">
            <img
              src={images.companionship}
              alt="A caregiver shares a joyful moment with a smiling senior resident"
              className="aspect-[6/5] w-full rounded-[3px] object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="photo-frame absolute -bottom-12 right-0 hidden w-48 rotate-[5deg] transition-transform duration-500 hover:rotate-0 sm:block">
            <img
              src={images.handsCare}
              alt="Caring hands holding a senior's hands with reassurance"
              className="aspect-square w-full rounded-[3px] object-cover"
              loading="lazy"
            />
          </figure>
          <div
            className="pointer-events-none absolute -left-8 -top-8 -z-10 size-40 rounded-full opacity-70 blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(124,138,104,0.35), transparent 70%)' }}
          />
        </Reveal>

        {/* copy */}
        <Reveal className="max-w-xl" delay={120}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay/50" />
            <span className="eyebrow">About Us</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-bark sm:text-[2.75rem]">
            Here for you, and the people you love most.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bark-soft">
            Oakhorne Manor is a recognized Residential Care Facility for the Elderly.
            We are a home in a residential neighborhood — equipped and staffed to provide
            daily care for a small number of residents.
          </p>
          <p className="mt-4 leading-relaxed text-bark-soft">
            We are here for you and your loved ones, making sure we give them the care
            they need.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sage/20 text-sage-deep">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-snug text-bark">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
