import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@dh-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <button>25 de abril de 2021</button>,
    message: 'Data indisponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
