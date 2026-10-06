import Reveal from './Reveal'
import Icon from './Icon'
import { services } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-linen px-6 py-24 paper-grain sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-clay/50" />
            <span className="eyebrow">Our Care</span>
            <span className="h-px w-8 bg-clay/50" />
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-bark sm:text-[2.75rem]">
            Everything we do is built around comfort.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bark-soft">
            Everyday help, engaging activities, and attentive care for a small number of
            residents.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 90}
              className="group relative flex flex-col gap-4 rounded-3xl border border-bark/5 bg-cream p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-clay/10 text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                <Icon name={service.icon} className="size-7" />
              </span>
              <h3 className="font-display text-xl text-bark">{service.title}</h3>
              <p className="text-sm leading-relaxed text-bark-soft">{service.text}</p>
              <span className="mt-auto h-px w-10 bg-clay/30 transition-all duration-300 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
