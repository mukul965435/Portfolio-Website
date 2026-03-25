import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'HireSnap',
    tagline: 'Full Stack Hiring Platform',
    description:
      'A comprehensive hiring platform that connects recruiters with candidates. Features include authentication, role-based dashboards for both recruiters and candidates, seamless resume uploads, and intuitive job posting workflows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    accent: '#7C3AED',
    accentLight: 'from-violet-600 to-purple-700',
    accentBg: 'from-violet-500/10 to-purple-600/5',
    number: '01',
    emoji: '🎯',
    links: { github: 'https://github.com', live: 'https://hiresnap.vercel.app' },
    features: ['Role-based Auth', 'Resume Uploads', 'Job Posting', 'Dashboard'],
  },
  {
    id: 2,
    name: 'SafarX',
    tagline: 'Smart Travel Platform',
    description:
      'A travel platform that helps users explore destinations worldwide, manage travel budgets intelligently, and plan comprehensive trips with ease. Designed to make travel planning intuitive and stress-free.',
    tags: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    accent: '#059669',
    accentLight: 'from-emerald-600 to-teal-700',
    accentBg: 'from-emerald-500/10 to-teal-600/5',
    number: '02',
    emoji: '✈️',
    links: { github: 'https://github.com', live: '#' },
    features: ['Destination Explorer', 'Budget Manager', 'Trip Planner', 'Maps Integration'],
  },
  {
    id: 3,
    name: 'FER System',
    tagline: 'Facial Emotion Recognition',
    description:
      'A machine learning project that detects and classifies human emotions using facial expressions in real-time. Built using computer vision techniques and deep learning models trained on facial datasets.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    accent: '#EA580C',
    accentLight: 'from-orange-600 to-amber-700',
    accentBg: 'from-orange-500/10 to-amber-600/5',
    number: '03',
    emoji: '🧠',
    links: { github: 'https://github.com', live: '#' },
    features: ['Real-time Detection', 'Multi-emotion', 'OpenCV', 'CNN Model'],
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
})

function ProjectCard({ project, dark, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(index * 0.15)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group rounded-3xl overflow-hidden transition-all duration-500 cursor-default ${
        dark
          ? 'bg-white/5 border border-white/10 hover:border-white/20'
          : 'bg-black/5 border border-black/10 hover:border-black/20'
      } ${hovered ? 'shadow-2xl' : ''}`}
      style={{ boxShadow: hovered ? `0 25px 50px ${project.accent}20` : '' }}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accentLight}`} />

      {/* Card background gradient on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.accentBg} pointer-events-none`}
      />

      <div className="relative p-8">
        {/* Number + emoji */}
        <div className="flex items-center justify-between mb-6">
          <span className={`font-mono font-bold text-4xl ${dark ? 'text-white/10' : 'text-black/10'}`}>
            {project.number}
          </span>
          <motion.span
            animate={{ rotate: hovered ? 15 : 0, scale: hovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl"
          >
            {project.emoji}
          </motion.span>
        </div>

        {/* Title */}
        <h3 className={`font-display font-bold text-2xl mb-1 ${dark ? 'text-white' : 'text-black'}`}>
          {project.name}
        </h3>
        <p className="text-sm font-mono mb-4" style={{ color: project.accent }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-white/60' : 'text-black/60'}`}>
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((f) => (
            <span
              key={f}
              className={`text-xs px-2.5 py-1 rounded-full font-mono ${
                dark ? 'bg-white/5 text-white/60 border border-white/10' : 'bg-black/5 text-black/60 border border-black/10'
              }`}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full font-mono font-medium"
              style={{
                background: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              dark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            <Github size={14} />
            Code
          </motion.a>
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
            style={{ background: project.accent }}
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.a>
          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            className="ml-auto"
          >
            <ArrowRight size={18} style={{ color: project.accent }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute right-0 top-1/2 w-96 h-96 rounded-full blur-3xl ${dark ? 'bg-accent/5' : 'bg-accent/3'}`} />
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
            03 / Projects
          </span>
          <h2 className={`font-display font-bold text-4xl md:text-5xl mt-3 ${dark ? 'text-white' : 'text-black'}`}>
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className={`mt-4 text-base max-w-md mx-auto ${dark ? 'text-white/50' : 'text-black/50'}`}>
            A selection of projects that showcase my skills and problem-solving approach.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} dark={dark} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold border transition-all ${
              dark
                ? 'border-accent/40 text-accent-light hover:bg-accent/10'
                : 'border-accent/40 text-accent hover:bg-accent/5'
            }`}
          >
            <Github size={18} />
            View All on GitHub
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
