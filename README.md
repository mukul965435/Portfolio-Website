# Mukul Kumar — Developer Portfolio

A premium, animated developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## ✨ Features

- 🌗 Dark / Light mode toggle
- 🎞️ Framer Motion animations (fade-up, slide, stagger, spring)
- 📜 Smooth scroll with animated scroll indicator
- 🎯 Sticky navbar with blur glassmorphism
- 💻 Responsive — mobile + tablet + desktop
- 🖱️ Cursor glow effect (desktop)
- 🏷️ Animated skill bars
- 🃏 Project cards with hover effects
- 🎠 Marquee tech ticker
- 📬 Contact form with copy-to-clipboard
- 🔗 GitHub, LinkedIn, Resume Download buttons

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav + mobile menu
│   │   ├── Hero.jsx          # Landing hero with CTAs
│   │   ├── Marquee.jsx       # Scrolling tech ticker
│   │   ├── About.jsx         # About section with highlights
│   │   ├── Skills.jsx        # Tech stack + animated skill bars
│   │   ├── Projects.jsx      # Project cards with hover effects
│   │   ├── Contact.jsx       # Contact form + info cards
│   │   ├── Footer.jsx        # Footer with links
│   │   └── CursorGlow.jsx    # Mouse-following glow
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind + custom CSS
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Setup & Run

### Prerequisites
- Node.js >= 18
- npm >= 9

### 1. Create project & install

```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 2. Build for production

```bash
npm run build
npm run preview
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  accent: { DEFAULT: '#7C3AED', ... },
  neon: '#00F5A0',
}
```

### Personal Info
Edit the relevant component:
- `src/components/Hero.jsx` — name, tagline, CTA links
- `src/components/About.jsx` — bio, university details
- `src/components/Skills.jsx` — skill levels
- `src/components/Projects.jsx` — project details
- `src/components/Contact.jsx` — email, phone, social links

### Resume
Replace the `href="#"` in Hero.jsx and Contact.jsx with your actual PDF path:
```jsx
<a href="/resume.pdf" download>
```
Place your PDF at `public/resume.pdf`.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Utility styling |
| Framer Motion 11 | Animations |
| Lucide React | Icons |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.383.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}
```

---

Built by Mukul Kumar 🚀
