import { motion } from 'framer-motion'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { skillGroups } from '../data/portfolio'

const MotionDiv = motion.div

function SkillsSection() {
  return (
    <section id="skills" className="section-anchor py-2">
      <SectionTitle
        eyebrow="Skills"
        title="A modern full-stack toolkit for frontend polish, backend structure, and product delivery."
        description="Each stack area is presented as an animated glass card, balancing visual storytelling with recruiter-friendly clarity."
        align="center"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.06} className="h-full">
            <GlassPanel className="h-full rounded-[30px] p-6">
              <div className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${group.accent}`} />
              <div
                className={`inline-flex rounded-full bg-gradient-to-r ${group.accent} px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white`}
              >
                {group.title}
              </div>

              <div className="mt-6 space-y-5">
                {group.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <span className="text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/6">
                      <MotionDiv
                        className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 0.8,
                          delay: groupIndex * 0.08 + skillIndex * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
