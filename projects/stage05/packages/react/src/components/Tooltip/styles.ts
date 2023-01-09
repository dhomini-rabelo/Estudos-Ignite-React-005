import * as TooltipBase from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(TooltipBase.Content, {
  display: 'inline-block',
  padding: '$3 $4',
  backgroundColor: '$gray-900',
  borderRadius: '$sm',
  color: '$gray-100',
  fontFamily: '$default',

  '& > *': {
    fontWeight: '$medium',
    fontSize: '$sm',
    lineHeight: '$short',
    textAlign: 'center',
    letterSpacing: '-0.09px',
    color: '$gray-100',
  },
})
