import { Resend } from 'resend'
import { inquiryTypeLabels, formatPreferredDate } from './validateContact.js'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function sendThankYouEmail({ name, email, preferredDate, inquiryType, message }) {
  if (!resend) {
    throw new Error('RESEND_API_KEY is not configured.')
  }

  const from = process.env.RESEND_FROM_EMAIL
  if (!from) {
    throw new Error('RESEND_FROM_EMAIL is not configured.')
  }

  const inquiryLabel = inquiryTypeLabels[inquiryType] ?? inquiryType
  const formattedDate = formatPreferredDate(preferredDate)
  const siteName = process.env.SITE_NAME || 'NIA — Next India Institute of Aesthetics'

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: `Thank you for contacting ${siteName}`,
    html: `
      <div style="font-family: Georgia, serif; color: #0a0a0a; max-width: 560px; margin: 0 auto;">
        <p style="font-size: 14px; letter-spacing: 0.15em; color: #9c7b20; text-transform: uppercase;">Thank You</p>
        <h1 style="font-size: 28px; margin: 0 0 16px;">We received your message, ${escapeHtml(name)}</h1>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          Thank you for reaching out to ${escapeHtml(siteName)}. Our team has received your
          <strong>${escapeHtml(inquiryLabel)}</strong> request and will get back to you shortly.
        </p>
        <div style="margin: 24px 0; padding: 16px 20px; background: #f8f5ee; border-radius: 12px;">
          <p style="margin: 0 0 4px; font-size: 13px; color: #666;">Preferred date</p>
          <p style="margin: 0 0 16px; font-size: 15px; font-weight: 600;">${escapeHtml(formattedDate)}</p>
          <p style="margin: 0 0 8px; font-size: 13px; color: #666;">Your message</p>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="font-size: 14px; color: #666;">
          If you need urgent assistance, please call us directly.
        </p>
      </div>
    `,
  })

  if (error) {
    throw new Error(error.message || 'Failed to send thank-you email.')
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
