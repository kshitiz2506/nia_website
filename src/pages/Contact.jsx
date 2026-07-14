import { useMemo, useState } from 'react'
import PageMeta from '../components/layout/PageMeta'
import {
  EnvelopeIcon,
  MapPinIcon,
  PaperPlaneIcon,
  PhoneIcon,
} from '../components/layout/icons/Icons'
import { useReveal } from '../components/ui/Reveal'
import { contactPage, siteInfo } from '../content/siteContent'
import { staticPageSeo } from '../content/seo'
import { submitContactForm } from '../lib/contactApi'
import { formatPhone, phoneDigits } from '../lib/formatPhone'

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  preferredDate: '',
  inquiryType: '',
  message: '',
}

const inputClassName =
  'mt-1.5 w-full rounded-lg border border-nia-dark/10 bg-white px-4 py-3 text-sm text-nia-dark outline-none transition-colors placeholder:text-nia-dark/35 focus:border-nia-gold/50 focus:ring-2 focus:ring-nia-gold/20'

function FieldError({ message }) {
  if (!message) return null
  return <p className="mt-1.5 text-xs text-red-600">{message}</p>
}

function FormField({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-nia-dark/60">
        {label} {required && <span className="text-nia-gold-dark">*</span>}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  )
}

function todayIsoDate() {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  const local = new Date(now.getTime() - offset * 60_000)
  return local.toISOString().slice(0, 10)
}

function LocationDetail({ icon: Icon, children, href, external = false }) {
  const content = (
    <span className="flex items-start gap-3 text-sm leading-relaxed text-nia-dark/75">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-nia-gold" />
      <span>{children}</span>
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        className="transition-colors hover:text-nia-gold-dark"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return content
}

export default function Contact() {
  const seo = staticPageSeo.contact
  const { label, heading, description, form, inquiryOptions, sideHeading } = contactPage
  const phoneHref = `tel:${phoneDigits(siteInfo.phone)}`
  const minDate = useMemo(() => todayIsoDate(), [])
  const headerReveal = useReveal(0)
  const formReveal = useReveal(0)
  const asideReveal = useReveal(1)

  const [formData, setFormData] = useState(EMPTY_FORM)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }))
    if (fieldErrors[field]) {
      setFieldErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setFeedback('')
    setFieldErrors({})

    try {
      const result = await submitContactForm(formData)
      setStatus('success')
      setFeedback(result.message || form.successMessage)
      setFormData(EMPTY_FORM)
    } catch (err) {
      setStatus('error')
      setFeedback(err.message || form.errorMessage)
      if (err.fieldErrors) {
        setFieldErrors(err.fieldErrors)
      }
    }
  }

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <section className="bg-nia-dark pb-14 pt-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...headerReveal.revealProps} className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-nia-gold/60 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-nia-gold">
              {label}
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">{heading}</h1>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-12 pb-20 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-5 lg:gap-12 lg:px-8">
          <div className="lg:col-span-3">
            <div
              {...formReveal.revealProps}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)] sm:p-8"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="name" label={form.nameLabel} required error={fieldErrors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder={form.namePlaceholder}
                      className={inputClassName}
                    />
                  </FormField>

                  <FormField id="phone" label={form.phoneLabel} required error={fieldErrors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder={form.phonePlaceholder}
                      className={inputClassName}
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="email" label={form.emailLabel} required error={fieldErrors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder={form.emailPlaceholder}
                      className={inputClassName}
                    />
                  </FormField>

                  <FormField
                    id="preferredDate"
                    label={form.preferredDateLabel}
                    required
                    error={fieldErrors.preferredDate}
                  >
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={(e) => updateField('preferredDate', e.target.value)}
                      className={inputClassName}
                    />
                  </FormField>
                </div>

                <FormField
                  id="inquiryType"
                  label={form.inquiryLabel}
                  required
                  error={fieldErrors.inquiryType}
                >
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={(e) => updateField('inquiryType', e.target.value)}
                    className={`${inputClassName} ${!formData.inquiryType ? 'text-nia-dark/35' : ''}`}
                  >
                    <option value="" disabled>
                      {form.inquiryPlaceholder}
                    </option>
                    {inquiryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField id="message" label={form.messageLabel} required error={fieldErrors.message}>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder={form.messagePlaceholder}
                    className={`${inputClassName} resize-y`}
                  />
                </FormField>

                {feedback && (
                  <p
                    className={`rounded-xl px-4 py-3 text-sm ${
                      status === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-700'
                    }`}
                    role="status"
                  >
                    {feedback}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-gold btn-gold--lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <PaperPlaneIcon className="h-4 w-4" />
                  {status === 'submitting' ? form.submittingLabel : form.submitLabel}
                </button>
              </form>
            </div>
          </div>

          <aside {...asideReveal.revealProps} className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-nia-dark md:text-3xl">{sideHeading}</h2>
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
              <h3 className="font-serif text-lg text-nia-dark">{siteInfo.fullName}</h3>
              <ul className="mt-5 space-y-4">
                <li>
                  <LocationDetail icon={MapPinIcon} href={siteInfo.mapsUrl} external>
                    {siteInfo.address}
                  </LocationDetail>
                </li>
                <li>
                  <LocationDetail icon={PhoneIcon} href={phoneHref}>
                    {formatPhone(siteInfo.phone)}
                  </LocationDetail>
                </li>
                <li>
                  <LocationDetail icon={EnvelopeIcon} href={`mailto:${siteInfo.email}`}>
                    {siteInfo.email}
                  </LocationDetail>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
