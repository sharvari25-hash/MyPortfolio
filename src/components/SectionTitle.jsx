import Reveal from './Reveal'

function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const descriptionAlignment = align === 'center' ? 'mx-auto' : ''

  return (
    <Reveal className={alignment}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-balance mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p
        className={`text-balance mt-4 max-w-2xl text-base leading-7 text-slate-300/85 sm:text-lg ${descriptionAlignment}`}
      >
        {description}
      </p>
    </Reveal>
  )
}

export default SectionTitle
