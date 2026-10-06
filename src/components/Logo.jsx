/**
 * Oakhorne Manor wordmark — a small oak-leaf mark paired with a serif wordmark.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'
  const markRing = isLight ? 'border-cream/40' : 'border-clay/30'
  const markIcon = isLight ? 'text-cream' : 'text-clay'
  const name = isLight ? 'text-cream' : 'text-bark'
  const tag = isLight ? 'text-cream/70' : 'text-bark-soft'

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-full border ${markRing}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className={`size-5 ${markIcon}`} fill="currentColor">
          {/* stylised oak leaf */}
          <path d="M12 2.2c-1.4 1.5-2.2 3-2.3 4.6-1.2-.7-2.5-.9-3.9-.6 .7 1.2 1.6 2 2.7 2.5-1.3.4-2.4 1.2-3.2 2.4 1.4.4 2.7.3 3.9-.2-.6 1.3-.7 2.6-.3 4 1.2-.8 2-1.8 2.4-3.1v7.6a1 1 0 0 0 2 0v-7.6c.4 1.3 1.2 2.3 2.4 3.1 .4-1.4.3-2.7-.3-4 1.2.5 2.5.6 3.9.2-.8-1.2-1.9-2-3.2-2.4 1.1-.5 2-1.3 2.7-2.5-1.4-.3-2.7-.1-3.9.6-.1-1.6-.9-3.1-2.3-4.6Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-semibold tracking-tight ${name}`}>
          Oakhorne Manor
        </span>
        <span className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] ${tag}`}>
          Board &amp; Care Home
        </span>
      </span>
    </span>
  )
}
