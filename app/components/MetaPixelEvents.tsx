'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackMetaEvent } from '../lib/metaPixel'
import { CAL_URL, AUDIT_URL } from '../lib/site'

// The inline pixel script tracks the initial PageView; this covers client-side navigations
// and clicks on the outbound CTA links (booking and audit tool), wherever they appear.
export default function MetaPixelEvents() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    trackMetaEvent('PageView')
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const params = { content_name: link.textContent?.trim(), source_page: window.location.pathname }
      if (link.href.startsWith(CAL_URL)) trackMetaEvent('Contact', params)
      else if (link.href.startsWith(AUDIT_URL)) trackMetaEvent('AuditToolClick', params)
    }
    document.addEventListener('click', handleClick, { capture: true })
    return () => document.removeEventListener('click', handleClick, { capture: true })
  }, [])

  return null
}
