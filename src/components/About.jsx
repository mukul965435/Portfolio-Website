import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Code2, Rocket, Search } from 'lucide-react'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const highlights = [
  { icon: GraduationCap, label: 'University', value: 'Lovely Professional University' },
  { icon: Calendar, label: 'Duration', value: '2023 – 2027' },
  { icon: MapPin, label: 'Location', value: 'Punjab, India' },
  { icon: Code2, label: 'Focus', value: 'Full Stack Development' },
]

const passions = [
  { icon: Code2, text: 'Building scalable web apps' },
  { icon: Rocket, text: 'Learning system design & architecture' },
  { icon: Search, text: 'Exploring backend optimization' },
]

export default function About({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Section label */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-center mb-16"
      >
        <span className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? 'text-accent-light/60' : 'text-accent/60'}`}>
          01 / About
        </span>
        <h2 className={`font-display font-bold text-4xl md:text-5xl mt-3 ${dark ? 'text-white' : 'text-black'}`}>
          Who I <span className="gradient-text">Am</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Avatar/Visual */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
            {/* Rotating border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-dashed border-neon/20"
            />

            {/* Avatar placeholder */}
            <div className={`absolute inset-6 rounded-full flex items-center justify-center overflow-hidden border-4 ${dark ? 'border-white/10 bg-gradient-to-br from-accent/20 to-purple-900/40' : 'border-black/10 bg-gradient-to-br from-accent/10 to-purple-100'}`}>
              <div className="text-center">
                <div className="font-display font-black text-7xl text-accent/40">MK</div>
                <div className={`font-mono text-xs mt-2 ${dark ? 'text-white/30' : 'text-black/30'}`}>
                  &lt;developer /&gt;
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute -right-4 top-1/4 px-3 py-2 rounded-xl text-xs font-mono font-medium shadow-lg ${dark ? 'bg-accent text-white' : 'bg-accent text-white'}`}
            >
              React ⚛️
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute -left-4 bottom-1/4 px-3 py-2 rounded-xl text-xs font-mono font-medium shadow-lg ${dark ? 'bg-emerald-500/80 text-white' : 'bg-emerald-500 text-white'}`}
            >
              Node.js 🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.p
            variants={fadeUp}
            className={`text-lg leading-relaxed mb-6 ${dark ? 'text-white/70' : 'text-black/70'}`}
          >
            I'm a passionate B.Tech Computer Science student at{' '}
            <span className={`font-semibold ${dark ? 'text-white' : 'text-black'}`}>Lovely Professional University</span>, 
            deeply interested in full stack development and building real-world scalable applications.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className={`text-base leading-relaxed mb-8 ${dark ? 'text-white/60' : 'text-black/60'}`}
          >
            Currently exploring React, backend development, and system design — I love turning ideas 
            into production-ready products. I'm actively seeking{' '}
            <span className="text-accent font-medium">internships and software engineering opportunities</span>.
          </motion.p>

          {/* Highlights grid */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-3 mb-8">
            {highlights.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={`flex items-start gap-3 p-4 rounded-2xl transition-all ${
                  dark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-black/5 hover:bg-black/10 border border-black/10'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={14} className="text-accent-light" />
                </div>
                <div>
                  <div className={`text-xs font-mono uppercase tracking-wider mb-0.5 ${dark ? 'text-white/40' : 'text-black/40'}`}>{label}</div>
                  <div className={`text-sm font-medium ${dark ? 'text-white/90' : 'text-black/90'}`}>{value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Currently */}
          <motion.div variants={fadeUp}>
            <h3 className={`font-display font-semibold text-sm uppercase tracking-widest mb-3 ${dark ? 'text-white/40' : 'text-black/40'}`}>
              Currently into
            </h3>
            <div className="flex flex-col gap-2">
              {passions.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <span className={`text-sm ${dark ? 'text-white/70' : 'text-black/70'}`}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
