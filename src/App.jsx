import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setDark(stored === 'dark')
  }, [])

  const toggleDark = () => {
    setDark((d) => {
      localStorage.setItem('theme', !d ? 'dark' : 'light')
      return !d
    })
  }

  return (
    <div className={`${dark ? 'dark bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300 relative noise-bg`}>
      <CursorGlow />
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero dark={dark} />
        <Marquee dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Achievements dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  )
}
