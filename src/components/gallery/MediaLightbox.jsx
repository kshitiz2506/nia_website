import { useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../layout/icons/Icons'

export default function MediaLightbox({ items, activeId, onClose, onNavigate }) {
  const videoRef = useRef(null)
  const index = items.findIndex((item) => item.id === activeId)
  const item = items[index]

  useEffect(() => {
    if (!item || item.type !== 'video') return undefined

    const video = videoRef.current
    if (!video) return undefined

    video.currentTime = 0
    const playPromise = video.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {
        /* Autoplay may be blocked; controls remain available. */
      })
    }

    return () => {
      video.pause()
    }
  }, [item])

  if (!item) return null

  const hasPrev = index > 0
  const hasNext = index < items.length - 1
  const isVideo = item.type === 'video'

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-nia-dark/95 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition-colors hover:border-nia-gold/50 hover:text-nia-gold sm:right-6 sm:top-6"
        aria-label="Close gallery"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onNavigate(items[index - 1].id)
          }}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition-colors hover:border-nia-gold/50 hover:text-nia-gold sm:left-6"
          aria-label="Previous media"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onNavigate(items[index + 1].id)
          }}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition-colors hover:border-nia-gold/50 hover:text-nia-gold sm:right-6"
          aria-label="Next media"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      )}

      <figure
        className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        {isVideo ? (
          <video
            key={item.id}
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            className="max-h-[75vh] w-auto max-w-full bg-black object-contain shadow-2xl"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl"
          />
        )}

        <figcaption className="mt-5 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-nia-gold">
            {isVideo ? 'Video' : 'Photo'}
          </p>
          <p className="mt-1 font-serif text-xl text-white sm:text-2xl">{item.title}</p>
          <p className="mt-2 text-xs text-white/40">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
