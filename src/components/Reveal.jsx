import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Reveal({ children, className = '', delay = 0, amount = 0.3 }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  )
}

export default Reveal
