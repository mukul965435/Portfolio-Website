import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Award, ExternalLink, Code2, BrainCircuit } from 'lucide-react'

const certifications = [
  {
    title: 'Data Structures and Algorithm',
    issuer: 'NeoColab',
    link: 'https://drive.google.com/file/d/1PhgGJPackeJYIys83O0iWEz50KBDsbr2/view',
    icon: Code2,
    color: '#7C3AED'
  },
  {
    title: 'AI & ML for Real-World Problem Solving',
    issuer: 'Certification Course',
    description: 'Completed training in AI & ML for Real-World Problem Solving, working with tools like Python, NumPy, Pandas.',
    link: 'https://drive.google.com/drive/u/0/my-drive',
    icon: BrainCircuit,
    color: '#00F5A0'
  }
]

const achievements = [
  {
    title: 'Code-A-Haunt Hackathon Lead',
    description: 'Led the large-scale “Code-A-Haunt” hackathon and several tech events, managing logistics and collaborating with industry experts and tech influencers, and achieved a Top 10 position.',
    icon: Trophy,
    stat: 'Top 10'
  },
  {
    title: 'LeetCode Problem Solver',
    description: 'Solved 200+ algorithmic problems on LeetCode. Strong understanding of Data Structures and Algorithms.',
    icon: Award,
    stat: '200+ Solved'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function Achievements({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" ref={ref} className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? 'text-accent-light/60' : 'text-accent/60'}`}>
            04 / Recognition
          </span>
          <h2 className={`font-display font-bold text-4xl md:text-5xl mt-3 ${dark ? 'text-white' : 'text-black'}`}>
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className={`font-display font-bold text-2xl mb-8 flex items-center gap-3 ${dark ? 'text-white' : 'text-black'}`}>
              <Award className="text-accent" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className={`group block p-6 rounded-2xl border transition-all duration-300 ${
                    dark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent/40' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-accent/40'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <cert.icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className={`font-bold group-hover:text-accent transition-colors ${dark ? 'text-white' : 'text-black'}`}>
                          {cert.title}
                        </h4>
                        <p className={`text-sm mb-2 ${dark ? 'text-white/40' : 'text-black/40'}`}>
                          {cert.issuer}
                        </p>
                        {cert.description && (
                          <p className={`text-xs leading-relaxed ${dark ? 'text-white/60' : 'text-black/60'}`}>
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-accent/40 group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className={`font-display font-bold text-2xl mb-8 flex items-center gap-3 ${dark ? 'text-white' : 'text-black'}`}>
              <Trophy className="text-accent" /> Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`p-6 rounded-2xl border ${
                    dark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <ach.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-bold ${dark ? 'text-white' : 'text-black'}`}>
                          {ach.title}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">
                          {ach.stat}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-black/60'}`}>
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
