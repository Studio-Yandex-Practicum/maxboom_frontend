import type { Meta, StoryObj } from '@storybook/react'

import HeroBlock from './HeroBlock'

const meta = {
  title: 'widgets/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof HeroBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
