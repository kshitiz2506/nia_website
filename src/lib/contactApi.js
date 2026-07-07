const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '')

export async function submitContactForm(payload) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('Unexpected server response.')
  }

  if (!response.ok) {
    const error = new Error(data.error || 'Submission failed.')
    error.fieldErrors = data.errors ?? null
    throw error
  }

  return data
}
