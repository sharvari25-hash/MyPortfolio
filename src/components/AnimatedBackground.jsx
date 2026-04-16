import { motion } from 'framer-motion'

const particles = [
  { left: '8%', top: '16%', size: 6, delay: 0.2, duration: 7.5 },
  { left: '18%', top: '56%', size: 10, delay: 1.3, duration: 8.8 },
  { left: '26%', top: '30%', size: 8, delay: 2.2, duration: 9.2 },
  { left: '38%', top: '74%', size: 6, delay: 0.7, duration: 7.2 },
  { left: '46%', top: '18%', size: 8, delay: 2.8, duration: 10.2 },
  { left: '58%', top: '62%', size: 12, delay: 1.8, duration: 9.8 },
  { left: '66%', top: '24%', size: 7, delay: 3.2, duration: 8.4 },
  { left: '74%', top: '78%', size: 9, delay: 1.1, duration: 8.7 },
  { left: '84%', top: '40%', size: 10, delay: 2.5, duration: 9.4 },
  { left: '92%', top: '68%', size: 6, delay: 0.9, duration: 7.8 },
]
const MotionDiv = motion.div
const MotionSpan = motion.span

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <MotionDiv
        className="absolute left-[-8rem] top-[-6rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/16 blur-3xl"
        animate={{ x: [0, 48, 0], y: [0, 26, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionDiv
        className="absolute right-[-10rem] top-[10%] h-[26rem] w-[26rem] rounded-full bg-indigo-500/14 blur-3xl"
        animate={{ x: [0, -56, 0], y: [0, 34, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionDiv
        className="absolute bottom-[-8rem] left-[18%] h-[22rem] w-[22rem] rounded-full bg-sky-400/12 blur-3xl"
        animate={{ x: [0, 42, 0], y: [0, -24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_32%)]" />

      {particles.map((particle) => (
        <MotionSpan
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-white/22 shadow-[0_0_22px_rgba(125,211,252,0.35)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.22, 1],
            opacity: [0.18, 0.55, 0.18],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
