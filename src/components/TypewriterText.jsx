import { useEffect, useMemo, useState } from 'react'

function TypewriterText({ text }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    let timeoutId

    if (phase === 'typing' && visibleCount < text.length) {
      timeoutId = window.setTimeout(() => {
        setVisibleCount((count) => count + 1)
      }, 70)
    } else if (phase === 'typing') {
      timeoutId = window.setTimeout(() => {
        setPhase('holding')
      }, 1200)
    } else {
      timeoutId = window.setTimeout(() => {
        setVisibleCount(0)
        setPhase('typing')
      }, 500)
    }

    return () => window.clearTimeout(timeoutId)
  }, [phase, text, visibleCount])

  const visibleText = useMemo(() => text.slice(0, visibleCount), [text, visibleCount])

  return (
    <span className="inline-flex items-center text-base font-medium text-sky-200 sm:text-lg">
      {visibleText}
      <span className="ml-1 inline-block h-5 w-px animate-pulse rounded-full bg-sky-300" />
    </span>
  )
}

export default TypewriterText
