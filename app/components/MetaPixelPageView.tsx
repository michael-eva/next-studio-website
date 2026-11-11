'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// The inline pixel script tracks the initial PageView; this covers client-side navigations.
export default function MetaPixelPageView() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.fbq?.('track', 'PageView')
  }, [pathname])

  return null
}
