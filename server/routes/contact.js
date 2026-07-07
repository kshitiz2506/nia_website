import { Router } from 'express'
import { appendToGoogleSheet } from '../lib/googleSheets.js'
import { sendThankYouEmail } from '../lib/resendEmail.js'
import { validateContactBody } from '../lib/validateContact.js'

const router = Router()

router.post('/', async (req, res) => {
  const validation = validateContactBody(req.body)

  if (!validation.ok) {
    return res.status(400).json({ error: 'Validation failed.', errors: validation.errors })
  }

  const payload = validation.data

  try {
    await Promise.all([
      appendToGoogleSheet(payload),
      sendThankYouEmail(payload),
    ])

    return res.status(200).json({
      success: true,
      message: 'Thank you! We received your message and sent a confirmation to your email.',
    })
  } catch (err) {
    console.error('Contact submission failed:', err.message)
    return res.status(502).json({
      error: 'We could not process your submission. Please try again or call us directly.',
    })
  }
})

export default router
