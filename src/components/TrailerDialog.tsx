import { useEffect, useId, useRef } from 'react'

type Props = {
  title: string
  embedUrl: string
  open: boolean
  onClose: () => void
}

export function TrailerDialog({ title, embedUrl, open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const node = dialogRef.current
    if (!node) return
    if (open && !node.open) node.showModal()
    if (!open && node.open) node.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="trailer-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <div className="trailer-dialog-inner">
        <div className="trailer-dialog-bar">
          <h2 id={titleId}>{title} trailer</h2>
          <button type="button" className="pill pill-ghost" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="trailer-frame">
          {open ? (
            <iframe
              title={`${title} trailer`}
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </div>
      </div>
    </dialog>
  )
}
