import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import { navItems } from './data/portfolio'
import AboutSection from './sections/AboutSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

const sectionIds = navItems.map((item) => item.id)
const MotionDiv = motion.div

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-32% 0px -42% 0px',
        threshold: [0.2, 0.35, 0.55, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <AnimatedBackground />
      <MotionDiv
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-sky-400 shadow-[0_0_24px_rgba(99,102,241,0.7)]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative">
        <Navbar activeSection={activeSection} items={navItems} />

        <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-4 pb-8 pt-24 sm:px-6 lg:gap-8 lg:px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
