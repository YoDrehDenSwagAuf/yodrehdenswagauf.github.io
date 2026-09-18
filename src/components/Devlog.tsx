import { social } from '../data/studio'
import { Reveal } from './Reveal'

export function Devlog() {
  return (
    <section className="devlog" id="devlog">
      <div className="devlog-inner">
        <Reveal>
          <p className="eyebrow">
            <span>Build notes</span>
            <span>Not a blog yet</span>
          </p>
          <h2>Progress lives on social.</h2>
        </Reveal>
        <Reveal delay="90ms">
          <p className="lede">
            Game prototypes, mod updates, interface experiments, and work in progress from across
            the studio show up here first. Follow along wherever you like to keep up with the work.
          </p>
        </Reveal>
        <div className="social-grid">
          {social.map((item, index) => (
            <Reveal key={item.id} delay={`${index * 80}ms`}>
              {item.href ? (
                <a className="social-card" href={item.href} target="_blank" rel="noreferrer">
                  <SocialInner item={item} />
                </a>
              ) : (
                <div className="social-card is-placeholder">
                  <SocialInner item={item} />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialInner({
  item,
}: {
  item: (typeof social)[number]
}) {
  return (
    <>
      <span className="social-label">{item.label}</span>
      <strong>{item.handle}</strong>
      <span>{item.note}</span>
    </>
  )
}
