import { games } from '../data/games'
import { GameCard } from './GameCard'
import { Reveal } from './Reveal'

export function GamesGrid() {
  return (
    <section className="games" id="games">
      <div className="section-intro">
        <Reveal>
          <p className="eyebrow light">
            <span>Four slots</span>
            <span>Mixed platforms</span>
          </p>
          <h2>The games.</h2>
        </Reveal>
        <Reveal delay="100ms">
          <p className="lede">
            A tight shelf of short games — Playdate first, plus PC and web experiments. Catalog,
            itch.io, and trailer buttons light up when those links exist.
          </p>
        </Reveal>
      </div>
      <div className="games-grid">
        {games.map((game, index) => (
          <Reveal key={game.id} delay={`${index * 70}ms`}>
            <GameCard game={game} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
