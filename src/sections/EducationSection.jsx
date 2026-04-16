import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { education } from '../data/portfolio'

function EducationSection() {
  return (
    <section id="education" className="section-anchor py-2">
      <GlassPanel className="rounded-[34px] p-6 sm:p-8 lg:p-10">
        <SectionTitle
          eyebrow="Education"
          title="Academic milestones that shaped a practical, application-driven foundation."
          description="Presented as a clean timeline to keep the experience easy to scan while maintaining the same premium visual language."
        />

        <div className="relative mt-10 space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-fuchsia-400/70 before:via-indigo-400/60 before:to-sky-400/50">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-sky-400 text-sm font-semibold text-white shadow-[0_0_18px_rgba(99,102,241,0.38)]">
                  {index + 1}
                </div>
                <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{item.duration}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200">
                      {item.detail}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </GlassPanel>
    </section>
  )
}

export default EducationSection
