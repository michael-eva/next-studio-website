'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = { src: string; alt: string; width: number; height: number }

// Screenshot that opens full size in an overlay when clicked. Esc, the close button or a click outside closes it.
export default function ZoomableImage({ src, alt, width, height }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in"
        aria-label={`Enlarge: ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" sizes="(min-width: 1024px) 560px, 100vw" />
        <span className="absolute bottom-3 right-3 rounded-md bg-[rgba(14,27,44,0.8)] px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Click to enlarge
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(14,27,44,0.92)] p-4 sm:p-10 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
            autoFocus
          >
            Close
          </button>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto max-h-[88vh] w-full max-w-[1400px] rounded-lg object-contain"
            sizes="100vw"
            quality={90}
          />
        </div>
      )}
    </>
  )
}
