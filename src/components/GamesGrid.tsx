import { useState } from 'react'
import { projectCollections } from '../data/games'
import { GameCard } from './GameCard'
import { Reveal } from './Reveal'

export function GamesGrid() {
  const [activeIndex, setActiveIndex] = useState(0)
  const collection = projectCollections[activeIndex]

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + projectCollections.length) % projectCollections.length)
  }

  return (
    <section className="games" id="projects">
      <div className="section-intro">
        <Reveal>
          <p className="eyebrow light">
            {collection.eyebrow.map((item) => <span key={item}>{item}</span>)}
          </p>
          <div className="catalog-heading">
            <button className="catalog-arrow" type="button" onClick={() => move(-1)} aria-label="Previous category">←</button>
            <h2 aria-live="polite">{collection.title}</h2>
            <button className="catalog-arrow" type="button" onClick={() => move(1)} aria-label="Next category">→</button>
          </div>
          <div className="catalog-tabs" role="tablist" aria-label="Project categories">
            {projectCollections.map((item, index) => (
              <button key={item.id} type="button" role="tab" aria-selected={index === activeIndex} className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)}>
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal delay="100ms"><p className="lede">{collection.description}</p></Reveal>
      </div>
      <div className="games-grid" key={collection.id}>
        {collection.projects.map((project, index) => (
          <Reveal key={project.id} delay={`${index * 70}ms`}><GameCard game={project} /></Reveal>
        ))}
      </div>
    </section>
  )
}
