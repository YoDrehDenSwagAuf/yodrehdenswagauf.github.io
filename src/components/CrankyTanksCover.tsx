import { useEffect, useRef, useState } from 'react'

type Phase = 'idle' | 'intro' | 'loop' | 'reverse'

type Props = {
  title: string
  idle: string
  intro: string
  loop: string
  active: boolean
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function CrankyTanksCover({ title, idle, intro, loop, active }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef(0)
  const lastStampRef = useRef(0)
  const phaseRef = useRef<Phase>('idle')
  const activeRef = useRef(active)
  const [phase, setPhase] = useState<Phase>('idle')
  const [reduced, setReduced] = useState(prefersReducedMotion)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  const setPhaseBoth = (next: Phase) => {
    phaseRef.current = next
    setPhase(next)
  }

  const stopRaf = () => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
  }

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(media.matches)
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.src = loop
  }, [loop])

  useEffect(() => {
    const video = videoRef.current
    if (reduced) {
      stopRaf()
      if (video) {
        video.pause()
        video.currentTime = 0
      }
      if (phaseRef.current !== 'idle') setPhaseBoth('idle')
      return
    }
    if (!video || !videoReady) return

    const goIdle = () => {
      stopRaf()
      video.pause()
      video.currentTime = 0
      setPhaseBoth('idle')
    }

    const playForward = () => {
      stopRaf()
      video.playbackRate = 1
      setPhaseBoth('intro')
      const play = video.play()
      if (play) play.catch(() => goIdle())
    }

    const seekReverse = () => {
      stopRaf()
      video.pause()
      try {
        video.playbackRate = 1
      } catch {
        /* ignore */
      }
      lastStampRef.current = performance.now()
      const step = (now: number) => {
        if (phaseRef.current !== 'reverse') return
        const dt = Math.min(0.05, (now - lastStampRef.current) / 1000)
        lastStampRef.current = now
        const next = video.currentTime - dt
        if (next <= 0.012) {
          video.currentTime = 0
          if (activeRef.current) playForward()
          else goIdle()
          return
        }
        video.currentTime = next
        rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    const playReverse = () => {
      stopRaf()
      video.pause()
      if (phaseRef.current === 'loop' || video.ended || video.currentTime <= 0) {
        const end = Number.isFinite(video.duration) ? video.duration : 0
        if (end > 0.02) video.currentTime = end - 0.001
      }
      setPhaseBoth('reverse')

      try {
        video.playbackRate = -1
      } catch {
        seekReverse()
        return
      }
      if (video.playbackRate >= 0) {
        seekReverse()
        return
      }
      const play = video.play()
      if (!play) {
        seekReverse()
        return
      }
      play.catch(() => seekReverse())
    }

    const onEnded = () => {
      if (phaseRef.current === 'intro') {
        if (activeRef.current) setPhaseBoth('loop')
        else playReverse()
        return
      }
      if (phaseRef.current === 'reverse' && !activeRef.current) goIdle()
    }

    video.addEventListener('ended', onEnded)

    if (active) {
      if (phaseRef.current === 'idle' || phaseRef.current === 'reverse') playForward()
    } else if (phaseRef.current === 'intro' || phaseRef.current === 'loop') {
      playReverse()
    }

    return () => {
      video.removeEventListener('ended', onEnded)
    }
  }, [active, reduced, videoReady])

  useEffect(() => () => stopRaf(), [])

  const showVideo = !reduced && (phase === 'intro' || phase === 'reverse')
  const showLoop = !reduced && phase === 'loop'

  return (
    <div className="cranky-cover" data-phase={reduced ? 'idle' : phase}>
      <img className="cover-art cranky-still" src={idle} alt={`${title} cover art`} />
      <video
        ref={videoRef}
        className="cover-art cranky-intro"
        src={intro}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        data-visible={showVideo ? 'true' : 'false'}
        onLoadedMetadata={() => setVideoReady(true)}
      />
      {showLoop ? (
        <img className="cover-art cranky-loop" src={loop} alt="" aria-hidden="true" />
      ) : null}
    </div>
  )
}
