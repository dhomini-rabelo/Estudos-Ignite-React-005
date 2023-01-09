import * as ToastBase from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(ToastBase.Root, {
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',
  backgroundColor: '$gray-800',
  fontFamily: '$default',
  border: '1px solid $gray-600',
  borderRadius: '$sm',

  '.x-icon': {
    color: '$gray-200',
    cursor: 'pointer',
  },
  '.x-icon:hover': {
    color: '$gray-100',
  },
})

export const ToastHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$5',
  fontFamily: '$default',
})

export const ToastTitle = styled(ToastBase.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$5',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(ToastBase.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray-200',
  paddingRight: '$3',
})

export const ToasViewport = styled(ToastBase.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
})
