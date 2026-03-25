import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Rewards', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? dark
              ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/30'
              : 'bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-xl shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className={dark ? 'text-white' : 'text-black'}>MK</span>
            <span className="text-accent">.</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  dark
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-black/60 hover:text-black hover:bg-black/5'
                }`}
              >
                {l.label}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleDark}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                dark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/5 hover:bg-black/10 text-black'
              }`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex btn-primary bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/30"
            >
              Hire Me
            </motion.a>

            <motion.button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={22} className={dark ? 'text-white' : 'text-black'} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed inset-0 z-[60] flex flex-col p-8 ${dark ? 'bg-black' : 'bg-white'}`}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl">
                <span className={dark ? 'text-white' : 'text-black'}>MK</span>
                <span className="text-accent">.</span>
              </span>
              <motion.button
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className={dark ? 'text-white' : 'text-black'} />
              </motion.button>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className={`text-4xl font-display font-bold py-3 border-b transition-colors ${
                    dark ? 'border-white/10 text-white/80 hover:text-accent' : 'border-black/10 text-black/80 hover:text-accent'
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
