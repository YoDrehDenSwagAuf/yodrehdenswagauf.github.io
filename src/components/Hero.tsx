import { useEffect, useState } from 'react'
import { studio } from '../data/studio'
import { Reveal } from './Reveal'

const BOOT_KEY = 'ydsa-hero-boot'
const BOOT_MS = 1520

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function shouldPlayBoot() {
  if (typeof window === 'undefined') return false
  if (prefersReducedMotion()) return false
  try {
    return sessionStorage.getItem(BOOT_KEY) !== '1'
  } catch {
    return false
  }
}

function markBootSeen() {
  try {
    sessionStorage.setItem(BOOT_KEY, '1')
  } catch {
    /* ignore quota / private mode */
  }
}

export function Hero() {
  const [booting, setBooting] = useState(shouldPlayBoot)

  useEffect(() => {
    if (!booting) {
      if (prefersReducedMotion()) markBootSeen()
      return
    }

    const id = window.setTimeout(() => {
      markBootSeen()
      setBooting(false)
    }, BOOT_MS)

    return () => window.clearTimeout(id)
  }, [booting])

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span>Games</span>
              <span>Websites</span>
              <span>Mods</span>
              <span>Apps</span>
            </p>
          </Reveal>
          <h1
            className={`hero-title${booting ? ' hero-boot' : ''}`}
            aria-label="YoDrehDenSwagAuf Studio"
          >
            <span className="hero-line" aria-hidden="true">
              <span className="hero-name">YoDrehDenSwagAuf</span>
              <span className="hero-boot-sweep" />
            </span>
            <span className="hero-games" aria-hidden="true">
              Studio
            </span>
          </h1>
          <Reveal delay={booting ? '1180ms' : '160ms'}>
            <p className="hero-tagline">{studio.tagline}</p>
            <p className="hero-tagline de" lang="de">
              {studio.taglineDe}
            </p>
          </Reveal>
          <Reveal delay={booting ? '1320ms' : '220ms'}>
            <div className="hero-ctas">
              <a className="pill pill-solid" href="#projects">
                Browse projects
              </a>
              <a className="pill pill-ghost" href="#devlog">
                Follow the build
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
