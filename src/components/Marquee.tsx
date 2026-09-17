import { marqueeItems } from '../data/studio'

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}
