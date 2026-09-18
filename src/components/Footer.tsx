import { useState } from 'react'
import { studio } from '../data/studio'
import { LegalDialog } from './LegalPage'

export function Footer() {
  const [legal, setLegal] = useState<'impressum' | 'privacy' | null>(null)

  return (
    <>
    <footer className="site-footer" id="links">
      <div className="footer-top">
        <div>
          <p className="eyebrow light">
            <span>Studio links</span>
          </p>
          <h2>Find the work.</h2>
        </div>
        <ul className="footer-links">
          <li>
            <a href={studio.github} target="_blank" rel="noreferrer">
              GitHub
              <small>github.com/YoDrehDenSwagAuf</small>
            </a>
          </li>
          <li>
            <PlaceholderLink
              label="itch.io"
              href={studio.itch}
              hint="Store page placeholder"
              liveText="yodrehdenswagauf.itch.io"
            />
          </li>
          <li>
            <PlaceholderLink
              label="Buy Me a Coffee"
              href={studio.coffee}
              hint="Tip jar placeholder"
              liveText="paypal.me/YoDrehDenSwagAuf"
            />
          </li>
          <li>
            <a href={`mailto:${studio.email}`}>
              Email
              <small>{studio.email}</small>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {studio.nameFull}. {studio.founder}.
        </p>
        <p>
          <a href="/impressum" onClick={(event) => { event.preventDefault(); setLegal('impressum') }}>Impressum</a>
          <span aria-hidden="true"> · </span>
          <a href="/datenschutz" onClick={(event) => { event.preventDefault(); setLegal('privacy') }}>Datenschutz</a>
        </p>
      </div>
    </footer>
    <LegalDialog kind="impressum" open={legal === 'impressum'} onClose={() => setLegal(null)} />
    <LegalDialog kind="privacy" open={legal === 'privacy'} onClose={() => setLegal(null)} />
    </>
  )
}

function PlaceholderLink({
  label,
  href,
  hint,
  liveText = 'Live link',
}: {
  label: string
  href: string | null
  hint: string
  liveText?: string
}) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {label}
        <small>{liveText}</small>
      </a>
    )
  }

  return (
    <span className="is-placeholder-link" title={hint}>
      {label}
      <small>{hint}</small>
    </span>
  )
}
