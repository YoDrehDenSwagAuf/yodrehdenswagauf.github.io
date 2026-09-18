import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <Reveal>
          <p className="eyebrow">
            <span>Independent studio</span>
            <span>Germany</span>
          </p>
          <h2 className="about-title">
            <span>Made by</span>
            <span>Marcel.</span>
          </h2>
        </Reveal>
        <div className="about-copy">
          <Reveal delay="80ms">
            <p>
              YoDrehDenSwagAuf is an independent studio for games, websites, mods, and apps.
              Every project starts with a useful idea, a distinct personality, and the goal of
              turning experiments into things people enjoy using.
            </p>
          </Reveal>
          <Reveal delay="140ms">
            <p lang="de">
              Der Name ist eine Ansage: Dreh den Swag auf. Hier entstehen eigenständige Spiele,
              praktische Apps, kreative Websites und Mods mit Charakter. Direkt aus der Werkbank,
              ohne leere Versprechen und mit sichtbarer Freude am Ausprobieren.
            </p>
          </Reveal>
          <Reveal delay="180ms">
            <ul className="about-facts">
              <li>
                <strong>Focus</strong>
                Games, websites, mods, and apps
              </li>
              <li>
                <strong>Shape</strong>
                Clear ideas, playful details, useful results
              </li>
              <li>
                <strong>Place</strong>
                Built in Germany, shared wherever it fits
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
