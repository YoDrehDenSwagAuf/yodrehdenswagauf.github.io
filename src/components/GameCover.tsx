import { useEffect, useState } from 'react'
import type { CoverHover, CoverId, ProjectStatus } from '../data/games'
import { CrankyTanksCover } from './CrankyTanksCover'
import { CrtCover } from './CrtCover'

type Props = {
  id: CoverId
  title: string
  catalogNo: string
  status: ProjectStatus
  src?: string
  fallback?: string
  hover?: CoverHover
  active?: boolean
}

export function GameCover({
  id,
  title,
  catalogNo,
  status,
  src,
  fallback,
  hover,
  active = false,
}: Props) {
  if (hover) {
    return (
      <CrankyTanksCover
        title={title}
        idle={hover.idle}
        intro={hover.intro}
        loop={hover.loop}
        active={active}
      />
    )
  }
  if (src) return <ImageCover title={title} src={src} fallback={fallback} />
  return (
    <CrtCover
      id={id}
      title={title}
      catalogNo={catalogNo}
      status={status}
      active={active}
    />
  )
}

function ImageCover({
  title,
  src,
  fallback,
}: {
  title: string
  src: string
  fallback?: string
}) {
  const reducedMotion = usePrefersReducedMotion()
  const preferred = reducedMotion && fallback ? fallback : src
  return <CoverImage key={preferred} title={title} src={preferred} fallback={fallback} />
}

function CoverImage({
  title,
  src,
  fallback,
}: {
  title: string
  src: string
  fallback?: string
}) {
  const [url, setUrl] = useState(src)

  return (
    <img
      className="cover-art"
      src={url}
      alt={`${title} cover art`}
      onError={() => {
        if (fallback && url !== fallback) setUrl(fallback)
      }}
    />
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return reduced
}
