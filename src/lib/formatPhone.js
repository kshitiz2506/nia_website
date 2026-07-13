/** Format a phone string for display (e.g. +91 86752 00222). */
export function formatPhone(phone) {
  if (!phone) return ''
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('91') && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`
  }
  return phone
}

/** Digits only — for tel: and wa.me links. */
export function phoneDigits(phone) {
  if (!phone) return ''
  return phone.replace(/\D/g, '')
}
