import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolio'

const MotionDiv = motion.div

function Navbar({ items, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <div className="mx-auto max-w-[1240px] px-4 pt-4 sm:px-6 lg:px-8">
        <div className="glass-panel flex items-center justify-between rounded-full px-3 py-3 sm:px-4">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home section"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-sky-400 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.45)]">
              SK
            </span>
            <div className="hidden min-w-0 sm:block">
              <p className="font-display text-sm font-semibold text-white">{personalInfo.name}</p>
              <p className="text-xs text-slate-400">{personalInfo.role}</p>
            </div>
          </button>

          <nav className="hide-scrollbar hidden flex-1 justify-center overflow-x-auto px-6 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {items.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-gradient-to-r from-fuchsia-500/25 via-indigo-500/25 to-sky-400/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`mailto:${personalInfo.email}`}
              className="outline-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
            >
              Let&apos;s Talk
              <HiMiniArrowUpRight className="text-base" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <MotionDiv
              className="glass-panel mt-3 rounded-[28px] p-4 lg:hidden"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <div className="grid gap-2">
                {items.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(item.id)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        isActive
                          ? 'border-indigo-400/40 bg-indigo-500/15 text-white'
                          : 'border-white/10 bg-white/[0.03] text-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="gradient-button mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-white"
                >
                  Let&apos;s Talk
                  <HiMiniArrowUpRight className="text-base" />
                </a>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
