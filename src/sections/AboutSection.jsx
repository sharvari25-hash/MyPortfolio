import { FaCode, FaLightbulb, FaServer } from 'react-icons/fa6'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { aboutHighlights, personalInfo } from '../data/portfolio'

const icons = [FaLightbulb, FaServer, FaCode]

function AboutSection() {
  return (
    <section id="about" className="section-anchor">
      <GlassPanel className="rounded-[34px] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="About"
              title="Building end-to-end solutions with precision, clarity, and clean execution."
              description={personalInfo.summary}
            />

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[26px] border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Strength</p>
                  <p className="font-display mt-3 text-2xl font-semibold text-white">
                    Secure full-stack delivery
                  </p>
                </div>
                <div className="rounded-[26px] border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Focus</p>
                  <p className="font-display mt-3 text-2xl font-semibold text-white">
                    API-driven product thinking
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutHighlights.map((item, index) => {
              const Icon = icons[index]

              return (
                <Reveal key={item.title} delay={0.08 + index * 0.08} className="h-full">
                  <div className="glass-panel h-full rounded-[28px] p-6">
                    <div className="inline-flex rounded-2xl bg-gradient-to-br from-fuchsia-500/18 via-indigo-500/18 to-sky-400/18 p-3 text-xl text-white">
                      <Icon />
                    </div>
                    <h3 className="font-display mt-5 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300/82">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </GlassPanel>
    </section>
  )
}

export default AboutSection
