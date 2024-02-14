import type { Meta, StoryObj } from '@storybook/react'

import SliderBlock from './SliderBlock'

const meta = {
  title: 'widgets/SliderBlock',
  component: SliderBlock,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof SliderBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
