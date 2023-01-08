import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray-800',
  border: '1px solid $gra-y600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
