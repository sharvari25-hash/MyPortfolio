import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiMiniArrowDownTray, HiMiniMapPin, HiOutlineEnvelope } from 'react-icons/hi2'
import { RiRocketFill } from 'react-icons/ri'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import TypewriterText from '../components/TypewriterText'
import { heroHighlights, personalInfo } from '../data/portfolio'

const MotionDiv = motion.div

const orbitBadges = [
  { label: 'Spring Boot', className: '-left-3 top-10 sm:-left-10', delay: 0 },
  { label: 'React.js', className: '-right-2 top-18 sm:-right-8', delay: 1.2 },
  { label: 'REST APIs', className: 'left-4 bottom-12 sm:left-0', delay: 0.6 },
  { label: 'MySQL', className: 'bottom-8 right-6 sm:right-2', delay: 1.8 },
]

function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="section-anchor relative min-h-[calc(100vh-7rem)] py-6">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-200">
              Recruiter-ready portfolio
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="space-y-4">
              <p className="font-display text-lg text-slate-200">Hi, I&apos;m Sharvari 👋</p>
              <h1 className="font-display text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Full Stack Java Developer crafting secure, high-impact digital products.
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm uppercase tracking-[0.28em] text-slate-400">Typing stack</span>
              <TypewriterText text="Java | Spring Boot | React | REST APIs" />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-balance max-w-2xl text-lg leading-8 text-slate-300/88">
              {personalInfo.summary} I love building polished interfaces, dependable backend
              systems, and smooth user experiences that feel premium from first scroll to final
              click.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToProjects}
                className="gradient-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
              >
                <RiRocketFill className="text-base" />
                View Projects
              </button>

              <a
                href={personalInfo.resume}
                download="Sharvari-Karnase-Resume.html"
                className="outline-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
              >
                <HiMiniArrowDownTray className="text-base" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <div className="glass-panel flex items-center gap-2 rounded-2xl px-4 py-3">
                <HiMiniMapPin className="text-lg text-sky-300" />
                {personalInfo.location}
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-panel flex items-center gap-2 rounded-2xl px-4 py-3 transition hover:border-indigo-400/35"
              >
                <HiOutlineEnvelope className="text-lg text-fuchsia-300" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel grid h-[50px] w-[50px] place-items-center rounded-2xl transition hover:border-indigo-400/35"
                aria-label="Sharvari Karnase on GitHub"
              >
                <FaGithub className="text-lg text-white" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel grid h-[50px] w-[50px] place-items-center rounded-2xl transition hover:border-indigo-400/35"
                aria-label="Sharvari Karnase on LinkedIn"
              >
                <FaLinkedinIn className="text-lg text-white" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <GlassPanel key={highlight.label} className="rounded-[24px] px-5 py-4">
                  <p className="font-display text-2xl font-semibold text-white">{highlight.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300/80">{highlight.label}</p>
                </GlassPanel>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <MotionDiv
              className="absolute inset-6 rounded-[36px] bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/14 to-sky-400/20 blur-3xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.45, 0.3] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <GlassPanel className="rounded-[36px] p-5 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />

              <div className="relative mx-auto aspect-[0.92] w-full max-w-[420px] rounded-[32px] border border-white/10 bg-slate-950/75 p-4">
                <div className="gradient-ring" />
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
                  <img
                    src={personalInfo.profileImage}
                    alt="Stylized portrait illustration of Sharvari Karnase"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {orbitBadges.map((badge) => (
                <MotionDiv
                  key={badge.label}
                  className={`absolute ${badge.className} glass-panel rounded-full px-4 py-2 text-sm font-medium text-slate-100`}
                  animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
                  transition={{
                    duration: 5.6,
                    delay: badge.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {badge.label}
                </MotionDiv>
              ))}

              <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-slate-950/68 p-4 shadow-[0_12px_30px_rgba(2,6,23,0.3)] backdrop-blur-md">
                <p className="font-display text-lg font-semibold text-white">{personalInfo.role}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300/80">
                  Building responsive UIs, secure authentication flows, and dependable API-driven
                  applications.
                </p>
              </div>
            </GlassPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection
