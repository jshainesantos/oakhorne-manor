import { Quote } from 'lucide-react'
import Reveal from './Reveal'

export default function QuoteBand() {
  return (
    <section className="px-6 pb-4">
      <Reveal className="mx-auto max-w-4xl text-center">
        <Quote className="mx-auto size-10 text-clay/40" aria-hidden="true" />
        <blockquote className="mt-6 font-display text-[1.7rem] font-medium italic leading-snug text-bark sm:text-4xl sm:leading-tight">
          “To care for those who once cared for us is one of the highest honors.”
        </blockquote>
        <div className="mx-auto mt-8 h-px w-16 bg-clay/40" />
      </Reveal>
    </section>
  )
}
