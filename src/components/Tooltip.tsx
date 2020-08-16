
import React from 'react'

import { usePortal } from '../hooks'

interface TooltipPropTypes {
  children: React.ReactChildren;
}

export const Tooltip = ({ children }: TooltipPropTypes) => {

  return usePortal(<>Tooltip</>, "tooltip-layer")
}
