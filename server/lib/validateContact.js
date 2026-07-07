const INQUIRY_TYPES = new Set([
  'general-inquiry',
  'clinical-appointment',
  'course-enrollment',
])

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^(\+91[\s-]?)?[6-9]\d{9}$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export function validateContactBody(body) {
  const errors = {}

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const preferredDate =
    typeof body?.preferredDate === 'string' ? body.preferredDate.trim() : ''
  const inquiryType = typeof body?.inquiryType === 'string' ? body.inquiryType.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name) {
    errors.name = 'Full name is required.'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!phone) {
    errors.phone = 'Phone number is required.'
  } else if (!PHONE_PATTERN.test(phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!preferredDate) {
    errors.preferredDate = 'Preferred date is required.'
  } else if (!DATE_PATTERN.test(preferredDate) || Number.isNaN(Date.parse(preferredDate))) {
    errors.preferredDate = 'Enter a valid date.'
  } else {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const selected = new Date(`${preferredDate}T00:00:00`)
    if (selected < today) {
      errors.preferredDate = 'Preferred date cannot be in the past.'
    }
  }

  if (!inquiryType) {
    errors.inquiryType = 'Please select an inquiry type.'
  } else if (!INQUIRY_TYPES.has(inquiryType)) {
    errors.inquiryType = 'Please select a valid inquiry type.'
  }

  if (!message) {
    errors.message = 'Message is required.'
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  return {
    ok: true,
    data: { name, phone, email, preferredDate, inquiryType, message },
  }
}

export const inquiryTypeLabels = {
  'general-inquiry': 'General Query',
  'clinical-appointment': 'Clinical Appointment',
  'course-enrollment': 'Course Enrollment',
}

export function formatPreferredDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
