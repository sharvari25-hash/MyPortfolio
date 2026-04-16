import { FaAward, FaCertificate, FaMedal } from 'react-icons/fa6'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/portfolio'

const icons = [FaAward, FaCertificate, FaMedal]

function CertificationsSection() {
  return (
    <section id="certifications" className="section-anchor py-2">
      <SectionTitle
        eyebrow="Certifications"
        title="Credentials that reinforce technical learning, initiative, and consistent growth."
        description="Each certification card is designed with the same premium motion and glass treatment to keep the portfolio cohesive."
        align="center"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((item, index) => {
          const Icon = icons[index]

          return (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <GlassPanel className="h-full rounded-[30px] p-6">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-fuchsia-500/18 via-indigo-500/18 to-sky-400/18 p-3 text-xl text-white">
                  <Icon />
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">{item.year}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300/82">{item.issuer}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button mt-6 inline-flex items-center rounded-full px-4 py-3 text-sm font-medium text-white"
                >
                  View Credential
                </a>
              </GlassPanel>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default CertificationsSection
