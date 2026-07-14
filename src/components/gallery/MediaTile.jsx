import { PlayIcon } from '../layout/icons/Icons'
import { useReveal } from '../ui/Reveal'

export default function MediaTile({ item, index, onOpen }) {
  const { revealProps } = useReveal(index % 6)
  const isVideo = item.type === 'video'
  const previewSrc = isVideo ? item.poster || item.src : item.src

  return (
    <button
      type="button"
      {...revealProps}
      onClick={() => onOpen(item.id)}
      className="group relative mb-4 w-full break-inside-avoid overflow-hidden bg-nia-dark text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nia-gold"
      aria-label={`${isVideo ? 'Play' : 'View'} ${item.title}`}
    >
      <img
        src={previewSrc}
        alt={item.alt}
        loading="lazy"
        className="block w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nia-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

      {isVideo && (
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-nia-gold/50 bg-nia-dark/55 text-nia-gold shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
          <PlayIcon className="ml-0.5 h-6 w-6" />
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-nia-gold">
          {isVideo ? 'Video' : 'Photo'}
        </p>
        <h2 className="mt-1 font-serif text-lg text-white">{item.title}</h2>
      </div>
    </button>
  )
}
