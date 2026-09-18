import { useEffect, useRef } from 'react'
import { studio } from '../data/studio'

type Kind = 'impressum' | 'privacy'

type Props = {
  kind: Kind
}

export function LegalPage({ kind }: Props) {
  const title = kind === 'impressum' ? 'Impressum' : 'Datenschutz / Privacy'
  const headingId = kind === 'impressum' ? 'impressum-title' : 'privacy-title'

  return (
    <main className="legal-page" aria-labelledby={headingId}>
      <a className="pill pill-ghost legal-back" href="/">
        Back to catalog
      </a>
      <p className="eyebrow">
        <span>Legal stub</span>
        <span>Replace before launch</span>
      </p>
      <h1 id={headingId}>{title}</h1>
      {kind === 'impressum' ? <ImpressumBody /> : <PrivacyBody />}
    </main>
  )
}

export function LegalDialog({ kind, open, onClose }: Props & { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const title = kind === 'impressum' ? 'Impressum' : 'Datenschutz / Privacy'

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog ref={dialogRef} className="legal-dialog" onClose={onClose} aria-labelledby={`${kind}-dialog-title`}>
      <div className="legal-dialog-inner">
        <div className="legal-dialog-bar">
          <div>
            <p className="eyebrow"><span>Legal placeholder</span></p>
            <h2 id={`${kind}-dialog-title`}>{title}</h2>
          </div>
          <button className="mini-btn" type="button" onClick={() => dialogRef.current?.close()}>Close</button>
        </div>
        {kind === 'impressum' ? <ImpressumBody /> : <PrivacyBody />}
      </div>
    </dialog>
  )
}

function ImpressumBody() {
  return (
    <div className="legal-prose">
      <p lang="de">
        Angaben gemäß § 5 DDG. Dieses Impressum ist ein Platzhalter für die öffentliche Studio-Seite und
        muss vor dem Livegang mit echten Kontaktdaten ergänzt werden.
      </p>
      <dl>
        <div>
          <dt>Verantwortlich</dt>
          <dd>{studio.founder}</dd>
        </div>
        <div>
          <dt>Studio</dt>
          <dd>{studio.nameFull}</dd>
        </div>
        <div>
          <dt>Anschrift</dt>
          <dd>Straße, Hausnummer, PLZ Ort. TODO</dd>
        </div>
        <div>
          <dt>E-Mail</dt>
          <dd>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </dd>
        </div>
      </dl>
    </div>
  )
}

function PrivacyBody() {
  return (
    <div className="legal-prose">
      <p>
        This privacy note is a stub. The catalog is a static site. It does not set analytics cookies in
        this first version. Replace this text with a real policy before collecting any personal data.
      </p>
      <p lang="de">
        Diese Datenschutzerklärung ist ein Platzhalter. Die Seite ist statisch und setzt in dieser
        Version keine Analyse-Cookies. Vor dem Erheben personenbezogener Daten muss der Text ersetzt
        werden.
      </p>
      <p>
        Contact: <a href={`mailto:${studio.email}`}>{studio.email}</a>
      </p>
    </div>
  )
}
