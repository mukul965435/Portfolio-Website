import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Download, Sparkles } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
})

const roles = ['Full Stack Developer', 'React Developer', 'Problem Solver', 'CS Student']

export default function Hero({ dark }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-neon/5 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-32">
        {/* Badge */}
        <motion.div
           variants={fadeUp(0)}
           initial="hidden"
           animate="visible"
           className="inline-flex items-center gap-2 mb-8"
        >
          <span className={`tag ${dark ? 'border-accent/30 bg-accent/10 text-accent-light' : 'border-accent/20 bg-accent/5 text-accent'}`}>
            <Sparkles size={12} className="mr-1" />
            Open to Internships &amp; Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className={`font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-4 ${dark ? 'text-white' : 'text-black'}`}
        >
          Mukul
          <br />
          <span className="gradient-text">Kumar</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className={`h-px flex-1 max-w-16 ${dark ? 'bg-white/20' : 'bg-black/20'}`} />
          <motion.p
            className={`font-mono text-sm md:text-base font-medium tracking-widest uppercase ${dark ? 'text-white/60' : 'text-black/50'}`}
          >
            Bachelor of Technology in Computer Science &amp; Full Stack Developer
          </motion.p>
          <div className={`h-px flex-1 max-w-16 ${dark ? 'bg-white/20' : 'bg-black/20'}`} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 ${dark ? 'text-white/60' : 'text-black/60'}`}
        >
          Building scalable web applications and solving real-world problems with code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary bg-accent text-white shadow-lg shadow-accent/30 px-8 py-4 text-base"
          >
            View My Work
            <ArrowDown size={16} />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`btn-primary border text-sm px-6 py-4 ${
              dark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-black/20 text-black hover:bg-black/5'
            }`}
          >
            <Github size={16} />
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary bg-[#0A66C2] text-white text-sm px-6 py-4"
          >
            <Linkedin size={16} />
            LinkedIn
          </motion.a>

          <motion.a
            href="#"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`btn-primary border text-sm px-6 py-4 ${
              dark
                ? 'border-neon/40 text-neon hover:bg-neon/10'
                : 'border-emerald-500/40 text-emerald-600 hover:bg-emerald-50'
            }`}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { label: 'Projects', value: '3+' },
            { label: 'Skills', value: '12+' },
            { label: 'Year', value: '3rd' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-display font-bold text-3xl ${dark ? 'text-white' : 'text-black'}`}>
                {s.value}
              </div>
              <div className={`text-xs font-mono uppercase tracking-widest ${dark ? 'text-white/40' : 'text-black/40'}`}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-px h-12 ${dark ? 'bg-gradient-to-b from-white/30 to-transparent' : 'bg-gradient-to-b from-black/20 to-transparent'}`}
        />
        <span className={`font-mono text-xs uppercase tracking-widest ${dark ? 'text-white/30' : 'text-black/30'}`}>scroll</span>
      </motion.div>
    </section>
  )
}
