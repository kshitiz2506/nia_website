/**
 * Fallback images shown via <img onError> when a content image fails to
 * load. Centralized here so every card/section reuses the same stock photo
 * per content type instead of duplicating the URL in each component.
 */
export const PLACEHOLDER_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
  treatmentCard: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  courseCard: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  detailHero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  blogCard: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
  faculty: 'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=400&q=80',
  testimonial: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
}
