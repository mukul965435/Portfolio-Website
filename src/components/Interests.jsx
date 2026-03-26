import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Dumbbell, 
  Shirt, 
  Scissors, 
  BookOpen, 
  Film, 
  Users, 
  Zap, 
  MessageSquare, 
  Target, 
  RefreshCcw, 
  Brain, 
  Clock,
  Smartphone,
  Video,
  Palette,
  Sparkles,
  BarChart3,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } 
  },
})

const hobbies = [
  {
    title: 'Gym',
    icon: <Dumbbell className="w-6 h-6" />,
    description: 'Gym isn’t just fitness for me — it’s discipline, consistency, and mindset.',
    color: 'from-blue-500 to-cyan-500',
    tag: 'Fitness'
  },
  {
    title: 'Fashion',
    icon: <Shirt className="w-6 h-6" />,
    description: 'Fashion is my silent language of self-expression and creative styling.',
    color: 'from-purple-500 to-pink-500',
    tag: 'Style'
  },
  {
    title: 'Customizing Clothes',
    icon: <Scissors className="w-6 h-6" />,
    description: 'Turning ordinary fabric into unique pieces of wearable art.',
    color: 'from-orange-500 to-red-500',
    tag: 'Creativity'
  },
  {
    title: 'Reading',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Constant learning to evolve my mindset and fuel personal growth.',
    color: 'from-emerald-500 to-teal-500',
    tag: 'Growth'
  },
  {
    title: 'Movies/Series',
    icon: <Film className="w-6 h-6" />,
    description: 'Diving into storytelling to spark inspiration and creative thinking.',
    color: 'from-rose-500 to-orange-500',
    tag: 'Story'
  }
]

const softSkills = [
  { name: 'Leadership', icon: <Users size={18} />, desc: 'Guiding teams with vision and empowerment.' },
  { name: 'Teamwork', icon: <Zap size={18} />, desc: 'Collaborating to achieve collective excellence.' },
  { name: 'Communication', icon: <MessageSquare size={18} />, desc: 'Bridging ideas through impactful dialogue.' },
  { name: 'Consistency', icon: <Target size={18} />, desc: 'Daily intensity for long-term results.' },
  { name: 'Adaptability', icon: <RefreshCcw size={18} />, desc: 'Pivoting swiftly in dynamic landscapes.' },
  { name: 'Problem-Solving', icon: <Brain size={18} />, desc: 'Deconstructing complex challenges.' },
  { name: 'Time Management', icon: <Clock size={18} />, desc: 'Mastering the art of prioritization.' }
]

const creativity = [
  {
    title: 'Content Creation',
    icon: <Smartphone className="w-8 h-8" />,
    desc: 'Crafting fitness and relatable content that resonates and inspires.',
    accent: 'from-blue-400 to-indigo-600',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/20',
    text: 'text-blue-400'
  },
  {
    title: 'Video Editing',
    icon: <Video className="w-8 h-8" />,
    desc: 'Storytelling through Premiere Pro, blending rhythm with visual impact.',
    accent: 'from-purple-400 to-fuchsia-600',
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/20',
    text: 'text-purple-400'
  },
  {
    title: 'Graphic Designing',
    icon: <Palette className="w-8 h-8" />,
    desc: 'Visualizing concepts into clean, aesthetic digital experiences.',
    accent: 'from-pink-400 to-rose-600',
    bg: 'bg-pink-500/5',
    border: 'border-pink-500/20',
    text: 'text-pink-400'
  },
  {
    title: 'Aesthetic Sense',
    icon: <Sparkles className="w-8 h-8" />,
    desc: 'A keen eye for balance, color, and modern design harmony.',
    accent: 'from-amber-400 to-orange-600',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/20',
    text: 'text-amber-400'
  },
  {
    title: 'Social Media Understanding',
    icon: <BarChart3 className="w-8 h-8" />,
    desc: 'Decoding trends and algorithms to build meaningful presence.',
    accent: 'from-emerald-400 to-teal-600',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400'
  }
]

