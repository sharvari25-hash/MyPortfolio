import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiMiniArrowUpRight, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { personalInfo } from '../data/portfolio'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

function ContactSection() {
  const [formValues, setFormValues] = useState(initialValues)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Portfolio enquiry from ${formValues.name || 'a recruiter'}`
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`,
    )

    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    setStatus('Your mail client is ready with a drafted message.')
    setFormValues(initialValues)
  }

  return (
    <section id="contact" className="section-anchor py-2">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <GlassPanel className="h-full rounded-[32px] p-6 sm:p-8">
            <SectionTitle
              eyebrow="Contact"
              title={"Let's Build Something Amazing \u{1F680}"}
              description="If you are hiring for a full-stack Java role or want to collaborate on a product idea, I would love to connect."
            />

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block rounded-[24px] border border-white/10 bg-slate-950/55 p-5 transition hover:border-indigo-400/35"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-sky-400/16 text-lg text-white">
                    <HiOutlineEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-base font-medium text-white">{personalInfo.email}</p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="block rounded-[24px] border border-white/10 bg-slate-950/55 p-5 transition hover:border-indigo-400/35"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-sky-400/16 text-lg text-white">
                    <HiOutlinePhone />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-base font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="outline-button inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="outline-button inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white"
              >
                <FaLinkedinIn className="text-base" />
                LinkedIn
              </a>
            </div>
          </GlassPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassPanel className="rounded-[32px] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-indigo-400/50"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-indigo-400/50"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project."
                  className="w-full rounded-[24px] border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-indigo-400/50"
                  required
                />
              </label>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="gradient-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Send Message
                  <HiMiniArrowUpRight className="text-base" />
                </button>
                {status && <p className="text-sm text-slate-300/82">{status}</p>}
              </div>
            </form>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
