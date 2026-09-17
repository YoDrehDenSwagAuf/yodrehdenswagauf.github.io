import { useState } from 'react'
import { statusCopy, type Game } from '../data/games'
import { GameCover } from './GameCover'
import { TrailerDialog } from './TrailerDialog'

type Props = {
  game: Game
}

export function GameCard({ game }: Props) {
  const [trailerOpen, setTrailerOpen] = useState(false)
  const [hot, setHot] = useState(false)
  const canEmbed = Boolean(game.links.trailerEmbed)
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
          {game.workingTitle ? <small> working title</small> : null}
        </h3>
        <p>{game.blurb}</p>
        <div className="game-actions">
          <StoreButton label="Catalog" href={game.links.catalog} emptyTitle="Playdate Catalog link coming later" />
          <StoreButton label="itch.io" href={game.links.itch} emptyTitle="itch.io page not live yet" />
          {canEmbed ? (
            <button type="button" className="mini-btn" onClick={() => setTrailerOpen(true)}>
              Trailer
            </button>
          ) : (
            <StoreButton label="Trailer" href={game.links.trailer} emptyTitle="Trailer not uploaded yet" />
          )}
        </div>
      </div>
      {game.links.trailerEmbed ? (
        <TrailerDialog
          title={game.title}
          embedUrl={game.links.trailerEmbed}
          open={trailerOpen}
          onClose={() => setTrailerOpen(false)}
        />
      ) : null}
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