function SkillCard({ skill, dark, index, inView }) {
  return (
    <motion.div
      variants={fadeUp(0.3 + index * 0.05)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.02, y: -2 }}
      className={`p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 group ${
        dark ? 'bg-white/5 hover:bg-white/10 border border-white/5' : 'bg-black/5 hover:bg-black/10 border border-black/5'
      }`}
    >
      <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${
        dark ? 'bg-accent/20 text-accent-light group-hover:bg-accent/30' : 'bg-accent/10 text-accent group-hover:bg-accent/20'
      }`}>
        {skill.icon}
      </div>
      <div>
        <h4 className={`font-bold text-sm mb-1 ${dark ? 'text-white' : 'text-black'}`}>{skill.name}</h4>
        <p className={`text-xs leading-relaxed ${dark ? 'text-white/50' : 'text-black/50'}`}>{skill.desc}</p>
        
        {/* Subtle "progress" style line */}
        <div className="mt-3 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: '85%' } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
            className={`h-full bg-gradient-to-r from-accent to-accent-light opacity-60`}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Interests({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="interests" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute left-0 top-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20 ${dark ? 'bg-purple-600' : 'bg-purple-400'}`} />
        <div className={`absolute right-0 bottom-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 ${dark ? 'bg-blue-600' : 'bg-blue-400'}`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           variants={fadeUp()}
           initial="hidden"
           animate={inView ? 'visible' : 'hidden'}
           className="text-center mb-24"
        >
          <span className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? 'text-accent-light/60' : 'text-accent/60'}`}>
            04 / Lifestyle & Passion
          </span>
          <h2 className={`font-display font-bold text-4xl md:text-6xl mt-3 ${dark ? 'text-white' : 'text-black'}`}>
            Beyond the <span className="gradient-text">Screen</span>
          </h2>
          <p className={`mt-6 text-base max-w-xl mx-auto ${dark ? 'text-white/40' : 'text-black/40'}`}>
            Explore the interests and skills that shape my perspective and drive my creative evolution.
          </p>
        </motion.div>

        {/* 1. Hobbies & Lifestyle */}
        <div className="mb-32">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-center gap-6 mb-12"
          >
            <h3 className={`font-display font-bold text-3xl ${dark ? 'text-white' : 'text-black'}`}>
              Hobbies & Lifestyle
            </h3>
            <div className={`h-px flex-1 ${dark ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={hobby.title}
                variants={fadeUp(0.2 + i * 0.08)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -8 }}
                className={`relative p-6 rounded-3xl group overflow-hidden flex flex-col items-center text-center transition-all duration-500 ${
                  dark ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${hobby.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  dark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
                }`}>
                  {hobby.icon}
                </div>
                <span className={`text-[10px] uppercase tracking-widest mb-2 font-mono ${dark ? 'text-white/30' : 'text-black/30'}`}>
                  {hobby.tag}
                </span>
                <h4 className={`font-display font-bold text-lg mb-3 ${dark ? 'text-white' : 'text-black'}`}>
                  {hobby.title}
                </h4>
                <p className={`text-xs leading-relaxed opacity-60 ${dark ? 'text-white' : 'text-black'}`}>
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Soft Skills */}
        <div className="mb-32">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-center gap-6 mb-12"
          >
            <div className={`h-px flex-1 ${dark ? 'bg-gradient-to-l from-white/20 to-transparent' : 'bg-gradient-to-l from-black/10 to-transparent'}`} />
            <h3 className={`font-display font-bold text-3xl ${dark ? 'text-white' : 'text-black'}`}>
              Soft Skills
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} dark={dark} index={i} inView={inView} />
            ))}
            <motion.div
              variants={fadeUp(0.3 + 7 * 0.05)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={`p-6 rounded-2xl flex flex-col justify-center items-center border-2 border-dashed ${
                dark ? 'border-white/10 text-white/20' : 'border-black/10 text-black/20'
              }`}
            >
              <Zap size={24} className="mb-2" />
              <span className="text-xs font-mono">Always Evolving</span>
            </motion.div>
          </div>
        </div>

        {/* 3. Creativity & Interests */}
        <div>
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-center gap-6 mb-12"
          >
            <h3 className={`font-display font-bold text-3xl ${dark ? 'text-white' : 'text-black'}`}>
              Creativity & Interests
            </h3>
            <div className={`h-px flex-1 ${dark ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativity.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp(0.4 + i * 0.1)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={`relative p-8 rounded-[2.5rem] overflow-hidden group border transition-all duration-500 ${item.border} ${
                  dark ? 'bg-white/[0.02] hover:bg-white/[0.04]' : 'bg-black/[0.02] hover:bg-black/[0.04]'
                }`}
              >
                {/* Background Shape */}
                <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${item.accent}`} />
                
                <div className={`mb-8 flex items-center justify-between relative z-10`}>
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {item.icon}
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`p-2 rounded-full ${dark ? 'bg-white/5' : 'bg-black/5'} ${item.text}`}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </div>
                
                <div className="relative z-10">
                  <h4 className={`font-display font-bold text-2xl mb-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-black/60'}`}>
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex gap-1">
                  {[1, 2, 3].map((dot) => (
                    <div 
                      key={dot} 
                      className={`h-1 rounded-full transition-all duration-500 bg-gradient-to-r ${item.accent}`}
                      style={{ width: dot === 1 ? '40%' : '10%', opacity: 0.3 + dot * 0.2 }}
                    />
                  ))}
                  <div className="h-1 flex-1 bg-white/5 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
