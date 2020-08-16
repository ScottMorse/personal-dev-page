
import React, { useMemo } from 'react'
import { createPortal } from 'react-dom'

export const usePortal = (reactEl: React.ReactElement, domId: string): React.ReactPortal => {
  const rootEl: HTMLElement = useMemo(() => {
    const existingEl = document.getElementById(domId)
    if(!existingEl){
      console.warn(`Portal DOM element with ID ${domId} not found. Creating the element instead.`)
      const fixedEl = document.createElement('div')
      fixedEl.id = domId
      document.body.prepend(fixedEl)
      return fixedEl
    }
    return existingEl
  }, [domId])
  return createPortal(reactEl, rootEl)
}