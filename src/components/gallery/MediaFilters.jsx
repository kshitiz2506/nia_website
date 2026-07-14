export default function MediaFilters({ filters, activeId, onChange }) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
      role="tablist"
      aria-label="Gallery media type"
    >
      {filters.map((filter) => {
        const isActive = activeId === filter.id

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`relative pb-2 text-sm tracking-wide transition-colors ${
              isActive
                ? 'font-medium text-nia-dark'
                : 'text-nia-dark/45 hover:text-nia-dark/75'
            }`}
          >
            {filter.label}
            <span
              className={`absolute inset-x-0 bottom-0 h-px origin-center bg-nia-gold transition-transform duration-300 ${
                isActive ? 'scale-x-100' : 'scale-x-0'
              }`}
              aria-hidden="true"
            />
          </button>
        )
      })}
    </div>
  )
}
