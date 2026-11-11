declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// Standard events (Lead, Contact, ...) use 'track'; anything else is sent as a custom event.
const STANDARD_EVENTS = new Set(['PageView', 'Lead', 'Contact', 'Schedule', 'Purchase', 'ViewContent'])

export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq(STANDARD_EVENTS.has(event) ? 'track' : 'trackCustom', event, params)
}
