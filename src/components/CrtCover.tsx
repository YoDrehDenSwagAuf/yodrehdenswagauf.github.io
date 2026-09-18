import type { CoverId, ProjectStatus } from '../data/games'

type Tone = 'gold' | 'fog' | 'amber'
type Signal = 'unstable' | 'no-input' | 'standby'

type Props = {
  id: CoverId
  title: string
  catalogNo: string
  status: ProjectStatus
  active?: boolean
}

export function CrtCover({ id, title, catalogNo, status, active = false }: Props) {
  const tone = toneFrom(id)
  const signal = signalFrom(status, id)
  const ghost = ghostCopy(signal, title)
  const footer = footerCopy(signal, title)

  return (
    <div
      className="crt-cover"
      data-tone={tone}
      data-signal={signal}
      data-active={active ? 'true' : 'false'}
      role="img"
      aria-label={`${title} cover art`}
    >
      <div className="crt-bezel">
        <div className="crt-well">
          <div className="crt-screen">
            <div className="crt-phosphor" />
            {signal !== 'unstable' ? <div className="crt-reticle" /> : null}
            <div className="crt-readout">
              <div className="crt-osd">
                <span>NO. {catalogNo}</span>
              </div>
              <p className="crt-ghost" data-text={ghost}>
                {ghost}
              </p>
              <p className="crt-footer">
                {footer}
                {signal === 'unstable' ? <span className="crt-cursor" /> : null}
              </p>
            </div>
            <div className="crt-scanlines" />
            <div className="crt-roll" />
            <div className="crt-noise" />
            <div className="crt-vignette" />
            <div className="crt-glare" />
          </div>
        </div>
        <span className="crt-led" />
      </div>
    </div>
  )
}

function toneFrom(id: CoverId): Tone {
  if (id === 'dental-drill') return 'gold'
  if (id === 'coming-soon-b') return 'amber'
  return 'fog'
}

function signalFrom(status: ProjectStatus, id: CoverId): Signal {
  if (status === 'prototype') return 'unstable'
  if (id === 'coming-soon-b') return 'standby'
  return 'no-input'
}

function ghostCopy(signal: Signal, title: string) {
  if (signal === 'no-input') return 'NO INPUT'
  if (signal === 'standby') return 'STAND BY'
  return title
}

function footerCopy(signal: Signal, title: string) {
  if (signal === 'unstable') return 'SIGNAL UNSTABLE'
  return title
}
