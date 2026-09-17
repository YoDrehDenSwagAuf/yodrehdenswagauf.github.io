import { studio } from '../data/studio'

const links = [
  { href: '#games', label: 'Games' },
  { href: '#devlog', label: 'Devlog' },
  { href: '#about', label: 'About' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#games">
        Skip to games
      </a>
      <nav className="nav-pill" aria-label="Primary">
        <a className="nav-brand" href="#top" aria-label={studio.nameFull}>
          <span className="nav-wordmark">
            <span className="nav-wordmark-line" aria-hidden="true">
              <span className="hero-yo">Yo</span>
              <span className="hero-rest">DrehDenSwagAuf</span>
            </span>
            <span className="nav-wordmark-games" aria-hidden="true">
              Games
            </span>
          </span>
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
