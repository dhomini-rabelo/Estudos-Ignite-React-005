import * as TooltipBase from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContainer } from './styles'

export interface TooltipProps {
  children: ReactNode
  message: string
}

export function Tooltip({ children, message }: TooltipProps) {
  return (
    <TooltipBase.Provider delayDuration={100}>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild>{children}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipContainer className="TooltipBaseContent" sideOffset={5}>
            {message}
            <TooltipBase.Arrow className="TooltipBaseArrow" />
          </TooltipContainer>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
