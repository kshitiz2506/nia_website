import { inquiryTypeLabels, formatPreferredDate } from './validateContact.js'

export async function appendToGoogleSheet(payload) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  const secret = process.env.GOOGLE_SHEETS_SECRET

  if (!webhookUrl) {
    throw new Error('GOOGLE_SHEETS_WEBHOOK_URL is not configured.')
  }

  if (!secret) {
    throw new Error('GOOGLE_SHEETS_SECRET is not configured.')
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret,
      timestamp: new Date().toISOString(),
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      preferredDate: formatPreferredDate(payload.preferredDate),
      inquiryTypeKey: payload.inquiryType,
      inquiryType: inquiryTypeLabels[payload.inquiryType] ?? payload.inquiryType,
      message: payload.message,
    }),
  })

  let result
  try {
    result = await response.json()
  } catch {
    throw new Error('Google Sheets webhook returned an invalid response.')
  }

  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to save submission to Google Sheets.')
  }
}
