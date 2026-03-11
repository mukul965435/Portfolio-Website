import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    label: 'Frontend',
    emoji: '🎨',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 78 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    label: 'Backend',
    emoji: '⚙️',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
    ],
  },
  {
    label: 'Database',
    emoji: '🗄️',
    color: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/20',
    skills: [
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    label: 'Tools',
    emoji: '🛠️',
    color: 'from-blue-500 to-cyan-600',
    glow: 'shadow-blue-500/20',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 83 },
      { name: 'Docker', level: 55 },
      { name: 'AWS Basics', level: 45 },
    ],
  },
]

const techLogos = [
  { name: 'React', bg: '#61DAFB20', color: '#61DAFB', symbol: '⚛' },
  { name: 'Node.js', bg: '#3C873A20', color: '#3C873A', symbol: '⬡' },
  { name: 'MongoDB', bg: '#47A24820', color: '#47A248', symbol: '🍃' },
  { name: 'Express', bg: '#00000020', color: '#888', symbol: '≡' },
  { name: 'Tailwind', bg: '#06B6D420', color: '#06B6D4', symbol: '💨' },
  { name: 'Docker', bg: '#2496ED20', color: '#2496ED', symbol: '🐳' },
  { name: 'Git', bg: '#F0502920', color: '#F05029', symbol: '⎇' },
  { name: 'AWS', bg: '#FF990020', color: '#FF9900', symbol: '☁' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

function SkillBar({ name, level, dark, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium ${dark ? 'text-white/80' : 'text-black/80'}`}>{name}</span>
        <span className={`font-mono text-xs ${dark ? 'text-white/40' : 'text-black/40'}`}>{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-white/10' : 'bg-black/10'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
        />
      </div>
    </div>
  )
}

export default function Skills({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? 'text-accent-light/60' : 'text-accent/60'}`}>
            02 / Skills
          </span>
          <h2 className={`font-display font-bold text-4xl md:text-5xl mt-3 ${dark ? 'text-white' : 'text-black'}`}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className={`mt-4 text-base max-w-md mx-auto ${dark ? 'text-white/50' : 'text-black/50'}`}>
            Tools and technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Tech logo grid */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-16"
        >
          {techLogos.map(({ name, bg, color, symbol }, i) => (
            <motion.div
              key={name}
              variants={fadeUp(i * 0.04)}
              whileHover={{ scale: 1.1, y: -4 }}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl cursor-default transition-all ${
                dark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-black/5 hover:bg-black/10 border border-black/10'
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: bg }}
              >
                <span style={{ color }}>{symbol}</span>
              </div>
              <span className={`text-xs font-mono text-center leading-tight ${dark ? 'text-white/50' : 'text-black/50'}`}>
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ label, emoji, color, glow, skills }, catIdx) => (
            <motion.div
              key={label}
              variants={fadeUp(catIdx * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-3xl transition-all duration-300 ${
                dark
                  ? `bg-white/5 border border-white/10 hover:border-white/20 shadow-lg ${glow}`
                  : `bg-black/5 border border-black/10 hover:border-black/20 shadow-lg ${glow}`
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${color}`}>
                  {emoji}
                </div>
                <h3 className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-black'}`}>
                  {label}
                </h3>
              </div>
              {skills.map((s, si) => (
                <SkillBar key={s.name} {...s} dark={dark} delay={catIdx * 0.1 + si * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
