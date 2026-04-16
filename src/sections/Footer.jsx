import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { personalInfo } from '../data/portfolio'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-8 pt-2">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[28px] px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">{personalInfo.name}</p>
              <p className="mt-1 text-sm text-slate-400">
                Copyright {year}. Built with React + Tailwind.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="outline-button grid h-11 w-11 place-items-center rounded-full text-white"
                aria-label="Sharvari Karnase GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="outline-button grid h-11 w-11 place-items-center rounded-full text-white"
                aria-label="Sharvari Karnase LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
