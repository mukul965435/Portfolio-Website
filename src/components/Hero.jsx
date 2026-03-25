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

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-12">
        {/* Left Content */}
        <div className="text-left">
          {/* Badge */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-6"
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
            className={`font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6 ${dark ? 'text-white' : 'text-black'}`}
          >
            Mukul
            <br />
            <span className="gradient-text">Kumar</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <p className={`font-mono text-sm md:text-base font-medium tracking-widest uppercase ${dark ? 'text-white/60' : 'text-black/50'}`}>
              Bachelor of Technology in Computer Science
              <br />
              <span className="text-accent">&amp; Full Stack Developer</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className={`text-lg md:text-xl max-w-xl leading-relaxed mb-10 ${dark ? 'text-white/60' : 'text-black/60'}`}
          >
            Building scalable web applications and solving real-world problems with code. 
            Currently in my <span className={dark ? 'text-white' : 'text-black'}>3rd year</span> at LPU.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-12"
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

            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                    dark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-black/10 bg-black/5 text-black hover:bg-black/10'
                  }`}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="flex gap-8"
          >
            {[
              { label: 'Projects', value: '3+' },
              { label: 'Skills', value: '12+' },
              { label: 'Year', value: '3rd' },
            ].map((s) => (
              <div key={s.label}>
                <div className={`font-display font-bold text-2xl ${dark ? 'text-white' : 'text-black'}`}>
                  {s.value}
                </div>
                <div className={`text-[10px] font-mono uppercase tracking-widest ${dark ? 'text-white/40' : 'text-black/40'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content: Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[100px] -z-10" />
          
          <div className="relative mx-auto w-80 h-96 lg:w-[400px] lg:h-[500px]">
             {/* Frame */}
             <div className={`absolute inset-0 border-2 rounded-[2rem] ${dark ? 'border-white/10' : 'border-black/10'} -rotate-6`} />
             <div className={`absolute inset-0 border border-accent/30 rounded-[2rem] rotate-3`} />
             
             {/* Image container */}
             <div className={`absolute inset-0 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl ${dark ? 'bg-white/5' : 'bg-black/5'}`}>
                <img 
                  src="/profile.png" 
                  alt="Mukul Kumar" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-700"
                />
             </div>

             {/* Floating badge */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className={`absolute -right-6 top-20 glass p-4 rounded-2xl shadow-xl border border-white/20`}
             >
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Sparkles size={20} className="text-accent" />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase tracking-tighter opacity-50">Currently</div>
                      <div className="text-sm font-bold">Coding...</div>
                   </div>
                </div>
             </motion.div>
          </div>
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
