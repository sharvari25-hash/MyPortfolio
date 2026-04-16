import { HiMiniArrowUpRight } from 'react-icons/hi2'
import { RiBriefcase4Line, RiGitRepositoryLine, RiShieldCheckLine } from 'react-icons/ri'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/portfolio'

const highlights = [
  {
    title: 'Production Mindset',
    description: 'Debugging, deployment, and clean release habits across full-stack flows.',
    icon: RiShieldCheckLine,
  },
  {
    title: 'Collaboration',
    description: 'GitHub-first workflow for versioning, reviews, and iteration speed.',
    icon: RiGitRepositoryLine,
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="section-anchor py-2">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <GlassPanel className="h-full rounded-[32px] p-6 sm:p-8">
            <SectionTitle
              eyebrow="Experience"
              title="Hands-on industry exposure focused on full-stack Java development."
              description="A valuable internship where product delivery, APIs, testing, and collaboration came together in real development cycles."
            />

            <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/55 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Company</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                    {experience.company}
                  </h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/25 via-indigo-500/20 to-sky-400/18 text-xl text-white">
                  <RiBriefcase4Line />
                </div>
              </div>

              <p className="mt-4 text-lg font-medium text-slate-200">{experience.role}</p>
              <p className="mt-2 text-sm text-slate-400">{experience.duration}</p>

              <a
                href={experience.certificate}
                target="_blank"
                rel="noreferrer"
                className="gradient-button mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
              >
                <HiMiniArrowUpRight className="text-base" />
                View Certificate
              </a>
            </div>
          </GlassPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassPanel className="h-full rounded-[32px] p-6 sm:p-8">
            <div className="space-y-4">
              {experience.points.map((point, index) => (
                <div
                  key={point}
                  className="rounded-[24px] border border-white/10 bg-slate-950/55 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="inline-flex rounded-2xl bg-gradient-to-br from-fuchsia-500/18 via-indigo-500/18 to-sky-400/18 p-3 text-xl text-white">
                      <Icon />
                    </div>
                    <h3 className="font-display mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300/80">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  )
}

export default ExperienceSection
