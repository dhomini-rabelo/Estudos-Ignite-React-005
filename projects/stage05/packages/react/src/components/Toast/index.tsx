import * as ToastBase from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { useState } from 'react'
import {
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastTitle,
  ToasViewport,
} from './styles'

export interface ToastProps {
  title: string
  description: string
}

export function Toast(props: ToastProps) {
  const [open, setOpen] = useState(true)

  return (
    <ToastBase.Provider swipeDirection="right">
      <ToastContainer open={open} onOpenChange={() => setOpen((c) => !c)}>
        <ToastHeader>
          <ToastTitle>{props.title}</ToastTitle>
          <ToastBase.Action altText="close toast" asChild>
            <X size={20} className="x-icon" />
          </ToastBase.Action>
        </ToastHeader>
        <ToastDescription>{props.description}</ToastDescription>
      </ToastContainer>
      <ToasViewport />
    </ToastBase.Provider>
  )
}
