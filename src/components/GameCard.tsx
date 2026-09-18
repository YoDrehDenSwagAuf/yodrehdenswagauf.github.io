import { useState } from 'react'
import { statusCopy, type Project } from '../data/games'
import { GameCover } from './GameCover'

type Props = {
  game: Project
}

export function GameCard({ game }: Props) {
  const [hot, setHot] = useState(false)
  const wrapImage = game.coverHover?.idle ?? game.coverImage

  return (
    <article
      className={`game-card${hot ? ' is-hot' : ''}`}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      onFocusCapture={() => setHot(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHot(false)
        }
      }}
    >
      <div
        className="game-cover-wrap"
        style={
          wrapImage
            ? {
                backgroundImage: `url(${wrapImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      >
        <GameCover
          id={game.cover}
          title={game.title}
          catalogNo={game.catalogNo}
          status={game.status}
          src={game.coverHover ? undefined : (game.coverGif ?? game.coverImage)}
          fallback={game.coverImage ?? game.coverFallback}
          hover={game.coverHover}
          active={hot}
        />
        <span className={`status-chip status-${game.status}`}>{statusCopy[game.status]}</span>
      </div>
      <div className="game-body">
        <div className="game-meta">
          <span className="catalog-no">No. {game.catalogNo}</span>
          <span className="platform-badge">{game.platform}</span>
        </div>
        <h3>
          {game.title}
          {game.workingTitle ? <small> {game.workingTitle}</small> : null}
        </h3>
        <p>{game.blurb}</p>
        <div className="game-actions">
          {game.actions.map((action) => (
            <StoreButton key={action.label} label={action.label} href={action.href} emptyTitle={action.hint} />
          ))}
        </div>
      </div>
    </article>
  )
}

function StoreButton({
  label,
  href,
  emptyTitle,
}: {
  label: string
  href: string | null
  emptyTitle: string
}) {
  if (!href) {
    return (
      <span className="mini-btn is-disabled" title={emptyTitle} aria-disabled="true">
        {label}
      </span>
    )
  }

  return (
    <a className="mini-btn" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
}
