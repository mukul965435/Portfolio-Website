import { motion } from 'framer-motion'

const items = [
  'React', 'Node.js', 'Full Stack', 'MongoDB', 'Express', 'JavaScript',
  'Tailwind CSS', 'Docker', 'AWS', 'Git', 'Problem Solver', 'Open Source',
  'React', 'Node.js', 'Full Stack', 'MongoDB', 'Express', 'JavaScript',
  'Tailwind CSS', 'Docker', 'AWS', 'Git', 'Problem Solver', 'Open Source',
]

export default function Marquee({ dark }) {
  return (
    <div className={`relative overflow-hidden py-5 border-y ${dark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]'}`}>
      {/* Fade edges */}
      <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 ${dark ? 'bg-gradient-to-r from-black' : 'bg-gradient-to-r from-white'} to-transparent`} />
      <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 ${dark ? 'bg-gradient-to-l from-black' : 'bg-gradient-to-l from-white'} to-transparent`} />

      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex gap-8 pr-8">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className={`font-display font-semibold text-sm uppercase tracking-widest ${dark ? 'text-white/50' : 'text-black/40'}`}>
                {item}
              </span>
              <span className="text-accent/60 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
