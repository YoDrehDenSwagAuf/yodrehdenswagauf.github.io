import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { GamesGrid } from './components/GamesGrid'
import { Devlog } from './components/Devlog'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { LegalPage } from './components/LegalPage'

function currentPath() {
  return window.location.pathname.replace(/\/$/, '') || '/'
}

export default function App() {
  const path = currentPath()

  if (path === '/impressum') {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <LegalPage kind="impressum" />
      </>
    )
  }

  if (path === '/datenschutz' || path === '/privacy') {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <LegalPage kind="privacy" />
      </>
    )
  }

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <GamesGrid />
        <Devlog />
        <About />
      </main>
      <Footer />
    </>
  )
}
