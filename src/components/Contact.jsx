import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, Download, ArrowRight, Copy, Check } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ritikdaksh965435@gmail.com',
    href: 'mailto:ritikdaksh965435@gmail.com',
    color: '#7C3AED',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9654352930',
    href: 'tel:+919654352930',
    color: '#059669',
    copyable: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/mukulkumar',
    href: 'https://github.com',
    color: '#374151',
    copyable: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mukulkumar',
    href: 'https://linkedin.com',
    color: '#0A66C2',
    copyable: false,
  },
]

function ContactCard({ item, dark, delay }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e) => {
    e.preventDefault()
    if (!item.copyable) return
    await navigator.clipboard.writeText(item.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      variants={fadeUp(delay)}
      whileHover={{ scale: 1.02, x: 4 }}
      className={`relative flex items-center gap-4 p-5 rounded-2xl transition-all group ${
        dark
          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20'
      }`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${item.color}20` }}
      >
        <item.icon size={20} style={{ color: item.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-xs font-mono uppercase tracking-wider mb-0.5 ${dark ? 'text-white/40' : 'text-black/40'}`}>
          {item.label}
        </div>
        <div className={`text-sm font-medium truncate ${dark ? 'text-white/90' : 'text-black/90'}`}>
          {item.value}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {item.copyable && (
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg transition-all ${
              dark ? 'hover:bg-white/10 text-white/40 hover:text-white' : 'hover:bg-black/10 text-black/40 hover:text-black'
            }`}
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        )}
        <ArrowRight
          size={16}
          className={`transition-transform group-hover:translate-x-1 ${dark ? 'text-white/30' : 'text-black/30'}`}
        />
      </div>
    </motion.a>
  )
}

export default function Contact({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
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
            04 / Contact
          </span>
          <h2 className={`font-display font-bold text-4xl md:text-5xl mt-3 ${dark ? 'text-white' : 'text-black'}`}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${dark ? 'text-white/50' : 'text-black/50'}`}>
            I'm open to internships, collaborations, and exciting opportunities. 
            Don't hesitate to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={fadeUp()}
              className={`font-display font-semibold text-xl mb-6 ${dark ? 'text-white' : 'text-black'}`}
            >
              Get in touch
            </motion.h3>

            <div className="flex flex-col gap-3 mb-8">
              {contactItems.map((item, i) => (
                <ContactCard key={item.label} item={item} dark={dark} delay={i * 0.08} />
              ))}
            </div>

            {/* Download resume CTA */}
            <motion.div variants={fadeUp(0.4)}>
              <motion.a
                href="#"
                download
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,245,160,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border font-medium transition-all w-full justify-center ${
                  dark
                    ? 'border-neon/30 text-neon hover:bg-neon/10 bg-neon/5'
                    : 'border-emerald-500/30 text-emerald-600 hover:bg-emerald-50 bg-emerald-50/50'
                }`}
              >
                <Download size={18} />
                Download Resume (PDF)
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={`p-8 rounded-3xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
              <h3 className={`font-display font-semibold text-xl mb-6 ${dark ? 'text-white' : 'text-black'}`}>
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${dark ? 'text-white/40' : 'text-black/40'}`}>
                        {field}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        value={formState[field]}
                        onChange={(e) => setFormState((p) => ({ ...p, [field]: e.target.value }))}
                        placeholder={field === 'name' ? 'Your Name' : 'your@email.com'}
                        className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${
                          dark
                            ? 'bg-white/5 border border-white/10 focus:border-accent/50 text-white placeholder:text-white/20'
                            : 'bg-black/5 border border-black/10 focus:border-accent/50 text-black placeholder:text-black/30'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${dark ? 'text-white/40' : 'text-black/40'}`}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all ${
                      dark
                        ? 'bg-white/5 border border-white/10 focus:border-accent/50 text-white placeholder:text-white/20'
                        : 'bg-black/5 border border-black/10 focus:border-accent/50 text-black placeholder:text-black/30'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent text-white font-display font-semibold text-sm shadow-lg shadow-accent/30 transition-all"
                >
                  {sent ? (
                    <>
                      <Check size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
