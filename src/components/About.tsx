import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <Reveal>
          <p className="eyebrow">
            <span>Solo studio</span>
            <span>Germany</span>
          </p>
          <h2>Made by Marcel Fischer.</h2>
        </Reveal>
        <div className="about-copy">
          <Reveal delay="80ms">
            <p>
              YoDrehDenSwagAuf is a one-person studio. Marcel Fischer designs short, tactile games
              for Playdate, PC, and the browser: pixel-forward, a little chaotic, meant to be
              finished in a sitting and remembered for how they feel to play.
            </p>
          </Reveal>
          <Reveal delay="140ms">
            <p lang="de">
              Der Name ist eine Ansage: dreh den Swag auf. Kleine Arcade-Happen, ehrliche
              Minigames aus der Werkbank — für die Hosentasche, den Desktop, und alles dazwischen.
              Keine AAA-Versprechen.
            </p>
          </Reveal>
          <Reveal delay="180ms">
            <ul className="about-facts">
              <li>
                <strong>Focus</strong>
                Playdate, PC, and web — short-session games
              </li>
              <li>
                <strong>Shape</strong>
                Minigames first, sequels later
              </li>
              <li>
                <strong>Place</strong>
                Built in Germany, shipped where the session fits
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
