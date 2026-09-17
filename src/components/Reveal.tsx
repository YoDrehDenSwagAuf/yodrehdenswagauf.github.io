import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: string
}

export function Reveal({ children, className = '', delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  const style: CSSProperties | undefined = delay ? { transitionDelay: delay } : undefined

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-in' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
