import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer({ dark }) {
  const year = new Date().getFullYear()

  return (
    <footer className={`relative border-t ${dark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className={`font-display font-bold text-2xl mb-1 ${dark ? 'text-white' : 'text-black'}`}>
              MK<span className="text-accent">.</span>
            </div>
            <div className={`font-mono text-xs ${dark ? 'text-white/30' : 'text-black/30'}`}>
              Mukul Kumar &mdash; Full Stack Developer
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-body transition-colors ${
                  dark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:ritikdaksh965435@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  dark ? 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white' : 'bg-black/5 hover:bg-black/10 text-black/60 hover:text-black'
                }`}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-8 pt-6 border-t text-center font-mono text-xs ${dark ? 'border-white/5 text-white/20' : 'border-black/5 text-black/30'}`}>
          <span>© {year} Mukul Kumar. Built with </span>
          <span className="text-accent">React</span>
          <span> + </span>
          <span className="text-blue-400">Tailwind</span>
          <span> + </span>
          <span className="text-pink-400">Framer Motion</span>
          <span>. Made with </span>
          <Heart size={10} className="inline text-red-400" />
        </div>
      </div>
    </footer>
  )
}
